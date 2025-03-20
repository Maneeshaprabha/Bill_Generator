import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ReceiptPreview from '../components/ReceiptPreview';
// import CreateBillPage from '../components/CreateBillPage';

const Home = () => {
  return (
    <div>
      <Header />
      <div className="flex justify-between p-10">
        <HeroSection />
        <ReceiptPreview />
        {/* <CreateBillPage /> */}
      </div>
    </div>
  );
};

export default Home;