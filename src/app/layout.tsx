import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ouvran Golf",
  description: "Ouvran Golf. Driver headcover coming soon.",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Ouvran Golf",
    description: "Ouvran Golf. Driver headcover coming soon.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-dvh flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto bg-white">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
