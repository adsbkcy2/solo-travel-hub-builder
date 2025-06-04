
import React from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const HotelDetails = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">تفاصيل الفندق - {id}</h2>
          <p className="text-xl text-gray-600">
            نعمل على تجهيز هذه الصفحة، يرجى العودة لاحقاً
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HotelDetails;
