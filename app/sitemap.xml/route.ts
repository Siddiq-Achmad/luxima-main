// src/app/sitemap.xml/route.ts
import { NextResponse } from "next/server";
// import { categories } from "@/db/schema/categories";
// import { services } from "@/db/schema/services";
// import { portfolios } from "@/db/schema/portfolios";
// import { db } from "@/db/drizzle";
// import { posts } from "@/db/schema/posts";
import { StaticCategories } from "@/lib/data/category.mock";
import { systemLinks } from "@/lib/data/system-links.mock";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://luxima.id";

  // const [serviceList, portfolioList, categoryList, blogList] =
  //   await Promise.all([
  //     db.select({ slug: services.slug }).from(services),
  //     db.select({ slug: portfolios.slug }).from(portfolios),
  //     db.select({ slug: categories.slug }).from(categories),
  //     db.select({ slug: posts.slug }).from(posts),
  //   ]);

  // const urls = [
  //   ...serviceList.map((s) => `${baseUrl}/services/${s.slug}`),
  //   ...portfolioList.map((p) => `${baseUrl}/work/${p.slug}`),
  //   ...categoryList.map((c) => `${baseUrl}/category/${c.slug}`),
  //   ...blogList.map((b) => `${baseUrl}/blog/${b.slug}`),
  // ];

  const staticPages = [
    `${baseUrl}/`,
    `${baseUrl}/about`,
    `${baseUrl}/work`,
    `${baseUrl}/services`,
    `${baseUrl}/blog`,
    `${baseUrl}/gallery`,
    `${baseUrl}/contact`,
    `${baseUrl}/category`,
    `${baseUrl}/tags`,
    `${baseUrl}/pricing`,
    `${baseUrl}/privacy`,
    `${baseUrl}/terms`,

  ];

  const StaticCategoryPages = StaticCategories.map(
    (category) => `${baseUrl}/categories/${category.slug}`
  );

  // 1. System links (selalu tampil pertama)
  const systemLinkUrls = systemLinks.map((link) => link.url);

  // 2. Gabungkan semua URL
  const allUrls = [
    ...staticPages,
    ...systemLinkUrls,
    // ...urls,
    ...StaticCategoryPages,
  ];

  const urlsXml = allUrls
    .map(
      (url) => `
  <url>
    <loc>${url}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>`
    )
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
>
  ${urlsXml}
</urlset>`;

  return new NextResponse(sitemap.trim(), {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
