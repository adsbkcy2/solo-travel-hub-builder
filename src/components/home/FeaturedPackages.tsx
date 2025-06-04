
import React from 'react';
import { Calendar, Users, Plane, Star, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

export const FeaturedPackages = () => {
  const packages = [
    {
      id: 1,
      title: 'رحلة استكشافية إلى دبي',
      destination: 'دبي، الإمارات',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '5 أيام / 4 ليالي',
      price: 2500,
      originalPrice: 3200,
      rating: 4.8,
      reviews: 124,
      groupSize: '2-8 أشخاص',
      highlights: ['برج خليفة', 'نافورة دبي', 'سوق الذهب', 'جزيرة النخلة'],
      badge: 'الأكثر مبيعاً',
      discount: 22
    },
    {
      id: 2,
      title: 'جولة ثقافية في إسطنبول',
      destination: 'إسطنبول، تركيا',
      image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '7 أيام / 6 ليالي',
      price: 1800,
      originalPrice: 2300,
      rating: 4.9,
      reviews: 89,
      groupSize: '4-12 شخص',
      highlights: ['آيا صوفيا', 'القصر الأزرق', 'البازار الكبير', 'مضيق البوسفور'],
      badge: 'جديد',
      discount: 18
    },
    {
      id: 3,
      title: 'عطلة رومانسية في المالديف',
      destination: 'المالديف',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '6 أيام / 5 ليالي',
      price: 4500,
      originalPrice: 5800,
      rating: 5.0,
      reviews: 67,
      groupSize: '2 أشخاص',
      highlights: ['فيلا مائية', 'سبا فاخر', 'رحلات الغوص', 'عشاء خاص'],
      badge: 'مميز',
      discount: 25
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-tajawal">
            الباقات المميزة
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            باقات سياحية مختارة بعناية لتوفر لك تجربة سفر استثنائية
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div 
              key={pkg.id}
              className="bg-white rounded-3xl overflow-hidden travel-shadow hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative">
                <img 
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                
                {/* Badges */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <Badge className="bg-accent text-white">
                    {pkg.badge}
                  </Badge>
                  {pkg.discount && (
                    <Badge className="bg-red-500 text-white">
                      خصم {pkg.discount}%
                    </Badge>
                  )}
                </div>

                {/* Favorite Button */}
                <button className="absolute top-4 left-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  <Heart size={18} className="text-white" />
                </button>

                {/* Price */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-primary">
                      {pkg.price.toLocaleString()} ريال
                    </span>
                    {pkg.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        {pkg.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gray-600">للشخص الواحد</div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="text-yellow-500 fill-current" size={16} />
                    <span className="font-bold">{pkg.rating}</span>
                  </div>
                  <span className="text-gray-500 text-sm">({pkg.reviews} تقييم)</span>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-2 font-tajawal">
                  {pkg.title}
                </h3>
                
                <p className="text-gray-600 mb-4 flex items-center gap-1">
                  <Plane size={16} />
                  {pkg.destination}
                </p>

                <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    {pkg.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={16} />
                    {pkg.groupSize}
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">يشمل:</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {pkg.highlights.map((highlight, idx) => (
                      <div key={idx} className="text-sm text-gray-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Link to={`/package/${pkg.id}`} className="flex-1">
                    <Button className="w-full bg-primary hover:bg-primary-600 text-white">
                      عرض التفاصيل
                    </Button>
                  </Link>
                  <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white">
                    احجز الآن
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/packages">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3">
              عرض جميع الباقات
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
