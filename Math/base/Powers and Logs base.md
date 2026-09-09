# Powers and Logs — High School Reference

## Powers

### 1. Rules of powers

- **Product rule:** `aᵐ · aⁿ = aᵐ⁺ⁿ`
- **Quotient rule:** `aᵐ / aⁿ = aᵐ⁻ⁿ`  (a ≠ 0)
- **Power of a power:** `(aᵐ)ⁿ = aᵐⁿ`
- **Power of a product:** `(ab)ⁿ = aⁿ · bⁿ`
- **Power of a quotient:** `(a/b)ⁿ = aⁿ/bⁿ`  (b ≠ 0)
- **Zero exponent:** `a⁰ = 1`  (a ≠ 0)
- **Negative exponent:** `a⁻ⁿ = 1/aⁿ`  (a ≠ 0)

**Turning powers into roots (fractional exponents):**

- `a^(1/n) = ⁿ√a`  — in particular `a^(1/2) = √a`
- `a^(m/n) = (ⁿ√a)ᵐ = ⁿ√(aᵐ)`
- `a^(−m/n) = 1 / (ⁿ√a)ᵐ`
- **Domain note:** if `n` is even, `a` must be `≥ 0` for `a^(1/n)` to be a real number.

### 2. Solving power equations — getting to `aˣ = aʸ`

1. Rewrite **both sides as powers of the same base** `a`.
2. Once the equation reads `a^(expr₁) = a^(expr₂)`, use the fact that `aˣ` is one-to-one (for `a > 0, a ≠ 1`) to **equate the exponents**: `expr₁ = expr₂`.
3. Solve the resulting (usually simpler) equation.
4. Check the solution(s) back in the original equation.

**Example:** `4^(x+1) = 8^(x−2)` → `(2²)^(x+1) = (2³)^(x−2)` → `2^(2x+2) = 2^(3x−6)` → `2x + 2 = 3x − 6` → `x = 8`.

### 3. Solving power equations — substitution (placing `aˣ` in the equation)

Use this when the equation contains a repeating power expression like `aˣ`, `a²ˣ = (aˣ)²`, or `a⁻ˣ = 1/aˣ`, alongside constants — this turns it into an ordinary polynomial equation.

1. Identify the repeating power and set `t = aˣ`.
2. Rewrite every term in terms of `t` (`a²ˣ → t²`, `a⁻ˣ → 1/t`, etc.).
3. Solve the resulting equation for `t` (often a quadratic).
4. **Reject any `t ≤ 0`** — since `aˣ > 0` always (for `a > 0`), a non-positive `t` is extraneous.
5. Substitute back `aˣ = t` for each valid `t`, and solve for `x` (typically via the `aˣ = aʸ` method above).

**Example:** `4ˣ − 6·2ˣ + 8 = 0`. Since `4ˣ = (2ˣ)²`, let `t = 2ˣ`: `t² − 6t + 8 = 0` → `(t−2)(t−4) = 0` → `t = 2` or `t = 4` (both positive, valid). `2ˣ = 2 → x = 1`; `2ˣ = 4 → x = 2`.

### 4. Inequalities with powers

Comparing `aˣ` to `aʸ` (same base) depends on whether the base is **greater than 1** or **between 0 and 1**:

- If `a > 1` (increasing function): `aˣ < aʸ  ⟺  x < y` — **direction stays the same**.
- If `0 < a < 1` (decreasing function): `aˣ < aʸ  ⟺  x > y` — **direction flips**.

<div align="center">

