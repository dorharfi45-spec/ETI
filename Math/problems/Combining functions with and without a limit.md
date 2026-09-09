# Problem type: does a combination of functions have a limit?

#problem-type #limits #arithmetic-of-limits #proof-by-contradiction #indeterminate-form #continuity #composition-of-functions

**Recognize this pattern when:** you're told `f(x)` has a limit at `x=a`, `g(x)` has a limit at `x=a`, and `h(x)` does **not** have a limit at `x=a` — and asked whether some combination built from them has a limit.

## Setup

At `x = a`: `lim f(x) = L` (exists), `lim g(x) = M` (exists), `lim h(x)` does **not exist**.

Everything below rests on the [[Math/calc/Limits/Limit definition and calculation#The arithmetic theorem of limits|arithmetic theorem of limits]]: it only fires when **every piece being combined already has a limit**. So the whole exercise is checking whether each case actually satisfies that hypothesis — and when it doesn't, using a trick to see if the combination can be ruled out anyway.

## 1. `f ± c`, `f·c`, `f/c` (constant `c`) — always has a limit

A constant is trivially "a function with a limit" (`lim c = c` everywhere), so this is really case 3 below in disguise. **Always has a limit:** `L ± c`, `Lc`, `L/c` (`c≠0` for division).

## 2. `f ± x`, `f·x`, `f/x` — always has a limit

`x` is continuous everywhere, so `lim(x→a) x = a` always exists — again this reduces to case 3. **Always has a limit:** `L ± a`, `La`, `L/a` (`a≠0`, i.e. don't divide by `x` itself at the point `x=0`).

## 3. `f ± g`, `f·g`, `f/g` — always has a limit

Direct application of the arithmetic theorem: **always has a limit** — `L ± M`, `LM`, `L/M` (`M≠0`).

## 4. `f ± h`, `f·h`, `f/h` — the "isolate `h`" trick

This is where it gets interesting. **The core trick:** assume for contradiction that the combination *does* have a limit, then use the inverse operation to algebraically solve that equation for `h` alone. If that would force `h` to have a limit — contradiction, since it doesn't — so the combination has no limit. If isolating `h` this way requires dividing by something whose limit is `0`, the trick breaks down and you can't conclude anything from it.

### `f ± h` — never has a limit

Suppose `f + h` had a limit. Then `h = (f+h) − f` is a *difference of two functions that both have limits*, so by the arithmetic theorem `h` would have a limit. Contradiction. **`f ± h` never has a limit** (same argument for `−`).

### `f · h` — depends on whether `L = 0`

- **If `L ≠ 0`:** suppose `f·h` had a limit. Since `L≠0`, `1/f` also has a limit (`1/L`) near `a`. Then `h = (f·h)·(1/f)` — product of two limit-having functions — would have a limit. Contradiction. **`f·h` has no limit.**
- **If `L = 0`:** the trick breaks — you'd need `1/f`, which itself has no limit when `f→0`. **Indeterminate**, can't conclude either way in general. Special case worth knowing: if `h` happens to be **bounded** near `a` (even though it doesn't converge), then `f·h → 0` by the squeeze theorem (bounded × zero → zero). If `h` is unbounded, anything can happen.

### `f / h` and `h / f` — depends on whether `L = 0`

- **`f/h`, `L ≠ 0`:** suppose `f/h → Q`. If `Q ≠ 0`, then `h = f/(f/h)` is a quotient of two limit-having functions with a nonzero denominator-limit, so `h` would have a limit. Contradiction. **`f/h` has no limit.**
- **`h/f`, `L ≠ 0`:** since `1/f` has a limit `1/L ≠ 0`, this is just `h·(1/f)` — the "`f·h` with nonzero limit" case above. **No limit.**
- **If `L = 0`:** both are indeterminate for the same reason as the product case — isolating `h` needs dividing by something tending to `0`.

## 5. `f(g(x))` and `f(h(x))` — composition is not just "plug the limits in"

This case is a genuinely different animal from 1–4: it isn't covered by the arithmetic theorem at all, and the tempting shortcut can be wrong.

### `f(g(x))`

(Note: this is about whether the **limit** of the composition exists — a different question from whether the composition's **domain** is defined, which is the [[Math/calc/Simple Functions#2. Function composition|AND-of-domains rule from Simple Functions §2]].)

Even though `g(x) → M` and (separately) `lim(y→M) f(y) = L`, it does **not automatically follow** that `lim(x→a) f(g(x)) = L`. It's only guaranteed when **one** of these extra conditions holds:

- `f` is **continuous at `M`** — see [[Math/calc/Limits/Limit definition and calculation#2. Continuity|Limit definition and calculation §2]], or
- `g(x) ≠ M` for all `x` near `a` (excluding `a` itself).

Without one of those, `g(x)` can keep landing exactly on `y = M` infinitely often near `a`, picking up whatever `f` does right at `M` — and [[Math/calc/Limits/Limit definition and calculation#The limit doesn't care about `f(a)`|the limit of `f` at `M` doesn't have to match the actual value `f(M)`]]. In practice almost every function you'll meet here is continuous, so `f(g(x))` behaves as expected — just know the guarantee technically needs that extra condition.

### `f(h(x))` — no general rule

Since `h(x)` never settles down as `x→a`, there's no arithmetic theorem to invoke — the answer depends entirely on what `f` does with the range of values `h` passes through.

- **Generically, no limit:** if `f` doesn't "flatten out" the bad behavior, `f(h(x))` inherits `h`'s non-convergence.
- **But it CAN have a limit:** if `f` happens to be **constant** on the whole range `h` sweeps through, `f(h(x))` is that same constant near `a` regardless of how badly `h` misbehaves. E.g. `h(x) = sin(1/x)` has no limit at `x=0`, but `f(y) = 7` for every `y` gives `f(h(x)) = 7`, limit `7`.

So: **cases 1–4 give a clean rule (always / never / depends on a sign); case 5 has no shortcut — you have to look at the actual functions involved.**

## Summary table

| Combination | Has a limit? |
|---|---|
| `f ± c`, `f·c`, `f/c` | Always |
| `f ± x`, `f·x`, `f/x` | Always |
| `f ± g`, `f·g`, `f/g` (`M≠0`) | Always |
| `f ± h` | Never |
| `f·h`, `f/h`, `h/f` | Never if `L≠0`; indeterminate if `L=0` |
| `f(g(x))` | Yes if `f` continuous at `M` (usually true) — not automatic otherwise |
| `f(h(x))` | Generally no — but depends on `f`, no fixed rule |
