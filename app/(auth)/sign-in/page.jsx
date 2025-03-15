"use client";

import {useState} from "react";
import dynamic from "next/dynamic";
import "react-phone-input-2/lib/style.css";
import Link from "next/link";

const PhoneInput = dynamic(() => import("react-phone-input-2"), {ssr: false});

const Header = () => {
 return (
  <header className="fixed z-10 top-0 flex  items-center  py-4 p-4 w-full left-0 bg-primary shadow-lg">
   <div className="flex justify-between items-center w-full">
    <Link
     href="/"
     className="text-4xl font-bold font-raleway italic transition-all duration-500 text-tertiary">
     $ELLARIS
    </Link>
    <div className="flex gap-4">
     <button className="text-white font-semibold">Help</button>
     <Link
      href="/sign-up"
      className="text-white font-semibold">
      Sign Up
     </Link>
    </div>
   </div>
  </header>
 );
};

const Login = () => {
 const [name, setName] = useState("");

 const [password, setPassword] = useState("");

 const handleSubmit = (e) => {
  e.preventDefault();
  // Validasi dan pengiriman data
  console.log({name, password});
 };
 return (
  <div className="flex items-center justify-center h-screen bg-primary">
   <Header />
   <form
    onSubmit={handleSubmit}
    className="bg-white/70 backdrop-blur-lg p-6 rounded-lg shadow-md w-96 flex flex-col items-center justify-center gap-2">
    <h2 className="text-3xl font-bold text-primary mb-4">Login</h2>
    <div className="w-full">
     <input
      placeholder="Email or Phone Number"
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      required
      className="mt-1 block w-full border border-gray-300 bg-white focus:outline-none rounded-md p-2"
     />
    </div>

    <div className="w-full">
     <input
      placeholder="Password"
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
      className="mt-1 block w-full border border-gray-300 bg-white focus:outline-none rounded-md p-2"
     />
    </div>

    <button
     type="submit"
     className="w-full bg-primary text-white p-2 rounded cursor-pointer mt-2">
     Daftar
    </button>
    <div className="mb-4 flex items-center justify-center w-full mt-2">
     <h1>
      Doesn't have an account?{" "}
      <span className="text-blue-400 hover:underline">
       <Link href="/sign-up">Sign Up</Link>
      </span>
     </h1>
    </div>
   </form>
  </div>
 );
};

export default Login;
