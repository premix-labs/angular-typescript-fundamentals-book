# Release Checklist

## Curriculum And Chapters

- [ ] 28 chapter titles match plan/status/navigation
- [ ] every lesson has goals, prerequisites, changed files, expected results, common errors and checkpoint
- [ ] no future libraries/files in progressive snapshots
- [ ] learner can complete chapters without opening examples or another book repository
- [ ] TypeScript prerequisite is explicit and not silently retaught inconsistently

## Angular Data Flow

- [ ] Angular/CLI 22.0.7 and compatible Node/TypeScript versions are pinned in the learner lockfile
- [ ] standalone architecture is consistent; no accidental NgModule-first detour
- [ ] zoneless behavior is explicit; no lesson depends on Zone.js assumptions
- [ ] inputs are read-only and outputs represent explicit events
- [ ] derived Signal state uses `computed`, not synchronization effects
- [ ] every effect/subscription has a real reason and correct cleanup/ownership
- [ ] service provider scope and lifetime are intentional
- [ ] local, URL and HTTP stream ownership are separated
- [ ] no global writable store duplicates Router or HttpClient data
- [ ] RxJS operators are introduced only after their problem is visible

## Forms, API And UI

- [ ] Signal Forms match request contracts and use `@angular/forms/signals`
- [ ] Reactive Forms are labeled existing-code context and do not create a parallel canonical form
- [ ] client/server validation and duplicate submit behavior are correct
- [ ] MSW and real API match `api-contract.md`
- [ ] runtime guards validate external data
- [ ] 400/404/409/network/cancellation behaviors are distinct
- [ ] routes and query parameters survive refresh/share
- [ ] loading/empty/no-results/error/not-found states do not overlap
- [ ] no fixed Angular/API port or committed real secret

## Verification

- [ ] every code-changing chapter snapshot builds and tests for its scope
- [ ] final `npm ci`, tests and production build pass
- [ ] component, form, router, HTTP and integration tests cover required behaviors
- [ ] browser plan passes desktop/tablet/mobile
- [ ] accessibility and security checklists pass
- [ ] dependency audit has no unresolved moderate-or-higher advisory

## Book Site

- [ ] book `npm run build` and `npm run lint` pass
- [ ] frontmatter/navigation/internal links are valid
- [ ] README/validation report match current scope
