window.SEARCH_INDEX = [
{
"url": "math.html",
"page": "Math",
"path": [],
"text": "The bits of school and university maths that keep coming up in ML.",
"math": ""
},
{
"url": "math.html#basics",
"page": "Math",
"path": [
"Exponents and logs"
],
"text": "\\(\\ln x\\) is \\(\\log_e x\\), the natural log. In ML papers and code, plain \\(\\log\\) almost always means \\(\\ln\\) too: np.log, torch.log and math.log are all base \\(e\\).",
"math": "log"
},
{
"url": "math.html#inverses",
"page": "Math",
"path": [
"Exponents and logs",
"exp and log are inverses"
],
"text": "The same holds for any base \\(b\\): So \\(\\log_b x\\) answers “what power do I raise \\(b\\) to, to get \\(x\\)?”. \\(\\ln\\) is only defined for \\(x \\gt 0\\), and \\(e^x \\gt 0\\) for every \\(x\\).",
"math": "log"
},
{
"url": "math.html#exponent-rules",
"page": "Math",
"path": [
"Exponents and logs",
"Exponent rules"
],
"text": "Product \\(a^m \\cdot a^n = a^{m+n}\\) Quotient \\(\\dfrac{a^m}{a^n} = a^{m-n}\\) Power of a power \\(\\left(a^m\\right)^n = a^{mn}\\) Power of a product \\((ab)^n = a^n b^n\\) Power of a quotient \\(\\left(\\dfrac{a}{b}\\right)^n = \\dfrac{a^n}{b^n}\\) Zero power \\(a^0 = 1\\) Negative power \\(a^{-n} = \\dfrac{1}{a^n}\\) Fractional power \\(a^{1/n} = \\sqrt[n]{a} \\qquad a^{m/n} = \\sqrt[n]{a^m}\\) With \\(e\\) \\(e^{x+y} = e^x e^y \\qquad e^{x-y} = \\dfrac{e^x}{e^y}\\)",
"math": "sqrt"
},
{
"url": "math.html#log-rules",
"page": "Math",
"path": [
"Exponents and logs",
"Log rules"
],
"text": "Each one is an exponent rule seen through the log. They hold for any base. Product \\(\\log(ab) = \\log a + \\log b\\) Quotient \\(\\log\\!\\left(\\dfrac{a}{b}\\right) = \\log a - \\log b\\) Power \\(\\log\\!\\left(a^n\\right) = n \\log a\\) Reciprocal \\(\\log\\!\\left(\\dfrac{1}{a}\\right) = -\\log a\\) Log of 1 \\(\\log 1 = 0\\) Change of base \\(\\log_b x = \\dfrac{\\ln x}{\\ln b}\\) With \\(m = \\max_k z_k\\), the quotient rule, then \\(\\ln(e^x) = x\\): No \\(e^x\\) is ever taken and then logged again, so nothing underflows to \\(\\ln 0\\).",
"math": "sum log max"
},
{
"url": "math.html#sums",
"page": "Math",
"path": [
"Sums and products"
],
"text": "Sum \\(\\displaystyle\\sum_{i=1}^{n} x_i = x_1 + x_2 + \\dots + x_n\\) Product \\(\\displaystyle\\prod_{i=1}^{n} x_i = x_1 \\cdot x_2 \\cdots x_n\\) Constant out \\(\\displaystyle\\sum_i c\\,x_i = c \\sum_i x_i\\) Split a sum \\(\\displaystyle\\sum_i (x_i + y_i) = \\sum_i x_i + \\sum_i y_i\\) Sum of a constant \\(\\displaystyle\\sum_{i=1}^{n} c = nc\\) Swap double sums \\(\\displaystyle\\sum_i \\sum_j a_{ij} = \\sum_j \\sum_i a_{ij}\\) Log of a product \\(\\displaystyle\\log \\prod_i x_i = \\sum_i \\log x_i\\) Mean \\(\\displaystyle\\mu = \\frac{1}{n}\\sum_{i=1}^{n} x_i\\) Variance (biased, ÷n) \\(\\displaystyle\\sigma^2 = \\frac{1}{n}\\sum_{i=1}^{n} (x_i - \\mu)^2 = \\frac{1}{n}\\sum_{i=1}^{n} x_i^2 - \\mu^2\\) Dot product \\(\\displaystyle a \\cdot b = \\sum_i a_i b_i\\) Matrix product \\(\\displaystyle (AB)_{ij} = \\sum_k A_{ik} B_{kj}\\) Log-sum-exp \\(\\displaystyle\\log \\sum_i e^{x_i} = m + \\log \\sum_i e^{x_i - m}, \\quad m = \\max_i x_i\\) Log of a product is why ML works with log-likelihoods: a product of thousands of probabilities underflows to 0, but the sum of their logs is a normal number.",
"math": "sum prod log sigma max"
},
{
"url": "math.html#calculus",
"page": "Math",
"path": [
"Calculus"
],
"text": "",
"math": ""
},
{
"url": "math.html#derivative-definitions",
"page": "Math",
"path": [
"Calculus",
"Definitions"
],
"text": "Derivative \\(\\displaystyle f'(x) = \\frac{df}{dx} = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}\\) Central difference (numerical gradient) \\(\\displaystyle f'(x) \\approx \\frac{f(x+h) - f(x-h)}{2h}\\) Notation \\(f'(x) \\;=\\; \\dfrac{df}{dx} \\;=\\; \\dfrac{d}{dx} f(x)\\) The derivative is the slope of \\(f\\) at \\(x\\): how much \\(f\\) changes per unit change in \\(x\\). The central difference is what a gradient check uses, and its error shrinks like \\(h^2\\) rather than \\(h\\).",
"math": "lim approx"
},
{
"url": "math.html#common-derivatives",
"page": "Math",
"path": [
"Calculus",
"Common derivatives"
],
"text": "\\(c\\) (constant) \\(0\\) \\(x\\) \\(1\\) \\(x^n\\) \\(n x^{n-1}\\) \\(\\dfrac{1}{x}\\) \\(-\\dfrac{1}{x^2}\\) \\(\\sqrt{x}\\) \\(\\dfrac{1}{2\\sqrt{x}}\\) \\(e^x\\) \\(e^x\\) \\(a^x\\) \\(a^x \\ln a\\) \\(\\ln x\\) \\(\\dfrac{1}{x}\\) \\(\\log_b x\\) \\(\\dfrac{1}{x \\ln b}\\) \\(\\sin x\\) \\(\\cos x\\) \\(\\cos x\\) \\(-\\sin x\\) \\(\\tan x\\) \\(\\sec^2 x = 1 + \\tan^2 x\\) \\(|x|\\) \\(\\operatorname{sign}(x)\\) (undefined at 0) \\(\\tanh x\\) \\(1 - \\tanh^2 x\\) \\(\\sigma(x) = \\dfrac{1}{1 + e^{-x}}\\) (sigmoid) \\(\\sigma(x)\\,\\bigl(1 - \\sigma(x)\\bigr)\\) \\(\\operatorname{ReLU}(x) = \\max(0, x)\\) \\(1\\) if \\(x \\gt 0\\), else \\(0\\) (frameworks use 0 at \\(x = 0\\)) \\(\\operatorname{softplus}(x) = \\ln(1 + e^x)\\) \\(\\sigma(x)\\) \\(\\operatorname{GELU}(x) = x\\,\\Phi(x)\\) \\(\\Phi(x) + x\\,\\phi(x)\\) For GELU, \\(\\Phi\\) is the standard normal CDF and \\(\\phi(x) = \\frac{1}{\\sqrt{2\\pi}} e^{-x^2/2}\\) is its PDF. \\(\\tanh\\) and \\(\\sigma\\) have derivatives written in terms of their own output, which is why backprop caches the output for them.",
"math": "sign ReLU softplus GELU sqrt log sin cos tan sec tanh sigma bigl bigr max Phi phi"
},
{
"url": "math.html#derivative-rules",
"page": "Math",
"path": [
"Calculus",
"Derivative rules"
],
"text": "Constant multiple \\(\\bigl(c\\,f\\bigr)' = c\\,f'\\) Sum \\((f + g)' = f' + g'\\) Product \\((fg)' = f'g + fg'\\) Quotient \\(\\left(\\dfrac{f}{g}\\right)' = \\dfrac{f'g - fg'}{g^2}\\) Power \\(\\dfrac{d}{dx} x^n = n x^{n-1}\\) Chain \\(\\dfrac{d}{dx} f\\bigl(g(x)\\bigr) = f'\\bigl(g(x)\\bigr)\\, g'(x)\\)",
"math": "bigl bigr"
},
{
"url": "math.html#power-rule",
"page": "Math",
"path": [
"Calculus",
"Power rule"
],
"text": "Bring the power down in front, then subtract 1 from the power. Rewrite roots and fractions as powers first, so the rule applies:  The last one (strictly also a chain rule, but the inner derivative is 1) is the variance term in layernorm's backward pass.",
"math": "for any real  sqrt epsilon"
},
{
"url": "math.html#chain-rule",
"page": "Math",
"path": [
"Calculus",
"Chain rule"
],
"text": "In Leibniz notation, with \\(y = f(u)\\) and \\(u = g(x)\\): How to apply it: name the inner expression \\(u\\). Differentiate the outer function with respect to \\(u\\), as if \\(u\\) were the variable, then multiply by \\(du/dx\\). For deeper nesting, repeat working inwards: one factor per layer. \\(e^{3x^2}\\), with \\(u = 3x^2\\): \\(\\ln(1 + e^x)\\), with \\(u = 1 + e^x\\): A neuron, \\(\\tanh(wx + b)\\), differentiated with respect to \\(w\\), with \\(u = wx + b\\): Three layers deep, \\(\\sin\\bigl(\\ln(x^2)\\bigr)\\):",
"math": "bigl bigr sigma tanh sin cos"
},
{
"url": "math.html#partial-derivatives",
"page": "Math",
"path": [
"Calculus",
"Partial derivatives"
],
"text": "\\(\\dfrac{\\partial f}{\\partial x}\\) is the derivative of \\(f\\) with respect to \\(x\\), treating every other variable as a constant. The gradient collects all the partial derivatives. It has the same shape as the input:   For \\(\\partial f/\\partial x\\), \\(y\\) acts like a number, so \\(x^2 y\\) behaves like \\(5x^2\\) and \\(3y\\) is a constant (derivative 0).  Chain rule on the outside, then the partial of the inside: \\(\\partial(wx + b - y)/\\partial w = x\\) and \\(\\partial(wx + b - y)/\\partial b = 1\\). Only the \\(i = k\\) term contains \\(w_k\\); every other term is a constant and drops out. Written with the Kronecker delta, \\(\\partial w_i / \\partial w_k = \\delta_{ik}\\), which is 1 when \\(i = k\\) and 0 otherwise, so \\(\\sum_i \\delta_{ik} x_i = x_k\\).",
"math": "nabla partial sin cos sum Longrightarrow delta"
},
{
"url": "math.html#multivariable-chain-rule",
"page": "Math",
"path": [
"Calculus",
"Multivariable chain rule"
],
"text": "If \\(z = f(x, y)\\) and both \\(x\\) and \\(y\\) depend on \\(t\\): In general, if \\(L\\) depends on \\(x_i\\) through intermediate values \\(y_1, \\dots, y_m\\): How to apply it: find every path from \\(x\\) to \\(L\\). Each path gives one product of derivatives along it (the ordinary chain rule); add the paths together. This is why gradients accumulate with += when a value is used more than once. “Multivariable chain rule” is the usual name. “Multivariate” means the same thing but is mostly used in statistics. \\(z = xy\\), with \\(x = t^2\\) and \\(y = \\sin t\\): That matches the product rule on \\(t^2 \\sin t\\). \\(a\\) reaches \\(L\\) through the product and directly, so the two contributions add. Element-wise, \\(Y_{nj} = \\sum_k X_{nk} W_{kj}\\). Each \\(W_{kj}\\) reaches \\(L\\) through every row \\(n\\) of \\(Y\\), so sum over \\(n\\):  Each \\(X_{nk}\\) reaches \\(L\\) through every column \\(j\\) of row \\(n\\):  In code: dW = x.T @ dout and dx = dout @ W.T.",
"math": "via  partial sum cos sin Longrightarrow top"
},
{
"url": "gradient-descent.html",
"page": "Gradient descent",
"path": [],
"text": "How a network learns: measure how wrong it is, work out which way to nudge every parameter, nudge, repeat. The derivatives of individual layers are on the Layers page.",
"math": ""
},
{
"url": "gradient-descent.html#setup",
"page": "Gradient descent",
"path": [
"The setup"
],
"text": "Model A function \\(\\hat{y} = f(x;\\, \\theta)\\): input \\(x\\) in, prediction \\(\\hat{y}\\) out. Parameters \\(\\theta\\) Every learnable number in the model: all the weight matrices and biases, flattened into one long list. Loss \\(L(\\theta)\\) One number saying how wrong the predictions are on some data. Lower is better. Gradient \\(\\nabla_\\theta L\\) \\(\\partial L / \\partial \\theta_i\\) for every parameter. Same shape as \\(\\theta\\). Training Find the \\(\\theta\\) that makes \\(L\\) small. A network is a chain of layers, each a simple function, some with parameters of their own:",
"math": "loss Bigl bigl theta bigr Bigr nabla partial"
},
{
"url": "gradient-descent.html#gradient-descent",
"page": "Gradient descent",
"path": [
"Gradient descent"
],
"text": "The gradient points in the direction that increases \\(L\\) fastest, so step the other way: \\(\\eta\\) is the learning rate: how big a step to take. Too small and training crawls; too big and it overshoots and diverges. Each parameter moves on its own, by its own partial derivative: If increasing \\(\\theta_i\\) would increase the loss (\\(\\partial L/\\partial\\theta_i \\gt 0\\)), it gets decreased, and vice versa. The bigger the effect, the bigger the step. Batch / minibatch The handful of examples (say 64) the loss is averaged over for one step. Its gradient is a noisy estimate of the gradient over all the data, and much cheaper. SGD Stochastic gradient descent. Strictly, one random example per step; in deep learning it almost always means minibatches (“minibatch SGD”). Full-batch gradient descent uses the whole dataset per step. Step One forward pass, one backward pass, one update. Epoch Enough steps to have seen every training example once. Why not numerical gradients? A central difference needs two forward passes per parameter. With millions of parameters that's millions of passes per step. Backprop gets every \\(\\partial L/\\partial\\theta_i\\) for roughly the cost of one extra forward pass. Numerical gradients are still the standard way to check a backward pass.",
"math": "theta leftarrow eta nabla partial"
},
{
"url": "gradient-descent.html#backprop",
"page": "Gradient descent",
"path": [
"Backprop"
],
"text": "Backpropagation is the multivariable chain rule, applied to the network one layer at a time, starting from the loss and working backwards. Forward pass: run the layers in order. Each one saves (caches) whatever its backward pass will need. Start the backward pass with \\(\\dfrac{\\partial L}{\\partial L} = 1\\). Backward pass: run the layers in reverse. Each takes the gradient of the loss with respect to its output, and returns the gradient with respect to each of its inputs and parameters. Update every parameter with its gradient.",
"math": "partial"
},
{
"url": "gradient-descent.html#one-layer",
"page": "Gradient descent",
"path": [
"Backprop",
"One layer's job"
],
"text": "A layer \\(y = f(x;\\, w)\\) receives the upstream gradient \\(\\partial L/\\partial y\\) (called dout in code). It never needs to know what came after it; the chain rule does the rest: With vectors and matrices, “\\(\\cdot\\)” is a sum over every element of \\(y\\) that the input affects. Written element-wise:",
"math": "passed back upstream local for the update partial sum"
},
{
"url": "gradient-descent.html#rules",
"page": "Gradient descent",
"path": [
"Backprop",
"Rules of thumb"
],
"text": "A gradient has the same shape as the thing it's the gradient of. One partial derivative per element. Shapes usually leave only one way to multiply things. A value used in several places: add the gradients. One chain-rule term per path. In code, grad += .... Broadcast going forward: sum going back. A bias added to every row is used once per row, so its gradient sums over the rows. Element-wise function \\(y = f(x)\\): \\(\\dfrac{\\partial L}{\\partial x} = \\dfrac{\\partial L}{\\partial y} \\odot f'(x)\\). Each \\(y_i\\) depends only on \\(x_i\\), so the sum collapses to one term. Matrix product \\(Y = XW\\): \\(\\;\\partial X = \\partial Y\\, W^\\top,\\; \\partial W = X^\\top \\partial Y\\). Derived on the Math page.",
"math": "partial odot top"
},
{
"url": "gradient-descent.html#example",
"page": "Gradient descent",
"path": [
"Worked example: a 2-layer net"
],
"text": "A classifier: \\(N\\) inputs of size \\(D\\), a hidden layer of size \\(H\\) with tanh, and \\(C\\) output classes. Values flow left to right. Gradients start as 1 at the loss and flow right to left; at each Linear layer they branch off to the weights.",
"math": ""
},
{
"url": "gradient-descent.html#example-forward",
"page": "Gradient descent",
"path": [
"Worked example: a 2-layer net",
"Forward"
],
"text": "Linear \\(a = xW_1 + b_1\\) \\(N \\times H\\) tanh \\(h = \\tanh(a)\\) \\(N \\times H\\) Linear \\(z = hW_2 + b_2\\) \\(N \\times C\\) Softmax \\(P = \\operatorname{softmax}(z)\\), row by row \\(N \\times C\\) Cross-entropy \\(L = -\\dfrac{1}{N}\\displaystyle\\sum_n \\log P_{n,\\,y_n}\\) scalar Cache \\(x\\), \\(h\\), \\(P\\) and the weights for the backward pass.",
"math": "softmax times tanh sum log"
},
{
"url": "gradient-descent.html#example-backward",
"page": "Gradient descent",
"path": [
"Worked example: a 2-layer net",
"Backward"
],
"text": "In reverse order. \\(Y\\) is the one-hot matrix of targets. Each line is one layer's backward pass from the Layers page. \\(\\partial L/\\partial x\\) isn't needed: \\(x\\) is data, not a parameter. In a deeper network the same pattern repeats for every layer.",
"math": "softmax + cross-entropy second Linear: parameters second Linear: input tanh first Linear: parameters partial top sum odot bigl bigr"
},
{
"url": "gradient-descent.html#example-loop",
"page": "Gradient descent",
"path": [
"Worked example: a 2-layer net",
"Training loop"
],
"text": "for step in range(steps): xb, yb = get_batch() # forward a, c1 = linear_forward(xb, W1, b1) h, c2 = tanh_forward(a) z, c3 = linear_forward(h, W2, b2) loss, dz = softmax_cross_entropy(z, yb) # backward dh, dW2, db2 = linear_backward(dz, c3) da = tanh_backward(dh, c2) _, dW1, db1 = linear_backward(da, c1) # update for p, g in ((W1, dW1), (b1, db1), (W2, dW2), (b2, db2)): p -= lr * g In PyTorch, the forward pass records a graph and loss.backward() runs the backward pass for you; optimizer.step() does the update and optimizer.zero_grad() clears the accumulated gradients.",
"math": ""
},
{
"url": "gradient-descent.html#optimizers",
"page": "Gradient descent",
"path": [
"Beyond plain SGD"
],
"text": "The optimizer decides how to turn the gradient \\(g_t = \\nabla_\\theta L\\) at step \\(t\\) into an update. Everything is element-wise.",
"math": "nabla theta"
},
{
"url": "gradient-descent.html#momentum",
"page": "Gradient descent",
"path": [
"Beyond plain SGD",
"Momentum"
],
"text": "Keep a running average of past gradients, so steps build up speed in consistent directions and noise cancels out.",
"math": "theta eta approx"
},
{
"url": "gradient-descent.html#adam",
"page": "Gradient descent",
"path": [
"Beyond plain SGD",
"Adam"
],
"text": "Momentum, plus a per-parameter step size: divide by a running average of the squared gradient, so parameters with large or noisy gradients take smaller steps. Typical values: \\(\\beta_1 = 0.9\\), \\(\\beta_2 = 0.999\\) (often 0.95 for transformers), \\(\\epsilon = 10^{-8}\\).",
"math": "average gradient average squared gradient bias correction (both start at 0) beta theta eta sqrt epsilon"
},
{
"url": "gradient-descent.html#adamw",
"page": "Gradient descent",
"path": [
"Beyond plain SGD",
"AdamW"
],
"text": "Adam with decoupled weight decay: shrink the weights directly, rather than adding \\(\\lambda\\theta\\) to the gradient (where Adam's scaling would distort it). Weight decay is usually applied to weight matrices only, not to biases or norm parameters (\\(\\gamma, \\beta\\)).",
"math": "theta eta sqrt epsilon lambda gamma beta"
},
{
"url": "layers.html",
"page": "Layers",
"path": [],
"text": "The building blocks, one at a time: what each does, what it's for, its derivative, and where the derivative comes from.",
"math": ""
},
{
"url": "layers.html#conventions",
"page": "Layers",
"path": [
"Conventions"
],
"text": "\\(x \\to y\\) The layer's input and output. \\(\\dfrac{\\partial L}{\\partial y}\\) Upstream gradient, given to the backward pass. dout in code. \\(\\odot\\) Element-wise product (* in NumPy). \\(N\\) Batch size: rows are examples. For an element-wise function \\(y = f(x)\\), the backward pass is always \\(\\dfrac{\\partial L}{\\partial x} = \\dfrac{\\partial L}{\\partial y} \\odot f'(x)\\), so for the activations below only \\(f'\\) matters.",
"math": "partial odot"
},
{
"url": "layers.html#linear",
"page": "Layers",
"path": [
"Linear"
],
"text": "What it does: each output is a weighted sum of all the inputs, plus a bias. It mixes features together and changes the vector's size. Used for: almost everything with learnable weights: hidden layers, the q/k/v projections in attention, the output layer that produces logits. Derivation: \\(y_{nj} = \\sum_k x_{nk} W_{kj} + b_j\\). The \\(x\\) and \\(W\\) gradients are the linear layer example on the Math page. \\(b_j\\) is added to every row \\(n\\), so it reaches \\(L\\) through all of them, each with local derivative 1: sum over \\(n\\). Cache: \\(x\\) and \\(W\\).",
"math": "in out times partial top sum"
},
{
"url": "layers.html#activations",
"page": "Layers",
"path": [
"Activations"
],
"text": "Non-linear functions applied element-wise between linear layers. Without them, a stack of linear layers collapses into a single linear layer (\\(xW_1W_2 = xW'\\)), however deep it is.",
"math": ""
},
{
"url": "layers.html#tanh",
"page": "Layers",
"path": [
"Activations",
"tanh"
],
"text": "What it does: squashes any number into \\((-1, 1)\\), roughly linear near 0 and flat for large \\(|x|\\). Centred on zero. Used for: hidden layers in small and older networks, RNN cells, and inside the tanh approximation of GELU. Quotient rule with \\(u = e^x - e^{-x}\\) and \\(v = e^x + e^{-x}\\). Note \\(u' = v\\) and \\(v' = u\\): Cache: the output \\(y\\), since the derivative is written in terms of it. Gradients vanish for large \\(|x|\\), where \\(1 - y^2 \\approx 0\\) (saturation).",
"math": "range  tanh Longrightarrow partial odot approx"
},
{
"url": "layers.html#sigmoid",
"page": "Layers",
"path": [
"Activations",
"Sigmoid"
],
"text": "What it does: squashes any number into \\((0, 1)\\). \\(\\sigma(0) = \\tfrac12\\). It's a shifted, scaled tanh: \\(\\sigma(x) = \\tfrac12\\bigl(1 + \\tanh(x/2)\\bigr)\\). Used for: probabilities of yes/no outcomes (binary classification), and gates that scale something between “off” and “on” (LSTMs, SiLU/SwiGLU). Write \\(\\sigma = (1 + e^{-x})^{-1}\\) and use the chain rule (power rule outside, \\(e^{-x}\\) inside): The second factor is \\(1 - \\sigma(x)\\), because \\(\\dfrac{e^{-x}}{1 + e^{-x}} = \\dfrac{(1 + e^{-x}) - 1}{1 + e^{-x}} = 1 - \\dfrac{1}{1 + e^{-x}}\\). The maximum slope is \\(\\tfrac14\\) at \\(x = 0\\), so stacked sigmoids shrink gradients quickly. That's why hidden layers moved to tanh, then ReLU.",
"math": "range  sigma bigl bigr Longrightarrow partial odot tanh"
},
{
"url": "layers.html#relu",
"page": "Layers",
"path": [
"Activations",
"ReLU"
],
"text": "What it does: passes positive values through unchanged and zeroes negative ones. Used for: the default hidden-layer activation for most of the 2010s (CNNs, MLPs). It's cheap, and positive inputs never saturate, so gradients pass through deep stacks undiminished. Derivation: each piece is linear: slope 1 on the right, slope 0 on the left. The derivative at exactly 0 is undefined; frameworks use 0. Cache: the mask \\(x \\gt 0\\). A unit whose input is negative for every example gets no gradient at all and never recovers (a “dead” ReLU).",
"math": "ReLU max Longrightarrow partial odot"
},
{
"url": "layers.html#gelu",
"page": "Layers",
"path": [
"Activations",
"GELU"
],
"text": "What it does: a smooth ReLU. \\(\\Phi\\) is the standard normal CDF, which goes smoothly from 0 to 1, so GELU scales each input by “how positive it is”. Large positive inputs pass through, large negative ones go to 0, with a smooth dip just below zero. Used for: the MLP inside GPT-2, BERT and many other transformers. Derivation: product rule on \\(x \\cdot \\Phi(x)\\); the derivative of a CDF is its PDF, \\(\\Phi' = \\phi\\). The tanh approximation, \\(\\tfrac12 x\\bigl(1 + \\tanh\\bigl(\\sqrt{2/\\pi}\\,(x + 0.044715\\,x^3)\\bigr)\\bigr)\\), was used when erf was slow. PyTorch's F.gelu uses the exact form by default; approximate=\"tanh\" gives this one.",
"math": "GELU erf Phi Bigl bigl sqrt bigr Bigr phi tanh"
},
{
"url": "layers.html#softmax",
"page": "Layers",
"path": [
"Softmax"
],
"text": "What it does: turns a vector of arbitrary scores (logits) into a probability distribution: every \\(p_i\\) is in \\((0, 1)\\) and they sum to 1. Bigger scores get exponentially more of the share. Adding the same constant to every \\(z_i\\) changes nothing. Used for: the model's output (probabilities over classes or next tokens), and attention weights (how much each position attends to each other position). Computing it: subtract the row's maximum first, \\(p_i = e^{z_i - m} / \\sum_k e^{z_k - m}\\), so \\(e^x\\) can't overflow.",
"math": "softmax sum"
},
{
"url": "layers.html#softmax-jacobian",
"page": "Layers",
"path": [
"Softmax",
"Jacobian"
],
"text": "Every output depends on every input, through the sum: Let \\(S = \\sum_k e^{z_k}\\), so \\(p_i = e^{z_i}/S\\) and \\(\\partial S/\\partial z_j = e^{z_j}\\). Quotient rule:",
"math": "partial delta sum"
},
{
"url": "layers.html#softmax-backward",
"page": "Layers",
"path": [
"Softmax",
"Backward pass"
],
"text": "Multivariable chain rule over every output \\(p_i\\), then the Jacobian: The \\(\\delta_{ij}\\) picks out the \\(i = j\\) term from the first part of the sum. In code, row by row: dz = p * (dp - (dp * p).sum(axis=-1, keepdims=True)). No need to build the \\(C \\times C\\) Jacobian. Cache: the output \\(p\\).",
"math": "partial sum delta times"
},
{
"url": "layers.html#losses",
"page": "Layers",
"path": [
"Losses"
],
"text": "The last layer. Its output is a single number, and its backward pass starts the chain with \\(\\partial L/\\partial L = 1\\), so it takes no upstream gradient.",
"math": "partial"
},
{
"url": "layers.html#mse",
"page": "Layers",
"path": [
"Losses",
"Mean squared error"
],
"text": "What it does: averages the squared distance between prediction and target. Squaring makes it positive and punishes big misses much more than small ones. Used for: regression: predicting numbers rather than classes. Derivation: only the \\(n\\)-th term contains \\(\\hat{y}_n\\); chain rule on the square gives \\(2(\\hat{y}_n - y_n)\\), times the \\(\\tfrac1N\\) in front.",
"math": "sum partial"
},
{
"url": "layers.html#cross-entropy",
"page": "Layers",
"path": [
"Losses",
"Softmax + cross-entropy"
],
"text": "What it does: looks at the probability the model gave the correct class, \\(p_{n, y_n}\\), and takes \\(-\\log\\) of it. That's 0 when the model is certain and right, and grows without limit as the probability of the right answer goes to 0. Averaged over the batch. Used for: any classification, including language models, where the classes are the possible next tokens. A model that guesses uniformly over \\(C\\) classes scores \\(\\log C\\). Computing it: never take \\(\\log\\) of a probability. Use log-softmax directly:  \\(P\\) is the softmax output and \\(Y\\) the one-hot targets: the probabilities, minus 1 at each correct class, divided by \\(N\\). For one example, using the log-softmax form with target \\(y\\):  The first term is 1 only for the target class. The second is the chain rule through the log, then \\(\\partial/\\partial z_j\\) of the sum, which picks out \\(e^{z_j}\\). The mean over \\(N\\) examples divides each by \\(N\\). It's one function returning both the loss and \\(\\partial L/\\partial z\\). Going through softmax and log separately gives the same answer, but via the full Jacobian and a \\(1/p\\) that can blow up; together, everything cancels.",
"math": "softmax sum log partial ell delta"
},
{
"url": "layers.html#elsewhere",
"page": "Layers",
"path": [
"Elsewhere"
],
"text": "LayerNorm has its own page: the derivation is long. Attention's backward pass is on the Attention page. It's matrix products plus a softmax.",
"math": ""
},
{
"url": "layernorm.html",
"page": "LayerNorm",
"path": [],
"text": "Normalise each example's features to mean 0 and variance 1, then let the network rescale them.",
"math": ""
},
{
"url": "layernorm.html#what",
"page": "LayerNorm",
"path": [
"What it does"
],
"text": "For each row (one example, or one token in a transformer), LayerNorm subtracts the row's mean and divides by its standard deviation, so the row has mean 0 and variance 1. Then a learnable scale \\(\\gamma\\) and shift \\(\\beta\\), one per feature, let the network undo or adjust that wherever it helps. Used for: keeping activations at a steady scale through a deep network, which makes training much more stable. In a transformer there's one before attention and one before the MLP in every block (“pre-LN”), and one at the end before the output layer. Each row is normalised on its own, so it works the same at any batch size, unlike BatchNorm, which normalises each feature across the batch.",
"math": "gamma beta"
},
{
"url": "layernorm.html#forward",
"page": "LayerNorm",
"path": [
"Forward"
],
"text": "For one row \\(x = (x_1, \\dots, x_D)\\): \\(\\epsilon\\) (around \\(10^{-5}\\)) stops a division by zero when every \\(x_j\\) in the row is equal. \\(\\gamma\\) starts at 1 and \\(\\beta\\) at 0, so a new LayerNorm is a plain normalisation. Cache: \\(\\hat{x}\\), \\(1/\\sqrt{\\sigma^2 + \\epsilon}\\) and \\(\\gamma\\). That's everything the backward pass needs.",
"math": "mean variance (biased: divide by  ) normalised scale and shift sum sigma sqrt epsilon gamma beta"
},
{
"url": "layernorm.html#result",
"page": "LayerNorm",
"path": [
"Gradients: the result"
],
"text": "In words: take the gradient arriving at \\(\\hat{x}\\), subtract its mean, subtract \\(\\hat{x}\\) times the mean of (that gradient \\(\\times\\, \\hat{x}\\)), and scale by \\(1/\\text{std}\\).",
"math": "rows std partial gamma sqrt sigma epsilon sum beta times"
},
{
"url": "layernorm.html#derivation",
"page": "LayerNorm",
"path": [
"Derivation"
],
"text": "Shorthand for this section, all within one row: Two facts get used repeatedly. The deviations from the mean sum to zero, and \\(\\partial x_j / \\partial x_i\\) is the Kronecker delta:",
"math": "sqrt sigma epsilon partial sum delta"
},
{
"url": "layernorm.html#gamma-beta",
"page": "LayerNorm",
"path": [
"Derivation",
"γ and β"
],
"text": "\\(y_i = \\gamma_i \\hat{x}_i + \\beta_i\\) is element-wise, so \\(\\partial y_i / \\partial \\gamma_i = \\hat{x}_i\\) and \\(\\partial y_i / \\partial \\beta_i = 1\\). \\(\\gamma\\) and \\(\\beta\\) are shared by every row (broadcast), so their gradients sum over rows.",
"math": "gamma beta partial"
},
{
"url": "layernorm.html#into-xhat",
"page": "LayerNorm",
"path": [
"Derivation",
"Into x̂"
],
"text": "Also element-wise: \\(\\partial y_i / \\partial \\hat{x}_i = \\gamma_i\\), so \\(g_i = \\dfrac{\\partial L}{\\partial y_i}\\, \\gamma_i\\).",
"math": "partial gamma"
},
{
"url": "layernorm.html#through-xhat",
"page": "LayerNorm",
"path": [
"Derivation",
"Through x̂ to x"
],
"text": "This is the hard part, because \\(x_i\\) affects every \\(\\hat{x}_j\\) in its row, through \\(\\mu\\) and \\(\\sigma^2\\). By the multivariable chain rule: So we need \\(\\partial \\hat{x}_j / \\partial x_i\\) for every pair \\(i, j\\). Build it up in pieces. The mean. Only the \\(j = i\\) term of the sum contains \\(x_i\\): The variance. Chain rule on each square, using step 1 for the inside: The \\(\\delta_{ki}\\) picks out the \\(k = i\\) term, and the remaining sum of deviations is 0. One over the standard deviation. \\(1/s = (\\sigma^2 + \\epsilon)^{-1/2}\\). Power rule, then chain rule with step 2: The normalised value. \\(\\hat{x}_j = (x_j - \\mu) \\cdot \\frac{1}{s}\\) is a product, so use the product rule with steps 1 and 3: Pulling \\(1/s\\) out leaves \\(1/s^2\\) in the last term, which is exactly what turns both deviations into \\(\\hat{x}\\)s. Sum over \\(j\\). Substitute step 4 into the chain rule and split the sum into its three terms: \\(\\hat{x}_i\\) doesn't depend on \\(j\\), so it comes out of the third sum, and \\(\\delta_{ij}\\) picks \\(g_i\\) out of the first. Putting back \\(s = \\sqrt{\\sigma^2 + \\epsilon}\\) and \\(g = \\partial L / \\partial \\hat{x}\\) gives the result. Why it gets messy by hand: the usual alternative is to backprop through the computation graph node by node (\\(x \\to \\mu\\), \\(x \\to \\sigma^2\\), \\(\\mu \\to \\sigma^2\\), …), adding up the paths. It reaches the same answer, but the \\(x \\to \\mu \\to \\sigma^2\\) path and the direct \\(x \\to \\sigma^2\\) path have to be combined, and the cancellation from \\(\\sum_j (x_j - \\mu) = 0\\) is easy to miss. Going straight for \\(\\partial \\hat{x}_j / \\partial x_i\\) keeps it to five steps.",
"math": "partial sum Longrightarrow delta sigma epsilon sqrt"
},
{
"url": "layernorm.html#sanity",
"page": "LayerNorm",
"path": [
"Sanity checks"
],
"text": "The result is the incoming gradient with two components removed: \\(\\sum_i \\partial L / \\partial x_i = 0\\). Adding a constant to every \\(x_i\\) doesn't change \\(\\hat{x}\\), so it can't change the loss: the gradient can have no component along \\((1, 1, \\dots, 1)\\). That's the \\(-\\text{mean}(g)\\) term. (Check: sum the bracket over \\(i\\), using \\(\\sum_i \\hat{x}_i = 0\\).) \\(\\sum_i \\hat{x}_i\\, \\partial L / \\partial x_i \\approx 0\\). Scaling the row's deviations up doesn't change \\(\\hat{x}\\) either (exactly, when \\(\\epsilon = 0\\)), so there's no component along \\(\\hat{x}\\). That's the \\(-\\hat{x}\\,\\text{mean}(g \\hat{x})\\) term. If every \\(x_i\\) in a row is equal, \\(\\hat{x} = 0\\) and the gradient is \\(\\frac{1}{\\sqrt{\\epsilon}}\\bigl(g_i - \\text{mean}(g)\\bigr)\\): large, but finite, thanks to \\(\\epsilon\\).",
"math": "mean sum partial approx epsilon sqrt bigl bigr"
},
{
"url": "layernorm.html#code",
"page": "LayerNorm",
"path": [
"In code"
],
"text": "def layernorm_forward(x, gamma, beta, eps=1e-5): mean = x.mean(axis=1, keepdims=True) x_centred = x - mean var = (x_centred * x_centred).mean(axis=1, keepdims=True) sd_inv = 1.0 / np.sqrt(var + eps) x_hat = x_centred * sd_inv return x_hat * gamma + beta, (x_hat, sd_inv, gamma) def layernorm_backward(dout, cache): x_hat, sd_inv, gamma = cache dx_hat = dout * gamma mean_dx_hat = dx_hat.mean(axis=1, keepdims=True) mean_dx_hat_x_hat = (dx_hat * x_hat).mean(axis=1, keepdims=True) dx = sd_inv * (dx_hat - mean_dx_hat - x_hat * mean_dx_hat_x_hat) dgamma = (dout * x_hat).sum(axis=0) dbeta = dout.sum(axis=0) return dx, dgamma, dbeta Statistics are over the row (axis=1, with keepdims so they broadcast back); parameter gradients sum over the rows (axis=0).",
"math": ""
},
{
"url": "residual-stream.html",
"page": "Residual stream",
"path": [],
"text": "The idea that holds a transformer together: one vector per token, which every layer reads from and adds to.",
"math": ""
},
{
"url": "residual-stream.html#residual",
"page": "Residual stream",
"path": [
"Residual connections"
],
"text": "A plain network replaces its input at every layer. A residual connection adds the layer's output to its input instead: The layer only has to learn a change to its input (the “residual”), not the whole output. If a layer has nothing useful to add, it can output roughly zero and the input passes through untouched. From ResNet (He et al., 2015), which used it to train 152-layer image networks.",
"math": "plain:  residual: "
},
{
"url": "residual-stream.html#gradients",
"page": "Residual stream",
"path": [
"Why they make depth trainable"
],
"text": "Differentiate one residual layer, \\(x_{l+1} = x_l + f(x_l)\\): The first term is the gradient from above, copied through unchanged. That's the “a value used twice: add the gradients” rule: \\(x_l\\) is used by \\(f\\) and by the addition. Going back through many layers, a plain network multiplies one Jacobian per layer, so the gradient shrinks or blows up exponentially with depth. With residuals, there's always a direct path from the loss to every layer with no multiplications at all: expand the product and one of its terms is just \\(\\partial L / \\partial x_L\\): (For row vectors, the factors multiply in order from the top layer down.)",
"math": "(terms through one or more layers) partial Longrightarrow prod Bigl Bigr"
},
{
"url": "residual-stream.html#stream",
"page": "Residual stream",
"path": [
"The residual stream"
],
"text": "In a transformer, the running vector \\(x\\) for each token is called the residual stream. It starts as the token's embedding and runs through the whole model. No layer replaces it: each one reads from it (through a LayerNorm and its own input projection) and writes to it (by adding its output projection's result). Each block branches off the stream twice and adds back twice. The stream itself only ever has things added to it. Since every layer adds, the final stream is a sum: So the stream works like a shared memory or communication channel of width \\(C\\): early layers write information into it, later layers read it back out. Different layers tend to use different directions (subspaces) of it, so they don't overwrite each other. Attention Moves information between positions: reads from other tokens' streams and writes into this one. MLP Processes each position on its own: widen to \\(4C\\), non-linearity (GELU), narrow back to \\(C\\). Much of the model's stored knowledge is thought to live here.",
"math": "final every attention and MLP layer (that layer's output) sum"
},
{
"url": "residual-stream.html#block",
"page": "Residual stream",
"path": [
"The transformer block"
],
"text": "\\(W_1\\) is \\(C \\times 4C\\) and \\(W_2\\) is \\(4C \\times C\\). Every block has the same shape; a model is \\(N\\) of them stacked, each with its own weights.",
"math": "Attention LN MLP GELU leftarrow bigl bigr times"
},
{
"url": "residual-stream.html#pre-post",
"page": "Residual stream",
"path": [
"The transformer block",
"Pre-norm vs post-norm"
],
"text": "Post-norm (2017 original) \\(x \\leftarrow \\operatorname{LN}\\bigl(x + f(x)\\bigr)\\) The norm sits on the stream, so every gradient passes through every LayerNorm. Deep stacks needed careful learning-rate warmup to train at all. Pre-norm (GPT-2 onwards) \\(x \\leftarrow x + f\\bigl(\\operatorname{LN}(x)\\bigr)\\) The norm is only on the branch. The stream is never normalised, so the identity path from the loss to every layer stays clean. Because a pre-norm stream is never normalised, it grows as layers add to it. That's why pre-norm models need a final LayerNorm before the output layer.",
"math": "LN leftarrow bigl bigr"
},
{
"url": "residual-stream.html#whole-model",
"page": "Residual stream",
"path": [
"The whole model"
],
"text": "\\(W_U\\) (the “unembedding”, or lm_head) maps the stream back to a score per vocabulary token. GPT-2 ties it to the token embedding, \\(W_U = W_E^\\top\\), since reading a token into the stream and scoring the stream against tokens are closely related jobs. With RoPE, there's no pos_emb: position goes into attention instead (see Positions).",
"math": "tok\\_emb tokens pos\\_emb Block logits LN leftarrow top"
},
{
"url": "residual-stream.html#scale",
"page": "Residual stream",
"path": [
"Keeping the scale in check"
],
"text": "Every sublayer adds to the stream, and there are \\(2N\\) of them. If each adds something of similar size and roughly independent, the stream's variance grows like the number of additions. GPT-2 counters this at initialisation by scaling down the weights of each sublayer's output projection (attention's \\(W_O\\), the MLP's \\(W_2\\)): That also means each block starts close to the identity (\\(f(x) \\approx 0\\)), so a freshly initialised deep model behaves like a shallow one and training can grow it from there.",
"math": "std instead of  sqrt approx"
},
{
"url": "residual-stream.html#reading",
"page": "Residual stream",
"path": [
"Reading the stream"
],
"text": "Because the stream is a sum and the output is (after the final LayerNorm) a linear map of it, you can look inside a model by treating partial sums as if they were the final stream: Logit lens: apply \\(\\operatorname{LN}_f\\) and \\(W_U\\) to the stream after layer \\(l\\) to see what the model would predict if it stopped there. Predictions typically sharpen layer by layer. Direct logit attribution: push one layer's output through \\(W_U\\) on its own to see which tokens that layer pushes up or down. Features as directions: concepts tend to be represented as directions in the stream, which layers write and later layers read. Linear probes and sparse autoencoders look for them. These are approximations (the final LayerNorm isn't quite linear), but they work well enough to be the starting point for most interpretability work.",
"math": "LN"
},
{
"url": "attention.html",
"page": "Attention",
"path": [],
"text": "The part of a transformer that moves information between positions.",
"math": ""
},
{
"url": "attention.html#what",
"page": "Attention",
"path": [
"What it does"
],
"text": "Each position in the sequence builds its output as a weighted average of information from other positions. The weights depend on content: how well what this position is looking for matches what each other position contains. Each position produces three vectors from its own embedding: Query \\(q\\) What am I looking for? Key \\(k\\) What do I contain? (What queries should match me?) Value \\(v\\) What do I pass on to whoever attends to me? Attention itself has no notion of order: shuffle the positions and each output just moves with its input. Position comes from elsewhere, such as learned position embeddings or RoPE. Attention moves information between positions; the MLP that follows it in each block processes each position on its own.",
"math": ""
},
{
"url": "attention.html#formula",
"page": "Attention",
"path": [
"Scaled dot-product attention"
],
"text": "One head, \\(T\\) positions, head size \\(d\\). Softmax is over each row. Scores \\(S = QK^\\top / \\sqrt{d}\\) (\\(S_{tj} = q_t \\cdot k_j / \\sqrt{d}\\)) \\(T \\times T\\) Mask \\(S + M\\), with \\(M_{tj} = -\\infty\\) where \\(t\\) may not see \\(j\\), else 0 \\(T \\times T\\) Weights \\(A = \\operatorname{softmax}(S + M)\\), each row sums to 1 \\(T \\times T\\) Output \\(O = AV\\) (\\(o_t = \\sum_j A_{tj}\\, v_j\\)) \\(T \\times d\\)",
"math": "Attention softmax top sqrt times infty sum"
},
{
"url": "attention.html#scaling",
"page": "Attention",
"path": [
"Scaled dot-product attention",
"Why divide by √d"
],
"text": "If the entries of \\(q\\) and \\(k\\) are independent with mean 0 and variance 1, then so dot products grow with the head size. Large scores push the softmax towards one-hot, where its gradients are nearly zero. Dividing by \\(\\sqrt{d}\\) brings the variance back to 1.",
"math": "Var sum sqrt"
},
{
"url": "attention.html#causal",
"page": "Attention",
"path": [
"Scaled dot-product attention",
"The causal mask"
],
"text": "A language model is trained to predict token \\(t + 1\\) at position \\(t\\). If position \\(t\\) could see later positions, it could just copy the answer. So position \\(t\\) may only attend to positions \\(j \\le t\\): Attention weights \\(A\\) for 6 positions (stronger colour = more weight; made-up values). Each row sums to 1. Empty cells are masked: \\(-\\infty\\) before the softmax, exactly 0 after. The diagonal is always allowed, so every row has at least one finite score, and the softmax never sees a row of all \\(-\\infty\\). Fewer queries than keys (a KV cache, where new queries attend to cached keys): with \\(T_q\\) queries and \\(T_k\\) keys, query \\(i\\) sits at position \\(T_k - T_q + i\\), so it may see keys \\(j \\le i + (T_k - T_q)\\). In PyTorch: torch.ones(Tq, Tk, dtype=torch.bool).tril(diagonal=Tk - Tq). When \\(T_q = T_k\\), that's the usual mask.",
"math": "infty"
},
{
"url": "attention.html#multi-head",
"page": "Attention",
"path": [
"Multi-head attention"
],
"text": "Rather than one attention over the full model width \\(C\\), split it into \\(H\\) heads of size \\(d = C / H\\), run attention in each independently, and concatenate. Each head can learn a different pattern, such as “the previous token” or “the matching bracket”. The total cost is the same as one big head. Input \\((B, T, C)\\) Project, split q/k/v \\(3 \\times (B, T, C)\\) self.qkv(x).split(C, dim=-1) Split heads \\((B, H, T, d)\\) q.view(B, T, H, d).transpose(1, 2) Attention per head \\((B, H, T, d)\\) attention(q, k, v) Merge heads \\((B, T, C)\\) out.transpose(1, 2).reshape(B, T, C) Output projection \\((B, T, C)\\) self.proj(out) transpose makes the tensor non-contiguous, so merging needs reshape (or .contiguous().view(...)), not plain view.",
"math": " (often one   matrix) head Attention columns   of  MultiHead Concat times"
},
{
"url": "attention.html#backward",
"page": "Attention",
"path": [
"Backward pass"
],
"text": "For one head, given \\(\\partial L / \\partial O\\). Forward was \\(S = QK^\\top/\\sqrt{d}\\) (masked), \\(A = \\operatorname{softmax}(S)\\), \\(O = AV\\). Every step reuses a rule from the Layers page. \\(V\\) and \\(A\\) Matrix product \\(O = AV\\): \\(\\partial A = \\partial O\\, V^\\top\\), \\(\\partial V = A^\\top \\partial O\\). \\(S\\) Softmax backward, row by row. The rowsum is a \\(T \\times 1\\) column, broadcast across each row. \\(Q\\) and \\(K\\) Matrix product \\(S = Q K^\\top / \\sqrt{d}\\), treating \\(K^\\top\\) as the weight: \\(\\partial Q = \\partial S\\, K / \\sqrt{d}\\), and \\(\\partial K = (\\partial S)^\\top Q / \\sqrt{d}\\) from \\(\\partial (K^\\top) = Q^\\top \\partial S / \\sqrt{d}\\), transposed. Masked positions have \\(A_{tj} = 0\\), so \\(\\partial L / \\partial S_{tj} = 0\\) there too: no gradient flows through a connection that wasn't used, without any special handling. Cache: \\(Q\\), \\(K\\), \\(V\\) and \\(A\\). For multi-head attention, the reshapes and transposes just move gradients back to where their values came from, and the projections are ordinary linear layers.",
"math": "rowsum softmax partial top odot sqrt times"
},
{
"url": "attention.html#cost",
"page": "Attention",
"path": [
"Cost"
],
"text": "Compute \\(O(T^2 d)\\): two \\(T \\times T\\)-sized matrix products Memory \\(O(T^2)\\) for the scores and weights The \\(T^2\\) is why context length is expensive. Fused kernels like FlashAttention (behind F.scaled_dot_product_attention) compute the same result in tiles, without ever storing the full \\(T \\times T\\) matrix. During generation, a KV cache stores past keys and values so each new token costs \\(O(Td)\\) rather than recomputing everything.",
"math": "times"
},
{
"url": "positions.html",
"page": "Position encoding",
"path": [],
"text": "How a transformer knows the order of its tokens, from the original sine waves to RoPE.",
"math": ""
},
{
"url": "positions.html#why",
"page": "Position encoding",
"path": [
"Why it's needed"
],
"text": "Attention sees its input as a set: shuffle the tokens and each output just moves with its token. Without extra information, “dog bites man” and “man bites dog” look the same. (The causal mask leaks a little order, but not enough to rely on.) There are two broad approaches: Absolute: give each position its own vector and add it to the token embedding at the input. Sinusoidal and learned embeddings work like this. Relative: change the attention scores so they depend on the distance between query and key, \\(t - j\\). RoPE, ALiBi and T5's bias work like this. Most current models use RoPE.",
"math": ""
},
{
"url": "positions.html#sinusoidal",
"page": "Position encoding",
"path": [
"Sinusoidal (2017)"
],
"text": "From the original transformer paper (Vaswani et al., Google, “Attention Is All You Need”). Each position \\(p\\) gets a fixed vector of size \\(d\\), added to the token embedding:  Each pair of dimensions \\((2i, 2i+1)\\) is a point going round a circle as \\(p\\) increases, like the hand of a clock, at angular speed \\(\\omega_i = 10000^{-2i/d}\\). The first pair turns 1 radian per position; the last turns about 10000 times slower. Together they work like the digits of a number: fast ones distinguish neighbours, slow ones tell far-apart positions apart. \\(PE\\) for 48 positions and \\(d = 32\\). Each column is one position's vector. The top rows (fast clocks) flip sign every few positions; the bottom rows barely change across the whole range. Why sines and cosines: moving \\(k\\) positions along rotates each pair by a fixed angle, \\(k\\omega_i\\), whatever \\(p\\) is. So \\(PE_{p+k}\\) is a linear function of \\(PE_p\\), which the authors hoped would make relative positions easy to learn: No parameters, and it's defined for any position, though in practice models don't generalise well past the lengths they were trained on. The paper also scales the token embeddings by \\(\\sqrt{d}\\) before adding, so the position signal doesn't drown them out.",
"math": "embedding token sin cos bigl omega bigr sqrt"
},
{
"url": "positions.html#learned",
"page": "Position encoding",
"path": [
"Learned embeddings"
],
"text": "Simpler still: a second embedding table, indexed by position instead of token, learned like any other weight. self.pos_emb = nn.Embedding(block_size, d_model) x = self.tok_emb(idx) + self.pos_emb(torch.arange(T, device=idx.device)) # (B, T, C), broadcast over B The original paper tried this too and found it worked about as well as sinusoidal. It's what BERT, GPT-2 and GPT-3 use, and what CatGPT's stage 4 uses. The catch: there's nothing for position \\(T_{\\max}\\) and beyond, so the context length is fixed at training time, and each position is learned separately, so the model has to learn that positions 7 and 8 are neighbours.",
"math": "tok\\_emb token pos\\_emb max times"
},
{
"url": "positions.html#relative",
"page": "Position encoding",
"path": [
"Relative biases"
],
"text": "Instead of changing the inputs, add a bias to each attention score that depends only on the distance \\(t - j\\): T5 relative bias A learned scalar per head for each distance, with distances grouped into buckets that get wider further away. T5 ALiBi Fixed, no parameters: \\(-m_h\\,(t - j)\\), a straight-line penalty on distance with a different slope \\(m_h\\) per head. BLOOM, MPT ALiBi in particular extrapolates well to sequences longer than it was trained on, because a longer distance just means a bigger penalty.",
"math": "sqrt"
},
{
"url": "positions.html#rope",
"page": "Position encoding",
"path": [
"RoPE"
],
"text": "Rotary position embedding (Su et al., 2021). Used by LLaMA, Mistral, Qwen, Gemma, GPT-NeoX and most current LLMs. Instead of adding anything, rotate each query and key by an angle proportional to its position. It's applied inside every attention layer, to \\(q\\) and \\(k\\) only (not \\(v\\), and not the residual stream).",
"math": ""
},
{
"url": "positions.html#rope-rotation",
"page": "Position encoding",
"path": [
"RoPE",
"The rotation"
],
"text": "Split the head's \\(d\\) dimensions into \\(d/2\\) pairs. Pair \\(i\\) gets its own frequency, the same spectrum as the sinusoidal encoding: At position \\(m\\), rotate each pair by the angle \\(m\\theta_i\\), using the 2D rotation matrix: Written out without the matrix: The whole vector's rotation \\(R_m\\) is block-diagonal: \\(d/2\\) independent 2D rotations, each turning at its own speed. Rotations don't change length, so \\(\\lVert R_m x \\rVert = \\lVert x \\rVert\\). As complex numbers: treat pair \\(i\\) as \\(z_i = x_{2i} + \\mathrm{i}\\, x_{2i+1}\\). Then rotating is just multiplying: \\(z'_i = z_i \\, e^{\\mathrm{i} m \\theta_i}\\).",
"math": " usually i theta cos sin lVert rVert"
},
{
"url": "positions.html#rope-relative",
"page": "Position encoding",
"path": [
"RoPE",
"Why it's relative"
],
"text": "Query at position \\(m\\), key at position \\(n\\). Rotating one by \\(m\\theta\\) and the other by \\(n\\theta\\) changes the angle between them by \\((n - m)\\theta\\): since \\(R_m^\\top = R_{-m}\\) (rotating back) and rotations add: \\(R_{-m} R_n = R_{n-m}\\). The score depends on the two vectors' content and their distance \\(n - m\\), never on the absolute positions. One pair of dimensions. Both pairs of positions are 3 apart, so the angle between the rotated \\(q\\) and \\(k\\), and therefore their dot product, is the same, even though everything has turned. Because the fast pairs wrap round quickly and the slow pairs barely move, the model can use fast pairs for “what's nearby” and slow pairs for long-range matching. And unlike learned embeddings, there's no table to run off the end of.",
"math": "top theta"
},
{
"url": "positions.html#rope-pairs",
"page": "Position encoding",
"path": [
"RoPE",
"Pairing dimensions"
],
"text": "The paper pairs adjacent dimensions, \\((x_0, x_1), (x_2, x_3), \\dots\\). Many implementations (GPT-NeoX, LLaMA in Hugging Face, CatGPT's stage 7 hint) instead pair each dimension with the one half a vector away, \\((x_i, x_{i + d/2})\\), because it's easier to vectorise: where \\(x_1, x_2\\) are the two halves of \\(x\\), and \\(\\cos\\), \\(\\sin\\) hold \\(\\cos m\\theta_i\\) and \\(\\sin m\\theta_i\\) with the \\(d/2\\) angles repeated twice (cat([angles, angles])). For each \\(i\\) that gives \\(x'_i = x_i \\cos - x_{i+d/2} \\sin\\) and \\(x'_{i+d/2} = x_{i+d/2} \\cos + x_i \\sin\\): the same rotation, on a different choice of pairs. The two layouts are equally good for training from scratch, since the learned \\(W_Q\\), \\(W_K\\) can produce either ordering. But weights trained with one don't work with the other, which is a classic bug when loading someone else's checkpoint. The rotation is the same for every head, and positions come from the sequence index. With a KV cache, the new queries' positions continue from where the cache ends, not from 0.",
"math": "rotate\\_half odot cos sin bigl bigr theta"
},
{
"url": "positions.html#rope-long",
"page": "Position encoding",
"path": [
"RoPE",
"Longer contexts"
],
"text": "Positions beyond the training length produce angles the slow pairs never saw. Common fixes, all of which stretch the slow frequencies: Position interpolation Divide positions by the extension factor, so a longer sequence maps back into the trained range of angles. Needs a little fine-tuning. Larger base Raise \\(b\\) (Llama 3 uses 500,000), so every pair turns more slowly. “NTK-aware” scaling does this by a rule. YaRN Leaves the fast pairs alone, interpolates the slow ones, and blends in between.",
"math": ""
},
{
"url": "positions.html#rope-2d",
"page": "Position encoding",
"path": [
"RoPE",
"2D RoPE for images"
],
"text": "Image patches have a row and a column rather than a single position. The usual (“axial”) 2D RoPE splits each head's dimensions in two: one half is rotated using the patch's row index, the other half using its column index, each with ordinary 1D RoPE. The score then depends on the vertical and horizontal offsets between patches.",
"math": ""
},
{
"url": "positions.html#comparison",
"page": "Position encoding",
"path": [
"Comparison"
],
"text": "Sinusoidal Added to input None No Defined, works poorly Original Transformer Learned Added to input \\(T_{\\max} \\times C\\) No No BERT, GPT-2, GPT-3 T5 bias Attention scores Per head, per bucket Yes Somewhat T5 ALiBi Attention scores None Yes Well BLOOM, MPT RoPE Rotates \\(q\\), \\(k\\) in every layer None Yes With scaling LLaMA, Mistral, Qwen, Gemma",
"math": "max times"
}
];
