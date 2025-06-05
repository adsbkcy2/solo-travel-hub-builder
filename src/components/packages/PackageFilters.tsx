
import React from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Search } from 'lucide-react';

interface PackageFiltersProps {
  filters: {
    category: string | undefined;
    priceRange: [number, number];
    duration: string | undefined;
    difficulty: string | undefined;
    rating: number | undefined;
  };
  onFiltersChange: (filters: any) => void;
  packages: any[];
}

export const PackageFilters = ({ filters, onFiltersChange, packages }: PackageFiltersProps) => {
  const updateFilter = (key: string, value: any) => {
    onFiltersChange({
      ...filters,
      [key]: value
    });
  };

  return (
    <div className="bg-white rounded-2xl p-6 mb-8 travel-shadow">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {/* Category Filter */}
        <Select 
          value={filters.category || 'all'} 
          onValueChange={(value) => updateFilter('category', value === 'all' ? undefined : value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="فئة الرحلة" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">جميع الفئات</SelectItem>
            <SelectItem value="مدن">مدن</SelectItem>
            <SelectItem value="شواطئ">شواطئ</SelectItem>
            <SelectItem value="جبال">جبال</SelectItem>
            <SelectItem value="ثقافية">ثقافية</SelectItem>
            <SelectItem value="مغامرات">مغامرات</SelectItem>
            <SelectItem value="عائلية">عائلية</SelectItem>
            <SelectItem value="رومانسية">رومانسية</SelectItem>
            <SelectItem value="دينية">دينية</SelectItem>
          </SelectContent>
        </Select>

        {/* Duration Filter */}
        <Select 
          value={filters.duration || 'all'} 
          onValueChange={(value) => updateFilter('duration', value === 'all' ? undefined : value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="مدة الرحلة" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">جميع المدد</SelectItem>
            <SelectItem value="1-3">1-3 أيام</SelectItem>
            <SelectItem value="4-7">4-7 أيام</SelectItem>
            <SelectItem value="8-14">8-14 يوم</SelectItem>
            <SelectItem value="15+">أكثر من 15 يوم</SelectItem>
          </SelectContent>
        </Select>

        {/* Difficulty Filter */}
        <Select 
          value={filters.difficulty || 'all'} 
          onValueChange={(value) => updateFilter('difficulty', value === 'all' ? undefined : value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="مستوى الصعوبة" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">جميع المستويات</SelectItem>
            <SelectItem value="Easy">سهل</SelectItem>
            <SelectItem value="Moderate">متوسط</SelectItem>
            <SelectItem value="Challenging">صعب</SelectItem>
          </SelectContent>
        </Select>

        {/* Rating Filter */}
        <Select 
          value={filters.rating?.toString() || 'all'} 
          onValueChange={(value) => updateFilter('rating', value === 'all' ? undefined : parseFloat(value))}
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
      </div>

      {/* Price Range Slider */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          نطاق السعر (ريال): {filters.priceRange[0]} - {filters.priceRange[1]}
        </label>
        <Slider
          value={filters.priceRange}
          onValueChange={(value) => updateFilter('priceRange', value as [number, number])}
          min={0}
          max={10000}
          step={100}
          className="mb-3"
        />
      </div>

      <div className="text-gray-600">
        عرض {packages.length} باقة
      </div>
    </div>
  );
};
