# Basic Algebra — High School Reference

## Absolute value

### Solving equations with absolute value

Steps:

1. **Isolate the absolute value** so it stands alone on one side of the equation: `|expression| = k`.
2. **Check the other side, `k`.** If `k < 0`, stop — there is **no solution**, since an absolute value can never be negative.
3. If `k = 0`, there is exactly **one case**: `expression = 0`.
4. If `k > 0`, **split into two cases**: `expression = k` **or** `expression = −k`.
5. **Solve each equation separately.**
6. **Check both solutions** in the original equation — this matters if the variable also appears outside the absolute value, or the equation was manipulated further, since extra steps can introduce extraneous roots.

Special case — two absolute values: `|A| = |B|` → `A = B` **or** `A = −B`.

<div align="center">

<svg viewBox='0 0 380 150' width='100%' style='max-width:380px' xmlns='http://www.w3.org/2000/svg'>
<rect x='1' y='1' width='378' height='148' rx='10' fill='#f8fafc' stroke='#e2e8f0'/>
<line x1='20' y1='60' x2='360' y2='60' stroke='#334155' stroke-width='2'/>
<path d='M 355 55 L 362 60 L 355 65' fill='none' stroke='#334155' stroke-width='1.6'/>
<path d='M 25 55 L 18 60 L 25 65' fill='none' stroke='#334155' stroke-width='1.6'/>
<line x1='110' y1='54' x2='110' y2='66' stroke='#334155' stroke-width='1.6'/>
<line x1='190' y1='54' x2='190' y2='66' stroke='#334155' stroke-width='1.6'/>
<line x1='270' y1='54' x2='270' y2='66' stroke='#334155' stroke-width='1.6'/>
<circle cx='110' cy='60' r='4.5' fill='#2563eb'/>
<circle cx='270' cy='60' r='4.5' fill='#2563eb'/>
<text x='110' y='84' font-size='13' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>-a</text>
<text x='190' y='84' font-size='13' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>0</text>
<text x='270' y='84' font-size='13' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>a</text>
<path d='M 185 40 L 115 40' fill='none' stroke='#7c3aed' stroke-width='1.4' stroke-dasharray='3,3'/>
<path d='M 195 40 L 265 40' fill='none' stroke='#7c3aed' stroke-width='1.4' stroke-dasharray='3,3'/>
<text x='150' y='32' font-size='11.5' fill='#7c3aed' text-anchor='middle' font-family='Georgia, serif'>dist a</text>
<text x='230' y='32' font-size='11.5' fill='#7c3aed' text-anchor='middle' font-family='Georgia, serif'>dist a</text>
<text x='190' y='120' font-size='13' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>|x| = a  (a &gt; 0)   -&gt;   x = -a  or  x = a</text>
</svg>

</div>

**Example:** `|2x − 3| = 7` → `2x − 3 = 7` or `2x − 3 = −7` → `x = 5` or `x = −2`. Both check out in the original equation.

---

## Inequalities

### 1. Multiplying / dividing by a number

- Multiplying or dividing **both sides by a positive number**: the inequality direction stays the **same**.
- Multiplying or dividing **both sides by a negative number**: the inequality direction **flips**.

<div align="center">

<svg viewBox='0 0 460 170' width='100%' style='max-width:460px' xmlns='http://www.w3.org/2000/svg'>
<rect x='1' y='1' width='458' height='168' rx='10' fill='#f8fafc' stroke='#e2e8f0'/>
<line x1='230' y1='10' x2='230' y2='150' stroke='#e2e8f0' stroke-width='1.5'/>
<text x='115' y='24' font-size='13' fill='#1e293b' text-anchor='middle' font-weight='bold' font-family='Georgia, serif'>2x &lt; 6   (÷ by +2)</text>
<line x1='30' y1='90' x2='210' y2='90' stroke='#334155' stroke-width='2'/>
<path d='M 25 85 L 18 90 L 25 95' fill='none' stroke='#334155' stroke-width='1.6'/>
<line x1='150' y1='84' x2='150' y2='96' stroke='#334155' stroke-width='1.6'/>
<text x='150' y='112' font-size='12.5' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>3</text>
<circle cx='150' cy='90' r='5' fill='#f8fafc' stroke='#2563eb' stroke-width='2'/>
<line x1='30' y1='90' x2='148' y2='90' stroke='#2563eb' stroke-width='4'/>
<text x='115' y='140' font-size='12.5' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>x &lt; 3 — direction unchanged</text>
<text x='345' y='24' font-size='13' fill='#1e293b' text-anchor='middle' font-weight='bold' font-family='Georgia, serif'>-2x &lt; 6   (÷ by -2)</text>
<line x1='250' y1='90' x2='430' y2='90' stroke='#334155' stroke-width='2'/>
<path d='M 425 85 L 432 90 L 425 95' fill='none' stroke='#334155' stroke-width='1.6'/>
<line x1='310' y1='84' x2='310' y2='96' stroke='#334155' stroke-width='1.6'/>
<text x='310' y='112' font-size='12.5' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>-3</text>
<circle cx='310' cy='90' r='5' fill='#f8fafc' stroke='#ea580c' stroke-width='2'/>
<line x1='312' y1='90' x2='430' y2='90' stroke='#ea580c' stroke-width='4'/>
<text x='345' y='140' font-size='12.5' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>x &gt; -3 — direction flipped!</text>
</svg>

