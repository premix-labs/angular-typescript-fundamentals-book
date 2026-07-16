export const siteConfig = {
  title: 'Angular Fundamentals with TypeScript',
  shortTitle: 'Angular Fundamentals',
  tagline: 'Build a Structured SPA',
  description:
    'เรียน Angular 22 ผ่าน Product Catalog SPA ด้วย standalone components, zoneless rendering, Signals, Signal Forms, Router, REST API และ automated tests',
  lang: 'th',
  ogImage: '',
  defaultTheme: 'light' as 'dark' | 'light',
  github: '',
  statusLabel: 'กำลังพัฒนา',
  lastReviewed: 'กรกฎาคม 2026',

  hero: {
    eyebrow: '28 บทสำหรับผู้เริ่มต้น Angular 22',
    prefix: 'สร้าง',
    accent: 'Angular SPA',
    suffix: 'อย่างเข้าใจ',
    subtitle:
      'พัฒนา Product Catalog ด้วย standalone components, Signals, Signal Forms, Dependency Injection, Router, HttpClient และ Vitest',
  },

  extraStats: [
    { value: '7', label: 'Parts' },
    { value: '22', label: 'Angular' },
    { value: 'Strict', label: 'TypeScript' },
  ],

  features: [
    {
      icon: 'component',
      title: 'Angular 22 mental model',
      desc: 'เข้าใจ components, templates, zoneless rendering และ data flow ก่อนเพิ่ม abstractions',
    },
    {
      icon: 'activity',
      title: 'Predictable state',
      desc: 'แยก Signals, URL state และ asynchronous streams ตามเจ้าของข้อมูล',
    },
    { icon: 'route', title: 'Real SPA workflows', desc: 'List, detail, create, edit และ shareable URL filters' },
    { icon: 'test-tube-2', title: 'Focused tests', desc: 'Vitest, TestBed, Router และ HttpTestingController' },
  ],

  footer: {
    text: 'Angular Fundamentals with TypeScript',
  },
} as const;
