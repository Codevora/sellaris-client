import Link from "next/link";

import {FaGooglePlay} from "react-icons/fa";
import {FaApple} from "react-icons/fa6";
import {FaInstagram} from "react-icons/fa6";
import {FaFacebookF} from "react-icons/fa";
import {FaYoutube} from "react-icons/fa6";

const SocialMedia = [
 {
  name: "Instagram",
  path: "/",
  icon: <FaInstagram />,
 },
 {
  name: "Facebook",
  path: "/",
  icon: <FaFacebookF />,
 },
 {
  name: "Youtube",
  path: "/",
  icon: <FaYoutube />,
 },
];

const Download = [
 {
  name: "Google Play",
  path: "/",
  description: "GET IN ON",
  icon: <FaGooglePlay />,
 },
 {
  name: "App Store",
  path: "/",
  description: "Download on the",
  icon: <FaApple />,
 },
];

const ServiceLinks = [
 {
  name: "Point of Sale",
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
  name: "Laporan Analisis Bisnis",
  path: "/",
 },
];

const BusinessLinks = [
 {
  name: "Coffeeshop",
  path: "/",
 },
 {
  name: "Retail Store",
  path: "/",
 },
 {
  name: "Food & Beverages",
  path: "/",
 },
 {
  name: "Barbershop",
  path: "/",
 },
 {
  name: "Accessories Shop",
  path: "/",
 },
];

const OtherLinks = [
 {
  name: "About Us",
  path: "/",
 },
 {
  name: "Hardware",
  path: "/",
 },
 {
  name: "Blog",
  path: "/",
 },
 {
  name: "Terms & Conditions",
  path: "/",
 },
 {
  name: "Privacy Policy",
  path: "/",
 },
];

const Footer = () => {
 return (
  <div className="flex flex-col justify-between h-[600px] py-[50px] px-[400px] bg-primary">
   <div className="flex justify-center w-full px-5">
    <div className="flex flex-col gap-10">
     <Link href="/">
      <button className="text-5xl text-tertiary italic font-raleway font-bold">
       $ELLARIS
      </button>
     </Link>
     <div className="flex flex-col gap-2">
      {Download.map((item, index) => (
       <Link
        href={item.path}
        key={index}
        className="flex items-center gap-2 bg-tertiary text-primary px-4 py-2 rounded-lg text-2xl">
        {item.icon}
        <div className="flex flex-col">
         <p className="text-[10px]">{item.description}</p>
         <h1 className="text-lg font-semibold">{item.name}</h1>
        </div>
       </Link>
      ))}
     </div>
    </div>
    <div className="flex flex-col gap-10 ml-auto">
     <h1 className="text-xl font-black text-tertiary">Sellaris Service</h1>
     <div className="flex flex-col gap-2 text-lg">
      {ServiceLinks.map((item, index) => (
       <Link
        href={item.path}
        key={index}
        className="text-tertiary font-semibold hover:text-white/80">
        {item.name}
       </Link>
      ))}
     </div>
    </div>{" "}
    <div className="flex flex-col gap-10 ml-auto">
     <h1 className="text-xl font-black text-tertiary">Business Solution</h1>
     <div className="flex flex-col gap-2 text-lg">
      {BusinessLinks.map((item, index) => (
       <Link
        href={item.path}
        key={index}
        className="text-tertiary font-semibold hover:text-white/80">
        {item.name}
       </Link>
      ))}
     </div>
    </div>{" "}
    <div className="flex flex-col gap-10 ml-auto">
     <h1 className="text-xl font-black text-tertiary">More</h1>
     <div className="flex flex-col gap-2 text-lg">
      {OtherLinks.map((item, index) => (
       <Link
        href={item.path}
        key={index}
        className="text-tertiary font-semibold hover:text-white/80">
        {item.name}
       </Link>
      ))}
     </div>
    </div>
   </div>
   <div className="flex flex-col gap-4 justify-center items-center">
    <div className="flex justify-center gap-2">
     {SocialMedia.map((item, index) => (
      <Link
       href={item.path}
       key={index}
       className="text-2xl text-primary bg-tertiary p-2 rounded-full">
       {item.icon}
      </Link>
     ))}
    </div>
    <hr className="w-full border border-tertiary" />
    <p className="text-tertiary">Copyright © 2024 Sellaris. All Rights Reserved</p>
   </div>
  </div>
 );
};

export default Footer;
