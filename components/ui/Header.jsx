"use client";
import {useEffect, useState} from "react";

// Icon
import {IoIosArrowDown} from "react-icons/io";
import {RxHamburgerMenu} from "react-icons/rx";
import {IoIosClose} from "react-icons/io";

import Link from "next/link";

const MoreLink = [
 {
  name: "About Us",
  path: "/",
 },
 {
  name: "FAQ",
  path: "/",
 },
 {name: "Career", path: "/"},
];

const BusinessSolutionsLink = [
 {name: "Coffeeshop", path: "/"},
 {name: "Retail Shop", path: "/"},
 {name: "Food & Beverages", path: "/"},
 {name: "Barbershop", path: "/"},
 {name: "Accessories Shop", path: "/"},
];

const OfflineSalesLink = [
 {
  name: "Point of Sales",
  path: "/",
 },
 {
  name: "Cashier APP",
  path: "/",
 },
 {
  name: "Inventory Management",
  path: "/",
 },
 {
  name: "Table Management",
  path: "/",
 },
 {
  name: "Business Report",
  path: "/",
 },
];

const OnlineSalesLink = [
 {
  name: "Online Store",
  path: "/",
 },
];

const ServiceFlyout = ({isVisible, onMouseEnter, onMouseLeave}) => {
 if (!isVisible) return null;

 return (
  <div
   onMouseEnter={onMouseEnter}
   onMouseLeave={onMouseLeave}
   className="absolute z-10 w-[500px] h-[300px] top-[64px] left-[325px] flex flex-col py-5">
   <div className="p-5 w-full flex gap-10 bg-tertiary border border-primary text-black rounded-lg shadow-md">
    <div className="flex flex-col gap-5">
     <h1 className="font-bold text-gray-400">Offline Sale</h1>
     <div className="flex flex-col gap-3 text-primary">
      {OfflineSalesLink.map((item, index) => (
       <Link
        href={item.path}
        key={index}
        className="hover:underline">
        {item.name}
       </Link>
      ))}
     </div>
    </div>
    <div className="flex flex-col gap-5">
     <h1 className="font-bold text-gray-400">Online Sale</h1>
     <div className="flex flex-col gap-3 text-primary">
      {OnlineSalesLink.map((item, index) => (
       <Link
        href={item.path}
        key={index}
        className="hover:underline">
        {item.name}
       </Link>
      ))}
     </div>
    </div>
   </div>
  </div>
 );
};

const BusinessFlyout = ({isVisible, onMouseEnter, onMouseLeave}) => {
 if (!isVisible) return null;

 return (
  <div
   onMouseEnter={onMouseEnter}
   onMouseLeave={onMouseLeave}
   className="absolute z-10 w-[300px] h-[300px] top-[64px] left-[635px] flex flex-col py-5">
   <div className="p-5 w-full flex gap-10 bg-tertiary border border-primary text-black rounded-lg shadow-md">
    <div className="flex flex-col gap-5">
     <div className="flex flex-col gap-3 text-primary">
      {BusinessSolutionsLink.map((item, index) => (
       <Link
        href={item.path}
        key={index}
        className="hover:underline">
        {item.name}
       </Link>
      ))}
     </div>
    </div>
   </div>
  </div>
 );
};

const MoreFlyout = ({isVisible, onMouseEnter, onMouseLeave}) => {
 if (!isVisible) return null;

 return (
  <div
   onMouseEnter={onMouseEnter}
   onMouseLeave={onMouseLeave}
   className="absolute z-10 w-[200px] h-[200px] top-[64px] left-[800px] flex flex-col py-5">
   <div className="p-5 w-full flex gap-10 bg-tertiary border border-primary text-black rounded-lg shadow-md">
    <div className="flex flex-col gap-5">
     <div className="flex flex-col gap-3 text-primary">
      {MoreLink.map((item, index) => (
       <Link
        href={item.path}
        key={index}
        className="hover:underline">
        {item.name}
       </Link>
      ))}
     </div>
    </div>
   </div>
  </div>
 );
};

