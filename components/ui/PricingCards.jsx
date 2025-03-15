const PricingCards = () => {
 return (
  <div className="flex justify-between gap-5 w-full">
   <div className="max-w-sm rounded-2xl shadow-lg">
    {/*Head*/}
    <div className="head bg-primary flex flex-col rounded-t-2xl items-center justify-center gap-2 p-3 py-9">
     <h1 className="text-2xl font-bold text-tertiary font-raleway ">
      Basic Plan
     </h1>
     <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-raleway font-bold text-tertiary">
       Rp.100,000
      </h1>
      <p className="text-white font-raleway">Per outlet/bulan</p>
     </div>
    </div>

    {/*Body*/}
    <div className="flex flex-col bg-tertiary items-center max-h-[200px] justify-between p-3 py-5 h-full rounded-b-2xl shadow-lg">
     <h1 className="text-2xl font-bold text-primary text-center font-raleway">
      Paket yang mendukung operasi dasar usaha
     </h1>
     <button className="px-5 py-3 bg-primary rounded-full text-tertiary font-raleway">
      Jadwalkan Demo
     </button>
    </div>
   </div>
   <div className="max-w-sm rounded-2xl max-h-sm shadow-lg">
    {/*Head*/}
    <div className="head bg-gradient-to-br from-[#ebd197] to-[#a2790d] flex flex-col rounded-t-2xl items-center justify-center gap-2 p-3 py-9">
     <h1 className="text-2xl font-bold text-tertiary font-raleway ">
      Basic Plan
     </h1>
     <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-raleway font-bold text-tertiary">
       Rp.100,000
      </h1>
      <p className="text-white font-raleway">Per outlet/bulan</p>
     </div>
    </div>

    {/*Body*/}
    <div className="flex flex-col bg-tertiary items-center max-h-[200px] justify-between p-3 py-5 h-full rounded-b-2xl shadow-lg">
     <h1 className="text-2xl font-bold text-[#a2790d] text-center font-raleway">
      Paket yang mendukung operasi dasar usaha
     </h1>
     <button className="px-5 py-3 bg-gradient-to-br from-[#ebd197] to-[#a2790d] rounded-full text-tertiary font-raleway">
      Jadwalkan Demo
     </button>
    </div>
   </div>

   <div className="max-w-sm rounded-2xl max-h-sm shadow-lg">
    {/*Head*/}
    <div className="head bg-gradient-to-br from-[#d9ebf4] to-[#9ac5db] flex flex-col rounded-t-2xl items-center justify-center gap-2 p-3 py-9">
     <h1 className="text-2xl font-bold text-tertiary font-raleway ">
      Basic Plan
     </h1>
     <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-raleway font-bold text-tertiary">
       Rp.100,000
      </h1>
      <p className="text-white font-raleway">Per outlet/bulan</p>
     </div>
    </div>

    {/*Body*/}
    <div className="flex flex-col bg-tertiary items-center max-h-[200px] justify-between p-3 py-5 h-full rounded-b-2xl shadow-lg">
     <h1 className="text-2xl font-bold text-primary text-center font-raleway">
      Paket yang mendukung operasi dasar usaha
     </h1>
     <button className="px-5 py-3 bg-primary rounded-full text-tertiary font-raleway">
      Jadwalkan Demo
     </button>
    </div>
   </div>
  </div>
 );
};

export default PricingCards;
