
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, MapPin, Calendar, Users } from 'lucide-react';
import { useContentManager } from '@/hooks/useContentManager';

export const SearchForm = () => {
  const { destinations } = useContentManager();
  const navigate = useNavigate();
  
  const [searchData, setSearchData] = useState({
    destination: '',
    departureDate: '',
    returnDate: '',
    travelers: '2'
  });

  const handleSearch = () => {
    // إنشاء query parameters للبحث
    const params = new URLSearchParams();
    
    if (searchData.destination) {
      params.append('destination', searchData.destination);
    }
    if (searchData.departureDate) {
      params.append('departure', searchData.departureDate);
    }
    if (searchData.returnDate) {
      params.append('return', searchData.returnDate);
    }
    if (searchData.travelers) {
      params.append('travelers', searchData.travelers);
    }

    // التوجه إلى صفحة الباقات مع معاملات البحث
    navigate(`/packages?${params.toString()}`);
  };

  const updateSearchData = (field: string, value: string) => {
    setSearchData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 max-w-4xl mx-auto mb-8 animate-slide-up">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-white">الوجهة</label>
          <Select onValueChange={(value) => updateSearchData('destination', value)}>
            <SelectTrigger className="bg-white/90 border-0 text-gray-800">
              <SelectValue placeholder="اختر وجهتك" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              {destinations.map((dest) => (
                <SelectItem key={dest.id} value={dest.name}>
                  {dest.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-white">تاريخ المغادرة</label>
          <div className="relative">
            <Calendar className="absolute right-3 top-3 text-gray-400" size={20} />
            <Input 
              type="date" 
              className="pr-10 bg-white/90 border-0 text-gray-800"
              value={searchData.departureDate}
              onChange={(e) => updateSearchData('departureDate', e.target.value)}
              min={new Date().toISOString().split('T')[0]}
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-white">تاريخ العودة</label>
          <div className="relative">
            <Calendar className="absolute right-3 top-3 text-gray-400" size={20} />
            <Input 
              type="date" 
              className="pr-10 bg-white/90 border-0 text-gray-800"
              value={searchData.returnDate}
              onChange={(e) => updateSearchData('returnDate', e.target.value)}
              min={searchData.departureDate || new Date().toISOString().split('T')[0]}
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-white">عدد المسافرين</label>
          <Select 
            value={searchData.travelers} 
            onValueChange={(value) => updateSearchData('travelers', value)}
          >
            <SelectTrigger className="bg-white/90 border-0 text-gray-800">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="1">1 مسافر</SelectItem>
              <SelectItem value="2">2 مسافرين</SelectItem>
              <SelectItem value="3">3 مسافرين</SelectItem>
              <SelectItem value="4">4 مسافرين</SelectItem>
              <SelectItem value="5">5 مسافرين</SelectItem>
              <SelectItem value="6">6 مسافرين</SelectItem>
              <SelectItem value="7">7 مسافرين</SelectItem>
              <SelectItem value="8">8 مسافرين</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <Button 
        onClick={handleSearch}
        className="w-full mt-6 bg-accent hover:bg-accent-600 text-white py-6 text-lg font-bold rounded-xl"
      >
        <Search className="ml-2" size={20} />
        ابحث عن رحلتك المثالية
      </Button>
    </div>
  );
};
