import React from "react";
type props = {
  receiptinterfaceProp: any;
};
export function ReceiptTablePcAdvancedTH({ receiptinterfaceProp }: props) {
  return (
    <th className="px-6 py-4 font-bold text-xl text-gray-900 whitespace-nowrap dark:text-white">
      {receiptinterfaceProp.split("T")[0].split("-").reverse().join("-")}
    </th>
  );
}
export function ReceiptTableNonPcAdvancedTH({ receiptinterfaceProp }: props) {
  return (
    <th className="px-6 py-4 font-bold text-xl text-gray-900 whitespace-nowrap dark:text-white">
      {receiptinterfaceProp}
    </th>
  );
}