<svg viewBox='0 0 460 230' width='100%' style='max-width:460px' xmlns='http://www.w3.org/2000/svg'>
<rect x='1' y='1' width='458' height='228' rx='10' fill='#f8fafc' stroke='#e2e8f0'/>
<line x1='230' y1='10' x2='230' y2='195' stroke='#e2e8f0' stroke-width='1.5'/>
<line x1='55' y1='170' x2='205' y2='170' stroke='#334155' stroke-width='1.6'/>
<line x1='60' y1='195' x2='60' y2='25' stroke='#334155' stroke-width='1.6'/>
<path d='M 65 160 C 100 158 130 140 150 100 C 165 70 175 45 190 25' fill='none' stroke='#2563eb' stroke-width='2.4'/>
<text x='130' y='210' font-size='13' fill='#1e293b' text-anchor='middle' font-weight='bold' font-family='Georgia, serif'>a &gt; 1 (increasing)</text>
<text x='130' y='16' font-size='12' fill='#2563eb' text-anchor='middle' font-family='Georgia, serif'>y = aˣ</text>
<text x='130' y='188' font-size='11.5' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>x &lt; y  -&gt;  aˣ &lt; aʸ (same direction)</text>
<line x1='255' y1='170' x2='405' y2='170' stroke='#334155' stroke-width='1.6'/>
<line x1='400' y1='195' x2='400' y2='25' stroke='#334155' stroke-width='1.6'/>
<path d='M 270 25 C 285 45 295 70 310 100 C 330 140 360 158 395 160' fill='none' stroke='#ea580c' stroke-width='2.4'/>
<text x='330' y='210' font-size='13' fill='#1e293b' text-anchor='middle' font-weight='bold' font-family='Georgia, serif'>0 &lt; a &lt; 1 (decreasing)</text>
<text x='330' y='16' font-size='12' fill='#ea580c' text-anchor='middle' font-family='Georgia, serif'>y = aˣ</text>
<text x='330' y='188' font-size='11.5' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>x &lt; y  -&gt;  aˣ &gt; aʸ (flipped)</text>
</svg>

</div>

**Steps:**

1. Get both sides to the **same base** `a`.
2. Compare the exponents — **keep** the inequality direction if `a > 1`, **flip** it if `0 < a < 1`.
3. Solve the resulting inequality on the exponents.

**Examples:** `(1/2)ˣ < (1/2)³` → base `0 < 1/2 < 1` → flip → `x > 3`.  `3ˣ > 3⁵` → base `3 > 1` → keep → `x > 5`.

---

## Logs

### 1. Definition, rules, and identities

- **Definition:** `log_a(b) = c  ⟺  a^c = b`  (requires `a > 0, a ≠ 1, b > 0`)
- `log_a(1) = 0` and `log_a(a) = 1`
- **Product rule:** `log_a(MN) = log_a(M) + log_a(N)`
- **Quotient rule:** `log_a(M/N) = log_a(M) − log_a(N)`
- **Power rule:** `log_a(Mᵏ) = k · log_a(M)`
- **Change of base:** `log_a(b) = log_c(b) / log_c(a)` for any valid base `c` (commonly 10 or e)
- **Reciprocal base:** `log_a(b) = 1 / log_b(a)`
- **Inverse identities:** `a^(log_a(b)) = b`  and  `log_a(aᵏ) = k`

### How to turn a number into a log

Any number `k` can be rewritten as `log_a(aᵏ)`, since `log_a(aᵏ) = k` by the inverse identity above. This is the standard trick for combining a plain constant with other log terms (same base) so the product/quotient rules can be applied.

**Example (base 3):** `2 = log_3(3²) = log_3(9)` — now `2` can be merged with other `log_3(...)` terms.

### Absolute value inside logs — `log_a(x²)`

`log_a(x²)` is defined for **every `x ≠ 0`**, since `x² > 0` regardless of whether `x` itself is positive or negative. But the power rule `log_a(x^k) = k·log_a(x)` requires `log_a(x)` to be defined, which needs `x > 0`. Writing `log_a(x²) = 2·log_a(x)` would silently shrink the domain to `x > 0` only, losing every negative solution.

The fix: `log_a(x²) = 2·log_a|x|`, because `|x|` is positive for every `x ≠ 0`, so `log_a|x|` is defined on the exact same domain as `log_a(x²)`.

**Rule of thumb:** when pulling an **even** exponent down out of a log via the power rule, and the base of that power could be negative, wrap it in absolute value: `log_a(x^even) = even · log_a|x|`. For an **odd** exponent this isn't needed — `x^odd` has the same sign as `x`, so the domain `x^odd > 0` already means `x > 0`, with no ambiguity to fix.

<div align="center">

