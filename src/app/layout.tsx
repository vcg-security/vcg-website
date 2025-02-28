import type { Metadata } from "next";
import { Geist, Geist_Mono, Titillium_Web } from "next/font/google";
import "./globals.css";
// import { Header2 } from "@/components/Header2";
import { Footer } from "@/components/Footer";
import { contentfulClient } from "@/config/contentful";
import { TypeHeaderMenuSkeleton } from "@/contentful-types";
import { Header3 } from "@/components/Header3";
import { Entry } from "contentful";
import { headers } from "next/headers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

const titilliumWeb = Titillium_Web({
  variable: "--font-titillium-web",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "VCG Security | Blindaje",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Verificar si estamos en la ruta not-found
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || "";
  const isNotFoundPage = pathname === "/_not-found";

  let menu: Entry<
    TypeHeaderMenuSkeleton,
    "WITHOUT_UNRESOLVABLE_LINKS",
    string
  > | null = null;

  // Solo obtener datos del menú si no estamos en la página not-found
  if (!isNotFoundPage) {
    try {
      const entries = await contentfulClient.getEntries<TypeHeaderMenuSkeleton>(
        {
          content_type: "headerMenu",
          "fields.internalName": "MenuPrincipal",
          include: 2,
        }
      );

      menu = entries.items[0];
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  }

  // Para la página not-found, renderizar solo el contenido sin header/footer
  if (isNotFoundPage) {
    return (
      <html lang="es">
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${titilliumWeb.variable} antialiased`}
        >
          {children}
        </body>
      </html>
    );
  }

  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${titilliumWeb.variable} antialiased`}
      >
        {menu && <Header3 menu={menu} />}
        {children}
        {menu && <Footer menu={menu} />}
      </body>
    </html>
  );
}
