# Validation Report

## Summary

- Status: Angular 22 curriculum/documentation scaffold created; manuscript/examples not ready
- Last validated: 2026-07-13
- Validator: Codex with `tutorial-book-auditor`
- Curriculum score: 10/10 for the Angular 22 planned scope and sequencing
- Release score: Not scored because Angular chapters/examples are not implemented
- Main risk: only starter outlines 0-3 exist; no progressive/final Angular project

## Curriculum Audit

- [x] TypeScript prerequisite is explicit and not duplicated
- [x] Angular/CLI 22.0.6 and its compatible Node/TypeScript/RxJS baseline are explicit
- [x] standalone and zoneless component/template fundamentals precede state, DI, Router and HTTP
- [x] Signals, URL state and Observable streams have separate ownership rules
- [x] stable Signal Forms are the single primary form path; Reactive Forms are existing-code context
- [x] `@Service()`/`inject()` are the default service path for new Angular 22 code
- [x] RxJS is introduced before Router/HttpClient stream composition
- [x] runtime validation and Problem Details protect the HTTP boundary
- [x] MSW keeps development standalone; HttpTestingController owns focused HTTP tests
- [x] required success/error/loading/accessibility/test states are documented
- [x] NgRx/Material/Auth/SSR/commerce scope is excluded
- [x] plan, API contract, final structure, style, decisions and QA are synchronized

## Commands

| Command                            | Result | Notes                                                                            |
| ---------------------------------- | ------ | -------------------------------------------------------------------------------- |
| `npm install`                      | Passed | 620 packages installed; lockfile name synchronized                               |
| `npm run build`                    | Passed | Astro built 6 pages; Pagefind indexed 4 content pages                            |
| `npm run lint`                     | Passed | ESLint found no errors                                                           |
| `npm audit --audit-level=moderate` | Passed | 0 vulnerabilities                                                                |
| Angular 22 CLI scaffold dry run    | Passed | CLI 22.0.6 accepted standalone, strict, zoneless, Vitest and 2025 naming options |
| plan/status sync check             | Passed | 28 chapter titles match exactly                                                  |

## Open Findings

| Severity | Finding                                            | Location                                  | Status |
| -------- | -------------------------------------------------- | ----------------------------------------- | ------ |
| High     | no progressive snapshots                           | `examples/progressive/`                   | Open   |
| High     | no final Angular 22 app/tests or lockfile evidence | `examples/final-product-catalog-angular/` | Open   |
| High     | chapters 4-28 not written                          | `src/content/chapters/`                   | Open   |
| Medium   | starter chapters 1-3 are outlines                  | `src/content/chapters/01-03`              | Open   |

## Next Validation

1. scaffold final Angular 22 learner project and pin exact compatible versions
2. create chapter 3 progressive snapshot
3. write chapters 1-4 fully and run a beginner walkthrough
4. run learner-project tests/build/browser checks after examples exist
