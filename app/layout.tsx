import type { Metadata } from "next";
import { Luckiest_Guy } from "next/font/google";
import "./globals.css";
const LuckiestGuy = Luckiest_Guy({ subsets: ["latin"], variable:"--font-luckiest-guy",weight: ["400"] });

export const metadata: Metadata = {
  title: "Muhammad Maaz",
  description: "My World",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${LuckiestGuy.variable}`}>
     
        {children}
       
      </body>
    </html>
  );
}
