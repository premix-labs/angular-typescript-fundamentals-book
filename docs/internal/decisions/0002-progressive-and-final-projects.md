# 0002 Progressive And Final Projects

## Status

Accepted

## Decision

- use `product-catalog-angular` from chapter 3-27
- components/templates before Signals, local state before DI, RxJS before Router/HTTP composition
- snapshots at `examples/progressive/chapter-NN`
- final at `examples/final-product-catalog-angular`
- default MSW mode; optional real API environment mode
- do not create final feature/core/shared folders before their responsibility exists

## Consequences

- each Angular abstraction solves a visible problem
- mock/real API parity becomes a required verification gate
- snapshots are duplicated intentionally as progressive evidence
