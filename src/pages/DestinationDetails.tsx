
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, ArrowLeft, Calendar, Users } from 'lucide-react';
import { useContentManager } from '@/hooks/useContentManager';
import { PackageCard } from '@/components/packages/PackageCard';

const DestinationDetails = () => {
  const { id } = useParams();
  const { destinations, packages, loading } = useContentManager();

  const destination = destinations.find(d => d.id === id);
  const destinationPackages = packages.filter(pkg => 
    pkg.destination.toLowerCase().includes(destination?.name.toLowerCase() || '')
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="text-xl">جار تحميل تفاصيل الوجهة...</div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!destination) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h2 className="text-3xl font-bold mb-6">الوجهة غير موجودة</h2>
          <p className="text-xl text-gray-600 mb-8">
            عذراً، لم يتم العثور على الوجهة المطلوبة
          </p>
          <Link to="/destinations">
            <Button>العودة إلى الوجهات</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img 
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-8 text-white">
            <h1 className="text-4xl font-bold mb-2">{destination.name}</h1>
            <p className="text-xl flex items-center gap-2 mb-4">
              <MapPin size={20} />
              {destination.country}
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Star className="text-yellow-400 fill-current" size={20} />
                <span className="font-bold">{destination.rating}</span>
              </div>
              <Badge variant="secondary" className="bg-white/20 text-white">
                {destination.packages} باقة متاحة
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Description */}
        <div className="bg-white rounded-2xl p-8 mb-12 travel-shadow text-center">
          <h2 className="text-3xl font-bold mb-6">اكتشف {destination.name}</h2>
          <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            {destination.description}
          </p>
          <div className="mt-8 flex justify-center items-center gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">{destination.packages}</div>
              <div className="text-gray-600">باقة سياحية</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">
                {destination.startingPrice.toLocaleString()} ريال
              </div>
              <div className="text-gray-600">يبدأ من</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">{destination.rating}</div>
              <div className="text-gray-600">تقييم العملاء</div>
            </div>
          </div>
        </div>

        {/* Available Packages */}
        {destinationPackages.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">الباقات المتاحة في {destination.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {destinationPackages.map((pkg) => (
                <PackageCard key={pkg.id} package={pkg} viewMode="grid" />
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="bg-gradient-hero rounded-3xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">جاهز لاستكشاف {destination.name}؟</h3>
          <p className="text-xl mb-8">احجز رحلتك الآن أو احصل على استشارة مجانية لتخطيط رحلة مخصصة</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                احجز الآن
                <ArrowLeft className="mr-2" size={20} />
              </Button>
            </Link>
            <Link to="/consultation">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                اطلب استشارة مجانية
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DestinationDetails;
