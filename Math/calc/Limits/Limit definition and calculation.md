# Limits — Definition and Calculation

## 1. What a limit means

`lim(x→a) f(x) = L` means: as `x` gets arbitrarily close to `a` (from either side, but never actually equal to `a`), `f(x)` gets arbitrarily close to `L`.

### How to know if the limit exists — one-sided limits

The two-sided limit exists **exactly when the left-hand and right-hand limits agree**:

`lim(x→a) f(x) = L`  ⟺  `lim(x→a⁻) f(x) = lim(x→a⁺) f(x) = L`

If the left- and right-hand limits are different (or one of them doesn't settle on a single value), the limit **does not exist (DNE)** at that point — this is exactly what happens at a jump in a [[Simple Functions#1. Piecewise functions|piecewise function]].

<div align="center">

<svg viewBox='0 0 460 240' width='100%' style='max-width:460px' xmlns='http://www.w3.org/2000/svg'>
<rect x='1' y='1' width='458' height='238' rx='10' fill='#f8fafc' stroke='#e2e8f0'/>
<line x1='230' y1='10' x2='230' y2='230' stroke='#e2e8f0' stroke-width='1.5'/>
<text x='120' y='18' font-size='12.5' fill='#1e293b' text-anchor='middle' font-weight='bold' font-family='Georgia, serif'>limit exists</text>
<line x1='30' y1='185' x2='210' y2='185' stroke='#334155' stroke-width='1.4'/>
<path d='M 40 160 C 70 148 100 118 130 95 C 150 80 175 60 200 45' fill='none' stroke='#334155' stroke-width='2.2'/>
<line x1='130' y1='95' x2='130' y2='185' stroke='#334155' stroke-width='1.4' stroke-dasharray='4,3'/>
<line x1='30' y1='95' x2='130' y2='95' stroke='#16a34a' stroke-width='1.4' stroke-dasharray='4,3'/>
<text x='26' y='99' font-size='11' fill='#16a34a' text-anchor='end' font-family='Georgia, serif'>L</text>
<text x='130' y='200' font-size='11.5' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>a</text>
<text x='120' y='222' font-size='11' fill='#16a34a' text-anchor='middle' font-family='Georgia, serif'>left limit = right limit = L</text>
<text x='350' y='18' font-size='12.5' fill='#1e293b' text-anchor='middle' font-weight='bold' font-family='Georgia, serif'>limit does not exist</text>
<line x1='250' y1='185' x2='450' y2='185' stroke='#334155' stroke-width='1.4'/>
<path d='M 260 120 C 275 128 290 135 300 140' fill='none' stroke='#334155' stroke-width='2.2'/>
<circle cx='300' cy='140' r='4.5' fill='none' stroke='#334155' stroke-width='2'/>
<path d='M 300 80 C 320 70 350 60 440 50' fill='none' stroke='#334155' stroke-width='2.2'/>
<circle cx='300' cy='80' r='4.5' fill='none' stroke='#334155' stroke-width='2'/>
<line x1='300' y1='45' x2='300' y2='185' stroke='#334155' stroke-width='1.4' stroke-dasharray='4,3'/>
<line x1='250' y1='140' x2='300' y2='140' stroke='#ea580c' stroke-width='1.4' stroke-dasharray='4,3'/>
<line x1='300' y1='80' x2='450' y2='80' stroke='#2563eb' stroke-width='1.4' stroke-dasharray='4,3'/>
<text x='300' y='200' font-size='11.5' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>a</text>
<text x='350' y='222' font-size='11' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>left limit ≠ right limit -&gt; DNE</text>
</svg>

</div>

### The limit doesn't care about `f(a)`

This is the single most important thing to internalize: `lim(x→a) f(x)` only describes how `f` behaves **near** `a` — it says nothing about the actual value at `a`.

- `f` doesn't even need to be **defined** at `a` (a "hole" in the domain) — the limit can still exist perfectly well.
- If `f(a)` **is** defined, its value can be **completely different** from the limit — the function could jump to some other value exactly at that one point.
- So computing a limit is asking *"what does `f` approach?"*, never *"what is `f` right there?"*.

<div align="center">

<svg viewBox='0 0 460 220' width='100%' style='max-width:460px' xmlns='http://www.w3.org/2000/svg'>
<rect x='1' y='1' width='458' height='218' rx='10' fill='#f8fafc' stroke='#e2e8f0'/>
<line x1='230' y1='10' x2='230' y2='210' stroke='#e2e8f0' stroke-width='1.5'/>
<text x='120' y='18' font-size='12' fill='#1e293b' text-anchor='middle' font-weight='bold' font-family='Georgia, serif'>f(a) undefined — hole in domain</text>
<line x1='30' y1='170' x2='210' y2='170' stroke='#334155' stroke-width='1.4'/>
<path d='M 40 140 C 70 120 100 100 130 90 C 150 80 175 65 200 50' fill='none' stroke='#334155' stroke-width='2.2'/>
<circle cx='130' cy='90' r='4.5' fill='none' stroke='#16a34a' stroke-width='2'/>
<text x='140' y='84' font-size='11' fill='#16a34a' text-anchor='start' font-family='Georgia, serif'>limit = L</text>
<text x='130' y='188' font-size='11.5' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>a</text>
<text x='120' y='204' font-size='11' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>limit still exists = L</text>
<text x='350' y='18' font-size='12' fill='#1e293b' text-anchor='middle' font-weight='bold' font-family='Georgia, serif'>f(a) defined, but ≠ L</text>
<line x1='250' y1='170' x2='450' y2='170' stroke='#334155' stroke-width='1.4'/>
<path d='M 260 140 C 290 120 320 100 350 90 C 370 80 400 65 440 50' fill='none' stroke='#334155' stroke-width='2.2'/>
<circle cx='350' cy='90' r='4.5' fill='none' stroke='#16a34a' stroke-width='2'/>
<text x='360' y='84' font-size='11' fill='#16a34a' text-anchor='start' font-family='Georgia, serif'>limit = L</text>
<circle cx='350' cy='140' r='4.5' fill='#ea580c'/>
<text x='360' y='144' font-size='11' fill='#ea580c' text-anchor='start' font-family='Georgia, serif'>f(a) (actual value)</text>
<line x1='350' y1='90' x2='350' y2='140' stroke='#334155' stroke-width='1.2' stroke-dasharray='3,3'/>
<text x='350' y='188' font-size='11.5' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>a</text>
<text x='350' y='204' font-size='11' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>limit = L, but f(a) ≠ L</text>
</svg>

</div>

### The arithmetic theorem of limits

If `lim(x→a) f(x) = L` and `lim(x→a) g(x) = M` (both **finite, existing** limits), then:

- `lim [f(x) ± g(x)] = L ± M`
- `lim [c · f(x)] = c · L` (constant multiple)
- `lim [f(x) · g(x)] = L · M`
- `lim [f(x) / g(x)] = L / M`, **provided `M ≠ 0`**
- `lim [f(x)]ⁿ = Lⁿ`,  `lim ⁿ√f(x) = ⁿ√L` (domain permitting)

**Why this matters:** it lets you break a complicated limit into simpler pieces — but **only when each individual piece's limit already exists** (and, for division, the denominator's limit isn't `0`). If a piece doesn't have a limit on its own, this theorem simply doesn't apply — it doesn't say the combined limit fails too, just that you can't use *this shortcut* to find it (see §4).

---

## 2. Continuity

### Definition

`f` is **continuous at `x = a`** when **all three** of these hold at once (an AND, same as the domain reasoning in [[Precalc#Domain of definition — before you differentiate or integrate|Precalc]] and [[Basic Algebra#Quick reference — when to use "and" vs "or"|Basic Algebra's AND/OR reference]]):

1. `f(a)` is **defined** (`a` is in the domain).
2. `lim(x→a) f(x)` **exists**.
3. `lim(x→a) f(x) = f(a)` — the limit actually **matches** the function's value there.

If any one of these three fails, `f` is **discontinuous** at `a` (a "hole" fails #1, a jump fails #2, and a limit that exists but doesn't match `f(a)` fails #3).

### Arithmetic of continuity

Since continuity is defined through limits, it inherits the exact same arithmetic: if `f` and `g` are **both continuous at `a`**, then so are `f ± g`, `c·f`, `f·g`, and `f/g` (provided `g(a) ≠ 0`) — and so is the **composition** `f∘g`, provided `g` is continuous at `a` and `f` is continuous at `g(a)` (this is the same domain-intersection idea from [[Simple Functions#2. Function composition|Simple Functions §2]]).

**Practical upshot:** polynomials, `sin`, `cos`, `eˣ`, etc. are continuous everywhere they're built from continuous pieces — so any combination of them (sum, product, quotient where defined, composition) is continuous too, everywhere it's defined.

---

## 3. Calculating limits

### Functions you can just substitute `x` into directly

Direct substitution (`lim(x→a) f(x) = f(a)`) is valid whenever `f` is **continuous at `a`** — which, from §2, covers all of these (as long as `a` is actually in the domain):

- **Polynomials** — continuous everywhere.
- **Constants** — trivially continuous everywhere.
- **Rational functions** (polynomial / polynomial) — continuous everywhere **except** where the denominator is `0`.
- **Roots** (`√x`, `ⁿ√x`) — continuous on their domain (see [[Precalc#Domain of definition — before you differentiate or integrate|Precalc's domain rules]] for even roots).
- **`sin x`, `cos x`** — continuous everywhere; **`tan x`** — continuous except where `cos x = 0` (see [[Trig base#2.2 The unit circle — full explanation|Trig base §2.2]]).
- **`eˣ`, `aˣ`** — continuous everywhere; **`ln x`, `log_a(x)`** — continuous on their domain (`x > 0`), per [[Powers and Logs base#1. Definition, rules, and identities|Powers and Logs base]].
- Any function that's **already known/defined to equal its limit** at that point (i.e. already established as continuous there) — including sums, products, quotients, and compositions of everything above, by the arithmetic in §2.

If direct substitution gives a real, defined number — you're done. The interesting work starts when it **doesn't**.

### Case A — rational function gives `0/0`: factor and cancel

If substituting into a ratio of polynomials gives the indeterminate form `0/0`, the numerator and denominator **share a common factor** (the exact factor that vanishes at `x = a`) — factor it out and cancel.

1. Try direct substitution first.
2. If you get `0/0`, **factor** both the numerator and denominator.
3. **Cancel** the common factor (this is exactly what turns the original "hole" into something computable).
4. Substitute again into the simplified expression.

**Example:** `lim(x→2) (x² − 4)/(x − 2) = lim(x→2) (x−2)(x+2)/(x−2) = lim(x→2) (x+2) = 4`.

### Case B — limits at infinity: the `1/xⁿ` trick, and the conjugate trick

**The `(1/xⁿ)/(1/xⁿ)` trick**, for `x → ∞` (or `−∞`) on a ratio that gives `∞/∞`:

1. Find the **highest power of `x`** appearing anywhere in the expression (usually in the denominator).
2. **Divide every term**, top and bottom, by that power (equivalent to multiplying the whole fraction by `(1/xⁿ)/(1/xⁿ) = 1`).
3. As `x → ∞`, any term shaped like `c/xᵏ` → `0`, leaving only the surviving finite terms.
4. Evaluate what's left.

**Example:** `lim(x→∞) (3x² + 2x)/(5x² − 1)`. Divide every term by `x²`: `(3 + 2/x)/(5 − 1/x²) → 3/5`.

<div align="center">

<svg viewBox='0 0 380 200' width='100%' style='max-width:380px' xmlns='http://www.w3.org/2000/svg'>
<rect x='1' y='1' width='378' height='198' rx='10' fill='#f8fafc' stroke='#e2e8f0'/>
<text x='190' y='18' font-size='12' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>(3x²+2x)/(5x²−1) -&gt; 3/5 as x -&gt; ∞</text>
<line x1='30' y1='150' x2='350' y2='150' stroke='#334155' stroke-width='1.4'/>
<line x1='30' y1='80' x2='350' y2='80' stroke='#ea580c' stroke-width='1.4' stroke-dasharray='4,3'/>
<text x='26' y='84' font-size='11' fill='#ea580c' text-anchor='end' font-family='Georgia, serif'>3/5</text>
<path d='M 40 30 C 90 90 140 120 200 100 C 260 88 310 82 340 80' fill='none' stroke='#334155' stroke-width='2.2'/>
<path d='M 335 75 L 342 80 L 335 85' fill='none' stroke='#334155' stroke-width='1.4'/>
</svg>

</div>

**The conjugate trick**, for limits with a square root causing a `0/0` (or `∞ − ∞`) form:

1. Identify the radical expression that's causing the problem.
2. Multiply numerator and denominator by the **conjugate** of that radical part.
3. `(√A − B)(√A + B) = A − B²` — the difference of squares removes the root.
4. Cancel the common factor that appears, then substitute.

**Example:** `lim(x→0) (√(x+4) − 2)/x`. Multiply by `(√(x+4)+2)/(√(x+4)+2)`: numerator becomes `(x+4) − 4 = x`, so the expression is `x / [x(√(x+4)+2)] = 1/(√(x+4)+2) → 1/4`.

### Case C — substitution: placing `t` for an expression tending to a specific value

Same core idea as the [[Precalc#2.4 u-substitution — "placing `t`" for a non-linear expression to a power|u-substitution technique for integrals]] — here it's used to simplify a limit rather than an antiderivative.

1. Let `t` = some expression in `x`, chosen so that as `x → a`, `t` tends to a **specific, simpler value `b`**.
2. Rewrite the **entire** limit in terms of `t` (solve for `x` in terms of `t` if needed, and substitute everywhere).
3. Evaluate the new limit as `t → b` — often a standard, recognizable form.

**Example:** `lim(x→0) sin(3x)/x`. Let `t = 3x`, so `x = t/3`, and as `x→0`, `t→0`:

`lim(x→0) sin(3x)/x = lim(t→0) sin(t)/(t/3) = 3 · lim(t→0) sin(t)/t = 3 · 1 = 3`

*(using the standard, well-known result `lim(θ→0) sin(θ)/θ = 1`.)*

---

## 4. When arithmetic breaks down — combining piecewise functions

The arithmetic theorem in §1 only applies when **each individual piece already has a limit**. If `f(x)` and `g(x)` are [[Simple Functions#1. Piecewise functions|piecewise functions]] that **each fail to have a limit** at `x = a` (say, each has a jump there), you simply **cannot** use the shortcut `lim[f+g] = lim f + lim g` — its hypothesis isn't met.

But that does **not** mean the combined limit fails too — the two "bad" jumps can **cancel each other out**, leaving a perfectly well-behaved combined function.

<div align="center">

<svg viewBox='0 0 460 220' width='100%' style='max-width:460px' xmlns='http://www.w3.org/2000/svg'>
<rect x='1' y='1' width='458' height='218' rx='10' fill='#f8fafc' stroke='#e2e8f0'/>
<line x1='165' y1='10' x2='165' y2='190' stroke='#e2e8f0' stroke-width='1.5'/>
<line x1='315' y1='10' x2='315' y2='190' stroke='#e2e8f0' stroke-width='1.5'/>
<text x='90' y='18' font-size='12' fill='#1e293b' text-anchor='middle' font-weight='bold' font-family='Georgia, serif'>f(x) — jump, no limit</text>
<line x1='30' y1='60' x2='150' y2='60' stroke='#e2e8f0' stroke-width='1' stroke-dasharray='2,2'/>
<line x1='30' y1='140' x2='150' y2='140' stroke='#e2e8f0' stroke-width='1' stroke-dasharray='2,2'/>
<line x1='30' y1='140' x2='90' y2='140' stroke='#2563eb' stroke-width='2.2'/>
<circle cx='90' cy='140' r='4' fill='none' stroke='#2563eb' stroke-width='2'/>
<line x1='90' y1='60' x2='150' y2='60' stroke='#2563eb' stroke-width='2.2'/>
<circle cx='90' cy='60' r='4' fill='#2563eb'/>
<line x1='90' y1='45' x2='90' y2='155' stroke='#334155' stroke-width='1.2' stroke-dasharray='3,3'/>
<text x='90' y='170' font-size='11' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>a</text>
<text x='240' y='18' font-size='12' fill='#1e293b' text-anchor='middle' font-weight='bold' font-family='Georgia, serif'>g(x) — jump, no limit</text>
<line x1='180' y1='60' x2='300' y2='60' stroke='#e2e8f0' stroke-width='1' stroke-dasharray='2,2'/>
<line x1='180' y1='140' x2='300' y2='140' stroke='#e2e8f0' stroke-width='1' stroke-dasharray='2,2'/>
<line x1='180' y1='60' x2='240' y2='60' stroke='#ea580c' stroke-width='2.2'/>
<circle cx='240' cy='60' r='4' fill='none' stroke='#ea580c' stroke-width='2'/>
<line x1='240' y1='140' x2='300' y2='140' stroke='#ea580c' stroke-width='2.2'/>
<circle cx='240' cy='140' r='4' fill='#ea580c'/>
<line x1='240' y1='45' x2='240' y2='155' stroke='#334155' stroke-width='1.2' stroke-dasharray='3,3'/>
<text x='240' y='170' font-size='11' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>a</text>
<text x='390' y='18' font-size='12' fill='#1e293b' text-anchor='middle' font-weight='bold' font-family='Georgia, serif'>f(x)+g(x) — continuous!</text>
<line x1='330' y1='100' x2='450' y2='100' stroke='#16a34a' stroke-width='2.6'/>
<circle cx='390' cy='100' r='4' fill='#16a34a'/>
<line x1='390' y1='45' x2='390' y2='155' stroke='#334155' stroke-width='1.2' stroke-dasharray='3,3'/>
<text x='390' y='170' font-size='11' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>a</text>
<text x='390' y='188' font-size='10.5' fill='#16a34a' text-anchor='middle' font-family='Georgia, serif'>= 0 everywhere, limit exists</text>
</svg>

</div>

**Example:** `f(x) = 1` for `x ≥ a`, `f(x) = −1` for `x < a` (jump, no limit at `a`). `g(x) = −1` for `x ≥ a`, `g(x) = 1` for `x < a` (the mirror-image jump, also no limit at `a`). Individually, neither has a limit at `a`. But `f(x) + g(x) = 0` for **every** `x` — a constant, continuous function — so `lim(x→a) [f(x)+g(x)] = 0` exists perfectly well.

**Takeaway / what to do instead:**

1. **Never assume** `lim[f+g]` fails just because `f` and `g` individually don't have limits at that point — the arithmetic theorem simply has nothing to say in that case, in either direction.
2. If `f` or `g` is piecewise, **combine the pieces algebraically first** (add/multiply the matching pieces on each side of `a`), and only then check whether the resulting combined expression is continuous or has matching one-sided limits.
3. Fall back on the **original definition** from §1 — compute the left-hand and right-hand limits of the *combined* expression directly, rather than trying to force the arithmetic shortcut where it doesn't apply.
