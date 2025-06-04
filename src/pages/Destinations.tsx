
import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Search, ArrowLeft } from 'lucide-react';
import { useContentManager } from '@/hooks/useContentManager';
import { Link } from 'react-router-dom';

const Destinations = () => {
  const { destinations, loading } = useContentManager();
  const [searchQuery, setSearchQuery] = useState('');

  // تطبيق البحث
  const filteredDestinations = destinations.filter(dest =>
    dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dest.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dest.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="text-xl">جار تحميل الوجهات...</div>
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
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-tajawal">الوجهات السياحية</h1>
          <p className="text-xl max-w-2xl mx-auto">
            استكشف أجمل المدن والوجهات السياحية حول العالم
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
              placeholder="ابحث عن وجهة..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pr-10 text-center"
            />
          </div>
          <div className="text-center text-gray-600 mt-4">
            {filteredDestinations.length} وجهة متاحة
          </div>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((destination, index) => (
            <div 
              key={destination.id}
              className="group bg-white rounded-3xl overflow-hidden travel-shadow hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="text-yellow-500 fill-current" size={16} />
                  <span className="text-sm font-bold">{destination.rating}</span>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold mb-1">{destination.name}</h3>
                  <p className="text-sm opacity-90 flex items-center gap-1">
                    <MapPin size={14} />
                    {destination.country}
                  </p>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-4 line-clamp-2">{destination.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <div className="text-sm text-gray-500">
                    {destination.packages} باقة متاحة
                  </div>
                  <div className="text-left">
                    <div className="text-2xl font-bold text-primary">
                      {destination.startingPrice.toLocaleString()} ريال
                    </div>
                    <div className="text-sm text-gray-500">يبدأ من</div>
                  </div>
                </div>
                <Link to={`/destination/${destination.id}`}>
                  <Button className="w-full bg-gradient-hero text-white hover:opacity-90 transition-opacity">
                    اكتشف المزيد
                    <ArrowLeft className="mr-2" size={16} />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredDestinations.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg">لم يتم العثور على وجهات تطابق البحث</div>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => setSearchQuery('')}
            >
              إعادة تعيين البحث
            </Button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Destinations;
