import React from 'react'

const CreateBill = () => {
  return (

        <div className="p-6 flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-2/3">
            <h1 className="text-3xl font-bold mb-6">Create New Bill</h1>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold mb-4">Bill Details</h2>
              <p className="text-gray-600 mb-4">
                Enter customer information and items to generate a bill
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Customer Name
                  </label>
                  <input
                    type="text"
                    name="customerName"
                 
                    className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Customer Email
                  </label>
                  <input
                    type="email"
                    name="customerEmail"
                   
                    className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Customer Phone
                  </label>
                  <input
                    type="text"
                    name="contact"
                 
                    className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Discount (%)
                  </label>
                  <input
                    type="number"
                    name="discount"
                  
                    className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Items</h3>
              
                <div  className="flex gap-2 mb-2">
                  <input
                    type="text"
                    placeholder="Item name"
                   
                    className="w-1/3 p-2 border border-gray-300 rounded-md"
                  />
                  <input
                    type="number"
                    placeholder="Price"
                   
                    className="w-1/4 p-2 border border-gray-300 rounded-md"
                  />
                  <input
                    type="number"
                    min="1"
                    placeholder="Qty"
                  
                    className="w-1/6 p-2 border border-gray-300 rounded-md"
                  />
                  <button
                   
                    className="text-red-600 hover:text-red-800"
                  >
                    🗑️
                  </button>
                </div>
              
              <button
              
                className="text-gray-600 hover:text-gray-800 mb-4"
              >
                + Add Item
              </button>
              <div className="text-right">
                <p>Subtotal: $</p>
                <p>Discount (%): -$</p>
                <p className="font-bold">Total: $</p>
              </div>
              <div className="flex gap-4 mt-4">
                <button
                 
                  className="w-1/2 border border-gray-300 py-2 rounded-md"
                >
                  Cancel
                </button>
                <button
                
                  className="w-1/2 bg-black text-white py-2 rounded-md hover:bg-gray-800"
                >
                  Generate Bill
                </button>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3">
          
          </div>
        </div>
      
  )
}

export default CreateBill