import type { Metadata } from "next";
import { Geist, Geist_Mono, Titillium_Web } from "next/font/google";
import "./globals.css";
// import { Header2 } from "@/components/Header2";
import { Footer } from "@/components/Footer";
import { contentfulClient } from "@/config/contentful";
import { TypeHeaderMenuSkeleton } from "@/contentful-types";
import { Header3 } from "@/components/Header3";
import { Entry } from "contentful";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const titilliumWeb = Titillium_Web({
  variable: "--font-titillium-web",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "VCG Security | Blindaje",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let menu: Entry<
    TypeHeaderMenuSkeleton,
    "WITHOUT_UNRESOLVABLE_LINKS",
    string
  > | null = null;

  try {
    console.log("Fetching menu");
    const entries = await contentfulClient.getEntries<TypeHeaderMenuSkeleton>({
      content_type: "headerMenu",
      "fields.internalName": "MenuPrincipal",
      include: 2,
    });

    menu = entries.items[0];
  } catch (error) {
    console.error(error);
  }

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${titilliumWeb.variable} antialiased`}
      >
        {/* <Header2 menu={menu} /> */}
        <Header3 menu={menu} />
        {children}
        <Footer menu={menu} />
      </body>
    </html>
  );
}