const Dropdown1 = ({isVisible}) => {
 if (!isVisible) return null;

 return (
  <div className="flex flex-col gap-5 bg-gray-200 p-5 w-full">
   <h1 className="text-xl font-semibold text-gray-400">Offline Sale</h1>
   {OfflineSalesLink.map((item, index) => (
    <Link
     href={item.path}
     key={index}
     className=" text-lg text-primary font-semibold">
     {item.name}
    </Link>
   ))}
   <h1 className="text-xl font-semibold text-gray-400">Online Sale</h1>
   {OnlineSalesLink.map((item, index) => (
    <Link
     href={item.path}
     key={index}
     className=" text-lg text-primary font-semibold">
     {item.name}
    </Link>
   ))}
  </div>
 );
};

const Dropdown2 = ({isVisible}) => {
 if (!isVisible) return null;

 return (
  <div className="flex flex-col gap-5 bg-gray-200 p-5 w-full">
   {BusinessSolutionsLink.map((item, index) => (
    <Link
     href={item.path}
     key={index}
     className=" text-lg text-primary font-semibold">
     {item.name}
    </Link>
   ))}
  </div>
 );
};

const Dropdown3 = ({isVisible}) => {
 if (!isVisible) return null;

 return (
  <div className="flex flex-col gap-5 bg-gray-200 p-5 w-full">
   {MoreLink.map((item, index) => (
    <Link
     href={item.path}
     key={index}
     className=" text-lg text-primary font-semibold">
     {item.name}
    </Link>
   ))}
  </div>
 );
};

{
 /*Mobile Popup*/
}
const MobilePopup = ({isVisible, onClose}) => {
 const [openDropdown, setOpenDropdown] = useState(false);
 const [openDropdown2, setOpenDropdown2] = useState(false);
 const [openDropdown3, setOpenDropdown3] = useState(false);
 const toggleDropdownOpen = () => {
  setOpenDropdown(!openDropdown);
  openDropdown2 && setOpenDropdown2(false);
  openDropdown3 && setOpenDropdown3(false);
 };

 const toggleDropdown2Open = () => {
  setOpenDropdown2(!openDropdown2);
  openDropdown && setOpenDropdown(false);
  openDropdown3 && setOpenDropdown3(false);
 };

 const toggleDropdown3Open = () => {
  setOpenDropdown3(!openDropdown3);
  openDropdown && setOpenDropdown(false);
  openDropdown2 && setOpenDropdown2(false);
 };

 if (!isVisible) return null;

 return (
  <div className="fixed inset-0 z-50 flex items-center h-screen justify-end bg-black/50">
   <div className="overflow-y-auto flex flex-col gap-5 bg-white h-full w-[350px] shadow-lg">
    {/*Header*/}
    <div className="flex flex-col gap-2 items-center">
     <div className="flex justify-between px-4 w-full pt-2 items-center">
      <Link
       href="/"
       className="font-bold text-primary text-4xl italic">
       $ELLARIS
      </Link>
      <button onClick={onClose}>
       <IoIosClose
        onClick={onClose}
        className="text-primary size-14"
       />
      </button>
     </div>
     <hr className="w-full border border-primary" />
    </div>

    {/*Body*/}
    <div className="flex flex-col gap-5 bg-white h-screen">
     <button
      onClick={toggleDropdownOpen}
      className="flex justify-between px-4 items-center text-xl text-primary">
      Service
      <IoIosArrowDown />
     </button>
     <Dropdown1 isVisible={openDropdown} />
     <Link
      href="/"
      className=" text-xl text-primary px-4">
      Price
     </Link>
     <Link
      href="/"
      className=" text-xl text-primary px-4">
      Contact Us
     </Link>
     <Link
      href="/"
      className=" text-xl text-primary px-4">
      Blog
     </Link>
     <button
      onClick={toggleDropdown2Open}
      className="flex justify-between px-4 items-center text-xl text-primary">
      Business Solution
      <IoIosArrowDown />
     </button>
     {<Dropdown2 isVisible={openDropdown2} />}
     <button
      onClick={toggleDropdown3Open}
      className="flex justify-between px-4 items-center text-xl text-primary">
      More <IoIosArrowDown />
     </button>
     {<Dropdown3 isVisible={openDropdown3} />}
    </div>
    {/*Footer*/}
    <div className="flex flex-col items-center gap-2 w-full pb-[100px] px-3">
     <Link
      href="/"
      className="text-primary text-xl">
      Sign In
     </Link>{" "}
     <Link
      href="/"
      className="text-tertiary text-xl px-4 py-2 rounded-full bg-primary w-full flex justify-center">
      Request Demo
     </Link>
    </div>
   </div>
  </div>
 );
};

