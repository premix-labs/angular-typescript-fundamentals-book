# Book Plan

## Book Identity

- Working title: Angular Fundamentals with TypeScript
- Target reader: ผู้ที่รู้ TypeScript ตาม `typescript-fundamentals-for-frontend-book` หรือเทียบเท่าและยังไม่เคยใช้ Angular
- Final outcome: สร้าง ทดสอบ และ build Angular 22 SPA ที่เชื่อม REST API โดยเข้าใจ component/template/state/DI/reactive flow จริง
- Progressive/final project: `product-catalog-angular`
- Version baseline: Angular/CLI 22.0.6, Node.js 24 LTS, TypeScript 6.0.x and RxJS 7.8.x
- Core stack: standalone components, zoneless change detection, TypeScript strict, Signals, Signal Forms, `@Service()`/`inject()`, Angular Router, HttpClient, RxJS, Vitest, TestBed and MSW

## Teaching Promise

หลังจบเล่ม ผู้เรียนต้องทำได้จริง:

- อธิบาย bootstrap, component tree, template rendering, zoneless change detection และ dependency injection
- สร้าง standalone components ด้วย typed inputs/outputs, composition, control flow และ pipes
- แยก writable Signals, computed state, URL state และ asynchronous streams ตามเจ้าของข้อมูล
- สร้าง services ด้วย `@Service()`/`inject()` และเลือก provider scope โดยไม่ใช้ service เป็น global dump
- สร้าง Signal Forms พร้อม client/server validation และเข้าใจว่า Reactive Forms ยังพบได้ในโครงการเดิม
- อ่าน Observable และใช้ RxJS operators ที่จำเป็นกับ Router และ HttpClient
- สร้าง routes, layouts, detail/edit pages, query parameters และ lazy routes
- สร้าง typed API service ตรวจ unknown response และ map Problem Details
- จัดการ loading, empty, no-results, error, conflict และ not-found โดยไม่ให้ state ซ้อนกัน
- เขียน component, router, form และ HTTP tests ด้วย Angular testing APIs
- ตรวจ accessibility, performance และ production build

## Curriculum Rules

- ใช้ `product-catalog-angular` โปรเจกต์เดียวบท 3-27
- ไม่สอน TypeScript syntax ซ้ำ; recap เฉพาะ Angular-specific typing
- ใช้ standalone components และ zoneless change detection ตั้งแต่ต้น; NgModules/Zone.js เป็น existing-code context เท่านั้น
- สอน template/component contract ก่อน Signals และสอน state ก่อน services/DI
- Signals ใช้กับ synchronous local/derived/form state; Observable ใช้กับ Router/HTTP streams
- derived state ใช้ `computed`; `effect` ใช้เฉพาะ side effect กับ non-reactive external API
- Signal Forms จาก `@angular/forms/signals` เป็นเส้นทางหลัก; Reactive Forms/template-driven forms เป็น existing-code comparison เท่านั้น
- ใช้ `@Service()`/`inject()` สำหรับ root services ใหม่; อธิบาย `@Injectable` เมื่ออ่านโค้ดเดิมหรือจำเป็นต้องใช้ความสามารถเพิ่มเติม
- URL เป็น source of truth สำหรับ shareable filters; server data ไม่ถูกคัดลอกลง global signal store
- functional interceptors ใช้เฉพาะ cross-cutting HTTP behavior
- MSW เป็น standalone mock ที่ตรง `/api/v1/products`; focused HTTP tests ใช้ `HttpTestingController`
- ไม่เพิ่ม NgRx, Angular Material, SSR, auth, UI library หรือ commerce modules
- ทุก code-changing chapter มี progressive snapshot ที่ typecheck/test/build ตาม scope

## Scope

สอน: Angular 22/CLI, standalone and zoneless bootstrap, templates/binding/control flow/pipes, signal inputs/outputs, Signals/computed, `@Service()`/`inject()`, Signal Forms, lifecycle/effect/cleanup, RxJS essentials, Router/URL/lazy routes, HttpClient, runtime guards, Problem Details, functional interceptors, MSW, Vitest, TestBed, HttpTestingController, accessibility, performance and build

