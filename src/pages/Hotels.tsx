
import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Wifi, Car, Coffee, Waves, Search, Filter, Grid, List } from 'lucide-react';
import { useContentManager } from '@/hooks/useContentManager';
import { Link } from 'react-router-dom';

const Hotels = () => {
  const { hotels, loading, searchHotels, filterHotels } = useContentManager();
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filters, setFilters] = useState({
    stars: undefined as number | undefined,
    priceRange: [0, 2000] as [number, number],
    rating: undefined as number | undefined
  });

  // تطبيق البحث والفلتر
  const searchResults = searchQuery ? searchHotels(searchQuery) : hotels;
  const filteredHotels = filterHotels(filters).filter(hotel => 
    searchResults.some(searchHotel => searchHotel.id === hotel.id)
  );

  const amenityIcons: { [key: string]: React.ReactNode } = {
    'واي فاي مجاني': <Wifi size={16} />,
    'موقف سيارات': <Car size={16} />,
    'مطعم': <Coffee size={16} />,
    'مسبح': <Waves size={16} />
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="text-xl">جار تحميل الفنادق...</div>
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
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-tajawal">الفنادق</h1>
          <p className="text-xl max-w-2xl mx-auto">
            اكتشف مجموعة متميزة من الفنادق الفاخرة والمريحة في أفضل الوجهات السياحية
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Search and Filters */}
        <div className="bg-white rounded-2xl p-6 mb-8 travel-shadow">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            {/* البحث */}
            <div className="relative">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                type="text"
                placeholder="ابحث عن فندق..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-10"
              />
            </div>

            {/* فلتر النجوم */}
            <Select 
              value={filters.stars?.toString() || 'all'} 
              onValueChange={(value) => setFilters(prev => ({ 
                ...prev, 
                stars: value === 'all' ? undefined : parseInt(value) 
              }))}
            >
              <SelectTrigger>
                <SelectValue placeholder="عدد النجوم" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">جميع التقييمات</SelectItem>
                <SelectItem value="5">5 نجوم</SelectItem>
                <SelectItem value="4">4 نجوم</SelectItem>
                <SelectItem value="3">3 نجوم</SelectItem>
              </SelectContent>
            </Select>

            {/* فلتر التقييم */}
            <Select 
              value={filters.rating?.toString() || 'all'} 
              onValueChange={(value) => setFilters(prev => ({ 
                ...prev, 
                rating: value === 'all' ? undefined : parseFloat(value) 
              }))}
            >
              <SelectTrigger>
                <SelectValue placeholder="التقييم" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">جميع التقييمات</SelectItem>
                <SelectItem value="4.5">4.5+ نجوم</SelectItem>
                <SelectItem value="4.0">4.0+ نجوم</SelectItem>
                <SelectItem value="3.5">3.5+ نجوم</SelectItem>
              </SelectContent>
            </Select>

            {/* أزرار العرض */}
            <div className="flex gap-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="flex-1"
              >
                <Grid size={16} />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="flex-1"
              >
                <List size={16} />
              </Button>
            </div>
          </div>

          {/* Price Range Slider */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              نطاق السعر (ريال / ليلة): {filters.priceRange[0]} - {filters.priceRange[1]}
            </label>
            <Slider
              value={filters.priceRange}
              onValueChange={(value) => setFilters(prev => ({ ...prev, priceRange: value as [number, number] }))}
              min={0}
              max={3000}
              step={50}
              className="mb-3"
            />
          </div>

          <div className="text-gray-600">
            عرض {filteredHotels.length} فندق
          </div>
        </div>

        {/* Hotels Grid/List */}
        <div className={`grid gap-8 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`}>
          {filteredHotels.map((hotel) => (
            <div 
              key={hotel.id}
              className={`group bg-white rounded-2xl overflow-hidden travel-shadow hover-lift ${viewMode === 'list' ? 'flex' : ''}`}
            >
              <div className={`relative overflow-hidden ${viewMode === 'list' ? 'w-1/3' : ''}`}>
                <img 
                  src={hotel.image}
                  alt={hotel.name}
                  className={`object-cover group-hover:scale-110 transition-transform duration-500 ${viewMode === 'list' ? 'w-full h-full' : 'w-full h-64'}`}
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
                  {[...Array(hotel.stars)].map((_, i) => (
                    <Star key={i} className="text-yellow-500 fill-current" size={14} />
                  ))}
                </div>
              </div>
              
              <div className={`p-6 ${viewMode === 'list' ? 'flex-1 flex flex-col justify-between' : ''}`}>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{hotel.name}</h3>
                    <div className="flex items-center gap-1">
                      <Star className="text-yellow-500 fill-current" size={16} />
                      <span className="font-bold">{hotel.rating}</span>
                      <span className="text-sm text-gray-500">({hotel.reviews})</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 flex items-center gap-1 mb-3">
                    <MapPin size={14} />
                    {hotel.location}
                  </p>
                  
                  <p className="text-gray-700 mb-4 line-clamp-2">{hotel.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {hotel.amenities.slice(0, 4).map((amenity, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {amenityIcons[amenity] || amenity}
                        <span className="mr-1">{amenity}</span>
                      </Badge>
                    ))}
                    {hotel.amenities.length > 4 && (
                      <Badge variant="outline" className="text-xs">
                        +{hotel.amenities.length - 4} المزيد
                      </Badge>
                    )}
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">
                      {hotel.pricePerNight.toLocaleString()} ريال
                    </div>
                    <div className="text-sm text-gray-500">في الليلة</div>
                  </div>
                  <Link to={`/hotel/${hotel.id}`}>
                    <Button className="bg-primary hover:bg-primary-600 text-white">
                      عرض التفاصيل
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredHotels.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg">لم يتم العثور على فنادق تطابق معايير البحث</div>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => {
                setSearchQuery('');
                setFilters({
                  stars: undefined,
                  priceRange: [0, 2000],
                  rating: undefined
                });
              }}
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

export default Hotels;
