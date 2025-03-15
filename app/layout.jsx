"use client";
import {usePathname} from "next/navigation";

import Header from "@/components/ui/Header";
import "./globals.css";
import Footer from "@/components/ui/Footer";
import LiveChat from "@/components/ui/LiveChat";

const disableHeader = ["/sign-in", "/sign-up"];
const disableFooter = ["/sign-in", "/sign-up"];

export default function RootLayout({children}) {
 const pathname = usePathname();
 return (
  <html lang="en">
   <body className="h-full w-full">
    {!disableHeader.includes(pathname) && <Header />}
    {children}
    <LiveChat />
    {!disableFooter.includes(pathname) && <Footer />}
   </body>
  </html>
 );
}
