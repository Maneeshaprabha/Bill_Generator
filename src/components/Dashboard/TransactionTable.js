import React from "react";
import { FaEye, FaDownload } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const TransactionTable = ({ transactions }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Recent Transactions</h2>
      <p className="text-gray-600 mb-4">Your last 10 transactions</p>
      <table className="w-full text-left">
        <thead>
          <tr className="border-b">
            <th className="py-2">INVOICE</th>
            <th className="py-2">CUSTOMER</th>
            <th className="py-2">AMOUNT</th>
            <th className="py-2">DATE</th>
            <th className="py-2">STATUS</th>
            <th className="py-2">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id} className="border-b">
              <td className="py-2">{transaction.id}</td>
              <td className="py-2">{transaction.customerName}</td>
              <td className="py-2">${transaction.total.toFixed(2)}</td>
              <td className="py-2">{transaction.date}</td>
              <td className="py-2">
                <span className="text-green-500">PAID</span>
              </td>
              <td className="py-2 flex gap-2">
                <button onClick={() => navigate(`/bill-receipt/${transaction.id}`)}>
                  <FaEye className="text-gray-600 hover:text-gray-800" />
                </button>
                <button>
                  <FaDownload className="text-gray-600 hover:text-gray-800" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;