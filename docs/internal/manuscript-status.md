# Manuscript Status

## Current Status

- Stage: Part 1 and chapter 5 implemented; chapters 6-28 not started
- Last updated: 2026-07-16
- Release target: Not scheduled
- Main blocker: chapters 6-28, progressive snapshots 6-27 and final Angular project are not implemented
- Chapter count: 28

## Chapter Status

| Chapter | Title                                                        | Status       | Example synced | Verification              |
| ------: | ------------------------------------------------------------ | ------------ | -------------- | ------------------------- |
|       1 | รู้จัก Angular 22, SPA และ Framework Mental Model            | Needs review | N/A            | Manual review             |
|       2 | เตรียม Node.js 24, npm, Angular CLI 22 และ DevTools          | Needs review | N/A            | CLI verified              |
|       3 | สร้าง Angular 22 Project แบบ Standalone, Zoneless และ Strict | Needs review | Yes            | Test/build passed         |
|       4 | Bootstrap, Application Config และ Zoneless Rendering         | Needs review | Yes            | Test/build/browser passed |
|       5 | Standalone Components, Templates และ Styles                  | Needs review | Yes            | Test/build/browser passed |
|       6 | Interpolation, Property Binding และ Event Binding            | Not started  | No             | Not run                   |
|       7 | Typed Inputs, Outputs และ Component Contracts                | Not started  | No             | Not run                   |
|       8 | Built-in Control Flow, Lists และ Tracking                    | Not started  | No             | Not run                   |
|       9 | Composition, Content Projection และ Pipes                    | Not started  | No             | Not run                   |
|      10 | Local State ด้วย Signals                                     | Not started  | No             | Not run                   |
|      11 | Computed State, Ownership และ Immutable Updates              | Not started  | No             | Not run                   |
|      12 | Services, `@Service()`, `inject()` และ Provider Scope        | Not started  | No             | Not run                   |
|      13 | Signal Forms และ Typed Form Model                            | Not started  | No             | Not run                   |
|      14 | Signal Form Validation, Server Errors และ Reuse              | Not started  | No             | Not run                   |
|      15 | Zoneless Rendering, Lifecycle, Effects และ Cleanup           | Not started  | No             | Not run                   |
|      16 | Observable, RxJS และ AsyncPipe                               | Not started  | No             | Not run                   |
|      17 | Angular Router และ Application Layout                        | Not started  | No             | Not run                   |
|      18 | Route Params, Query Params และ Lazy Routes                   | Not started  | No             | Not run                   |
|      19 | Environment, HttpClient และ Product API Service              | Not started  | No             | Not run                   |
|      20 | Runtime Validation, Problem Details และ Interceptors         | Not started  | No             | Not run                   |
|      21 | Read Workflows และ Async UI States                           | Not started  | No             | Not run                   |
|      22 | Create/Edit Mutations และ Submission State                   | Not started  | No             | Not run                   |
|      23 | Stock, Status และ Architecture Checkpoint                    | Not started  | No             | Not run                   |
|      24 | Component Tests ด้วย Vitest และ TestBed                      | Not started  | No             | Not run                   |
|      25 | Signal Form และ Router Tests                                 | Not started  | No             | Not run                   |
|      26 | HttpClient และ Integration Tests                             | Not started  | No             | Not run                   |
|      27 | Accessibility, Performance และ Final Build                   | Not started  | No             | Not run                   |
|      28 | เส้นทางต่อยอดหลัง Angular Fundamentals                       | Not started  | No             | Not run                   |

Status values: `Not started`, `Draft`, `Needs review`, `Ready`, `Released`

## Open Work

| Priority | Work                                                          | Exit Condition                         |
| -------- | ------------------------------------------------------------- | -------------------------------------- |
| High     | scaffold final Angular 22 project and pin compatible versions | typecheck/test/build scripts pass      |
| High     | write chapters 6-9 with progressive snapshots                 | Part 2 learner walkthrough passes      |
| Medium   | run an independent beginner walkthrough for chapters 1-5      | no unexplained step remains            |
| Medium   | create MSW contract fixtures                                  | mock/real contract parity checks exist |
| Low      | review pinned learner dependency advisories                   | low advisories resolved or accepted    |
