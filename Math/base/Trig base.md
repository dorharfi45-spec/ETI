        # Trigonometry — High School Reference

*Right-triangle definitions, the Law of Sines/Cosines, and the sine-based area formulas moved to [[Geometry base#7. Trigonometric geometry|Geometry base §7 (Trigonometric geometry)]] — this note now focuses on trig equations, the unit circle, and identities.*

## 2. Trigonometric equations

### 2.1 Identities

- **Pythagorean:** `sin²θ + cos²θ = 1`,  `1 + tan²θ = sec²θ`,  `1 + cot²θ = csc²θ`
- **Quotient:** `tan θ = sin θ / cos θ`,  `cot θ = cos θ / sin θ = 1/tan θ`
- **Reciprocal:** `csc θ = 1/sin θ`,  `sec θ = 1/cos θ`,  `cot θ = 1/tan θ`
- **Sum/difference:**
  - `sin(A ± B) = sin A cos B ± cos A sin B`
  - `cos(A ± B) = cos A cos B ∓ sin A sin B`
  - `tan(A ± B) = (tan A ± tan B) / (1 ∓ tan A tan B)`
- **Double angle:**
  - `sin 2θ = 2 sin θ cos θ`
  - `cos 2θ = cos²θ − sin²θ = 2cos²θ − 1 = 1 − 2sin²θ`
  - `tan 2θ = 2tan θ / (1 − tan²θ)`
- **Half angle:** `sin²(θ/2) = (1 − cos θ)/2`,  `cos²(θ/2) = (1 + cos θ)/2`
- **Co-function:** `sin(90° − θ) = cos θ`,  `cos(90° − θ) = sin θ`
- **Even/odd:** `sin(−θ) = −sin θ` (odd), `cos(−θ) = cos θ` (even), `tan(−θ) = −tan θ` (odd)

### 2.2 The unit circle — full explanation

The unit circle is a circle of **radius 1** centered at the origin. For an angle `θ` measured **counter-clockwise** from the positive x-axis, the terminal side meets the circle at the point `(cos θ, sin θ)`. So by definition: `cos θ` is the **x-coordinate**, `sin θ` is the **y-coordinate**, and `tan θ = sin θ / cos θ` is undefined wherever `cos θ = 0` (i.e. at `θ = 90°, 270°, ...`).

**Quadrant signs** (mnemonic "All Students Take Calculus", going I → II → III → IV): in QI all three are positive; in QII only `sin` is positive; in QIII only `tan` is positive; in QIV only `cos` is positive.

**Reference angle:** the acute angle between the terminal side and the x-axis — used to read off exact values in any quadrant from the first-quadrant values, adjusting only the sign.

**Where `tan θ` sits on the circle:** draw the vertical **tangent line** to the circle at the point `(1, 0)`. Extend the radius line for `θ` outward until it crosses that vertical line — the length of the segment from `(1,0)` up (or down) to that crossing point is exactly `tan θ`. This is literally where the name "tangent" comes from.

**Interactive:** drag the purple point around the circle, or the green point along the tangent line, to see `cos θ`, `sin θ`, and `tan θ` update live.

```html-embed
Files/unit-circle-interactive.html
520
```

**Exact values table:**

| θ | 0° | 30° | 45° | 60° | 90° |
|---|---|---|---|---|---|
| sin θ | 0 | 1/2 | √2/2 | √3/2 | 1 |
| cos θ | 1 | √3/2 | √2/2 | 1/2 | 0 |
| tan θ | 0 | √3/3 | 1 | √3 | undefined |

### 2.3 Radians — explanation and conversion

A **radian** is the angle for which the arc length it cuts off equals the radius (`arc length = r`). A full circle is `360° = 2π radians`.

- **Degrees → radians:** multiply by `π/180`.
- **Radians → degrees:** multiply by `180/π`.

| Degrees | 0° | 30° | 45° | 60° | 90° | 180° | 270° | 360° |
|---|---|---|---|---|---|---|---|---|
| Radians | 0 | π/6 | π/4 | π/3 | π/2 | π | 3π/2 | 2π |

<div align="center">

<svg viewBox='0 0 340 340' width='100%' style='max-width:340px' xmlns='http://www.w3.org/2000/svg'>
<rect x='1' y='1' width='338' height='338' rx='10' fill='#f8fafc' stroke='#e2e8f0'/>
<circle cx='170' cy='170' r='120' stroke='#334155' stroke-width='2' fill='none'/>
<line x1='170' y1='170' x2='290' y2='170' stroke='#334155' stroke-width='1.6'/>
<line x1='170' y1='170' x2='234.9' y2='69.0' stroke='#2563eb' stroke-width='2.4'/>
<path d='M 290 170 A 120 120 0 0 0 234.9 69.0' fill='none' stroke='#2563eb' stroke-width='3'/>
<text x='270' y='110' font-size='12' fill='#2563eb' text-anchor='middle' font-family='Georgia, serif'>arc = r</text>
<text x='196' y='140' font-size='12' fill='#2563eb' text-anchor='middle' font-family='Georgia, serif'>θ = 1 rad</text>
<text x='300' y='174' font-size='12' fill='#1e293b' text-anchor='start' font-family='Georgia, serif'>0° / 0</text>
<text x='170' y='40' font-size='12' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>90° / π/2</text>
<text x='40' y='174' font-size='12' fill='#1e293b' text-anchor='end' font-family='Georgia, serif'>180° / π</text>
<text x='170' y='310' font-size='12' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>270° / 3π/2</text>
</svg>

</div>

### 2.4 Inverse trig functions — arcsin, arccos, arctan

`sin`, `cos`, and `tan` are **not one-to-one** over all real numbers — infinitely many angles share the same sine/cosine/tangent value. To build an inverse, each function must first be **restricted to an interval where it's monotonic** (one-to-one), so every possible output is hit exactly once. `arcsin`, `arccos`, `arctan` (also written `sin⁻¹, cos⁻¹, tan⁻¹`) are exactly these restricted inverses — each one returns a single **principal value**, not every angle that shares that ratio.

| Function | Domain | Range (principal values) |
|---|---|---|
| `arcsin(k)` | `k ∈ [−1, 1]` | `[−π/2, π/2]` (right half of the circle) |
| `arccos(k)` | `k ∈ [−1, 1]` | `[0, π]` (top half of the circle) |
| `arctan(k)` | `k ∈ ℝ` (all reals) | `(−π/2, π/2)` — **open** interval, since `tan` is undefined at `±π/2` |

<div align="center">

<svg viewBox='0 0 460 220' width='100%' style='max-width:460px' xmlns='http://www.w3.org/2000/svg'>
<rect x='1' y='1' width='458' height='218' rx='10' fill='#f8fafc' stroke='#e2e8f0'/>
<circle cx='100' cy='100' r='70' stroke='#e2e8f0' stroke-width='2' fill='none'/>
<line x1='30' y1='100' x2='170' y2='100' stroke='#e2e8f0' stroke-width='1.4'/>
<line x1='100' y1='30' x2='100' y2='170' stroke='#e2e8f0' stroke-width='1.4'/>
<path d='M 100 170 A 70 70 0 0 1 170 100 A 70 70 0 0 1 100 30' fill='none' stroke='#2563eb' stroke-width='3.5'/>
<circle cx='100' cy='170' r='3.5' fill='#2563eb'/>
<circle cx='100' cy='30' r='3.5' fill='#2563eb'/>
<text x='100' y='196' font-size='12.5' fill='#1e293b' text-anchor='middle' font-weight='bold' font-family='Georgia, serif'>arcsin range</text>
<text x='100' y='212' font-size='11' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>[-π/2, π/2]  (right half)</text>
<circle cx='300' cy='100' r='70' stroke='#e2e8f0' stroke-width='2' fill='none'/>
<line x1='230' y1='100' x2='370' y2='100' stroke='#e2e8f0' stroke-width='1.4'/>
<line x1='300' y1='30' x2='300' y2='170' stroke='#e2e8f0' stroke-width='1.4'/>
<path d='M 370 100 A 70 70 0 0 1 300 30 A 70 70 0 0 1 230 100' fill='none' stroke='#ea580c' stroke-width='3.5'/>
<circle cx='370' cy='100' r='3.5' fill='#ea580c'/>
<circle cx='230' cy='100' r='3.5' fill='#ea580c'/>
<text x='300' y='196' font-size='12.5' fill='#1e293b' text-anchor='middle' font-weight='bold' font-family='Georgia, serif'>arccos range</text>
<text x='300' y='212' font-size='11' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>[0, π]  (top half)</text>
</svg>

</div>

`arctan` uses the **same right half** as `arcsin`, but the top/bottom endpoints themselves are excluded (open circles, not filled), since `tan(±π/2)` doesn't exist.

Because each arc-function only ever hands back **one** representative angle, they don't by themselves give every solution to an equation like `sin x = k` — that's exactly why solving such equations (below) needs the extra `+2πn` and the second "mirrored" branch: `arcsin`/`arccos`/`arctan` locate the first representative, and periodicity plus symmetry generate the rest.

### 2.5 Periodicity of sin, cos, and tan

- `sin` and `cos` repeat every `2π` (`360°`): `sin(θ + 2πn) = sin θ`,  `cos(θ + 2πn) = cos θ`, for any integer `n`.
- `tan` repeats every `π` (`180°`): `tan(θ + πn) = tan θ`.

<div align="center">

<svg viewBox='0 0 460 210' width='100%' style='max-width:460px' xmlns='http://www.w3.org/2000/svg'>
<rect x='1' y='1' width='458' height='208' rx='10' fill='#f8fafc' stroke='#e2e8f0'/>
<line x1='30' y1='100' x2='430' y2='100' stroke='#334155' stroke-width='1.6'/>
<path d='M 425 95 L 432 100 L 425 105' fill='none' stroke='#334155' stroke-width='1.4'/>
<line x1='40' y1='20' x2='40' y2='185' stroke='#e2e8f0' stroke-width='1.5' stroke-dasharray='3,3'/>
<line x1='130' y1='20' x2='130' y2='185' stroke='#e2e8f0' stroke-width='1.5' stroke-dasharray='3,3'/>
<line x1='220' y1='20' x2='220' y2='185' stroke='#e2e8f0' stroke-width='1.5' stroke-dasharray='3,3'/>
<line x1='310' y1='20' x2='310' y2='185' stroke='#e2e8f0' stroke-width='1.5' stroke-dasharray='3,3'/>
<line x1='400' y1='20' x2='400' y2='185' stroke='#e2e8f0' stroke-width='1.5' stroke-dasharray='3,3'/>
<text x='40' y='198' font-size='11' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>0</text>
<text x='130' y='198' font-size='11' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>π/2</text>
<text x='220' y='198' font-size='11' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>π</text>
<text x='310' y='198' font-size='11' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>3π/2</text>
<text x='400' y='198' font-size='11' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>2π</text>
<path d='M 40 100 C 68 100 102 50 130 50 C 158 50 192 100 220 100 C 248 100 282 150 310 150 C 338 150 372 100 400 100' fill='none' stroke='#2563eb' stroke-width='2.2'/>
<path d='M 40 50 C 68 50 102 100 130 100 C 158 100 192 150 220 150 C 248 150 282 100 310 100 C 338 100 372 50 400 50' fill='none' stroke='#ea580c' stroke-width='2.2'/>
<text x='405' y='55' font-size='12' fill='#ea580c' text-anchor='start' font-family='Georgia, serif'>cos</text>
<text x='405' y='105' font-size='12' fill='#2563eb' text-anchor='start' font-family='Georgia, serif'>sin</text>
<text x='230' y='15' font-size='12' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>period = 2π (repeats after this)</text>
</svg>

<svg viewBox='0 0 460 190' width='100%' style='max-width:460px' xmlns='http://www.w3.org/2000/svg'>
<rect x='1' y='1' width='458' height='188' rx='10' fill='#f8fafc' stroke='#e2e8f0'/>
<line x1='30' y1='90' x2='430' y2='90' stroke='#334155' stroke-width='1.6'/>
<line x1='40' y1='15' x2='40' y2='175' stroke='#334155' stroke-width='1.6' stroke-dasharray='4,3'/>
<line x1='220' y1='15' x2='220' y2='175' stroke='#334155' stroke-width='1.6' stroke-dasharray='4,3'/>
<line x1='400' y1='15' x2='400' y2='175' stroke='#334155' stroke-width='1.6' stroke-dasharray='4,3'/>
<path d='M 45 165 C 80 130 110 100 130 90 C 150 80 180 50 215 15' fill='none' stroke='#16a34a' stroke-width='2.2'/>
<path d='M 225 165 C 260 130 290 100 310 90 C 330 80 360 50 395 15' fill='none' stroke='#16a34a' stroke-width='2.2'/>
<text x='40' y='188' font-size='11' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>-π/2</text>
<text x='130' y='104' font-size='11' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>0</text>
<text x='220' y='188' font-size='11' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>π/2</text>
<text x='310' y='104' font-size='11' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>π</text>
<text x='400' y='188' font-size='11' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>3π/2</text>
<text x='230' y='30' font-size='12' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>tan — period = π, asymptotes at each dashed line</text>
</svg>

</div>

### 2.6 Solving trig equations

**General solutions when `sin/cos/tan(x) ≠ 0`** (i.e. the value `k` is not the trivial zero case) — `n` is any integer:

- `sin x = k` → `x = arcsin(k) + 2πn`  **or**  `x = π − arcsin(k) + 2πn`. Two families are needed because within each `2π` period, two different angles share the same sine value (symmetric about `π/2`).
- `cos x = k` → `x = ± arccos(k) + 2πn`. Two families, symmetric about `0` (since `cos(−x) = cos x`).
- `tan x = k` → `x = arctan(k) + πn`. Only **one** family is needed — `tan` has period `π`, and is one-to-one within each period, so there's exactly one solution per period.

**The trivial zero cases**, by contrast, need only one simple family each:

- `sin x = 0` → `x = πn`
- `cos x = 0` → `x = π/2 + πn`
- `tan x = 0` → `x = πn`

These two families are actually linked — at the same points where one function is zero, the other hits its extreme value `±1`, alternating as `n` increases:

- At `x = πn`: `sin x = 0` **and** `cos x = (−1)ⁿ` — i.e. `cos x = +1` when `n` is even, `cos x = −1` when `n` is odd.
- At `x = π/2 + πn`: it's the **opposite** — `cos x = 0` **and** `sin x = (−1)ⁿ` — i.e. `sin x = +1` when `n` is even, `sin x = −1` when `n` is odd.

This matches the unit circle picture: `x = πn` lands exactly on the left/right poles (`0°, 180°, 360°, ...`), where the y-coordinate (`sin`) is `0` and the x-coordinate (`cos`) is at its extreme, `±1`. `x = π/2 + πn` lands exactly on the top/bottom poles (`90°, 270°, ...`), where it's reversed: the x-coordinate (`cos`) is `0` and the y-coordinate (`sin`) is at its extreme, `±1`.

**When the argument is not just `x`, but an expression containing `x`** (e.g. `sin(2x + π/3) = k`):

1. Let `u` = the whole argument (e.g. `u = 2x + π/3`).
2. Solve `sin(u) = k` (or cos/tan) for `u`, using the general solution formulas above.
3. Substitute the expression back in for `u` and **isolate `x`** in each branch. Because the coefficient in front of `x` also divides the `+2πn` (or `+πn`) term, the period **in terms of `x`** shrinks by that same factor — don't forget to divide it too.

**Worked example:** `sin(2x + π/3) = 1/2`. Let `u = 2x + π/3`.

`sin u = 1/2` → `u = π/6 + 2πn`  **or**  `u = 5π/6 + 2πn`.

Branch 1: `2x + π/3 = π/6 + 2πn` → `2x = −π/6 + 2πn` → `x = −π/12 + πn`.
Branch 2: `2x + π/3 = 5π/6 + 2πn` → `2x = π/2 + 2πn` → `x = π/4 + πn`.

**Final answer:** `x = −π/12 + πn`  or  `x = π/4 + πn`, `n ∈ ℤ`. Notice the period in `x` became `π` (i.e. `2π/2`), not `2π`, because of the coefficient `2` in front of `x`.

*(Note: for `tan`, remember it's undefined wherever `cos = 0` — if an equation was manipulated in a way that could introduce or hide such a point, double check the final answers are actually in the domain.)*
