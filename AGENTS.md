# Agent Instructions

## Scope

These instructions apply to this repository.

## Book Workflow

- Use `skills/tutorial-book-auditor` for reviews or edits to chapters, examples, README, internal docs, QA checklists and teaching quality.
- Read the skill and `references/teaching-principles.md` before scoring or rewriting lessons.
- This book teaches Angular fundamentals with TypeScript to learners who know the curriculum in `typescript-fundamentals-for-frontend-book` or equivalent.
- Use the pinned Angular 22 toolchain, TypeScript strict mode, standalone components, zoneless change detection and one SPA project: `product-catalog-angular`.
- Teach templates and component contracts before Signals; teach local state before services and dependency injection.
- Use Signals for synchronous local/derived UI state and RxJS for asynchronous streams from Router and HttpClient.
- Use stable Signal Forms from `@angular/forms/signals` as the primary form approach. Explain Reactive Forms as existing-code context without building a parallel implementation.
- Use `@Service()` with `inject()` for new root services. Explain `@Injectable` only when its extra capabilities are required or when reading existing code.
- Teach Angular 22's zoneless notification model; do not explain rendering through Zone.js assumptions.
- Use Angular Router with URL search parameters as the source of truth for shareable filters.
- Use functional HTTP interceptors, runtime validation for external JSON and Problem Details error mapping.
- Use a contract-compatible MSW mock API for standalone development and `HttpTestingController` for focused HTTP tests.
- Use the Angular CLI default Vitest setup and TestBed for behavior-focused tests.
- Do not introduce NgRx, Angular Material, NgModule-first architecture, authentication, SSR, Order, Payment or image upload.
- Do not fix development or API ports. Use URLs printed by the runtime and environment configuration.
- Keep chapters self-contained and examples optional verification/reference sources.

## Documentation Standard

- Keep planning and quality documents under `docs/internal`.
- Keep plan, API/UI contract, final structure, decisions, QA, manuscript status and validation report synchronized.
- Every code-changing chapter requires a matching buildable progressive snapshot.
- Update validation evidence when meaningful verification runs or a blocker is found.

## Verification

- Run `npm run build` after book/docs/frontmatter/template changes.
- Run `npm run lint` after JavaScript, TypeScript, Astro or lint changes.
- Run `npm audit --audit-level=moderate` after dependency changes.
- Run learner-project typecheck, tests, build and browser checks when examples exist or change.
- Report unimplemented or unverified example gates honestly.

## Git

- Do not commit or push unless explicitly asked.
- Do not revert user changes unless explicitly asked.
