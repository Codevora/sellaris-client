"use client";

import {useState} from "react";
import dynamic from "next/dynamic";
import "react-phone-input-2/lib/style.css";
import Link from "next/link";

const PhoneInput = dynamic(() => import("react-phone-input-2"), {ssr: false});

const Header = () => {
 return (
<<<<<<< HEAD
  <header className="fixed z-10 top-0 flex  items-center py-4 p-4 w-full left-0 bg-primary shadow-lg">
=======
  <header className="fixed z-10 top-0 flex  items-center  py-4 p-4 w-full left-0 bg-primary shadow-lg">
>>>>>>> 65b3a4c079f893b434398ba737249e1dc647740b
   <div className="flex justify-between items-center w-full">
    <Link
     href="/"
     className="text-4xl font-bold font-raleway italic transition-all duration-500 text-tertiary">
     $ELLARIS
    </Link>
    <div className="flex gap-4">
     <button className="text-white font-semibold">Help</button>
     <Link
      href="/sign-in"
      className="text-white font-semibold">
      Sign In
     </Link>
    </div>
   </div>
  </header>
 );
};

const Register = () => {
 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [phone, setPhone] = useState("");
 const [password, setPassword] = useState("");
 const [agreement, setAgreement] = useState(false);


 const handleSubmit = (e) => {
  e.preventDefault();
  // Validasi dan pengiriman data
  console.log({name, email, phone, password, agreement,});
 };
 return (
  <div className="flex items-center justify-center h-screen bg-primary">
   <Header />
   <form
    onSubmit={handleSubmit}
<<<<<<< HEAD
    className="bg-white/70 backdrop-blur-lg p-6 rounded-lg 2xl:mt-0 lg:mt-10 shadow-md w-96 flex flex-col items-center justify-center gap-2">
=======
    className="bg-white/70 backdrop-blur-lg p-6 rounded-lg shadow-md w-96 flex flex-col items-center justify-center gap-2">
>>>>>>> 65b3a4c079f893b434398ba737249e1dc647740b
    <h2 className="text-3xl font-bold text-primary mb-4">Register</h2>
    <div className="w-full">
     
     <input
     placeholder="Name"
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      required
      className="mt-1 block w-full border border-gray-300 bg-white focus:outline-none rounded-md p-2"
     />
    </div>
    <div className="w-full">
     
     <input
     placeholder="Email"
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
      className="mt-1 block w-full border border-gray-300 bg-white focus:outline-none rounded-md p-2"
     />
    </div>

    <div className="w-full">
    
     <PhoneInput
      country={"id"} // Set default country code (Indonesia)
      value={phone}
      onChange={setPhone}
      required
      inputStyle={{
       width: "100%",
       height: "100%",
       border: "1px solid #ccc",
       borderRadius: "4px",
       padding: "10px 10px 10px 50px", // Tambahkan padding kiri untuk memberi ruang bagi bendera
      }}
      buttonStyle={{
       backgroundColor: "#f3f4f6",
       border: "1px solid #ccc",
       borderRadius: "4px",
      }}
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
     <div className="flex gap-2 mt-2">
      <input
       type="checkbox"
       checked={agreement}
       onChange={() => setAgreement(!agreement)}
       required
      />
      <label className=" text-sm text-gray-600">
       Saya setuju dengan{" "}
       <Link
        href="/"
        className="text-blue-400 hover:underline">
        syarat dan ketentuan
       </Link>
      </label>
     </div>
    </div>
    
    <button
     type="submit"
     className="w-full bg-primary text-white p-2 rounded cursor-pointer">
     Daftar
    </button>
    <div className="mb-4 flex items-center justify-center w-full mt-2">
     <h1>
      Already have an account?{" "}
      <span className="text-blue-400 hover:underline">
       <Link href="/sign-in">Sign In</Link>
      </span>
     </h1>
    </div>
   </form>
  </div>
 );
};

export default Register;