</div>

### 2. Dividing by an expression whose sign you don't know (e.g. dividing by `x`)

You **cannot** multiply or divide both sides of an inequality by `x` (or any expression containing the variable) unless you already know its sign — whether the direction flips depends on that sign, and you don't know it yet. Doing it blindly can lose solutions or keep invalid ones.

**Fix — case split:**

1. **Case 1: assume `x > 0`.** Divide/multiply normally (direction stays the same). Combine the resulting inequality **with** the assumption `x > 0` using **AND** (both must hold).
2. **Case 2: assume `x < 0`.** Divide/multiply and **flip** the direction. Combine the result **with** the assumption `x < 0` using **AND**.
3. The **final answer** is the **union** of the two cases: Case 1 result **OR** Case 2 result (either case being true is enough, since together they cover every possible value of `x`, other than `x = 0` which must be checked separately if it's in the domain).

*(Alternative method for more complex rational inequalities: move everything to one side to get a single fraction compared to 0, then build a sign chart from the zeros of the numerator and denominator — this avoids dividing by the variable at all.)*

<div align="center">

<svg viewBox='0 0 460 340' width='100%' style='max-width:460px' xmlns='http://www.w3.org/2000/svg'>
<rect x='1' y='1' width='458' height='338' rx='10' fill='#f8fafc' stroke='#e2e8f0'/>
<rect x='130' y='15' width='200' height='40' rx='6' fill='#eef2ff' stroke='#334155' stroke-width='1.6'/>
<text x='230' y='40' font-size='12.5' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>dividing by x — sign unknown</text>
<line x1='230' y1='55' x2='230' y2='70' stroke='#334155' stroke-width='1.6'/>
<path d='M 226 66 L 230 74 L 234 66' fill='none' stroke='#334155' stroke-width='1.6'/>
<line x1='230' y1='74' x2='110' y2='95' stroke='#334155' stroke-width='1.6'/>
<line x1='230' y1='74' x2='350' y2='95' stroke='#334155' stroke-width='1.6'/>
<rect x='20' y='95' width='180' height='42' rx='6' fill='#fff' stroke='#2563eb' stroke-width='1.8'/>
<text x='110' y='113' font-size='12.5' fill='#2563eb' text-anchor='middle' font-weight='bold' font-family='Georgia, serif'>Case 1: x &gt; 0</text>
<text x='110' y='129' font-size='11.5' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>keep direction when dividing</text>
<rect x='260' y='95' width='180' height='42' rx='6' fill='#fff' stroke='#ea580c' stroke-width='1.8'/>
<text x='350' y='113' font-size='12.5' fill='#ea580c' text-anchor='middle' font-weight='bold' font-family='Georgia, serif'>Case 2: x &lt; 0</text>
<text x='350' y='129' font-size='11.5' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>flip direction when dividing</text>
<line x1='110' y1='137' x2='110' y2='160' stroke='#334155' stroke-width='1.6'/>
<line x1='350' y1='137' x2='350' y2='160' stroke='#334155' stroke-width='1.6'/>
<rect x='20' y='160' width='180' height='46' rx='6' fill='#fff' stroke='#2563eb' stroke-width='1.4' stroke-dasharray='4,3'/>
<text x='110' y='178' font-size='11.5' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>x &gt; 0  AND  (solved inequality)</text>
<text x='110' y='196' font-size='11.5' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>-&gt; partial solution set 1</text>
<rect x='260' y='160' width='180' height='46' rx='6' fill='#fff' stroke='#ea580c' stroke-width='1.4' stroke-dasharray='4,3'/>
<text x='350' y='178' font-size='11.5' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>x &lt; 0  AND  (solved inequality)</text>
<text x='350' y='196' font-size='11.5' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>-&gt; partial solution set 2</text>
<line x1='110' y1='206' x2='110' y2='230' stroke='#334155' stroke-width='1.6'/>
<line x1='350' y1='206' x2='350' y2='230' stroke='#334155' stroke-width='1.6'/>
<line x1='110' y1='230' x2='230' y2='250' stroke='#334155' stroke-width='1.6'/>
<line x1='350' y1='230' x2='230' y2='250' stroke='#334155' stroke-width='1.6'/>
<rect x='100' y='250' width='260' height='50' rx='6' fill='#f0fdf4' stroke='#16a34a' stroke-width='2'/>
<text x='230' y='270' font-size='13' fill='#16a34a' text-anchor='middle' font-weight='bold' font-family='Georgia, serif'>Final solution =</text>
<text x='230' y='288' font-size='12.5' fill='#16a34a' text-anchor='middle' font-family='Georgia, serif'>solution set 1  OR  solution set 2</text>
</svg>

</div>

**Worked example:** solve `1/x > 2`.

- **Case 1 (`x > 0`):** multiply both sides by `x` (positive → direction stays): `1 > 2x` → `x < 1/2`. Combine with the assumption (AND): `0 < x < 1/2`.
- **Case 2 (`x < 0`):** multiply both sides by `x` (negative → direction flips): `1 < 2x` → `x > 1/2`. Combine with the assumption (AND): `x > 1/2` **and** `x < 0` — impossible, empty set.
- **Final answer (OR the two cases):** `0 < x < 1/2`.

### 3. Square roots in inequalities

**Always start with the domain**: whatever is under the root must be `≥ 0`. This condition is required no matter what the inequality says, and gets combined with everything else using **AND**.

- `√(f(x)) < k`:
  - if `k ≤ 0` → **no solution** (a square root is never negative, so it can't be less than a non-positive number).
  - if `k > 0` → domain `f(x) ≥ 0` **AND** `f(x) < k²` (safe to square since both sides are non-negative here).
- `√(f(x)) > k`:
  - if `k < 0` → **true everywhere the domain holds** (a square root is always `≥ 0 > k`), so the solution is just the domain `f(x) ≥ 0`.
  - if `k ≥ 0` → `f(x) > k²` (this alone already forces `f(x) > 0`, so the domain condition is automatically satisfied — no separate AND needed).
- `√(A) < √(B)` type: domain `A ≥ 0` **AND** `B ≥ 0` **AND** `A < B`.

<div align="center">

<svg viewBox='0 0 460 190' width='100%' style='max-width:460px' xmlns='http://www.w3.org/2000/svg'>
<rect x='1' y='1' width='458' height='188' rx='10' fill='#f8fafc' stroke='#e2e8f0'/>
<text x='230' y='22' font-size='13' fill='#1e293b' text-anchor='middle' font-weight='bold' font-family='Georgia, serif'>√(x - 2) &lt; 3   -&gt;   domain x≥2  AND  x&lt;11</text>
<line x1='40' y1='60' x2='420' y2='60' stroke='#334155' stroke-width='1.6'/>
<circle cx='110' cy='60' r='4.5' fill='#2563eb'/>
<line x1='110' y1='60' x2='420' y2='60' stroke='#2563eb' stroke-width='4'/>
<path d='M 415 55 L 422 60 L 415 65' fill='none' stroke='#2563eb' stroke-width='1.6'/>
<text x='36' y='64' font-size='11.5' fill='#2563eb' text-anchor='end' font-family='Georgia, serif'>domain: x≥2</text>
<line x1='40' y1='100' x2='420' y2='100' stroke='#334155' stroke-width='1.6'/>
<circle cx='330' cy='100' r='5' fill='none' stroke='#ea580c' stroke-width='2'/>
<line x1='40' y1='100' x2='328' y2='100' stroke='#ea580c' stroke-width='4'/>
<path d='M 45 95 L 38 100 L 45 105' fill='none' stroke='#ea580c' stroke-width='1.6'/>
<text x='424' y='104' font-size='11.5' fill='#ea580c' text-anchor='start' font-family='Georgia, serif'>x&lt;11</text>
<line x1='40' y1='150' x2='420' y2='150' stroke='#334155' stroke-width='1.6'/>
<circle cx='110' cy='150' r='4.5' fill='#16a34a'/>
<circle cx='330' cy='150' r='5' fill='none' stroke='#16a34a' stroke-width='2'/>
<line x1='110' y1='150' x2='328' y2='150' stroke='#16a34a' stroke-width='5'/>
<text x='110' y='170' font-size='11.5' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>2</text>
<text x='330' y='170' font-size='11.5' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>11</text>
<text x='220' y='186' font-size='12.5' fill='#16a34a' text-anchor='middle' font-weight='bold' font-family='Georgia, serif'>intersection (AND) -&gt; final: 2 ≤ x &lt; 11</text>
</svg>

</div>

**Examples:**
- `√(x − 2) < 3` → domain `x ≥ 2`; square: `x − 2 < 9` → `x < 11`; intersect (AND) → `2 ≤ x < 11`.
- `√(x + 1) > 2` → `k = 2 ≥ 0` → `x + 1 > 4` → `x > 3` (domain `x ≥ −1` is automatically satisfied).

### 4. Absolute value inequalities

- `|f(x)| < k` (k > 0) → **`−k < f(x) < k`** — a single bounded range, combined with **AND**, because being within distance `k` of zero means greater than `−k` **and** less than `k` at the same time. If `k ≤ 0`, no solution.
- `|f(x)| > k` (k ≥ 0) → **`f(x) < −k` or `f(x) > k`** — two separate, disjoint rays, combined with **OR**, because being farther than `k` from zero means far to the left **or** far to the right — never both. If `k < 0`, the inequality is true for all `x`.
- `≤` and `≥` work the same way, just with closed endpoints included.

<div align="center">

<svg viewBox='0 0 460 220' width='100%' style='max-width:460px' xmlns='http://www.w3.org/2000/svg'>
<rect x='1' y='1' width='458' height='218' rx='10' fill='#f8fafc' stroke='#e2e8f0'/>
<text x='230' y='22' font-size='13' fill='#1e293b' text-anchor='middle' font-weight='bold' font-family='Georgia, serif'>|x| &lt; k   -&gt;   -k &lt; x &lt; k   (AND — one segment)</text>
<line x1='40' y1='55' x2='420' y2='55' stroke='#334155' stroke-width='1.6'/>
<path d='M 415 50 L 422 55 L 415 60' fill='none' stroke='#334155' stroke-width='1.4'/>
<path d='M 45 50 L 38 55 L 45 60' fill='none' stroke='#334155' stroke-width='1.4'/>
<circle cx='170' cy='55' r='5' fill='none' stroke='#2563eb' stroke-width='2'/>
<circle cx='290' cy='55' r='5' fill='none' stroke='#2563eb' stroke-width='2'/>
<line x1='172' y1='55' x2='288' y2='55' stroke='#2563eb' stroke-width='5'/>
<text x='170' y='75' font-size='12' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>-k</text>
<text x='290' y='75' font-size='12' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>k</text>
<line x1='20' y1='105' x2='440' y2='105' stroke='#e2e8f0' stroke-width='1.5'/>
<text x='230' y='128' font-size='13' fill='#1e293b' text-anchor='middle' font-weight='bold' font-family='Georgia, serif'>|x| &gt; k   -&gt;   x &lt; -k  or  x &gt; k   (OR — two separate rays)</text>
<line x1='40' y1='165' x2='420' y2='165' stroke='#334155' stroke-width='1.6'/>
<circle cx='170' cy='165' r='5' fill='none' stroke='#ea580c' stroke-width='2'/>
<circle cx='290' cy='165' r='5' fill='none' stroke='#ea580c' stroke-width='2'/>
<line x1='40' y1='165' x2='168' y2='165' stroke='#ea580c' stroke-width='5'/>
<path d='M 45 160 L 38 165 L 45 170' fill='none' stroke='#ea580c' stroke-width='1.6'/>
<line x1='292' y1='165' x2='420' y2='165' stroke='#ea580c' stroke-width='5'/>
<path d='M 415 160 L 422 165 L 415 170' fill='none' stroke='#ea580c' stroke-width='1.6'/>
<text x='170' y='185' font-size='12' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>-k</text>
<text x='290' y='185' font-size='12' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>k</text>
</svg>

</div>

**Examples:**
- `|3x − 1| < 5` → `−5 < 3x − 1 < 5` → `−4 < 3x < 6` → `−4/3 < x < 2`.
- `|3x − 1| ≥ 5` → `3x − 1 ≤ −5` **or** `3x − 1 ≥ 5` → `x ≤ −4/3` **or** `x ≥ 2`.

### Quick reference — when to use "and" vs "or"

- **Use AND** when every condition must hold **at the same point**, and the result is one bounded/intersected region: a domain restriction combined with a derived inequality (square roots), the double inequality from `|f(x)| < k`, or a case assumption (like `x > 0`) combined with the inequality solved under that assumption.
- **Use OR** when the solution is made of **separate alternatives**, any one of which is enough on its own: the two cases of an absolute value equation, the two branches of `|f(x)| > k`, or combining the results from separate case-split branches (the `x > 0` case and the `x < 0` case) into the final answer.
