# Luxima Main Website

## Deskripsi Singkat

Website utama **Luxima** yang dibangun menggunakan **Next.js 16 (App Router)** dengan fokus pada performa, skalabilitas, dan UI modern. Project ini menggunakan **Tailwind CSS v4**, **shadcn/ui**, serta terintegrasi dengan **Supabase** sebagai backend service.

---

## 🚀 Tech Stack

### Frontend
- **Next.js 16.1.1** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **shadcn/ui** (Radix UI)
- **Framer Motion / Motion**
- **Lucide Icons & HugeIcons**

### State, Form & Validation
- **React Hook Form**
- **Zod**
- **@hookform/resolvers**
- **next-safe-action**

### Backend & Database
- **Supabase** (Auth, Database, Storage)
- **Drizzle ORM**
- **PostgreSQL**

### Auth & Email
- **Better Auth**
- **Resend** (Email service)

### Utility & UI Helper
- clsx
- class-variance-authority
- tailwind-merge
- sonner (toast)
- next-themes

---

## 📦 Struktur Project (High Level)

```
.
├─ app/                # App Router (Next.js)
│  ├─ (auth)/          # Route autentikasi
│  ├─ (default)/       # Halaman publik default
│  ├─ dashboard/       # Halaman terproteksi
│  ├─ layout.tsx
│  └─ page.tsx
│
├─ components/         # Reusable UI components (shadcn/ui)
├─ lib/                # Helper, utils, config
├─ hooks/              # Hooks
├─ db/                 # Drizzle schema & config
├─ styles/             # Global styles
├─ public/             # Static assets
├─ drizzle.config.ts
├─ tailwind.config.ts
└─ next.config.js
```




## ⚙️ Instalasi & Setup

### 1. Clone Repository
```bash
git clone https://github.com/Siddiq-Achmad/luxima-main.git
cd luxima-main
```

### 2. Install Dependencies
```bash
npm install
# atau
pnpm install
# atau
bun install
```

### 3. Environment Variables
Buat file `.env` berdasarkan kebutuhan:

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
DATABASE_URL=
RESEND_API_KEY=
BETTER_AUTH_URL=http://localhost:3000
BETTER_AUTH_SECRET=
NEXT_PUBLIC_UMAMI_URL=
NEXT_PUBLIC_UMAMI_WEBSITE_ID=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
VERCEL_PROJECT_PRODUCTION_URL=

```

> Pastikan Supabase project sudah dibuat dan database PostgreSQL aktif.

---

## ▶️ Menjalankan Project

### Development
```bash
npm run dev
```
Akses di: `http://localhost:3000`

### Build Production
```bash
npm run build
npm run start
```

---

## 🎨 UI & Styling

- Menggunakan **Tailwind CSS v4** sebagai utility-first CSS
- Komponen UI berbasis **shadcn/ui** dan **Radix UI**
- Support dark mode menggunakan **next-themes**
- Animasi menggunakan **motion**

---

## 🔐 Autentikasi

- Autentikasi menggunakan **Supabase Auth**
- Mendukung session berbasis JWT
- Integrasi email verifikasi dan notifikasi melalui **Resend**

---

## 🗄️ Database & ORM

- Database: **PostgreSQL (Supabase)**
- ORM: **Drizzle ORM**
- Migrasi database menggunakan **drizzle-kit**

Contoh menjalankan migrasi:
```bash
npx drizzle-kit migrate
```

---

## 🧪 Linting

```bash
npm run lint
```

---

## 📄 Scripts

| Script | Deskripsi |
|------|----------|
| dev | Menjalankan mode development |
| build | Build aplikasi untuk production |
| start | Menjalankan hasil build |
| lint | Menjalankan ESLint |

---

## 📌 Catatan

- Project ini menggunakan **App Router**, bukan Pages Router
- Direkomendasikan menggunakan **Node.js 20+** atau **Bun**
- Pastikan environment variable tidak di-commit ke repository

---

## Kontribusi

Jika Anda ingin berkontribusi pada proyek ini, silakan buat pull request ke repositori ini. Jangan ragu untuk memberikan saran atau pertanyaan melalui issue.

## Dukungan

Jika Anda membutuhkan dukungan atau bantuan dengan proyek ini, silakan hubungi kami melalui email atau media sosial kami.

## Terima kasih

Terima kasih atas minat Anda dalam proyek ini. Semoga proyek ini bermanfaat untuk Anda dan komunitas pengembang.

---

## 🧑‍💻 Author

**Luxima Team**  
Website & SaaS Platform

---

## 📜 License

Project ini bersifat private dan tidak untuk distribusi publik tanpa izin.

