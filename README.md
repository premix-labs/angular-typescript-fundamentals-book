# Angular Fundamentals with TypeScript

หนังสือ Angular 22 พื้นฐานสำหรับผู้ที่รู้ TypeScript แล้วและต้องการสร้าง SPA โดยเข้าใจ component model, templates, Signals, dependency injection, forms, routing, REST API และ testing อย่างเป็นลำดับ

ผู้เรียนจะสร้าง `product-catalog-angular` ด้วย Angular CLI 22, standalone components และ zoneless change detection โปรเจกต์เริ่มจาก local data ก่อนเชื่อม contract-compatible mock API และสามารถสลับไป `ProductCatalog.Api` ผ่าน environment configuration

Learner-project baseline คือ Angular/CLI 22.0.7, Node.js 24 LTS, TypeScript 6.0.x และ RxJS 7.8.x เวอร์ชันจริงจะถูกตรึงด้วย `package-lock.json`; dependencies ใน root repository เป็นของเว็บไซต์หนังสือ Astro ไม่ใช่ของแอป Angular ผู้เรียน

## Current Development Milestone

- บท 1-4 ของ Part 1 และบท 5 ของ Part 2 เขียนครบในสถานะ needs review
- progressive snapshots บท 3-5 ตรึง Angular/CLI 22.0.7 และผ่าน Vitest/production build
- บท 6-28 และ final Product Catalog project ยังอยู่ในแผนพัฒนา

## Learning Scope

- standalone components, templates, binding, inputs, outputs และ composition
- built-in control flow, lists, tracking และ pipes
- Signals, computed state, immutable updates และ state ownership
- services ด้วย `@Service()`/`inject()`, dependency injection และ provider scope
- Signal Forms จาก `@angular/forms/signals` และ client/server validation
- zoneless rendering, lifecycle, effects และ cleanup
- RxJS essentials, AsyncPipe และ Signals interoperability
- Angular Router, route/query parameters และ lazy routes
- HttpClient, runtime response validation, Problem Details และ functional interceptors
- Vitest, TestBed และ `HttpTestingController`
- accessibility, performance และ production build

หนังสือไม่สอน TypeScript พื้นฐานซ้ำ, NgRx, Angular Material, NgModule-first/Zone.js-first architecture, authentication, SSR, Order, Payment, image upload หรือ Backend API โดยกล่าวถึง Reactive Forms เฉพาะเพื่อให้ผู้เรียนอ่านโครงการเดิมได้

## Documentation Standard

เอกสารพัฒนาอยู่ใน `docs/internal` และใช้ `skills/tutorial-book-auditor` สำหรับ audit และปรับปรุงคุณภาพเนื้อหา

## Book Site Commands

Requires Node.js matching:

```text
^22.22.3 || ^24.16.0 || >=26.3.0
```

| Command                            | Purpose                               |
| ---------------------------------- | ------------------------------------- |
| `npm install`                      | ติดตั้ง dependencies                  |
| `npm run dev`                      | เปิดเว็บไซต์หนังสือ                   |
| `npm run build`                    | สร้าง static site และ search index    |
| `npm run lint`                     | ตรวจ Astro, TypeScript และ JavaScript |
| `npm audit --audit-level=moderate` | ตรวจ dependency vulnerabilities       |

บทอยู่ใน `src/content/chapters` และสร้างได้ด้วย `npm run new-chapter -- "ชื่อบท"` ทุกบทลงมือทำต้องมี expected UI/API result, common errors และ checkpoint ที่ตรวจได้จริง
