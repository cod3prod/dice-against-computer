import { Noto_Sans_KR } from "next/font/google";
import type { Metadata } from "next";
import "@/styles/index.css";
import ReduxProvider from "@/components/redux-provider";

export const metadata: Metadata = {
  title: "Dice Against Computer",
  description: "Simple Dice Game",
  icons: {
    icon: "/favicon.ico",
  },
};

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={notoSansKR.className}>
      <body className="relative flex flex-col min-h-screen">
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
