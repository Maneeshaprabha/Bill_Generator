import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BillPreview  from "./BillPreview"

const CreateBill = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    customerName: "",
    customerEmail: "",
    contact: "",
    discount: 0,
    items: [{ name: "", price: 0, quantity: 1 }],
    date: new Date().toISOString().split("T")[0],
  });
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleItemChange = (index, field, value) => {
    const newItems = [...formData.items];
    newItems[index][field] = value;
    setFormData({ ...formData, items: newItems });
  };

  const addItem = () => {
    setFormData({
      ...formData,
      items: [...formData.items, { name: "", price: 0, quantity: 1 }],
    });
  };

  const removeItem = (index) => {
    const newItems = formData.items.filter((_, i) => i !== index);
    setFormData({ ...formData, items: newItems });
  };

  const calculateTotal = () => {
    const subtotal = formData.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    return subtotal - formData.discount;
  };

  const handleSubmit = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("You must be logged in to create a bill");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/bills", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        navigate(`/bill-receipt/${data.billId}`, { state: { formData, total: calculateTotal() } });
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Failed to create bill");
    }
  };

  return (
    <div className="p-6 flex flex-col lg:flex-row gap-6">
      <div className="w-full lg:w-2/3">
        <h1 className="text-3xl font-bold mb-6">Create New Bill</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Bill Details</h2>
          <p className="text-gray-600 mb-4">
            Enter customer information and items to generate a bill
          </p>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Customer Name
              </label>
              <input
                type="text"
                name="customerName"
                value={formData.customerName}
                onChange={handleInputChange}
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
                value={formData.customerEmail}
                onChange={handleInputChange}
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
                value={formData.contact}
                onChange={handleInputChange}
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
                value={formData.discount}
                onChange={handleInputChange}
                className="mt-1 w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
          <h3 className="text-lg font-semibold mb-2">Items</h3>
          {formData.items.map((item, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <input
                type="text"
                placeholder="Item name"
                value={item.name}
                onChange={(e) => handleItemChange(index, "name", e.target.value)}
                className="w-1/3 p-2 border border-gray-300 rounded-md"
              />
              <input
                type="number"
                placeholder="Price"
                value={item.price}
                onChange={(e) =>
                  handleItemChange(index, "price", Number(e.target.value))
                }
                className="w-1/4 p-2 border border-gray-300 rounded-md"
              />
              <input
                type="number"
                min="1"
                placeholder="Qty"
                value={item.quantity}
                onChange={(e) =>
                  handleItemChange(index, "quantity", Number(e.target.value))
                }
                className="w-1/6 p-2 border border-gray-300 rounded-md"
              />
              <button
                onClick={() => removeItem(index)}
                className="text-red-600 hover:text-red-800"
              >
                🗑️
              </button>
            </div>
          ))}
          <button
            onClick={addItem}
            className="text-gray-600 hover:text-gray-800 mb-4"
          >
            + Add Item
          </button>
          <div className="text-right">
            <p>Subtotal: ${formData.items.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}</p>
            <p>Discount (%): -${formData.discount.toFixed(2)}</p>
            <p className="font-bold">Total: ${calculateTotal().toFixed(2)}</p>
          </div>
          <div className="flex gap-4 mt-4">
            <button
              onClick={() => navigate("/dashboard")}
              className="w-1/2 border border-gray-300 py-2 rounded-md"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="w-1/2 bg-black text-white py-2 rounded-md hover:bg-gray-800"
            >
              Generate Bill
            </button>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/3">
        <BillPreview formData={formData} total={calculateTotal()} billId="5315" />
      </div>
    </div>
  );
};

export default CreateBill;