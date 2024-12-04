import type { Metadata } from "next";
import "@/styles/index.css";

export const metadata: Metadata = {
  title: "Dice Against Computer",
  description: "Simple Dice Game",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="relative flex flex-col min-h-screen">{children}</body>
    </html>
  );
}
