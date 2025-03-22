import React from 'react'
import TransactionTable from './TransactionTable'
import { Link } from 'react-router-dom';


// Mock data for transactions
const Transactions = [
    { id: "INV-001", customerName: "John Smith", total: 125.50, date: "Mar 18, 2025", status: "PAID" },
    { id: "INV-002", customerName: "Sarah Johnson", total: 89.99, date: "Mar 17, 2025", status: "PAID" },
    { id: "INV-003", customerName: "Michael Brown", total: 210.75, date: "Mar 15, 2025", status: "PAID" },
    { id: "INV-004", customerName: "Emily Davis", total: 45.00, date: "Mar 14, 2025", status: "PAID" },
    { id: "INV-005", customerName: "Robert Wilson", total: 175.25, date: "Mar 12, 2025", status: "PAID" },
    { id: "INV-006", customerName: "Jennifer Taylor", total: 62.50, date: "Mar 10, 2025", status: "PAID" },
  ];
const Overview = () => {
  return (
    <div className="p-6">
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <Link
        to="/create-bill"
        className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 flex items-center gap-2"
      >
        <span>Create New Bill</span>
      </Link>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-sm text-gray-600">Total Revenue</h3>
        <p className="text-lg font-bold">This month</p>
        <p className="text-2xl font-bold text-green-600">$4,550.32</p>
        <p className="text-sm text-green-500">↑ 12.5% from last month</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-sm text-gray-600">Total Bills</h3>
        <p className="text-lg font-bold">This month</p>
        <p className="text-2xl font-bold">42</p>
        <p className="text-sm text-green-500">↑ 8.2% from last month</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-sm text-gray-600">Average Bill Value</h3>
        <p className="text-lg font-bold">This month</p>
        <p className="text-2xl font-bold text-red-600">$108.34</p>
        <p className="text-sm text-red-500">↓ 3.1% from last month</p>
      </div>
    </div>
    <div className="flex gap-4 mb-6">
      <button className="bg-gray-100 px-4 py-2 rounded-md">Overview</button>
      <button className="bg-white px-4 py-2 rounded-md border">Recent Transactions</button>
      </div>
    <TransactionTable transactions={Transactions} />

  </div>
  )
}

export default Overview
