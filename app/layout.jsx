<<<<<<< HEAD
"use client";
import {usePathname} from "next/navigation";
=======
"use client"
import { usePathname } from "next/navigation";
>>>>>>> 65b3a4c079f893b434398ba737249e1dc647740b

import Header from "@/components/ui/Header";
import "./globals.css";
import Footer from "@/components/ui/Footer";
import LiveChat from "@/components/ui/LiveChat";

const disableHeader = ["/sign-in", "/sign-up"];
const disableFooter = ["/sign-in", "/sign-up"];

export default function RootLayout({children}) {
<<<<<<< HEAD
 const pathname = usePathname();
=======
    const pathname = usePathname()
>>>>>>> 65b3a4c079f893b434398ba737249e1dc647740b
 return (
  <html lang="en">
   <body className="h-full w-full">
    {!disableHeader.includes(pathname) && <Header />}
    {children}
<<<<<<< HEAD
    <LiveChat />
=======
>>>>>>> 65b3a4c079f893b434398ba737249e1dc647740b
    {!disableFooter.includes(pathname) && <Footer />}
   </body>
  </html>
 );
}
