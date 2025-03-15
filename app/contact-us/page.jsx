import ContactForm from "@/components/ui/ContactForm";
import Link from "next/link";

const ContactUs = () => {
 return (
  <div className="flex flex-col w-full">
   {/* Hero Section */}
   <div className="flex flex-col lg:px-[100px] 2xl:px-[300px] justify-center h-screen font-bold bg-primary">
    <div className="flex flex-col justify-start lg:gap-5 2xl:gap-10 lg:w-[600px]">
     <h1 className="font-raleway italic font-bold lg:text-4xl 2xl:text-5xl text-white">
      Butuh bantuan? Hubungi kami sekarang!
     </h1>
     <div className="flex gap-2">
      <Link
       href="/"
       className="flex p-3 bg-tertiary rounded-full text-primary">
       Hubungi Kami via Whatsapp
      </Link>
     </div>
    </div>
   </div>

   {/* Content Section */}
   <div className="flex h-screen">
    <div className="flex flex-col w-[550px] justify-center font-bold bg-white"></div>

    {/* Image Section */}
    <div className="flex flex-col w-full lg:px-[20px] 2xl:px-[300px] items-center justify-center  font-bold bg-primary">
     <ContactForm />
    </div>
   </div>
  </div>
 );
};

export default ContactUs;
