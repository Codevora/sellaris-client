import Link from "next/link";

// React
import {FaArrowRightLong, FaCircleExclamation} from "react-icons/fa6";

const Home = () => {
 return (
  <div className="flex flex-col w-full">
   {/* Hero Section */}
   <div className="flex flex-col px-[300px] justify-center h-screen font-bold bg-primary">
    <div className="flex flex-col justify-start gap-10 w-[600px]">
     <h1 className="font-raleway italic font-bold text-5xl text-tertiary">
      Lebih Praktis Lebih Baik!
     </h1>
     <p className="text-lg text-tertiary">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
      corporis blanditiis odio sapiente voluptatibus culpa explicabo qui sint
      hic eaque, et eos. Laborum et eum ipsa tempore inventore illum suscipit.
     </p>
     <div className="flex gap-3 w-full ">
      <button className="px-4 py-4 border border-tertiary bg-tertiary text-primary hover:bg-tertiary/80 hover:border-tertiary/80 cursor-pointer rounded-full w-full">
       <Link href="/a">Get Started</Link>
      </button>
      <button className="px-4 py-4 border border-tertiary bg-primary text-tertiary hover:border-tertiary/80 cursor-pointer  rounded-full w-full">
       <Link href="/a"> Contact Us!</Link>
      </button>
     </div>
    </div>
   </div>

   {/* Content Section */}
   <div className="flex flex-col px-[300px] justify-center items-end h-screen font-bold bg-tertiary">
    <div className="flex flex-col justify-start gap-10 w-[600px]">
     <h1 className="font-raleway italic font-bold text-5xl text-primary">
      Pengelolaan Bisnis yang lebih Efisien
     </h1>
     <div className="flex flex-col gap-3">
      <div className="flex gap-2 items-center">
       <FaCircleExclamation className="fill-primary size-7" />{" "}
       <p className="text-xl font-medium">Lorem, ipsum.</p>
      </div>
      <div className="flex gap-2 items-center">
       <FaCircleExclamation className="fill-[gold] size-7" />{" "}
       <p className="text-xl font-medium">Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="flex gap-2 items-center">
       <FaCircleExclamation className="fill-[red] size-7" />{" "}
       <p className="text-xl font-medium">Lorem, ipsum dolor.</p>
      </div>
     </div>
     <button className="cursor-pointer w-[115px]">
      <Link
       href="/a"
       className="hover:underline w-FULL flex gap-2 items-center">
       Learn More <FaArrowRightLong className="fill-black" />
      </Link>
     </button>
    </div>
   </div>

   {/* Content Section */}
   <div className="flex flex-col px-[300px] justify-center items-center h-auto py-10 font-bold bg-gray-200">
    <div className="flex flex-col text-center gap-10 w-[600px]">
     <h1 className="font-raleway font-bold text-5xl text-primary">
      Used By Premium Brands
     </h1>
     <div className="flex flex-col gap-3">
      <div className="flex gap-2 items-center">
       <FaCircleExclamation className="fill-primary size-7" />{" "}
       <p className="text-xl font-medium">Lorem, ipsum.</p>
      </div>
      <div className="flex gap-2 items-center">
       <FaCircleExclamation className="fill-[gold] size-7" />{" "}
       <p className="text-xl font-medium">Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="flex gap-2 items-center">
       <FaCircleExclamation className="fill-[red] size-7" />{" "}
       <p className="text-xl font-medium">Lorem, ipsum dolor.</p>
      </div>
     </div>
     <div className="flex gap-3 w-full ">
      <button className="px-4 py-4 border text-primary cursor-pointer rounded-full w-full">
       <Link href="/a">Learn More</Link>
      </button>
     </div>
    </div>
   </div>

   {/* Content Section */}
   <div className="flex flex-col px-[300px] justify-center h-screen font-bold bg-primary">
    <div className="flex flex-col justify-start gap-10 w-[600px]">
     <h1 className="font-raleway italic font-bold text-5xl text-tertiary">
      Lebih Praktis Lebih Baik!
     </h1>
     <p className="text-lg text-tertiary">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
      corporis blanditiis odio sapiente voluptatibus culpa explicabo qui sint
      hic eaque, et eos. Laborum et eum ipsa tempore inventore illum suscipit.
     </p>
     <div className="flex gap-3 w-full ">
      <button className="px-4 py-4 border border-tertiary bg-tertiary text-primary hover:bg-tertiary/80 hover:border-tertiary/80 cursor-pointer rounded-full w-full">
       <Link href="/a">Get Started</Link>
      </button>
      <button className="px-4 py-4 border border-tertiary bg-primary text-tertiary hover:border-tertiary/80 cursor-pointer  rounded-full w-full">
       <Link href="/a"> Contact Us!</Link>
      </button>
     </div>
    </div>
   </div>

   {/* Content Section */}
   <div className="flex flex-col px-[300px] justify-center items-end h-screen font-bold bg-tertiary">
    <div className="flex flex-col justify-start gap-10 w-[600px]">
     <h1 className="font-raleway italic font-bold text-5xl text-primary">
      Pengelolaan Bisnis yang lebih Efisien
     </h1>
     <div className="flex flex-col gap-3">
      <div className="flex gap-2 items-center">
       <FaCircleExclamation className="fill-primary size-7" />{" "}
       <p className="text-xl font-medium">Lorem, ipsum.</p>
      </div>
      <div className="flex gap-2 items-center">
       <FaCircleExclamation className="fill-[gold] size-7" />{" "}
       <p className="text-xl font-medium">Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="flex gap-2 items-center">
       <FaCircleExclamation className="fill-[red] size-7" />{" "}
       <p className="text-xl font-medium">Lorem, ipsum dolor.</p>
      </div>
     </div>
     <button className="cursor-pointer w-[115px]">
      <Link
       href="/a"
       className="hover:underline w-FULL flex gap-2 items-center">
       Learn More <FaArrowRightLong className="fill-black" />
      </Link>
     </button>
    </div>
   </div>
  </div>
 );
};

export default Home;
