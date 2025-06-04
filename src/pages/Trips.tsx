
import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PackageCard } from '@/components/packages/PackageCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Calendar } from 'lucide-react';
import { useContentManager } from '@/hooks/useContentManager';

const Trips = () => {
  const { packages, loading, searchPackages } = useContentManager();
  const [searchQuery, setSearchQuery] = useState('');

  // نعرض الباقات كرحلات منظمة
  const searchResults = searchQuery ? searchPackages(searchQuery) : packages;
  const upcomingTrips = searchResults.filter(pkg => pkg.active);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="text-xl">جار تحميل الرحلات...</div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Page Header */}
      <div className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-tajawal">الرحلات المنظمة</h1>
          <p className="text-xl max-w-2xl mx-auto">
            استكشف رحلاتنا المنظمة بعناية لأفضل التجارب السياحية مع مجموعات صغيرة ومرشدين متخصصين
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Search */}
        <div className="bg-white rounded-2xl p-6 mb-8 travel-shadow">
          <div className="max-w-md mx-auto relative">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input
              type="text"
              placeholder="ابحث عن رحلة..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pr-10 text-center"
            />
          </div>
          <div className="text-center text-gray-600 mt-4">
            {upcomingTrips.length} رحلة متاحة
          </div>
        </div>

        {/* Upcoming Trips Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="text-primary" size={24} />
            <h2 className="text-3xl font-bold text-gray-800">الرحلات القادمة</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {upcomingTrips.slice(0, 6).map((trip) => (
              <div key={trip.id} className="relative">
                <PackageCard package={trip} viewMode="grid" />
                <div className="absolute top-4 left-4 bg-secondary text-white px-3 py-1 rounded-full text-sm font-bold">
                  رحلة منظمة
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Trips Section */}
        {upcomingTrips.length > 6 && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">رحلات مميزة</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {upcomingTrips.slice(6).map((trip) => (
                <PackageCard key={trip.id} package={trip} viewMode="list" />
              ))}
            </div>
          </div>
        )}

        {upcomingTrips.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg">لم يتم العثور على رحلات تطابق البحث</div>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => setSearchQuery('')}
            >
              إعادة تعيين البحث
            </Button>
          </div>
        )}

        {/* Call to Action */}
        <div className="bg-gradient-hero rounded-3xl p-8 text-center text-white mt-12">
          <h3 className="text-2xl font-bold mb-4">لم تجد الرحلة المناسبة؟</h3>
          <p className="text-lg mb-6">اطلب استشارة مجانية وسنساعدك في تصميم رحلة خاصة بك</p>
          <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-gray-100">
            اطلب استشارة مجانية
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Trips;
