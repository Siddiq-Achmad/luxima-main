// /app/robots.txt/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl =  process.env.NEXT_PUBLIC_APP_URL || "https://luxima.id";

  const content = `
User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml
`;

  return new NextResponse(content.trim(), {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
