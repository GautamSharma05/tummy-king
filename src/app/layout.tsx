import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";

const poppins = Poppins({
  weight: ["400", "700"],
  style: "normal",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tummy King - Quality At Your Door",
  description: "Best cooks and best delivery guys all at your service. Hot tasty food will reach you in 60 minutes. Service Available 24/7 in Ajmer Only",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
      <Header />
        {children}</body>
    </html>
  );
}
