"use client";
import {useEffect, useState} from "react";

import Link from "next/link";

const Nav = [
 {name: "Service", path: "/"},
 {name: "Price", path: "/"},
 {name: "Contact Us", path: "/"},
 {name: "Blog", path: "/"},
 {name: "Business Solution", path: "/"},
 {name: "Extras", path: "/"},
];

const Header = () => {
 const [header, setHeader] = useState(false);

 const scrollHeader = () => {
  if (window.scrollY >= 20) {
   setHeader(true);
  } else {
   setHeader(false);
  }
 };

 const handleScroll = () => {
  if (window.scrollY >= 20) {
   setIsScrolled(true);
  } else {
   setIsScrolled(false);
  }
 };

 useEffect(() => {
  window.addEventListener("scroll", scrollHeader, handleScroll);
  return () => {
   window.addEventListener("scroll", scrollHeader);
   window.removeEventListener("scroll", handleScroll);
  };
 });

 return (
  <header
   className={`fixed z-10 top-0 flex justify-center items-center px-[300px] py-4 p-4 w-full left-0 transition-all duration-500 my-auto
    ${
     header
      ? " w-[100%] px-6 py-6 bg-tertiary/70 backdrop-blur-lg shadow-md"
      : "bg-[#357266] px-6 py-8 "
    }`}>
   <Link
    href="/"
    className={`text-4xl font-bold font-raleway italic transition-all duration-500 ${
     header ? "text-primary" : "text-tertiary"
    }`}>
    $ELLARIS
   </Link>
   <nav
    className={` flex items-center gap-6 transition-all duration-500 font-semibold ml-auto ${
     header ? ` text-primary` : ` text-tertiary`
    }`}>
    {Nav.map((item) => (
     <Link
      key={item.name}
      href={item.path}>
      {item.name}
     </Link>
    ))}
   </nav>
   <div className="flex gap-6 ml-auto items-center">
    <nav
     className={`font-semibold transition-all duration-500 ${
      header ? "text-primary" : "text-tertiary"
     }`}>
     <Link href="/">Sign In</Link>
    </nav>
    <nav
     className={`rounded-full font-semibold transition-all duration-500 px-4 py-2 ${
      header
       ? "text-tertiary bg-primary hover:opacity-80"
       : "text-primary bg-tertiary hover:bg-tertiary/80"
     }`}>
     <Link href="/demo">Request a Demo</Link>
    </nav>
   </div>
  </header>
 );
};

export default Header;
