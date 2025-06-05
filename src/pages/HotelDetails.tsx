
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Wifi, Car, Coffee, Waves, ArrowLeft, Calendar, Users } from 'lucide-react';
import { useContentManager } from '@/hooks/useContentManager';

const HotelDetails = () => {
  const { id } = useParams();
  const { hotels, loading } = useContentManager();

  const hotel = hotels.find(h => h.id === id);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="text-xl">جار تحميل تفاصيل الفندق...</div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!hotel) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h2 className="text-3xl font-bold mb-6">الفندق غير موجود</h2>
          <p className="text-xl text-gray-600 mb-8">
            عذراً، لم يتم العثور على الفندق المطلوب
          </p>
          <Link to="/hotels">
            <Button>العودة إلى الفنادق</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const amenityIcons: { [key: string]: React.ReactNode } = {
    'واي فاي مجاني': <Wifi size={16} />,
    'موقف سيارات': <Car size={16} />,
    'مطعم': <Coffee size={16} />,
    'مسبح': <Waves size={16} />
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img 
          src={hotel.image}
          alt={hotel.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-8 text-white">
            <div className="flex items-center gap-2 mb-2">
              {[...Array(hotel.stars)].map((_, i) => (
                <Star key={i} className="text-yellow-400 fill-current" size={20} />
              ))}
            </div>
            <h1 className="text-4xl font-bold mb-2">{hotel.name}</h1>
            <p className="text-xl flex items-center gap-2">
              <MapPin size={20} />
              {hotel.location}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Description */}
            <div className="bg-white rounded-2xl p-6 mb-8 travel-shadow">
              <h2 className="text-2xl font-bold mb-4">عن الفندق</h2>
              <p className="text-gray-700 leading-relaxed">{hotel.description}</p>
            </div>

            {/* Amenities */}
            <div className="bg-white rounded-2xl p-6 mb-8 travel-shadow">
              <h2 className="text-2xl font-bold mb-4">المرافق والخدمات</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {hotel.amenities.map((amenity, index) => (
                  <Badge key={index} variant="secondary" className="p-3 justify-start">
                    {amenityIcons[amenity] || <Coffee size={16} />}
                    <span className="mr-2">{amenity}</span>
                  </Badge>
                ))}
              </div>
            </div>

            {/* Gallery */}
            {hotel.gallery && hotel.gallery.length > 0 && (
              <div className="bg-white rounded-2xl p-6 mb-8 travel-shadow">
                <h2 className="text-2xl font-bold mb-4">معرض الصور</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {hotel.gallery.map((image, index) => (
                    <img 
                      key={index}
                      src={image}
                      alt={`${hotel.name} - ${index + 1}`}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 travel-shadow sticky top-4">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-primary mb-2">
                  {hotel.pricePerNight.toLocaleString()} ريال
                </div>
                <div className="text-gray-500">في الليلة</div>
              </div>

              <div className="flex items-center justify-center gap-2 mb-6">
                <Star className="text-yellow-500 fill-current" size={20} />
                <span className="font-bold text-lg">{hotel.rating}</span>
                <span className="text-gray-500">({hotel.reviews} تقييم)</span>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    تاريخ الوصول
                  </label>
                  <div className="relative">
                    <Calendar className="absolute right-3 top-3 text-gray-400" size={20} />
                    <input 
                      type="date" 
                      className="w-full pr-10 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    تاريخ المغادرة
                  </label>
                  <div className="relative">
                    <Calendar className="absolute right-3 top-3 text-gray-400" size={20} />
                    <input 
                      type="date" 
                      className="w-full pr-10 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    عدد الضيوف
                  </label>
                  <div className="relative">
                    <Users className="absolute right-3 top-3 text-gray-400" size={20} />
                    <select className="w-full pr-10 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                      <option>1 ضيف</option>
                      <option>2 ضيف</option>
                      <option>3 ضيوف</option>
                      <option>4 ضيوف</option>
                    </select>
                  </div>
                </div>
              </div>

              <Link to="/booking">
                <Button className="w-full bg-primary hover:bg-primary-600 text-white py-3 text-lg font-bold mb-3">
                  احجز الآن
                </Button>
              </Link>

              <Link to="/consultation">
                <Button variant="outline" className="w-full border-secondary text-secondary hover:bg-secondary hover:text-white py-3">
                  اطلب استشارة مجانية
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HotelDetails;
