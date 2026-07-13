# Final Project Structure

Final example อยู่ที่ `examples/final-product-catalog-angular`

```text
examples/
  final-product-catalog-angular/
    README.md
    angular.json
    package.json
    package-lock.json
    tsconfig.json
    src/
      main.ts
      styles.css
      environments/
        environment.ts
        environment.development.ts
      app/
        app.config.ts
        app.routes.ts
        app.ts
        core/
          api/
            api-error.ts
            problem-details.ts
            product-contract.ts
            product-guards.ts
          http/
            api-error-interceptor.ts
        shared/ui/
          async-state/
          field-error/
          page-shell/
        features/products/
          data-access/
            product-api.ts
          models/
            product.ts
          components/
            product-card/
            product-filters/
            product-form/
          pages/
            create-product-page/
            edit-product-page/
            product-detail-page/
            product-list-page/
          product.routes.ts
      mocks/
        browser.ts
        handlers.ts
        mock-data.ts
      test-providers.ts
```

Angular `.spec.ts` files live beside the unit under test. Integration workflow specs may live under `src/app/testing/` when they span multiple feature units.

## Responsibility Map

| Location                        | Responsibility                                   | Must Not Do                                       |
| ------------------------------- | ------------------------------------------------ | ------------------------------------------------- |
| `app.config.ts`                 | compose root providers                           | เก็บ product business/UI state                    |
| `app.routes.ts`                 | root navigation and lazy boundary                | เรียก HTTP โดยตรง                                 |
| `core/api`                      | external contracts, guards and normalized errors | render UI                                         |
| `core/http`                     | cross-cutting functional interceptors            | เก็บ page-specific state                          |
| `shared/ui`                     | reusable presentational/interaction units        | import product feature internals                  |
| `features/products/data-access` | Product HttpClient calls                         | own unrelated global state                        |
| `features/products/components`  | focused product UI/contracts                     | navigate or fetch without explicit responsibility |
| `features/products/pages`       | compose route streams, state and workflows       | รวมทุก implementation ในไฟล์เดียว                 |
| `mocks`                         | contract-compatible development handlers         | diverge จาก API contract                          |

## Progressive Rules

- บท 3-9 เริ่ม simple structure; ไม่สร้าง final folders ล่วงหน้า
- บท 3 สร้าง Angular 22 standalone/strict/zoneless workspace ด้วย 2025 file naming และ Vitest
- บท 12 เพิ่ม `@Service()`/`inject()` หลังเห็น component responsibility problem
- บท 13-14 เพิ่ม Signal Form และ validation โดยไม่สร้าง Reactive Form คู่ขนาน
- บท 17 เพิ่ม root router/pages; บท 18 แยก lazy product routes
- บท 19 เพิ่ม HttpClient/MSW; บท 20 เพิ่ม guards/interceptor
- บท 24-26 เพิ่ม test infrastructure ตามชนิดของ test
- final project ไม่มี NgRx, Angular Material, auth, SSR หรือ generated API SDK

## Learner Commands

```powershell
npm ci
npm test -- --no-watch
npm run build
```

```bash
npm ci
npm test -- --no-watch
npm run build
```

ใช้ script เพิ่มเติมสำหรับ lint/typecheck เฉพาะเมื่อถูกสร้างและตรวจแล้วใน learner project; ห้ามอ้างคำสั่งที่ไม่มีจริงใน `package.json`/Angular workspace

## Runtime Verification

- default mock mode starts without backend dependency
- real API mode changes only environment configuration
- list/detail/create/edit/stock/status routes work after refresh
- loading/empty/error/not-found states do not overlap
- keyboard/focus/mobile checks pass
- console has no uncaught error in happy path
- production build contains no real secret, mock worker or hard-coded local URLโดยไม่ตั้งใจ
