
import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const Hotels = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Page Header */}
      <div className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-tajawal">الفنادق</h1>
          <p className="text-xl max-w-2xl mx-auto">
            اكتشف مجموعة متميزة من الفنادق الفاخرة والمريحة في أفضل الوجهات السياحية
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">قريباً</h2>
          <p className="text-xl text-gray-600">
            نعمل على تجهيز هذه الصفحة، يرجى العودة لاحقاً
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Hotels;
