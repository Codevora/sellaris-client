import {FaTimes} from "react-icons/fa";
import {ImCheckmark} from "react-icons/im";

const PricingTable = () => {
 const data = [
  {
   fitur:
    "Aplikasi Kasir Digital, Dashboard Laporan Real-Time, Manajemen Stok, Manajemen Promo, dan masih banyak lagi",
   basic: true,
   gold: false,
   platinum: false,
  },
  {
   fitur: "Manajemen Karyawan",
   description:
    "Berlaku biaya tambahan Rp10.000/slot karyawan jika telah melampaui kuota",
   basic: null,
   gold: null,
   platinum: null,
   text: "Berlaku hingga 5 karyawan/outlet",
   text2: "Berlaku hingga 10 karyawan/outlet",
   text3: "Berlaku hingga 15 karyawan/outlet",
  },
  {
   fitur: "Penerimaan Pembayaran",
   description: "Pembayaran Digital Melalui e-Wallet QRIS",
   basic: true,
   gold: false,
   platinum: false,
  },
  {
   fitur: "Pengaturan Operasi Toko",
   description: "Menu Digital & Pemesanan Menu melalui Scan QR",
   basic: true,
   gold: false,
   platinum: false,
  },
  {
   fitur: null,
   description: "Manajemen Pengaturan Meja",
   basic: true,
   gold: false,
   platinum: false,
  },
  {
   fitur: "Pengaturan Back Office",
   description: "Ingredients Inventory (Manajemen Bahan Baku)",
   basic: true,
   gold: false,
   platinum: false,
  },
  {
   fitur: "",
   description: "Advanced Inventory (Manajemen Stok Lanjutan)",
   basic: true,
   gold: false,
   platinum: false,
  },
 ];

 return (
  <div className=" w-full">
   <table className="min-w-full bg-white border border-gray-500">
    <thead className="border-b border-gray-500">
     <tr className="bg-white text-gray-600 uppercase text-sm leading-normal h-[100px]">
      <th className="py-3 px-6 text-left w-[550px] ">Fitur</th>
      <th className="py-3 px-6 text-center text-tertiary bg-primary  w-[200px]">
       Basic
      </th>
      <th className="py-3 px-6 text-center text-tertiary bg-gradient-to-br from-[#ebd197] to-[#a2790d]  w-[200px]">
       Gold
      </th>
      <th className="py-3 px-6 text-center text-tertiary bg-gradient-to-br from-[#cbe3f0] to-[#9ac5db]  w-[200px]">
       Platinum
      </th>
     </tr>
    </thead>
    <tbody className="text-gray-600 text-sm font-light">
     {data.map((item) => (
      <tr
       key={item.fitur}
       className="border-b border-gray-200 hover:bg-gray-100">
       <td className="flex flex-col gap-3 py-3 px-6 text-lg font-semibold text-black">
        {item.fitur}
        <p className="text-base font-normal text-black/60">
         {item.description}
        </p>
       </td>
       <td className="py-3 px-6 text-center">
        {item.basic === true ? (
         <ImCheckmark className="text-green-500 mx-auto" />
        ) : item.basic === false ? (
         <FaTimes className="text-red-500 mx-auto" />
        ) : (
         <span className="text-gray-500">{item.text}</span> // Teks untuk baris ini
        )}
       </td>
       <td className="py-3 px-6 text-center">
        {item.gold === true ? (
         <ImCheckmark className="text-green-500 mx-auto" />
        ) : item.gold === false ? (
         <FaTimes className="text-red-500 mx-auto" />
        ) : (
         <span className="text-gray-500">{item.text2}</span> // Teks berbeda untuk baris ini
        )}
       </td>
       <td className="py-3 px-6 text-center">
        {item.platinum === true ? (
         <ImCheckmark className="text-green-500 mx-auto" />
        ) : item.platinum === false ? (
         <FaTimes className="text-red-500 mx-auto" />
        ) : (
         <span className="text-gray-500">{item.text3}</span> // Teks berbeda untuk baris ini
        )}
       </td>
      </tr>
     ))}
    </tbody>
   </table>
  </div>
 );
};

export default PricingTable;
