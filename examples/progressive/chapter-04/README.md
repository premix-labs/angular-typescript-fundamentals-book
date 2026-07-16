# Chapter 04 Snapshot

สถานะของ `product-catalog-angular` หลังจบบทที่ 4:

- bootstrap ผ่าน `bootstrapApplication`
- root providers รวมใน `appConfig`
- Router ถูกเตรียมไว้ด้วย routes ว่าง
- root component แสดง semantic application shell
- zoneless notification model ถูกอธิบายโดยยังไม่เพิ่ม state ก่อนบทที่สอน

## Verify

```powershell
npm ci
npm test -- --no-watch
npm run build
```

คำสั่งเดียวกันใช้ได้ใน Bash หน้าจอต้องมี `header`, `main`, `footer` และหัวข้อ `Product Catalog`
