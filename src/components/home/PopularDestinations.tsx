
import React from 'react';
import { MapPin, Star, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const PopularDestinations = () => {
  const destinations = [
    {
      id: 1,
      name: 'دبي',
      country: 'الإمارات العربية المتحدة',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.8,
      packages: 25,
      startingPrice: 1500,
      description: 'مدينة الأحلام والتسوق والفخامة'
    },
    {
      id: 2,
      name: 'إسطنبول',
      country: 'تركيا',
      image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.7,
      packages: 32,
      startingPrice: 1200,
      description: 'حيث تلتقي أوروبا بآسيا في جمال خلاب'
    },
    {
      id: 3,
      name: 'باريس',
      country: 'فرنسا',
      image: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.9,
      packages: 28,
      startingPrice: 2500,
      description: 'مدينة الحب والأنوار والفن'
    },
    {
      id: 4,
      name: 'المالديف',
      country: 'جمهورية المالديف',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.9,
      packages: 15,
      startingPrice: 3000,
      description: 'جنة استوائية وسط المحيط الهندي'
    },
    {
      id: 5,
      name: 'لندن',
      country: 'المملكة المتحدة',
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.6,
      packages: 22,
      startingPrice: 2200,
      description: 'تاريخ عريق وثقافة متنوعة'
    },
    {
      id: 6,
      name: 'بالي',
      country: 'إندونيسيا',
      image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.8,
      packages: 20,
      startingPrice: 1800,
      description: 'طبيعة خلابة وثقافة روحانية'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-tajawal">
            الوجهات الأكثر شعبية
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            اكتشف أجمل الوجهات السياحية التي يختارها مسافرونا حول العالم
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
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

        <div className="text-center mt-12">
          <Link to="/destinations">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3">
              عرض جميع الوجهات
              <ArrowLeft className="mr-2" size={18} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
