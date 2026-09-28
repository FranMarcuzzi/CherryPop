import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PopSpin — Ruletas personalizadas",
  description: "Crea campañas, personaliza premios y ejecuta sorteos con una ruleta de marca.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}
