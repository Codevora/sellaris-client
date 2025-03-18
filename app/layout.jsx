"use client"
import { usePathname } from "next/navigation";


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
   <head>
    <title>Sellaris</title>
    <meta
     name="description"
     content="Solusi digital terbaik untuk segala kebutuhan bisnis anda."
    />
    <meta
     name="viewport"
     content="width=device-width, initial-scale=1"
    />
    <link
     rel="icon"
     href="/favicon.ico"
    />
   </head>
   <body className="h-full w-full">
    {!disableHeader.includes(pathname) && <Header />}
    {children}
    <LiveChat />
    {!disableFooter.includes(pathname) && <Footer />}
   </body>
  </html>
 );
}
