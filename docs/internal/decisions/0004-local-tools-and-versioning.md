# 0004 Local Tools And Versioning

## Status

Accepted

## Decision

- use Node.js 24 LTS; the initial validated minimum for Angular CLI 22 is Node.js 24.15.0
- start the learner project with Angular/CLI 22.0.6, TypeScript 6.0.x and RxJS 7.8.x
- invoke the pinned CLI explicitly for project creation; do not require a global Angular CLI
- exact Angular/CLI/TypeScript/RxJS/MSW/test versions are pinned by `package-lock.json`
- use `npm ci` for repeatable validation
- validate and record the Angular 22 create command, including standalone, strict, routing, zoneless, Vitest and 2025 file naming, before chapter 3 is released
- upgrade only after tests/build/browser/contract checks pass across snapshots
- read development URLs from CLI output; do not fix a port in prose or configuration

Validated chapter 3 scaffold command:

```powershell
npx --yes @angular/cli@22.0.6 new product-catalog-angular --routing --style=css --standalone --strict --zoneless --test-runner=vitest --file-name-style-guide=2025 --skip-git
```

The same command works in PowerShell and Bash. Omit `--yes` if the learner should confirm the temporary CLI download interactively.

## Consequences

- manuscript commands remain reproducible
- the Astro book-site dependencies are not presented as learner-project dependencies
- dependency upgrade is a curriculum change, not metadata-only work
