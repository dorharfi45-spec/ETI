# Simple Functions — Piecewise, Composition, and Trig Behavior

## 1. Piecewise functions

A **piecewise function** is just a function defined by **different formulas on different parts of the domain**. You pick which formula to use based on which interval `x` falls into.

```
       ⎧ x + 2      if x < −1
f(x) = ⎨ x²         if −1 ≤ x < 1
       ⎩ −x + 3     if x ≥ 1
```

A **closed circle** on the graph means that endpoint is included (`≤` or `≥`); an **open circle** means it's excluded (`<` or `>`) — always check which piece "owns" the boundary point.

<div align="center">

<svg viewBox='0 0 380 220' width='100%' style='max-width:380px' xmlns='http://www.w3.org/2000/svg'>
<rect x='1' y='1' width='378' height='218' rx='10' fill='#f8fafc' stroke='#e2e8f0'/>
<line x1='30' y1='150' x2='350' y2='150' stroke='#334155' stroke-width='1.4'/>
<line x1='150' y1='120' x2='150' y2='180' stroke='#e2e8f0' stroke-width='1.4' stroke-dasharray='3,3'/>
<line x1='230' y1='120' x2='230' y2='180' stroke='#e2e8f0' stroke-width='1.4' stroke-dasharray='3,3'/>
<text x='150' y='196' font-size='11.5' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>-1</text>
<text x='230' y='196' font-size='11.5' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>1</text>
<path d='M 70 60 L 150 105' fill='none' stroke='#2563eb' stroke-width='2.2'/>
<circle cx='150' cy='105' r='4.5' fill='none' stroke='#2563eb' stroke-width='2'/>
<path d='M 150 105 C 175 130 205 130 230 70' fill='none' stroke='#ea580c' stroke-width='2.2'/>
<circle cx='150' cy='105' r='4' fill='#ea580c'/>
<circle cx='230' cy='70' r='4.5' fill='none' stroke='#ea580c' stroke-width='2'/>
<path d='M 230 70 L 330 20' fill='none' stroke='#16a34a' stroke-width='2.2'/>
<circle cx='230' cy='70' r='4' fill='#16a34a'/>
<text x='75' y='50' font-size='11' fill='#2563eb' text-anchor='start' font-family='Georgia, serif'>x+2</text>
<text x='185' y='140' font-size='11' fill='#ea580c' text-anchor='middle' font-family='Georgia, serif'>x²</text>
<text x='280' y='30' font-size='11' fill='#16a34a' text-anchor='start' font-family='Georgia, serif'>-x+3</text>
</svg>

</div>

### Absolute value → turning it into a piecewise function

`|expression|` is really just a **compact way of writing a 2-piece function**, since absolute value strips the sign: it returns the expression itself when that's already non-negative, and flips its sign when it's negative.

`|f(x)| = { f(x) if f(x) ≥ 0 ;  −f(x) if f(x) < 0 }`

