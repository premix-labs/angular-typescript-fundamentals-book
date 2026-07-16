# Learner Project Snapshots

ตัวอย่างใน directory นี้เป็นหลักฐานสำหรับผู้เขียนและเป็น reference ทางเลือกสำหรับผู้เรียน เนื้อหาแต่ละบทต้องมีคำสั่งและโค้ดครบโดยไม่บังคับให้เปิด snapshot

## Current Snapshots

| Path                     | State                                                |
| ------------------------ | ---------------------------------------------------- |
| `progressive/chapter-03` | Angular 22 workspace หลังสร้างและลด CLI starter      |
| `progressive/chapter-04` | semantic application shell และ verified startup flow |

แต่ละ snapshot ใช้ lockfile ของตนเองและตรวจด้วย:

```powershell
npm ci
npm test -- --no-watch
npm run build
```

คำสั่งเดียวกันใช้ได้ใน Bash ห้ามคัดลอก future feature code เข้า snapshot ก่อนบทที่สอน concept นั้น