<svg viewBox='0 0 460 180' width='100%' style='max-width:460px' xmlns='http://www.w3.org/2000/svg'>
<rect x='1' y='1' width='458' height='178' rx='10' fill='#f8fafc' stroke='#e2e8f0'/>
<text x='230' y='22' font-size='12.5' fill='#1e293b' text-anchor='middle' font-weight='bold' font-family='Georgia, serif'>matching the domain of log_a(x²)</text>
<line x1='40' y1='60' x2='420' y2='60' stroke='#334155' stroke-width='1.6'/>
<circle cx='230' cy='60' r='5' fill='none' stroke='#ea580c' stroke-width='2'/>
<line x1='232' y1='60' x2='420' y2='60' stroke='#ea580c' stroke-width='4'/>
<path d='M 415 55 L 422 60 L 415 65' fill='none' stroke='#ea580c' stroke-width='1.6'/>
<text x='36' y='64' font-size='11' fill='#ea580c' text-anchor='end' font-family='Georgia, serif'>domain of log_a(x): x&gt;0 only</text>
<line x1='40' y1='110' x2='420' y2='110' stroke='#334155' stroke-width='1.6'/>
<circle cx='230' cy='110' r='5' fill='none' stroke='#16a34a' stroke-width='2'/>
<line x1='40' y1='110' x2='228' y2='110' stroke='#16a34a' stroke-width='4'/>
<path d='M 45 105 L 38 110 L 45 115' fill='none' stroke='#16a34a' stroke-width='1.6'/>
<line x1='232' y1='110' x2='420' y2='110' stroke='#16a34a' stroke-width='4'/>
<path d='M 415 105 L 422 110 L 415 115' fill='none' stroke='#16a34a' stroke-width='1.6'/>
<text x='230' y='130' font-size='11.5' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>0</text>
<text x='230' y='158' font-size='11.5' fill='#16a34a' text-anchor='middle' font-family='Georgia, serif'>domain of log_a(x²) = 2log_a|x|:  x≠0 (both sides)</text>
</svg>

</div>

### Steps to solve `log_a(b) = c`

1. State the domain requirement: `b > 0`.
2. Rewrite using the definition: `b = a^c`.
3. Solve the resulting equation.
4. Check the solution(s) against the domain condition from step 1 (reject extraneous ones).

**Example:** `log_2(x − 1) = 3` → domain `x − 1 > 0` (`x > 1`) → `x − 1 = 2³ = 8` → `x = 9` → check: `9 > 1` ✓.

### Steps to solve `log_a(b) = log_a(c)`

1. State the domain requirements: `b > 0` **and** `c > 0`.
2. Since `log_a` is one-to-one (for a valid base `a`), **equate the arguments**: `b = c`.
3. Solve the resulting equation.
4. Check the solution(s) against the domain conditions from step 1 (reject extraneous ones).

**Example:** `log(x + 3) = log(2x − 1)` → domain `x > −3` **and** `x > 1/2` → combined domain `x > 1/2`. Equate: `x + 3 = 2x − 1` → `x = 4` → check: `4 > 1/2` ✓.

### Log inequalities

Two conditions must both hold at once (**AND**): the **domain** (every argument `> 0`) and the **direction rule**, which depends on whether the base is greater than 1 or between 0 and 1 — same idea as with powers, but flipped in shape since `log_a(x)` is the inverse of `aˣ`.

- If `a > 1` (increasing): `log_a(b) < log_a(c)  ⟺  0 < b < c` — direction stays the same, plus both arguments positive.
- If `0 < a < 1` (decreasing): `log_a(b) < log_a(c)  ⟺  b > c > 0` — direction flips, plus both arguments positive.

<div align="center">

<svg viewBox='0 0 460 230' width='100%' style='max-width:460px' xmlns='http://www.w3.org/2000/svg'>
<rect x='1' y='1' width='458' height='228' rx='10' fill='#f8fafc' stroke='#e2e8f0'/>
<line x1='230' y1='10' x2='230' y2='195' stroke='#e2e8f0' stroke-width='1.5'/>
<line x1='60' y1='195' x2='60' y2='25' stroke='#334155' stroke-width='1.6' stroke-dasharray='4,3'/>
<line x1='55' y1='115' x2='205' y2='115' stroke='#334155' stroke-width='1.6'/>
<path d='M 62 30 C 68 70 78 95 100 108 C 130 122 165 128 200 130' fill='none' stroke='#2563eb' stroke-width='2.4'/>
<circle cx='100' cy='115' r='2.6' fill='#334155'/>
<text x='100' y='132' font-size='10.5' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>x=1</text>
<text x='130' y='210' font-size='13' fill='#1e293b' text-anchor='middle' font-weight='bold' font-family='Georgia, serif'>a &gt; 1 (increasing)</text>
<text x='190' y='24' font-size='12' fill='#2563eb' text-anchor='end' font-family='Georgia, serif'>y=log_a x</text>
<text x='130' y='188' font-size='11.3' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>b &lt; c  -&gt;  log_a b &lt; log_a c</text>
<line x1='400' y1='195' x2='400' y2='25' stroke='#334155' stroke-width='1.6' stroke-dasharray='4,3'/>
<line x1='255' y1='115' x2='405' y2='115' stroke='#334155' stroke-width='1.6'/>
<path d='M 398 30 C 392 70 382 95 360 108 C 330 122 295 128 260 130' fill='none' stroke='#ea580c' stroke-width='2.4'/>
<circle cx='360' cy='115' r='2.6' fill='#334155'/>
<text x='360' y='132' font-size='10.5' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>x=1</text>
<text x='330' y='210' font-size='13' fill='#1e293b' text-anchor='middle' font-weight='bold' font-family='Georgia, serif'>0 &lt; a &lt; 1 (decreasing)</text>
<text x='270' y='24' font-size='12' fill='#ea580c' text-anchor='start' font-family='Georgia, serif'>y=log_a x</text>
<text x='330' y='188' font-size='11.3' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>b &lt; c  -&gt;  log_a b &gt; log_a c (flipped)</text>
</svg>

