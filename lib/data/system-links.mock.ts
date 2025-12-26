// src/data/system-links.mock.ts

export interface SystemLink {
  name: string;
  description: string;
  url: string;
  subdomain: string;
}

export const systemLinks: SystemLink[] = [
  {
    name: "App",
    description: "Aplikasi Wedding Listing & Directory",
    url: "https://app.luxima.id",
    subdomain: "app",
  },
  {
    name: "Admin Panel",
    description: "Panel admin untuk pengelolaan data dan user",
    url: "https://admin.luxima.id",
    subdomain: "admin",
  },
  {
    name: "Billing System",
    description: "Sistem Billing dan Pembayaran",
    url: "https://billing.luxima.id",
    subdomain: "billing",
  },
  {
    name: "CRM",
    description: "Sistem Manajemen Customer Relationship Management",
    url: "https://crm.luxima.id",
    subdomain: "crm",
  },
  {
    name: "Cloud",
    description: "Layanan internal cloud storage",
    url: "https://cloud.luxima.id",
    subdomain: "cloud",
  },
  {
    name: "Dashboard",
    description: "Dashboard utama untuk pengelolaan data",
    url: "https://dash.luxima.id",
    subdomain: "dash",
  },
  {
    name: "Docs",
    description: "Dokumentasi Layanan, Panduan dan dokumentasi lainnya",
    url: "https://docs.luxima.id",
    subdomain: "docs",
  },
  {
    name: "Payment",
    description: "Sistem Pembayaran dan Transaksi",
    url: "https://payment.luxima.id",
    subdomain: "payment",
  },
  {
    name: "Projects",
    description: "Project Management System",
    url: "https://project.luxima.id",
    subdomain: "project",
  },
  {
    name: "Monitoring",
    description: "Sistem Monitoring dan Audit Layanan",
    url: "https://mon.luxima.id",
    subdomain: "mon",
  },
  {
    name: "Analytics",
    description: "Website informasi analytics dan statistik",
    url: "https://stats.luxima.id",
    subdomain: "stats",
  },
  {
    name: "Studio",
    description: "Website informasi studio, pricelist, dan booking",
    url: "https://studio.luxima.id",
    subdomain: "studio",
  },
  {
    name: "Storage",
    description: "Storage file (MinIO/S3)",
    url: "https://s3.luxima.id",
    subdomain: "s3",
  },
];
