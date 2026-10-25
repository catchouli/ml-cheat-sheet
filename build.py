#!/usr/bin/env python3
"""Builds the parts of the site that would otherwise need editing on every page:

- the header menu on every page, from NAV below;
- search-index.js: one entry per section (every h2/h3/h4 with an id) of every page.

Run it after adding or editing a page. The Pages deploy runs it too, so the live site is never stale.
"""

import json
import re
from collections.abc import Iterator
from dataclasses import dataclass, field
from html.parser import HTMLParser
from pathlib import Path
from typing import final, override

ROOT = Path(__file__).parent

# The header menu: (section, [(page, title)]). Same groups as the home page.
NAV: list[tuple[str, list[tuple[str, str]]]] = [
    ("Maths", [
        ("math.html", "Math"),
    ]),
    ("Neural networks", [
        ("gradient-descent.html", "Gradient descent"),
        ("layers.html", "Layers"),
        ("layernorm.html", "LayerNorm"),
    ]),
    ("Transformers", [
        ("residual-stream.html", "Residual stream"),
        ("attention.html", "Attention"),
        ("positions.html", "Positions"),
        ("gpt.html", "GPT model"),
    ]),
]
SKIP = {"script", "style", "svg", "th"}  # plus anything with class="label"
BLOCK = {"p", "div", "li", "td", "th", "tr", "pre", "br", "table", "ol", "ul", "span"}
# LaTeX commands that only lay things out, so aren't worth searching for.
LAYOUT = set("""quad qquad left right frac tfrac dfrac hat bar tilde vec dot cdot cdots ldots dots
vdots ddots begin end aligned cases matrix pmatrix bmatrix mathbf mathrm mathcal text operatorname
big Big bigg Bigg displaystyle textstyle underbrace overbrace underset overset color colorbox
boxed phantom limits mathbb""".split())


@dataclass
class Section:
    id: str  # "" for the top of the page
    path: list[str]  # the headings leading to it, e.g. ["Softmax", "Jacobian"]
    text: list[str] = field(default_factory=list)


@final
class Page(HTMLParser):
    """Splits a page's <main> into sections at each heading."""

    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.title: str = ""
        self.sections: list[Section] = []
        self.in_main: bool = False
        self.skip_tag: str | None = None  # set while inside a tag whose text isn't indexed
        self.skip_depth: int = 0
        self.heading: tuple[int, str | None] | None = None  # (level, id) while inside a heading
        self.heading_text: list[str] = []
        self.trail: dict[int, str] = {}  # heading level -> text of the latest heading at it

    @property
    def current(self) -> Section:
        return self.sections[-1]

    @override
    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        if tag == "main":
            self.in_main = True
            self.sections.append(Section("", []))
        if not self.in_main:
            return
        if self.skip_tag:
            if tag == self.skip_tag:
                self.skip_depth += 1
        elif tag in SKIP or "label" in (dict(attrs).get("class") or "").split():
            self.skip_tag, self.skip_depth = tag, 1
        elif tag in ("h1", "h2", "h3", "h4"):
            self.heading = (int(tag[1]), dict(attrs).get("id"))
            self.heading_text = []
        elif tag in BLOCK:
            self.current.text.append(" ")

    @override
    def handle_endtag(self, tag: str) -> None:
        if not self.in_main:
            return
        if tag == "main":
            self.in_main = False
        elif self.skip_tag:
            if tag == self.skip_tag:
                self.skip_depth -= 1
                if not self.skip_depth:
                    self.skip_tag = None
        elif self.heading and tag == f"h{self.heading[0]}":
            level, hid = self.heading
            text = " ".join("".join(self.heading_text).split())
            self.heading = None
            if level == 1:
                self.title = text
                return
            self.trail = {k: v for k, v in self.trail.items() if k < level}
            self.trail[level] = text
            if hid:
                self.sections.append(Section(hid, [self.trail[k] for k in sorted(self.trail)]))
        elif tag in BLOCK:
            self.current.text.append(" ")

    @override
    def handle_data(self, data: str) -> None:
        if not self.in_main or self.skip_tag:
            return
        if self.heading:
            self.heading_text.append(data)
        else:
            self.current.text.append(data)


def math_words(tex: str) -> str:
    """Searchable words inside LaTeX, e.g. \\operatorname{softmax} -> softmax."""
    words: list[str] = re.findall(r"\\(?:operatorname|text|mathrm)\{([^}]*)\}", tex)
    words += re.findall(r"\\([a-zA-Z]{3,})", tex)
    return " ".join(dict.fromkeys(w for w in words if w not in LAYOUT))


def entries(file: Path) -> Iterator[dict[str, object]]:
    page = Page()
    page.feed(file.read_text())
    for s in page.sections:
        text = " ".join("".join(s.text).split())
        display = re.findall(r"\\\[(.*?)\\\]", text)
        prose = re.sub(r"\s*\\\[.*?\\\]\s*", " ", text).strip()
        inline = re.findall(r"\\\((.*?)\\\)", prose)
        if not prose and not s.path:
            continue
        yield {
            "url": file.name + (f"#{s.id}" if s.id else ""),
            "page": page.title,
            "path": s.path,
            "text": prose,
            "math": math_words(" ".join(display + inline)),
        }


def render_nav(current: str) -> str:
    lines = ['<nav>', '      <a class="home" href="index.html">ML Cheat Sheet</a>']
    for section, pages in NAV:
        here = any(page == current for page, _ in pages)
        lines.append(f'      <details class="menu{" current" if here else ""}">')
        lines.append(f"        <summary>{section}</summary>")
        lines.append("        <ul>")
        for page, title in pages:
            attr = ' aria-current="page"' if page == current else ""
            lines.append(f'          <li><a href="{page}"{attr}>{title}</a></li>')
        lines.append("        </ul>")
        lines.append("      </details>")
    lines.append("    </nav>")
    return "\n".join(lines)


def write_nav(file: Path) -> None:
    html = file.read_text()
    # The header's <nav> is the only one without attributes; the contents list is <nav class="toc">.
    new, n = re.subn(r"<nav>.*?</nav>", lambda _: render_nav(file.name), html, count=1, flags=re.S)
    assert n == 1, f"{file.name} has no header <nav>"
    if new != html:
        _ = file.write_text(new)


def main() -> None:
    pages = [page for _, section in NAV for page, _ in section]
    for page in ["index.html", *pages]:
        write_nav(ROOT / page)
    index = [e for p in pages for e in entries(ROOT / p)]
    out = ROOT / "search-index.js"
    _ = out.write_text("window.SEARCH_INDEX = " + json.dumps(index, ensure_ascii=False, indent=0) + ";\n")
    print(f"{out.name}: {len(index)} sections from {len(pages)} pages, menu written to {len(pages) + 1} pages")


if __name__ == "__main__":
    main()
