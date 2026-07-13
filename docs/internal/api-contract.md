# API And UI Contract

## Runtime Modes

- Default: MSW intercepts the HTTP contract so the learner app is standalone
- Optional real API: environment configuration points to `ProductCatalog.Api`
- Components must depend on `ProductApi`, not on mock/real transport details
- Never fix Angular dev-server or API ports; use runtime output and environment values
- Mock worker is enabled intentionally in development only

## HTTP Contract

- Base route: `/api/v1/products`
- Success: `application/json`
- Errors: `application/problem+json`
- IDs: positive integers
- Dates: ISO 8601 UTC strings

| Method | Route | Success | Expected Errors |
| --- | --- | --- | --- |
| `GET` | `/api/v1/products` | `200` list | `400` invalid filter |
| `GET` | `/api/v1/products/{id}` | `200` item | `404` |
| `POST` | `/api/v1/products` | `201` + Location | `400`, `409` duplicate SKU |
| `PUT` | `/api/v1/products/{id}` | `200` item | `400`, `404`, `409` |
| `PATCH` | `/api/v1/products/{id}/stock` | `204` | `400`, `404` |
| `PATCH` | `/api/v1/products/{id}/status` | `204` | `400`, `404` |

ไม่มี DELETE; ใช้ `isActive=false` เพื่อเก็บ product record

## Product Types

```ts
type StockLevel = 'OutOfStock' | 'LowStock' | 'InStock';

interface ProductResponse {
  id: number;
  sku: string;
  name: string;
  description: string | null;
  price: number;
  stockQuantity: number;
  stockLevel: StockLevel;
  isActive: boolean;
  createdAtUtc: string;
  updatedAtUtc: string | null;
}
```

- TypeScript interfaces do not validate runtime JSON
- HTTP response enters the application as `unknown`, passes runtime guards and is mapped to trusted app types
- price/stock/date presentation stays in pipes/formatters, not HTTP mapping

## Requests

- `CreateProductRequest`: SKU, name, nullable description, price, stock quantity
- `UpdateProductRequest`: SKU, name, nullable description, price, stock quantity, active flag
- `UpdateProductStockRequest`: absolute `stockQuantity`
- `ChangeProductStatusRequest`: `isActive`

Rules: SKU normalized/unique case-insensitively, name required, price finite and greater than zero, stock integer at least zero

## Problem Details

Frontend must handle:

- `400`: field validation errors mapped into typed Reactive Form controls/summary
- `404`: route-level not-found screen
- `409`: conflict banner/form summary, especially duplicate SKU
- unexpected/network/runtime validation failure: recoverable generic error with retry where appropriate
- cancelled request: not shown as a user-facing failure

Do not render server detail with `innerHTML` or expose stack traces in UI

## Application Routes

| Route | Screen |
| --- | --- |
| `/` | redirect to `/products` |
| `/products` | list/search/filter |
| `/products/new` | create form |
| `/products/:productId` | detail |
| `/products/:productId/edit` | edit form |
| `**` | not-found |

Product feature routes are lazy loaded after chapter 18.

## URL State

List filters live in query parameters:

```text
/products?search=keyboard&isActive=true&stockLevel=LowStock
```

- missing parameters use defaults
- invalid enum/boolean parameters are normalized predictably
- search typing uses replace semantics when appropriate to avoid noisy history
- URL is the source of truth; do not mirror query parameters into an unrelated global service

## Reactive Data Rules

- synchronous local interaction state belongs to component Signals
- values derivable from Signals use `computed`, not `effect` synchronization
- route/query parameters and HTTP responses remain Observable streams where composition/cancellation matters
- templates prefer AsyncPipe over manual long-lived subscriptions
- changing filters/route IDs uses `switchMap` so stale HTTP requests are replaced
- HTTP data is not copied into an application-wide writable Signal store in this fundamentals book
- mutations refresh only the affected list/detail view; optimistic updates are not required

## Required UI States

- loading/skeleton, empty catalog, no filter results, success, validation error, conflict, not-found and retryable error
- mutation pending disables duplicate submission but preserves readable feedback
- focus moves to validation summary/first invalid field when appropriate
- states are explicit and mutually coherent; loading and error content do not overlap

## Required Tests

- list loading/empty/success/error
- URL filters generate correct request and survive refresh
- detail valid/not-found
- valid create/edit and resulting navigation
- client validation prevents invalid request
- server 400 maps field errors; 409 displays conflict
- stock/status requests refresh affected data
- cancelled request does not show generic error
- `HttpTestingController` verifies method, full URL and request body
- MSW handlers match real API routes, status codes and body shapes
