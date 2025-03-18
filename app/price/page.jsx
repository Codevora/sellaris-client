import PricingCards from "@/components/ui/PricingCards";
import PricingTable from "@/components/ui/PricingTable";

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

   <div className="min-h-screen flex px-14 py-10 justify-center w-full">
    <PricingTable />
   </div>
  </div>
 );
};

export default Price;
