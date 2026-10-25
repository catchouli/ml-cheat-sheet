// Site search: a box in the header that searches every section in memory.
// The index, search-index.js, is built by build.py and loaded the first time the box is used.
(function () {
  const nav = document.querySelector(".site-header nav");
  if (!nav) return;

  const box = document.createElement("div");
  box.className = "search";
  box.innerHTML =
    '<input type="search" placeholder="Search  /" aria-label="Search the cheat sheet" autocomplete="off" spellcheck="false">' +
    '<ol class="search-results" hidden></ol>';
  nav.append(box);
  const input = box.querySelector("input");
  const list = box.querySelector("ol");

  const MAX_RESULTS = 10;
  let index = null;
  let results = [];
  let active = 0;

  function load() {
    if (index || document.getElementById("search-index")) return;
    const script = document.createElement("script");
    script.id = "search-index";
    script.src = "search-index.js";
    script.onload = () => {
      index = window.SEARCH_INDEX.map(prepare);
      update();
    };
    script.onerror = () => message("The search index is missing: run build.py");
    document.head.append(script);
  }

  // Lower-case copies of each field, made once.
  function prepare(e) {
    const heading = e.path.length ? e.path[e.path.length - 1] : e.page;
    return {
      ...e,
      heading: heading.toLowerCase(),
      parents: e.path.slice(0, -1).join(" ").toLowerCase(),
      pageLow: e.page.toLowerCase(),
      textLow: e.text.toLowerCase(),
      mathLow: e.math.toLowerCase(),
    };
  }

  const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  // Every term has to appear somewhere; matches in headings count most.
  function score(e, terms, query) {
    let total = 0;
    const trail = e.pageLow + " " + e.parents + " " + e.heading;
    if (terms.every((t) => trail.includes(t.term))) total += 20;
    if (e.heading === query) total += 20;
    for (const { term, wordStart } of terms) {
      let s = 0;
      if (e.heading.includes(term)) s += wordStart.test(e.heading) ? 14 : 10;
      if (e.parents.includes(term)) s += 5;
      if (e.pageLow.includes(term)) s += 4;
      if (e.mathLow.includes(term)) s += 2;
      let count = 0;
      for (let i = e.textLow.indexOf(term); i !== -1 && count < 5; i = e.textLow.indexOf(term, i + term.length)) count++;
      s += count;
      if (s === 0) return 0;
      total += s;
    }
    return total;
  }

  function update() {
    const query = input.value.trim().toLowerCase();
    if (!query) return close();
    if (!index) {
      load();
      return message("Loading…");
    }
    const terms = query.split(/\s+/).map((term) => ({
      term,
      wordStart: new RegExp("(^|[^a-z0-9])" + escape(term)),
    }));
    results = index
      .map((e) => ({ e, s: score(e, terms, query) }))
      .filter((r) => r.s > 0)
      .sort((a, b) => b.s - a.s)
      .slice(0, MAX_RESULTS)
      .map((r) => r.e);
    active = 0;
    if (!results.length) return message("No matches");
    const highlight = new RegExp("(" + terms.map((t) => escape(t.term)).join("|") + ")", "gi");
    list.replaceChildren(...results.map((e, i) => item(e, i, highlight)));
    list.hidden = false;
    if (window.renderMathInElement) {
      renderMathInElement(list, { delimiters: [{ left: "\\(", right: "\\)", display: false }], throwOnError: false });
    }
  }

  function item(e, i, highlight) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = e.url;
    if (i === active) a.className = "active";
    const path = document.createElement("span");
    path.className = "search-path";
    const trail = [e.page, ...e.path];
    trail.forEach((part, j) => {
      if (j) path.append(" › ");
      const el = document.createElement(j === trail.length - 1 ? "strong" : "span");
      el.textContent = part;
      path.append(el);
    });
    a.append(path);
    if (e.text) {
      const snip = document.createElement("span");
      snip.className = "search-snippet";
      snip.append(...snippet(e.text, highlight));
      a.append(snip);
    }
    li.append(a);
    return li;
  }

  // About 180 characters of the text around the first match, never cutting a formula in half.
  function snippet(text, highlight) {
    highlight.lastIndex = 0;
    const m = highlight.exec(text);
    let start = m ? Math.max(0, m.index - 50) : 0;
    let end = Math.min(text.length, start + 180);
    if (start > 0) start = text.indexOf(" ", start) + 1 || start;
    if (end < text.length) end = text.lastIndexOf(" ", end) > start ? text.lastIndexOf(" ", end) : end;
    for (const f of text.matchAll(/\\\(.*?\\\)/g)) {
      const a = f.index, b = f.index + f[0].length;
      if (start > a && start < b) start = a;
      if (end > a && end < b) end = b;
    }
    const nodes = [];
    if (start > 0) nodes.push("… ");
    text.slice(start, end).split(/(\\\(.*?\\\))/).forEach((part, i) => {
      if (i % 2) return nodes.push(part); // a formula, left for KaTeX
      part.split(highlight).forEach((piece, j) => {
        if (!(j % 2)) return nodes.push(piece);
        const mark = document.createElement("mark");
        mark.textContent = piece;
        nodes.push(mark);
      });
    });
    if (end < text.length) nodes.push(" …");
    return nodes.map((n) => (typeof n === "string" ? document.createTextNode(n) : n));
  }

  function message(text) {
    results = [];
    const li = document.createElement("li");
    li.className = "search-message";
    li.textContent = text;
    list.replaceChildren(li);
    list.hidden = false;
  }

  function close() {
    list.hidden = true;
    results = [];
  }

  function setActive(i) {
    const links = list.querySelectorAll("a");
    if (!links.length) return;
    active = (i + links.length) % links.length;
    links.forEach((a, j) => a.classList.toggle("active", j === active));
    links[active].scrollIntoView({ block: "nearest" });
  }

  input.addEventListener("focus", () => {
    load();
    if (input.value.trim()) update();
  });
  input.addEventListener("input", update);
  input.addEventListener("keydown", (ev) => {
    if (ev.key === "ArrowDown") { ev.preventDefault(); setActive(active + 1); }
    else if (ev.key === "ArrowUp") { ev.preventDefault(); setActive(active - 1); }
    else if (ev.key === "Enter" && results[active]) { location.href = results[active].url; close(); input.blur(); }
    else if (ev.key === "Escape") { input.value = ""; close(); input.blur(); }
  });
  list.addEventListener("click", (ev) => {
    if (ev.target.closest("a")) { close(); input.blur(); }
  });
  document.addEventListener("click", (ev) => {
    if (!box.contains(ev.target)) close();
  });
  document.addEventListener("keydown", (ev) => {
    if (ev.key === "/" && !ev.target.closest("input, textarea")) {
      ev.preventDefault();
      input.focus();
    }
  });
})();
