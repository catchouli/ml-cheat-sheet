# ML Cheat Sheet

<a href="screenshots/math.jpg"><img src="screenshots/math-thumb.jpg" width="49%"></a>
<a href="screenshots/chain-rule.jpg"><img src="screenshots/chain-rule-thumb.jpg" width="49%"></a>

📄 [Read it here](https://catchouli.github.io/ml-cheat-sheet/)

My own reference for the maths and ML I keep needing to look up: formulas, definitions and short worked examples, one page per topic.

I'm working through building transformers from scratch, and to get through backprop I had to re-remember (or re-derive) a load of maths I hadn't touched in about 20 years. This is the tidy version of the pages in my notebook, so I don't have to derive the chain rule for sums again next time.

## What's in it

**Math** has exponent and log rules, sums and products, a table of common derivatives, and the power rule, chain rule, partial derivatives and the multivariable chain rule, each with a few worked examples.

**Backprop** and **Attention** are next, and empty for now.

## How it works

It's plain HTML and CSS, with formulas written in LaTeX and rendered in the browser by [KaTeX](https://katex.org/), so there's no build step. Pushing to `main` deploys it to GitHub Pages.

To read it locally, open `index.html`, or serve the folder with `python3 -m http.server`.