ไม่สอน: TypeScript fundamentals, NgModule-first design, Zone.js-based architecture, NgRx/external stores, Angular Material/CDK, SSR/hydration, auth/token storage, advanced RxJS operator authoring, custom form controls, E2E framework, deployment/cloud, Order/Payment/Customer/image upload

## Chapter Map

| Part                              | Chapters | Outcome                                                                                 |
| --------------------------------- | -------- | --------------------------------------------------------------------------------------- |
| Part 1: Angular Foundations       | 1-4      | สร้าง strict standalone zoneless Angular 22 project และเข้าใจ bootstrap/component model |
| Part 2: Components And Templates  | 5-9      | ใช้ binding, contracts, control flow, composition และ pipes                             |
| Part 3: State, DI And Forms       | 10-14    | ออกแบบ Signals, modern services/DI และ Signal Forms                                     |
| Part 4: Reactive Flow And Routing | 15-18    | จัดการ lifecycle, RxJS, Router, URL state และ lazy routes                               |
| Part 5: REST API Integration      | 19-23    | เชื่อม HttpClient และทำ product workflows ครบ                                           |
| Part 6: Quality And Delivery      | 24-27    | ทดสอบ accessibility/performance และ production build                                    |
| Part 7: Next Steps                | 28       | ประเมิน readiness และวาง learning path ต่อ                                              |

## Detailed Chapter Plan

| Chapter | Title                                                        | Learner Outcome                                                        | Product Catalog Milestone           |
| ------: | ------------------------------------------------------------ | ---------------------------------------------------------------------- | ----------------------------------- |
|       1 | รู้จัก Angular 22, SPA และ Framework Mental Model            | แยก component, template, service, Router, DI และ zoneless notification | วาง application/component map       |
|       2 | เตรียม Node.js 24, npm, Angular CLI 22 และ DevTools          | ตรวจ tooling/editor/browser โดยไม่ fix port หรือพึ่ง global CLI        | environment checklist ผ่าน          |
|       3 | สร้าง Angular 22 Project แบบ Standalone, Zoneless และ Strict | ใช้ pinned CLI, routing, 2025 file naming, Vitest, run/test/build      | สร้าง `product-catalog-angular`     |
|       4 | Bootstrap, Application Config และ Zoneless Rendering         | อ่าน main/config/root component, providers และ startup/rendering flow  | สร้าง application shell             |
|       5 | Standalone Components, Templates และ Styles                  | สร้าง/import component และแยก template/style                           | แยก list/card components            |
|       6 | Interpolation, Property Binding และ Event Binding            | bind text/property/class และรับ event แบบ type-safe                    | search/status controls ทำงาน        |
|       7 | Typed Inputs, Outputs และ Component Contracts                | ออกแบบ signal inputs/outputs และ one-way data flow                     | ส่ง Product และ command events      |
|       8 | Built-in Control Flow, Lists และ Tracking                    | ใช้ `@if`, `@for`, `@empty`, `@switch`, `track`                        | list/badge/empty state              |
|       9 | Composition, Content Projection และ Pipes                    | ประกอบ UI และ format display โดยไม่แก้ domain data                     | reusable panel/field/price UI       |
|      10 | Local State ด้วย Signals                                     | ใช้ `signal`, `set`, `update` โดยไม่ mutate                            | local search/filter controls        |
|      11 | Computed State, Ownership และ Immutable Updates              | ใช้ `computed` และ source of truth เดียว                               | visible products/summary            |
|      12 | Services, `@Service()`, `inject()` และ Provider Scope        | สร้าง root service แบบ Angular 22 และเลือก scope                       | in-memory `ProductCatalog` service  |
|      13 | Signal Forms และ Typed Form Model                            | ใช้ `form`, field binding และ typed submit model                       | create product form                 |
|      14 | Signal Form Validation, Server Errors และ Reuse              | map field/form/server errors และ reuse form; รู้บริบท Reactive Forms   | create/edit form component          |
|      15 | Zoneless Rendering, Lifecycle, Effects และ Cleanup           | เข้าใจ notification sources และแยก derivation/side effect/cleanup      | document/focus sync ที่มีเหตุผล     |
|      16 | Observable, RxJS และ AsyncPipe                               | เข้าใจ stream/subscription/operators/cleanup                           | async product stream                |
|      17 | Angular Router และ Application Layout                        | ใช้ routes, links, outlet, navigation, wildcard                        | list/create/not-found routes        |
|      18 | Route Params, Query Params และ Lazy Routes                   | narrow params, URL filters และ feature lazy loading                    | detail/edit + shareable filters     |
|      19 | Environment, HttpClient และ Product API Service              | configure base URL และทำ typed GET requests                            | mock/real product list/detail       |
|      20 | Runtime Validation, Problem Details และ Interceptors         | validate unknown/map errors/use functional interceptor                 | trustworthy API boundary            |
|      21 | Read Workflows และ Async UI States                           | compose Router/HTTP streams และ cancellation                           | list/detail loading/error/not-found |
|      22 | Create/Edit Mutations และ Submission State                   | POST/PUT, map validation, prevent duplicate submit                     | create/edit API workflows           |
|      23 | Stock, Status และ Architecture Checkpoint                    | PATCH, handle 400/404/409 และ refresh affected view                    | workflows ครบตาม contract           |
|      24 | Component Tests ด้วย Vitest และ TestBed                      | ทดสอบ rendered behavior และ Signals                                    | card/list/state tests               |
|      25 | Signal Form และ Router Tests                                 | ทดสอบ validation, submission, navigation และ URL filters               | form/route behavior tests           |
|      26 | HttpClient และ Integration Tests                             | ใช้ HttpTestingController และ deterministic mock flows                 | success/400/404/409 tests           |
|      27 | Accessibility, Performance และ Final Build                   | keyboard/focus/responsive QA และวัดก่อน optimize                       | test/build/browser plan ผ่าน        |
|      28 | เส้นทางต่อยอดหลัง Angular Fundamentals                       | เลือก auth, Material, NgRx, SSR หรือ deployment ตามเป้าหมาย            | readiness checklist                 |

