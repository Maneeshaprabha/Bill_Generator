import React from 'react'

const HeroSection = () => {
  return (
    <div>
      <div className="flex flex-col items-start p-10 space-y-4">
      <h2 className="text-4xl font-bold">Simplify Your Billing Process</h2>
      <p className="text-gray-600">
        Generate professional receipts, track transactions, and monitor your revenue all in one place.
      </p>
      <div>
        <button className="bg-black text-white px-6 py-3 rounded mr-4">Get Started</button>
        <button className="border px-6 py-3 rounded">View Demo</button>
      </div>
    </div>
    </div>
  )
}

export default HeroSection
