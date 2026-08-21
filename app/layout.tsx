import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const image = `${protocol}://${host}/og.png`;

  return {
    title: "HireNest 香港｜尋找合適工作機會",
    description: "精選香港本地及遙距職位，清晰透明的求職與招聘體驗。",
    openGraph: {
      title: "HireNest 香港｜下一份好工作，由這裡開始。",
      description: "精選香港本地及遙距職位，清晰透明的求職與招聘體驗。",
      locale: "zh_HK",
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: "HireNest 香港招聘" }],
    },
    twitter: { card: "summary_large_image", images: [image] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-HK">
      <body>{children}</body>
    </html>
  );
}
