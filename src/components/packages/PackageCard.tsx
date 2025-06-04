
import React from 'react';
import { Star, Calendar, Users, Heart, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

interface Package {
  id: number;
  title: string;
  destination: string;
  image: string;
  duration: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  category: string;
  difficulty: string;
  highlights: string[];
  includes: string[];
  badge?: string;
}

interface PackageCardProps {
  package: Package;
  viewMode: 'grid' | 'list';
}

export const PackageCard: React.FC<PackageCardProps> = ({ package: pkg, viewMode }) => {
  const discount = pkg.originalPrice ? Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100) : 0;

  if (viewMode === 'list') {
    return (
      <div className="bg-white rounded-2xl overflow-hidden travel-shadow hover-lift">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 relative">
            <img 
              src={pkg.image}
              alt={pkg.title}
              className="w-full h-64 md:h-full object-cover"
            />
            {pkg.badge && (
              <Badge className="absolute top-4 right-4 bg-accent text-white">
                {pkg.badge}
              </Badge>
            )}
            {discount > 0 && (
              <Badge className="absolute top-4 left-4 bg-red-500 text-white">
                خصم {discount}%
              </Badge>
            )}
          </div>
          
          <div className="md:w-2/3 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center gap-1">
                  <Star className="text-yellow-500 fill-current" size={16} />
                  <span className="font-bold">{pkg.rating}</span>
                </div>
                <span className="text-gray-500 text-sm">({pkg.reviews} تقييم)</span>
                <span className="text-gray-300">•</span>
                <span className="text-sm text-gray-600">{pkg.category}</span>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-2 font-tajawal">
                {pkg.title}
              </h3>
              
              <p className="text-gray-600 mb-4 flex items-center gap-1">
                <MapPin size={16} />
                {pkg.destination}
              </p>

              <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  {pkg.duration}
                </div>
                <div className="flex items-center gap-1">
                  <Users size={16} />
                  مستوى {pkg.difficulty}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2">المعالم الرئيسية:</h5>
                  <ul className="text-sm text-gray-600">
                    {pkg.highlights.slice(0, 3).map((highlight, idx) => (
                      <li key={idx} className="flex items-center mb-1">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2">يشمل:</h5>
                  <ul className="text-sm text-gray-600">
                    {pkg.includes.slice(0, 3).map((include, idx) => (
                      <li key={idx} className="flex items-center mb-1">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                        {include}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold text-primary">
                    {pkg.price.toLocaleString()} ريال
                  </span>
                  {pkg.originalPrice && (
                    <span className="text-lg text-gray-500 line-through">
                      {pkg.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
                <div className="text-sm text-gray-600">للشخص الواحد</div>
              </div>
              
              <div className="flex items-center gap-3">
                <Button variant="outline" size="sm">
                  <Heart size={16} />
                </Button>
                <Link to={`/package/${pkg.id}`}>
                  <Button className="bg-primary hover:bg-primary-600 text-white">
                    عرض التفاصيل
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl overflow-hidden travel-shadow hover-lift">
      <div className="relative">
        <img 
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        
        {pkg.badge && (
          <Badge className="absolute top-4 right-4 bg-accent text-white">
            {pkg.badge}
          </Badge>
        )}
        {discount > 0 && (
          <Badge className="absolute top-4 left-4 bg-red-500 text-white">
            خصم {discount}%
          </Badge>
        )}

        <button className="absolute bottom-4 left-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
          <Heart size={18} className="text-white" />
        </button>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            <Star className="text-yellow-500 fill-current" size={16} />
            <span className="font-bold">{pkg.rating}</span>
          </div>
          <span className="text-gray-500 text-sm">({pkg.reviews} تقييم)</span>
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-2 font-tajawal line-clamp-2">
          {pkg.title}
        </h3>
        
        <p className="text-gray-600 mb-4 flex items-center gap-1">
          <MapPin size={16} />
          {pkg.destination}
        </p>

        <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Calendar size={16} />
            {pkg.duration}
          </div>
          <span className="text-primary font-medium">{pkg.category}</span>
        </div>

        <div className="mb-6">
          <h5 className="font-semibold text-gray-800 mb-2">يشمل:</h5>
          <div className="grid grid-cols-2 gap-1">
            {pkg.includes.slice(0, 4).map((include, idx) => (
              <div key={idx} className="text-sm text-gray-600 flex items-center">
                <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2" />
                {include}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div>
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
            <div className="text-sm text-gray-600">للشخص الواحد</div>
          </div>
        </div>

        <Link to={`/package/${pkg.id}`}>
          <Button className="w-full bg-primary hover:bg-primary-600 text-white">
            عرض التفاصيل
          </Button>
        </Link>
      </div>
    </div>
  );
};
