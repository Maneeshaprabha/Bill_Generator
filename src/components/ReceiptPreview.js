import React from 'react'

const ReceiptPreview = () => {
  return (
    <div className="border rounded-lg p-6 shadow-lg w-96 bg-white">
    <h3 className="font-bold text-lg">Receipt Preview</h3>
    <div className="mt-4">
      <p><strong>Customer:</strong> John Doe</p>
      <p><strong>Date:</strong> March 18, 2025</p>
      <hr className="my-2" />
      <div className="space-y-2">
        <p>Product A (2x) <span className="float-right">$120.00</span></p>
        <p>Product B (1x) <span className="float-right">$85.00</span></p>
      </div>
      <hr className="my-2" />
      <p><strong>Subtotal:</strong> <span className="float-right">$205.00</span></p>
      <p><strong>Discount:</strong> <span className="float-right text-red-500">- $20.50</span></p>
      <p className="text-xl font-bold mt-2">Total: <span className="float-right">$184.50</span></p>
    </div>
    <button className="bg-black text-white w-full py-2 mt-4 rounded">Download PDF</button>
  </div>
  )
}

export default ReceiptPreview
