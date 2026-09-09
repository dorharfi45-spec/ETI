# Precalculus — Derivatives & Integrals Reference

*This note builds on [[Basic Algebra#2. Dividing by an expression whose sign you don't know (e.g. dividing by `x`)|Basic Algebra]] (sign charts / inequality reasoning), [[Powers and Logs base#1. Rules of powers|Powers and Logs base]] (exponent & log rules, fractional exponents), and [[Trig base#2.1 Identities|Trig base]] (trig identities, [[Trig base#2.2 The unit circle — full explanation|unit circle]]). Rather than re-deriving those rules here, this note links back to the specific sections and focuses on what's new: derivatives and integrals.*

## Domain of definition — before you differentiate or integrate

Before doing anything else with a function, check what `x`-values are actually allowed. Scan the expression for each "risky" form below, write down the condition it forces, then **intersect (AND)** every condition together — the same AND-logic used throughout [[Basic Algebra#Quick reference — when to use "and" vs "or"|Basic Algebra's AND/OR reference]].

| Form                        | →   | Domain requirement                             |
| --------------------------- | --- | ---------------------------------------------- |
| `1/f(x)` (denominator)      | →   | `f(x) ≠ 0`                                     |
| `x⁻ⁿ` (negative exponent)   | →   | `x ≠ 0`                                        |
| `√f(x)`,  `ⁿ√f(x)` (n even) | →   | `f(x) ≥ 0`                                     |
| `x^(1/n)` (n even)          | →   | `x ≥ 0`                                        |
| `a > 0`                     | →   | `aˣ > 0`  (always — never `0`, never negative) |
| `log_b(a)`                  | →   | `a > 0`  **and**  `b > 0, b ≠ 1`               |
| `tan(f(x))`                 | →   | `cos(f(x)) ≠ 0`                                |

**Where each rule comes from** *(so nothing gets re-derived twice):*

- Roots and fractional powers — [[Basic Algebra#3. Square roots in inequalities|Basic Algebra §3]] and [[Powers and Logs base#1. Rules of powers|Powers and Logs base §1]].
- `aˣ` always positive — [[Powers and Logs base#3. Solving power equations — substitution (placing `aˣ` in the equation)|Powers and Logs base's substitution section]] (this is why `t = aˣ` always rejects `t ≤ 0`).
- Logs (`b ≠ 1` — a base of `1` could never be one-to-one/invertible) — [[Powers and Logs base#Steps to solve `log_a(b) = c`|Powers and Logs base]].
- `tan` — [[Trig base#2.2 The unit circle — full explanation|Trig base's unit circle section]].

<div align="center">

<svg viewBox='0 0 460 190' width='100%' style='max-width:460px' xmlns='http://www.w3.org/2000/svg'>
<rect x='1' y='1' width='458' height='188' rx='10' fill='#f8fafc' stroke='#e2e8f0'/>
<text x='230' y='18' font-size='12' fill='#1e293b' text-anchor='middle' font-weight='bold' font-family='Georgia, serif'>f(x) = ln(x−1) / √(5−x)   -&gt;   intersect every condition (AND)</text>
<line x1='40' y1='45' x2='420' y2='45' stroke='#334155' stroke-width='1.4'/>
<circle cx='150' cy='45' r='4' fill='#2563eb'/>
<line x1='150' y1='45' x2='420' y2='45' stroke='#2563eb' stroke-width='3.5'/>
<text x='36' y='49' font-size='10.5' fill='#2563eb' text-anchor='end' font-family='Georgia, serif'>log: x&gt;1</text>
<line x1='40' y1='85' x2='420' y2='85' stroke='#334155' stroke-width='1.4'/>
<circle cx='330' cy='85' r='4' fill='none' stroke='#ea580c' stroke-width='2'/>
<line x1='40' y1='85' x2='328' y2='85' stroke='#ea580c' stroke-width='3.5'/>
<text x='424' y='89' font-size='10.5' fill='#ea580c' text-anchor='start' font-family='Georgia, serif'>sqrt in denom: x&lt;5</text>
<line x1='40' y1='140' x2='420' y2='140' stroke='#334155' stroke-width='1.4'/>
<circle cx='150' cy='140' r='4' fill='#16a34a'/>
<circle cx='330' cy='140' r='4' fill='none' stroke='#16a34a' stroke-width='2'/>
<line x1='150' y1='140' x2='328' y2='140' stroke='#16a34a' stroke-width='4.5'/>
<text x='150' y='160' font-size='11' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>1</text>
<text x='330' y='160' font-size='11' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>5</text>
<text x='230' y='178' font-size='12' fill='#16a34a' text-anchor='middle' font-weight='bold' font-family='Georgia, serif'>final domain: 1 &lt; x &lt; 5</text>
</svg>

</div>

**Note the strict inequality on the square-root condition here:** because `√(5−x)` sits in a **denominator**, it can't just be `≥ 0` (as it could if it stood alone) — it must be `> 0`, since a zero denominator is also forbidden. Always combine the "risky piece" rule with anything else going on around it.

## 1. Derivatives

### 1.1 What a derivative means

The derivative `f'(x)` is the **instantaneous rate of change** of `f` at `x` — geometrically, the **slope of the tangent line** to the graph of `f` at that point.

**Limit definition:** `f'(x) = lim(h→0) [f(x+h) − f(x)] / h` — the slope of the line through two points on the curve, as those two points get infinitely close together (the secant line collapses into the tangent line).

<div align="center">

<svg viewBox='0 0 380 240' width='100%' style='max-width:380px' xmlns='http://www.w3.org/2000/svg'>
<rect x='1' y='1' width='378' height='238' rx='10' fill='#f8fafc' stroke='#e2e8f0'/>
<text x='190' y='20' font-size='12' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>derivative = slope of the tangent line</text>
<path d='M 40 200 C 120 120 160 80 220 65 C 260 55 300 48 340 40' fill='none' stroke='#334155' stroke-width='2'/>
<line x1='130' y1='100' x2='300' y2='41' stroke='#2563eb' stroke-width='1.8'/>
<line x1='100' y1='120' x2='230' y2='55' stroke='#16a34a' stroke-width='1.8'/>
<circle cx='160' cy='90' r='4' fill='#1e293b'/>
<circle cx='260' cy='55' r='4' fill='#1e293b'/>
<text x='150' y='108' font-size='11.5' fill='#1e293b' text-anchor='end' font-family='Georgia, serif'>(x, f(x))</text>
<text x='270' y='48' font-size='11.5' fill='#1e293b' text-anchor='start' font-family='Georgia, serif'>(x+h, f(x+h))</text>
<text x='302' y='38' font-size='11' fill='#2563eb' text-anchor='start' font-family='Georgia, serif'>secant</text>
<text x='95' y='128' font-size='11' fill='#16a34a' text-anchor='end' font-family='Georgia, serif'>tangent at P</text>
<text x='190' y='225' font-size='11' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>as h -&gt; 0, Q slides to P: secant -&gt; tangent, slope -&gt; f'(x)</text>
</svg>

</div>

### 1.2 Basic differentiation techniques

**Polynomials — power rule:**

- `d/dx[xⁿ] = n·xⁿ⁻¹`
- `d/dx[constant] = 0`
- `d/dx[c·f(x)] = c·f'(x)` (constant multiple)
- `d/dx[f(x) ± g(x)] = f'(x) ± g'(x)` (sum/difference)

**Multiplication — product rule:**

`d/dx[f(x)·g(x)] = f'(x)g(x) + f(x)g'(x)`

**Division — quotient rule:**

`d/dx[f(x)/g(x)] = [f'(x)g(x) − f(x)g'(x)] / [g(x)]²`

**Square roots:**

A root is just a fractional power (see [[Powers and Logs base#1. Rules of powers|Powers and Logs base]] for the conversion rule) — convert first, then apply the power rule: `√x = x^(1/2)` → `d/dx[√x] = (1/2)x^(−1/2) = 1/(2√x)`. More generally, `d/dx[ⁿ√x] = d/dx[x^(1/n)] = (1/n)x^(1/n − 1)`.

**Chain rule — when the argument is an expression in `x`, not just `x`:**

If `y = f(g(x))` (an "outer" function applied to an "inner" expression), then `dy/dx = f'(g(x)) · g'(x)` — differentiate the outer function (leaving the inner expression untouched inside it), then multiply by the derivative of the inner expression.

<div align="center">

<svg viewBox='0 0 420 210' width='100%' style='max-width:420px' xmlns='http://www.w3.org/2000/svg'>
<rect x='1' y='1' width='418' height='208' rx='10' fill='#f8fafc' stroke='#e2e8f0'/>
<rect x='40' y='40' width='260' height='130' rx='10' fill='none' stroke='#2563eb' stroke-width='2'/>
<text x='170' y='60' font-size='13' fill='#2563eb' text-anchor='middle' font-weight='bold' font-family='Georgia, serif'>outer function f( )</text>
<rect x='90' y='85' width='160' height='60' rx='8' fill='none' stroke='#ea580c' stroke-width='2'/>
<text x='170' y='120' font-size='13' fill='#ea580c' text-anchor='middle' font-weight='bold' font-family='Georgia, serif'>inner: g(x)</text>
<text x='170' y='190' font-size='13' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>d/dx[f(g(x))] = f'(g(x)) · g'(x)</text>
<text x='310' y='50' font-size='11' fill='#2563eb' text-anchor='start' font-family='Georgia, serif'>differentiate f,</text>
<text x='310' y='63' font-size='11' fill='#2563eb' text-anchor='start' font-family='Georgia, serif'>keep g(x) inside</text>
<text x='310' y='102' font-size='11' fill='#ea580c' text-anchor='start' font-family='Georgia, serif'>then × g'(x)</text>
<text x='310' y='115' font-size='11' fill='#ea580c' text-anchor='start' font-family='Georgia, serif'>(derivative of inside)</text>
</svg>

</div>

**Examples:** `d/dx[(3x²+1)⁵] = 5(3x²+1)⁴ · 6x = 30x(3x²+1)⁴`.  `d/dx[√(x²+1)] = 1/(2√(x²+1)) · 2x = x/√(x²+1)`.

### 1.3 Finding where a function is increasing or decreasing

`f` is **increasing** where `f'(x) > 0`, **decreasing** where `f'(x) < 0`. The boundary points (**critical points**) are where `f'(x) = 0` or `f'(x)` is undefined.

1. Find `f'(x)`.
2. Solve `f'(x) = 0` for the critical points (and note any points where `f'(x)` is undefined).
3. Build a **sign chart** of `f'(x)` using the critical points as boundaries — the same case-by-case sign-analysis idea used for solving inequalities in [[Basic Algebra#2. Dividing by an expression whose sign you don't know (e.g. dividing by `x`)|Basic Algebra]].
4. On each interval, check the sign of `f'(x)`: positive → `f` increasing there; negative → `f` decreasing there.

<div align="center">

<svg viewBox='0 0 460 190' width='100%' style='max-width:460px' xmlns='http://www.w3.org/2000/svg'>
<rect x='1' y='1' width='458' height='188' rx='10' fill='#f8fafc' stroke='#e2e8f0'/>
<text x='230' y='20' font-size='12.5' fill='#1e293b' text-anchor='middle' font-weight='bold' font-family='Georgia, serif'>sign of f'(x) -&gt; where f is increasing / decreasing</text>
<line x1='30' y1='90' x2='430' y2='90' stroke='#334155' stroke-width='1.6'/>
<path d='M 425 85 L 432 90 L 425 95' fill='none' stroke='#334155' stroke-width='1.4'/>
<line x1='170' y1='84' x2='170' y2='96' stroke='#334155' stroke-width='1.6'/>
<line x1='310' y1='84' x2='310' y2='96' stroke='#334155' stroke-width='1.6'/>
<text x='170' y='112' font-size='12' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>c₁</text>
<text x='310' y='112' font-size='12' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>c₂</text>
<text x='95' y='70' font-size='13' fill='#16a34a' text-anchor='middle' font-family='Georgia, serif'>f' &gt; 0</text>
<text x='95' y='140' font-size='16' fill='#16a34a' text-anchor='middle' font-family='Georgia, serif'>↗ increasing</text>
<text x='240' y='70' font-size='13' fill='#ea580c' text-anchor='middle' font-family='Georgia, serif'>f' &lt; 0</text>
<text x='240' y='140' font-size='16' fill='#ea580c' text-anchor='middle' font-family='Georgia, serif'>↘ decreasing</text>
<text x='370' y='70' font-size='13' fill='#16a34a' text-anchor='middle' font-family='Georgia, serif'>f' &gt; 0</text>
<text x='370' y='140' font-size='16' fill='#16a34a' text-anchor='middle' font-family='Georgia, serif'>↗ increasing</text>
<text x='230' y='165' font-size='11.5' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>c₁, c₂ = critical points where f'(x) = 0</text>
</svg>

</div>

---

## 2. Integrals

### 2.1 What an integral means

Integration **reverses** differentiation: if `F'(x) = f(x)`, then `F` is an **antiderivative** of `f`, written `∫f(x)dx = F(x) + C`. The **definite integral** `∫[a,b] f(x)dx` represents the **signed area** between the curve and the x-axis from `x=a` to `x=b`.

**Fundamental Theorem of Calculus:** `∫[a,b] f(x)dx = F(b) − F(a)`, for any antiderivative `F` of `f`.

### 2.2 Finding the area under a curve between two points

1. Find an antiderivative `F(x)` of `f(x)`.
2. Compute `F(b) − F(a)` for the interval `[a, b]`. That's the value of the definite integral.

### 2.3 When part of the area is negative

The definite integral gives **signed** area: the region **above** the x-axis counts positive, the region **below** counts negative. If `f(x)` dips below the axis somewhere in `[a,b]`, that portion **subtracts** from the total instead of adding to it.

To find the actual **geometric** area (all regions counted positively):

1. Find where `f(x) = 0` inside `[a,b]` — these x-intercepts split the interval into pieces where `f` keeps a constant sign.
2. Integrate each piece separately.
3. **Take the absolute value** of any piece that comes out negative.
4. Sum all the (now all-positive) pieces: `total area = Σ |∫ over each sub-interval|`.

<div align="center">

<svg viewBox='0 0 460 220' width='100%' style='max-width:460px' xmlns='http://www.w3.org/2000/svg'>
<rect x='1' y='1' width='458' height='218' rx='10' fill='#f8fafc' stroke='#e2e8f0'/>
<text x='230' y='16' font-size='11.5' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>∫[a,b] f(x)dx = (blue area) − (orange area) — signed, not geometric</text>
<line x1='30' y1='120' x2='430' y2='120' stroke='#334155' stroke-width='1.6'/>
<path d='M 425 115 L 432 120 L 425 125' fill='none' stroke='#334155' stroke-width='1.4'/>
<path d='M 60 120 C 100 40 160 30 210 60 C 240 80 250 120 260 120 C 300 120 330 180 360 190 C 385 197 405 170 420 130' fill='none' stroke='#334155' stroke-width='2.2'/>
<path d='M 60 120 C 100 40 160 30 210 60 C 240 80 250 120 260 120 Z' fill='#2563eb' fill-opacity='0.25' stroke='none'/>
<path d='M 260 120 C 300 120 330 180 360 190 C 385 197 405 170 420 130 L 420 120 L 260 120 Z' fill='#ea580c' fill-opacity='0.25' stroke='none'/>
<line x1='60' y1='15' x2='60' y2='210' stroke='#e2e8f0' stroke-width='1.4' stroke-dasharray='3,3'/>
<line x1='420' y1='15' x2='420' y2='210' stroke='#e2e8f0' stroke-width='1.4' stroke-dasharray='3,3'/>
<line x1='260' y1='15' x2='260' y2='210' stroke='#334155' stroke-width='1.2' stroke-dasharray='3,3'/>
<text x='60' y='204' font-size='12' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>a</text>
<text x='260' y='140' font-size='12' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>c</text>
<text x='420' y='204' font-size='12' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>b</text>
<text x='140' y='95' font-size='12.5' fill='#2563eb' text-anchor='middle' font-family='Georgia, serif'>+ (counts positive)</text>
<text x='340' y='165' font-size='12.5' fill='#ea580c' text-anchor='middle' font-family='Georgia, serif'>− (counts negative)</text>
</svg>

</div>

### 2.4 u-substitution — "placing `t`" for a non-linear expression to a power

Use this when integrating something like `∫(non-linear expression)ⁿ · (leftover stuff) dx`, where the leftover stuff relates to the derivative of the inner expression.

1. Let `t` = the inner, non-linear expression.
2. Differentiate: `dt/dx = (derivative of the inner expression)` → `dt = (that derivative) dx` → **isolate `dx`**: `dx = dt / (derivative expression)`.
3. Substitute both `t` and `dx` (in terms of `dt`) into the integral, so everything is now written in terms of `t`.
4. **Integrate with respect to `t`** (usually a plain power-rule integral now).
5. Substitute back `t = (original inner expression)` to return the answer in terms of `x`. *(For a definite integral, you can instead convert the bounds to `t`-values and skip the back-substitution — just be consistent.)*

**Example:** `∫2x(x²+1)⁴ dx`. Let `t = x²+1` → `dt = 2x dx`. The integral becomes `∫t⁴ dt = t⁵/5 + C = (x²+1)⁵/5 + C`.

**Shortcut — recognizing the pattern without full substitution:** if the "outside" factor is exactly (or a constant multiple of) the derivative of the "inside" expression that's raised to a power, you can skip the formal substitution and just **reverse the chain rule** directly:

`∫ g'(x) · [g(x)]ⁿ dx = [g(x)]ⁿ⁺¹ / (n+1) + C`

This is the direct mirror of the chain rule from §1.2 — you're "undoing" it, so as long as the leftover factor outside the bracket matches `g'(x)` (up to a constant you can adjust for), you just raise the inside to the next power and divide by that new power, without introducing `t` at all.

<div align="center">

<svg viewBox='0 0 460 200' width='100%' style='max-width:460px' xmlns='http://www.w3.org/2000/svg'>
<rect x='1' y='1' width='458' height='198' rx='10' fill='#f8fafc' stroke='#e2e8f0'/>
<line x1='230' y1='15' x2='230' y2='185' stroke='#e2e8f0' stroke-width='1.5'/>
<text x='115' y='30' font-size='13' fill='#2563eb' text-anchor='middle' font-weight='bold' font-family='Georgia, serif'>Differentiate (chain rule)</text>
<text x='115' y='90' font-size='13' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>d/dx [g(x)]ⁿ⁺¹</text>
<text x='115' y='115' font-size='16' fill='#2563eb' text-anchor='middle' font-family='Georgia, serif'>↓</text>
<text x='115' y='140' font-size='13' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>(n+1)[g(x)]ⁿ · g'(x)</text>
<text x='345' y='30' font-size='13' fill='#ea580c' text-anchor='middle' font-weight='bold' font-family='Georgia, serif'>Integrate (reverse chain rule)</text>
<text x='345' y='90' font-size='13' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>∫ g'(x)·[g(x)]ⁿ dx</text>
<text x='345' y='115' font-size='16' fill='#ea580c' text-anchor='middle' font-family='Georgia, serif'>↓</text>
<text x='345' y='140' font-size='13' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>[g(x)]ⁿ⁺¹/(n+1) + C</text>
<text x='230' y='175' font-size='12' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>these two operations undo each other</text>
</svg>

</div>

**Same example, shortcut version:** `∫2x(x²+1)⁴ dx` — inside `g(x) = x²+1`, `g'(x) = 2x`, exactly the outside factor → answer directly: `(x²+1)⁵/5 + C`.

---

## 3. Trigonometric derivatives and integrals

*(Relies on the [[Trig base#2.1 Identities|identities]], [[Trig base#2.2 The unit circle — full explanation|unit circle]], and [[Trig base#2.5 Periodicity of sin, cos, and tan|periodicity]] from Trig base — e.g. `tan x = sin x / cos x` combined with the quotient rule from §1.2 gives the `tan x` derivative below.)*

**Derivatives (plain `x`):**

- `d/dx[sin x] = cos x`
- `d/dx[cos x] = −sin x`
- `d/dx[tan x] = 1/cos²x`  (= `sec²x`)

**When the argument is an expression in `x`, not just `x`** — apply the chain rule from §1.2:

- `d/dx[sin(g(x))] = cos(g(x)) · g'(x)`
- `d/dx[cos(g(x))] = −sin(g(x)) · g'(x)`
- `d/dx[tan(g(x))] = g'(x) / cos²(g(x))`

**Example:** `d/dx[sin(3x²)] = cos(3x²) · 6x = 6x·cos(3x²)`.

**Integrals (antiderivatives):**

- `∫sin x dx = −cos x + C`
- `∫cos x dx = sin x + C`
- `∫1/cos²x dx = tan x + C`

For an inner expression `g(x)`, the same reverse-chain-rule / u-substitution idea from §2.4 applies: `∫g'(x)·cos(g(x))dx = sin(g(x)) + C`, and similarly for the other two.

---

## 4. Exponential and logarithmic derivatives

*(Relies on the [[Powers and Logs base#1. Rules of powers|exponent rules]] and [[Powers and Logs base#1. Definition, rules, and identities|log rules and identities]] in Powers and Logs base.)*

**Derivatives (plain `x`):**

- `d/dx[eˣ] = eˣ`  — `e` raised to `x` is its own derivative (this is the defining property of `e`, see below).
- `d/dx[aˣ] = aˣ · ln(a)`  (general base `a > 0`)
- `d/dx[ln x] = 1/x`  (`x > 0`)
- `d/dx[log_a(x)] = 1/(x · ln a)`

**Chain rule versions** (argument is an expression `g(x)`):

- `d/dx[e^(g(x))] = e^(g(x)) · g'(x)`
- `d/dx[a^(g(x))] = a^(g(x)) · ln(a) · g'(x)`
- `d/dx[ln(g(x))] = g'(x) / g(x)`
- `d/dx[log_a(g(x))] = g'(x) / (g(x) · ln a)`

**The formula for `e`:**

`e = lim(n→∞) (1 + 1/n)ⁿ ≈ 2.71828...`  (equivalently `e = lim(h→0) (1+h)^(1/h)`). This is the unique base for which the tangent to `y = aˣ` at `x = 0` has slope exactly `1` — which is exactly why `eˣ` ends up being its own derivative.

**Corresponding integrals:**

- `∫eˣ dx = eˣ + C`
- `∫aˣ dx = aˣ/ln(a) + C`
- `∫(1/x) dx = ln|x| + C` — the **absolute value** is needed for the same domain reason covered in the [[Powers and Logs base#Absolute value inside logs — `log_a(x²)`|log_a(x²) discussion]]: `1/x` is defined for all `x ≠ 0`, including negative `x`, but `ln(x)` alone is only defined for `x > 0`. `ln|x|` matches the full domain, and differentiating it returns `1/x` for every `x ≠ 0`.