This is exactly the same sign-splitting idea used to *solve* absolute value equations/inequalities in [[Basic Algebra#Solving equations with absolute value|Basic Algebra]] — there you split into two **cases** to solve for `x`; here you split into two **formulas** to describe the function everywhere.

**Steps to convert:**

1. Find where the inside expression `f(x)` is `0` — that's your breakpoint(s).
2. On the interval(s) where `f(x) ≥ 0`, the piece is just `f(x)`.
3. On the interval(s) where `f(x) < 0`, the piece is `−f(x)`.

**Example:** `y = |x − 2|` → breakpoint at `x = 2`. → `y = { x−2 if x ≥ 2 ;  −(x−2) = 2−x if x < 2 }`.

<div align="center">

<svg viewBox='0 0 340 200' width='100%' style='max-width:340px' xmlns='http://www.w3.org/2000/svg'>
<rect x='1' y='1' width='338' height='198' rx='10' fill='#f8fafc' stroke='#e2e8f0'/>
<line x1='30' y1='170' x2='310' y2='170' stroke='#334155' stroke-width='1.4'/>
<path d='M 60 30 L 170 170' fill='none' stroke='#ea580c' stroke-width='2.2'/>
<path d='M 170 170 L 280 30' fill='none' stroke='#2563eb' stroke-width='2.2'/>
<circle cx='170' cy='170' r='4' fill='#1e293b'/>
<text x='170' y='188' font-size='11.5' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>x=2 (vertex)</text>
<text x='95' y='90' font-size='11.5' fill='#ea580c' text-anchor='middle' font-family='Georgia, serif' transform='rotate(-48 95 90)'>y=2-x  (x&lt;2)</text>
<text x='245' y='90' font-size='11.5' fill='#2563eb' text-anchor='middle' font-family='Georgia, serif' transform='rotate(48 245 90)'>y=x-2  (x≥2)</text>
</svg>

</div>

The graph is always a **V shape**: two straight rays meeting at the breakpoint, which is exactly what the two-piece formula predicts.

---

## 2. Function composition

`(f ∘ g)(x) = f(g(x))` means: first apply `g` to `x`, then feed that result into `f`.

<div align="center">

<svg viewBox='0 0 460 190' width='100%' style='max-width:460px' xmlns='http://www.w3.org/2000/svg'>
<rect x='1' y='1' width='458' height='188' rx='10' fill='#f8fafc' stroke='#e2e8f0'/>
<text x='50' y='55' font-size='14' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>x</text>
<path d='M 65 50 L 115 50' fill='none' stroke='#334155' stroke-width='1.6'/>
<path d='M 110 45 L 118 50 L 110 55' fill='none' stroke='#334155' stroke-width='1.4'/>
<rect x='120' y='25' width='80' height='50' rx='8' fill='none' stroke='#ea580c' stroke-width='2'/>
<text x='160' y='55' font-size='14' fill='#ea580c' text-anchor='middle' font-weight='bold' font-family='Georgia, serif'>g( )</text>
<path d='M 205 50 L 255 50' fill='none' stroke='#334155' stroke-width='1.6'/>
<path d='M 250 45 L 258 50 L 250 55' fill='none' stroke='#334155' stroke-width='1.4'/>
<text x='230' y='38' font-size='11.5' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>g(x)</text>
<rect x='260' y='25' width='80' height='50' rx='8' fill='none' stroke='#2563eb' stroke-width='2'/>
<text x='300' y='55' font-size='14' fill='#2563eb' text-anchor='middle' font-weight='bold' font-family='Georgia, serif'>f( )</text>
<path d='M 345 50 L 395 50' fill='none' stroke='#334155' stroke-width='1.6'/>
<path d='M 390 45 L 398 50 L 390 55' fill='none' stroke='#334155' stroke-width='1.4'/>
<text x='420' y='55' font-size='13' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>f(g(x))</text>
<rect x='30' y='110' width='170' height='50' rx='8' fill='none' stroke='#ea580c' stroke-width='1.4' stroke-dasharray='4,3'/>
<text x='115' y='130' font-size='11.5' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>x ∈ Dom(g)</text>
<text x='115' y='148' font-size='11' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>(g itself must be defined)</text>
<rect x='230' y='110' width='190' height='50' rx='8' fill='none' stroke='#2563eb' stroke-width='1.4' stroke-dasharray='4,3'/>
<text x='325' y='130' font-size='11.5' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>g(x) ∈ Dom(f)</text>
<text x='325' y='148' font-size='11' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>(the output must fit into f)</text>
<text x='230' y='182' font-size='12.5' fill='#16a34a' text-anchor='middle' font-weight='bold' font-family='Georgia, serif'>Dom(f∘g) = both conditions, AND</text>
</svg>

</div>

**How it affects the domain:** the domain of `f∘g` is **not** just the domain of `g`. A value `x` only works if **two** things both hold — the same AND-intersection logic from [[Basic Algebra#Quick reference — when to use "and" vs "or"|Basic Algebra's AND/OR reference]] and [[Precalc#Domain of definition — before you differentiate or integrate|Precalc's domain-of-definition section]]:

1. `x` itself has to be in `Dom(g)` (you need to be able to compute `g(x)` at all).
2. The **output** `g(x)` then has to land inside `Dom(f)` (you need to be able to feed that result into `f`).

**Example:** `f(x) = √x`, `g(x) = x − 3`. `Dom(g)` = all reals, so condition 1 is automatic. Condition 2 needs `g(x) ≥ 0`, i.e. `x − 3 ≥ 0` → `x ≥ 3`. So `Dom(f∘g) = [3, ∞)`, even though `g` alone was defined everywhere — composing with `f` shrank the domain.

---

## 3. Trigonometric functions — zeros, extrema, symmetry, and periodicity for any argument

### Zeros and extrema (plain `x`)

- `sin x = 0` at `x = πn`; `cos x = 0` at `x = π/2 + πn` — and per [[Trig base#2.5 Periodicity of sin, cos, and tan|Trig base §2.5]], at those very same `x = πn` points `cos x = ±1` (its extreme values), and at `x = π/2 + πn`, `sin x = ±1` — the zero of one always lines up with the extreme of the other.
- `sin` and `cos` **max out at `1`** and **bottom out at `−1`** — their range is always `[−1, 1]`.
- `tan x = 0` at `x = πn`, but `tan` has **no maximum or minimum** — it shoots off to `±∞` near its asymptotes (`cos x = 0`), so its range is all real numbers.

### Symmetry

`sin` is **odd** (`sin(−x) = −sin x`, symmetric about the origin); `cos` is **even** (`cos(−x) = cos x`, symmetric about the y-axis); `tan` is **odd** — see the Even/odd identities in [[Trig base#2.1 Identities|Trig base §2.1]].

### When the argument is an expression `g(x)`, not just `x`

Every rule above still applies — just replace `x` with `g(x)` everywhere, and solve for `x` afterward using the general-solution method from [[Trig base#2.6 Solving trig equations|Trig base §2.6]]:

- **Zeros:** solve `sin(g(x)) = 0` (i.e. `g(x) = πn`), or `cos(g(x)) = 0` (`g(x) = π/2 + πn`), then isolate `x`.
- **Max/min:** `sin(g(x))` and `cos(g(x))` still max at `1` and min at `−1` — those extremes happen wherever `g(x)` hits the values that make the *plain* function max/min (e.g. `g(x) = π/2 + 2πn` for `sin(g(x))` to peak).
- **Periodicity:** if `g(x) = bx + c` (linear), the whole function's period shrinks to `(original period)/|b|` — exactly the scaling shown in the worked example in [[Trig base#2.6 Solving trig equations|Trig base §2.6]].

### How wrapping a trig expression in a bigger function changes things

For a function of the form `F(x) = A · trig(g(x)) + k` (amplitude `A`, vertical shift `k`, inner argument `g(x)`):

- **Amplitude `A`** stretches the max/min: for `sin`/`cos`, the range becomes `[k − |A|, k + |A|]` — max `= k + |A|`, min `= k − |A|` (`tan` still has no max/min, no matter what `A` and `k` are).
- **Vertical shift `k`** moves the max/min values but also changes what counts as a "zero" — instead of solving `trig(g(x)) = 0`, you now need `trig(g(x)) = −k/A`, using the same general-solution technique from §2.6.
- **Inner argument `g(x)`** shifts and scales *where* the zeros/extrema happen and rescales the period, exactly as described above.

<div align="center">

<svg viewBox='0 0 460 260' width='100%' style='max-width:460px' xmlns='http://www.w3.org/2000/svg'>
<rect x='1' y='1' width='458' height='258' rx='10' fill='#f8fafc' stroke='#e2e8f0'/>
<text x='230' y='18' font-size='12' fill='#1e293b' text-anchor='middle' font-weight='bold' font-family='Georgia, serif'>F(x) = 3·sin(2x − π/4) + 1</text>
<line x1='30' y1='70' x2='430' y2='70' stroke='#2563eb' stroke-width='1.4' stroke-dasharray='4,3'/>
<text x='24' y='74' font-size='11' fill='#2563eb' text-anchor='end' font-family='Georgia, serif'>max=4</text>
<line x1='30' y1='130' x2='430' y2='130' stroke='#16a34a' stroke-width='1.4' stroke-dasharray='4,3'/>
<text x='24' y='134' font-size='11' fill='#16a34a' text-anchor='end' font-family='Georgia, serif'>k=1</text>
<line x1='30' y1='150' x2='430' y2='150' stroke='#334155' stroke-width='1.2'/>
<line x1='30' y1='190' x2='430' y2='190' stroke='#ea580c' stroke-width='1.4' stroke-dasharray='4,3'/>
<text x='24' y='194' font-size='11' fill='#ea580c' text-anchor='end' font-family='Georgia, serif'>min=-2</text>
<path d='M 40 130 C 60 130 80 70 100 70 C 120 70 140 130 160 130 C 180 130 200 190 220 190 C 240 190 260 130 280 130 C 300 130 320 70 340 70 C 360 70 380 130 400 130' fill='none' stroke='#7c3aed' stroke-width='2.4'/>
<circle cx='183' cy='150' r='4' fill='#1e293b'/>
<text x='190' y='168' font-size='10.5' fill='#1e293b' text-anchor='start' font-family='Georgia, serif'>a zero: sin(2x-π/4) = -1/3</text>
<line x1='100' y1='215' x2='340' y2='215' stroke='#334155' stroke-width='1.4'/>
<path d='M 105 210 L 98 215 L 105 220' fill='none' stroke='#334155' stroke-width='1.2'/>
<path d='M 335 210 L 342 215 L 335 220' fill='none' stroke='#334155' stroke-width='1.2'/>
<text x='220' y='235' font-size='12' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>period = π  (= 2π/2, from the coefficient 2)</text>
</svg>

</div>
