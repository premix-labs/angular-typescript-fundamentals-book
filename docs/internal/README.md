# Book Documentation Standard

เอกสารนี้ควบคุมการพัฒนา `Angular Fundamentals with TypeScript`

## Source Of Truth

- `book-plan.md`: audience, scope, 28 chapters and milestones
- `api-contract.md`: HTTP, routes, URL/reactive state, errors and tests
- `final-project-structure.md`: final files and responsibilities
- `manuscript-status.md`: chapter/example readiness
- `style-guide.md`: teaching/code/naming rules
- `release-checklist.md`: release gates
- `validation-report.md`: latest evidence and blockers
- `decisions/` and `qa/`: architecture/browser/accessibility/security controls

## Workflow

1. Read plan, contract, style guide and chapter milestone
2. Build/update a snapshot without future code
3. Write a self-contained lesson that explains concepts before use
4. Run tests/build for the touched scope
5. Run browser/accessibility checks for UI behavior
6. Update manuscript status and validation report

Curriculum-ready does not mean release-ready. Do not mark chapters ready without synchronized, verified examples.
