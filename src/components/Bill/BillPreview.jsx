import React from "react";
import { jsPDF } from "jspdf";

const BillPreview = ({ formData, total, billId }) => {

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text("BILL-EASE", 20, 20);
    doc.text(`Invoice #${billId}`, 20, 30);
    doc.text(`Date: ${formData.date}`, 20, 40);
    doc.text(`Bill To: ${formData.customerName}`, 20, 50);
    doc.text(`Contact: ${formData.contact}`, 20, 60);
    doc.text("Items:", 20, 80);
    formData.items.forEach((item, index) => {
      doc.text(
        `${item.name}: $${item.price} x ${item.quantity} = $${
          item.price * item.quantity
        }`,
        20,
        90 + index * 10
      );
    });
    doc.text(`Subtotal: $${formData.items.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}`, 20, 120);
    doc.text(`Discount: -$${formData.discount.toFixed(2)}`, 20, 130);
    doc.text(`Total: $${total.toFixed(2)}`, 20, 140);
    doc.text("Thank you for your business!", 20, 160);
    doc.save(`bill-${billId}.pdf`);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Receipt Preview</h2>
      <p className="text-gray-600">
        <span className="font-medium">Customer:</span> {formData.customerName}
      </p>
      <p className="text-gray-600">
        <span className="font-medium">Date:</span> {formData.date}
      </p>
      <div className="mt-4">
        {formData.items.map((item, index) => (
          <div key={index} className="flex justify-between py-1">
            <span>{item.name} ({item.quantity}x)</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 border-t pt-2">
        <div className="flex justify-between">
          <span>Subtotal:</span>
          <span>
            $
            {formData.items
              .reduce((sum, item) => sum + item.price * item.quantity, 0)
              .toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Discount:</span>
          <span>-${formData.discount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold text-lg">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
      <button
        onClick={generatePDF}
        className="mt-4 w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"
      >
        Download PDF
      </button>
    </div>
  );
};

export default BillPreview;
