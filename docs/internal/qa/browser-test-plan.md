# Browser Test Plan

## Viewports

- Desktop: 1440 x 900
- Tablet: 768 x 1024
- Mobile: 390 x 844

## Flows

- direct load/refresh for list, detail, create, edit and unknown route
- search/filter URL state, back/forward and shared URL
- list loading/empty/no-results/error/retry
- valid/invalid create and edit including 400/409
- detail 404, stock update and activate/deactivate
- offline/network error and request cancellation
- keyboard-only navigation/form submission

## Assertions

- no overlapping content or horizontal page scroll
- dynamic states do not resize controls unpredictably
- focus placement and active navigation are coherent
- no duplicate request side effects caused by StrictMode
- console has no uncaught error in happy path
- mock and real modes show equivalent behavior