</div>

**Steps:**

1. Find the **domain**: every argument of every log in the inequality must be `> 0`. This is required no matter what, and gets combined with everything below using **AND**.
2. Get all logs to the **same base**, if they aren't already.
3. Compare the arguments — **keep** the direction if `a > 1`, **flip** it if `0 < a < 1`.
4. Solve the resulting inequality on the arguments.
5. **Intersect (AND)** that result with the domain from step 1 for the final answer.

<div align="center">

<svg viewBox='0 0 460 190' width='100%' style='max-width:460px' xmlns='http://www.w3.org/2000/svg'>
<rect x='1' y='1' width='458' height='188' rx='10' fill='#f8fafc' stroke='#e2e8f0'/>
<text x='230' y='22' font-size='12.5' fill='#1e293b' text-anchor='middle' font-weight='bold' font-family='Georgia, serif'>log_2(x - 1) &lt; log_2(5)   (base 2 &gt; 1 -&gt; keep direction)</text>
<line x1='40' y1='60' x2='420' y2='60' stroke='#334155' stroke-width='1.6'/>
<circle cx='150' cy='60' r='4.5' fill='#2563eb'/>
<line x1='150' y1='60' x2='420' y2='60' stroke='#2563eb' stroke-width='4'/>
<path d='M 415 55 L 422 60 L 415 65' fill='none' stroke='#2563eb' stroke-width='1.6'/>
<text x='36' y='64' font-size='11' fill='#2563eb' text-anchor='end' font-family='Georgia, serif'>domain: x&gt;1</text>
<line x1='40' y1='100' x2='420' y2='100' stroke='#334155' stroke-width='1.6'/>
<circle cx='330' cy='100' r='5' fill='none' stroke='#ea580c' stroke-width='2'/>
<line x1='40' y1='100' x2='328' y2='100' stroke='#ea580c' stroke-width='4'/>
<path d='M 45 95 L 38 100 L 45 105' fill='none' stroke='#ea580c' stroke-width='1.6'/>
<text x='424' y='104' font-size='11' fill='#ea580c' text-anchor='start' font-family='Georgia, serif'>x&lt;6</text>
<line x1='40' y1='150' x2='420' y2='150' stroke='#334155' stroke-width='1.6'/>
<circle cx='150' cy='150' r='4.5' fill='#16a34a'/>
<circle cx='330' cy='150' r='5' fill='none' stroke='#16a34a' stroke-width='2'/>
<line x1='150' y1='150' x2='328' y2='150' stroke='#16a34a' stroke-width='5'/>
<text x='150' y='170' font-size='11.5' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>1</text>
<text x='330' y='170' font-size='11.5' fill='#1e293b' text-anchor='middle' font-family='Georgia, serif'>6</text>
</svg>

</div>

**Examples:**
- `log_2(x − 1) < log_2(5)` → base `2 > 1`, keep direction → domain `x − 1 > 0` (`x > 1`) **AND** `x − 1 < 5` (`x < 6`) → final: `1 < x < 6`.
- `log_(1/2)(x) < log_(1/2)(3)` → base `1/2` (`0 < a < 1`, flip) → domain `x > 0` **AND** `x > 3` (flipped from `x < 3`) → final: `x > 3`.
