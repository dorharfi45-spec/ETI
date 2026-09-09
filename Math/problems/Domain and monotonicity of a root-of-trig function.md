# Problem type: domain and monotonicity of √(trig expression)

#problem-type #domain #monotonicity #trigonometry #chain-rule #and-or-logic

**Recognize this pattern when:** you're given something like `f(x) = √(A·trig(g(x)) + B)` and asked for its domain, and/or where it's increasing or decreasing.

## The string of concepts this problem pulls together

1. [[Math/base/Basic Algebra#3. Square roots in inequalities|Basic Algebra — square root domain rule]]: whatever's under a root must be `≥ 0`.
2. [[Math/calc/Simple Functions#2. Function composition|Simple Functions — composition domain]]: `f` is really `√( )` wrapped around a trig expression, so the domain is an **AND** of "the inside is defined" and "the inside satisfies the root's condition."
3. [[Math/base/Trig base#2.6 Solving trig equations|Trig base — solving trig (in)equalities]] and [[Math/base/Trig base#2.5 Periodicity of sin, cos, and tan|periodicity]]: to actually solve `trig(g(x)) ≥ k`.
4. [[Math/base/Basic Algebra#Quick reference — when to use "and" vs "or"|Basic Algebra — AND/OR reference]]: for combining the resulting conditions.
5. [[Math/base/Precalc#1.2 Basic differentiation techniques|Precalc — chain rule]]: to differentiate the composed function.
6. [[Math/base/Precalc#1.3 Finding where a function is increasing or decreasing|Precalc — sign of f′]]: to turn the derivative into an increasing/decreasing answer.

## Worked example

`f(x) = √(2 sin x − 1)`

**Step 1 — domain.** The inside must be `≥ 0`: `2 sin x − 1 ≥ 0` → `sin x ≥ 1/2`.

**Step 2 — solve the trig inequality.** On the unit circle, `sin x = 1/2` at `x = π/6` and `x = 5π/6`; `sin x ≥ 1/2` on the arc between them. Using the periodicity from Trig base:

`Domain: x ∈ [π/6 + 2πn, 5π/6 + 2πn]`, `n ∈ ℤ`

**Step 3 — differentiate with the chain rule.** `f(x) = (2 sin x − 1)^(1/2)`, so:

`f′(x) = 1/(2√(2 sin x − 1)) · 2 cos x = cos x / √(2 sin x − 1)`

**Step 4 — sign of f′.** The denominator is a square root, so it's `≥ 0` wherever it's defined (and strictly `> 0` except at the domain's endpoints, where `f′` isn't defined anyway). So the **sign of `f′` matches the sign of `cos x`** — increasing where `cos x > 0`.

**Step 5 — combine (AND).** `f` is increasing exactly where **both** hold: `x` is in the domain from Step 2, **and** `cos x > 0`. Within one period, `cos x > 0` on `(−π/2, π/2)`; intersected with the domain arc `[π/6, 5π/6]`, that leaves:

`f is increasing on [π/6 + 2πn, π/2 + 2πn]`, `n ∈ ℤ`

(and decreasing on the rest of the domain, `[π/2 + 2πn, 5π/6 + 2πn]`, where `cos x < 0`).

## Why this note exists

This is the "problem-type" layer described for the vault reorganization: instead of re-explaining square roots, composition, trig solving, or the chain rule here, this note is just the connective string between them, applied to one concrete pattern. The Backlinks pane on each linked section will now show this note as a "used in" example — that reverse direction comes for free.