{
 /*MobileNav*/
}
const MobileNav = () => {
 const [isOpen, setIsOpen] = useState(false);

 const toggleClose = () => {
  setIsOpen(false);
 };

 const toggleOpen = () => {
  setIsOpen(!isOpen);
 };

 return (
  <div className="flex ">
   <button
    onClick={toggleOpen}
    className="p-2 bg-white rounded-lg animate-in slide-in-from-left">
    <RxHamburgerMenu className="size-5 text-primary" />
   </button>
   {isOpen && <MobilePopup isVisible={toggleOpen} onClose={toggleClose}/>}
  </div>
 );
};

{
 /*DesktopNav*/
}
const Header = () => {
 const [isFlyoutVisible, setFlyoutVisible] = useState(false);
 const [isFlyoutBVisible, setFlyoutBVisible] = useState(false);
 const [isFlyoutCVisible, setFlyoutCVisible] = useState(false);
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
   className={`fixed z-10 top-0 flex justify-between lg:justify-center items-center lg:px-[100px] 2xl:px-[300px] py-4 p-4 w-full left-0 transition-all duration-500 my-auto
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
    className={`hidden lg:flex items-center gap-6 transition-all duration-500 font-semibold ml-auto ${
     header ? ` text-primary` : ` text-tertiary`
    }`}>
    <button
     onMouseEnter={() => setFlyoutVisible(true)}
     onMouseLeave={() => setFlyoutVisible(false)}
     className="flex justify-center items-center">
     Service <IoIosArrowDown className=" mt-1" />
    </button>

    <ServiceFlyout
     isVisible={isFlyoutVisible}
     onMouseEnter={() => setFlyoutVisible(true)}
     onMouseLeave={() => setFlyoutVisible(false)}
    />

    <Link href="/">Price</Link>
    <Link href="/">Contact Us</Link>
    <Link href="/">Blog</Link>
    <button
     onMouseEnter={() => setFlyoutBVisible(true)}
     onMouseLeave={() => setFlyoutBVisible(false)}
     className="flex justify-center items-center">
     Business Solution <IoIosArrowDown className=" mt-1" />
    </button>
    <BusinessFlyout
     isVisible={isFlyoutBVisible}
     onMouseEnter={() => setFlyoutBVisible(true)}
     onMouseLeave={() => setFlyoutBVisible(false)}
    />
    <button
     onMouseEnter={() => setFlyoutCVisible(true)}
     onMouseLeave={() => setFlyoutCVisible(false)}
     className="flex justify-center items-center">
     More <IoIosArrowDown className=" mt-1" />
    </button>
    <MoreFlyout
     isVisible={isFlyoutCVisible}
     onMouseEnter={() => setFlyoutCVisible(true)}
     onMouseLeave={() => setFlyoutCVisible(false)}
    />
   </nav>
   <div className="hidden lg:flex gap-6 ml-auto items-center">
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
   <div className="lg:hidden">
    <MobileNav />
   </div>
  </header>
 );
};

export default Header;