## Progressive Strategy

```text
examples/
  progressive/chapter-03 ... chapter-27/
  final-product-catalog-angular/
```

- snapshot แสดง state หลังจบบท ไม่มี future code และ typecheck/test/build ตาม scope
- บท 24 เริ่ม relevant tests; บท 26-27 ต้องผ่าน tests ทั้งหมด
- chapter text self-contained; examples เป็น optional reference/verification
- browser behavior มี expected screen/state, interaction และ console/network checks
- versions pin ใน lockfile และอัปเดตหลัง compatibility validation เท่านั้น

## Final Project

- Pages: catalog list, product detail, create, edit and not-found
- Workflows: search/filter, create, replace product, update stock, activate/deactivate
- API: contract-compatible MSW default; optional `/api/v1/products` real API
- State: component Signals, Signal Forms, computed derivation, Router URL state and HttpClient/RxJS server streams
- Quality: runtime guards, Problem Details, accessible forms/states, lazy routes, component/router/HTTP tests
- Known limitations: no auth, pagination, image upload, orders/payments, SSR, offline sync or deployment

## Readiness Gate Before Writing A Chapter

1. TypeScript prerequisite ถูกสอนแล้วหรือไม่
2. บทนี้แก้ปัญหาอะไรใน progressive app
3. concept ใหม่มีไม่เกิน 1-2 กลุ่มหลักหรือไม่
4. state owner และ sync/async boundary ชัดหรือไม่
5. มี files/commands/expected UI/API results หรือไม่
6. มี unnecessary effect/subscription/mutation/unsafe assertion หรือไม่
7. snapshot typecheck/test/build ตาม scope หรือไม่
8. accessibility/error/loading states ครบตาม behavior หรือไม่
