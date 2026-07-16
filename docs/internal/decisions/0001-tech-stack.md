# 0001 Tech Stack

## Status

Accepted

## Decision

- Angular 22.0.7 and Angular CLI 22.0.7 are the learner-project baseline
- Node.js 24 LTS, TypeScript 6.0.x and RxJS 7.8.x are the compatible toolchain baseline
- Angular CLI workspace, 2025 file naming, standalone components, zoneless change detection and TypeScript strict mode
- Signals/computed for synchronous local and derived state
- stable Signal Forms from `@angular/forms/signals` for new forms
- Reactive Forms only as existing-code and migration context; no parallel form implementation
- `@Service()` and `inject()` for new root services; `@Injectable` only when advanced provider behavior requires it
- Angular Router and HttpClient with functional providers/interceptors
- RxJS only where asynchronous stream composition is required
- Angular CLI default Vitest setup, TestBed and `HttpTestingController`
- MSW for standalone development/integration contract behavior
- plain provided CSS; no UI component framework

Exact versions must be pinned in the learner-project `package-lock.json`. Released commands must use the validated Angular CLI version and never depend on a floating `latest` tag. Patch upgrades require the full compatibility gate before changing the manuscript baseline.

## Consequences

- learners see current Angular fundamentals without NgModule, NgRx, Material or SSR complexity
- Signals, Signal Forms and RxJS have explicit, non-overlapping teaching responsibilities
- Angular 22 concepts are taught directly instead of presenting zoneless rendering or Signal Forms as optional future features
- version upgrades require full snapshot/final-project validation
