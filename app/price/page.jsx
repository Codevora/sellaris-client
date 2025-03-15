import PricingCards from "@/components/ui/PricingCards";

const Pricing = [
 {
  name: "Basic",
  price: "Rp. 100,000",
  description: "Paket yang mendukung operasi dasar usaha",
 },
 {
  name: "Pro",
  price: "Rp. 100,000",
  description: "Paket yang mendukung operasi dasar usaha",
 },
 {
  name: "Enterprise",
  price: "Rp. 100,000",
  description: "Paket yang mendukung operasi dasar usaha",
 },
];

const Price = () => {
 return (
  <div className="flex flex-col w-full">
   <div className="flex flex-col lg:px-[100px] 2xl:px-[300px] items-center justify-center h-screen  bg-primary">
    <div className="flex flex-col items-center justify-center gap-10">
     <h1 className="text-tertiary text-4xl font-bold font-raleway">
      Harga Aplikasi Kasir Sellaris POS
     </h1>
     <p className="text-white max-w-md text-center text-lg">
      Dapatkan penawaran terbaik untuk semua kebutuhan bisnis Anda. Tanpa biaya
      tersembunyi.
     </p>
    </div>
   </div>

   <div className="flex flex-col lg:px-[100px] 2xl:px-[300px] items-center justify-center h-auto pb-24 pt-10 bg-gray-200">
    <PricingCards />
   </div>
  </div>
 );
};

export default Price;
