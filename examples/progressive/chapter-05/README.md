# Chapter 05 Snapshot

สถานะของ `product-catalog-angular` หลังจบบทที่ 5:

- root `App` import และแสดง `ProductList`
- `ProductList` import และแสดง `ProductCard`
- แต่ละ component แยก class, template และ scoped stylesheet
- `src/styles.css` เก็บเฉพาะ global document defaults
- product ยังเป็น static markup; binding และ component contracts อยู่ในบทถัดไป

## Verify

```powershell
npm ci
npm test -- --no-watch
npm run build
```

คำสั่งเดียวกันใช้ได้ใน Bash หน้าจอต้องมี `Product Catalog`, `Products` และการ์ด `Mechanical Keyboard`
