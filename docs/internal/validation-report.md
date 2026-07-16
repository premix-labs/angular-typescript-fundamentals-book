# Validation Report

## Summary

- Status: Part 1 and chapter 5 implemented; progressive Angular snapshots 3-5 verified
- Last validated: 2026-07-16
- Validator: Codex with `tutorial-book-auditor`, learner-project tests and rendered frontend QA
- Curriculum score: 10/10 for the planned Angular 22 scope and sequencing
- Release score: Not scored because chapters 6-28 and the final project are not implemented
- Main risk: later chapters cannot yet be completed or verified against progressive/final examples

## Curriculum Audit

- [x] TypeScript prerequisite is explicit and not duplicated
- [x] Angular/CLI 22.0.7 and compatible Node/TypeScript/RxJS versions are pinned in chapter 3-5 lockfiles
- [x] standalone and zoneless mental models precede state, DI, Router and HTTP
- [x] chapters 1-5 explain concepts before learner actions
- [x] chapter 3-5 snapshots contain no future feature code
- [x] chapter 5 introduces component composition and style scoping before binding and contracts
- [x] Signal Forms remain the canonical form path in the plan and API contract
- [x] local, URL and HTTP stream ownership rules remain separated
- [x] accessibility and security constraints remain explicit

## Commands

| Command                                    | Result | Notes                                                                  |
| ------------------------------------------ | ------ | ---------------------------------------------------------------------- |
| book `npm run verify:enterprise`           | Passed | format, lint, Astro check, tests, audit, build, links, E2E and budgets |
| book `npm run check`                       | Passed | 46 source files; no diagnostics                                        |
| book `npm run test`                        | Passed | 8 passed, 4 conditionally skipped                                      |
| book `npm run check:book`                  | Passed | 6 content files and 36 required files                                  |
| book `npm run audit:book`                  | Passed | no automated findings across 6 content files                           |
| book `npm run build`                       | Passed | 8 pages built; 6 content pages indexed                                 |
| book `npm run test:e2e:chromium`           | Passed | 17 passed, 1 desktop-only condition skipped                            |
| book `npm run test:visual`                 | Passed | 4 reviewed desktop/mobile baselines                                    |
| book `npm run test:performance`            | Passed | production home page stayed within budget                              |
| book `npm audit --audit-level=moderate`    | Passed | 0 vulnerabilities                                                      |
| snapshots 3-5 `npm test -- --no-watch`     | Passed | each snapshot: 1 file, 2 tests                                         |
| snapshots 3-5 `npm run build`              | Passed | production bundles generated                                           |
| learner `npm audit --audit-level=moderate` | Passed | one low Vite/esbuild advisory; no moderate-or-higher finding           |
| chapter 5 rendered browser QA              | Passed | desktop and 390x844; no console error or horizontal overflow           |

## Browser Evidence

- Runtime URL was supplied only to the authoring QA command; no port is fixed in the manuscript or Angular configuration
- chapter 5 rendered the `App -> ProductList -> ProductCard` composition and `Mechanical Keyboard` content
- desktop width/scroll width were both 1440 pixels; mobile width/scroll width were both 390 pixels
- no framework error overlay, blank screen, console warning or console error was observed
- book E2E checks covered reader navigation, search, theme, responsive drawer and metadata separation
- accessibility scans found no serious or critical violation on the home and intro pages

## Open Findings

| Severity | Finding                                                                              | Location                                  | Status   |
| -------- | ------------------------------------------------------------------------------------ | ----------------------------------------- | -------- |
| High     | progressive snapshots 6-27 do not exist                                              | `examples/progressive/`                   | Open     |
| High     | final Angular 22 app/tests do not exist                                              | `examples/final-product-catalog-angular/` | Open     |
| High     | chapters 6-28 are not written                                                        | `src/content/chapters/`                   | Open     |
| Medium   | chapters 1-5 need an independent beginner walkthrough                                | `src/content/chapters/01-05`              | Open     |
| Low      | Vite's nested `esbuild` has a Windows dev-server file-read advisory in learner locks | chapter 3-5 lockfiles                     | Accepted |

The remaining low advisory is in the local development toolchain, not the production bundle or book website. Angular 22.0.7 is retained as the verified teaching baseline; it will be reviewed again when the upstream dependency graph changes.

## Next Validation

1. run an independent beginner walkthrough for chapters 1-5 and resolve any inferred steps
2. implement chapters/snapshots 6-9 without introducing Signals before chapter 10
3. scaffold the final Angular 22 project using the verified pinned package set
4. re-run book-site and learner-project verification after Part 2
