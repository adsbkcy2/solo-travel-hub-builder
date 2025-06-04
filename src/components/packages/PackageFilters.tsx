
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Filter, RotateCcw } from 'lucide-react';

interface PackageFiltersProps {
  onFilterChange: (filters: any) => void;
}

export const PackageFilters: React.FC<PackageFiltersProps> = ({ onFilterChange }) => {
  const [priceRange, setPriceRange] = useState([500, 5000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedDurations, setSelectedDurations] = useState<string[]>([]);
  const [selectedDifficulties, setSelectedDifficulties] = useState<string[]>([]);
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);

  const categories = [
    'مدن',
    'شواطئ',
    'جبال',
    'ثقافية',
    'مغامرات',
    'عائلية',
    'رومانسية',
    'دينية'
  ];

  const durations = [
    '1-3 أيام',
    '4-7 أيام',
    '8-14 يوم',
    'أكثر من 14 يوم'
  ];

  const difficulties = [
    'سهل',
    'متوسط',
    'صعب'
  ];

  const ratings = [5, 4, 3, 2, 1];

  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    }
  };

  const handleDurationChange = (duration: string, checked: boolean) => {
    if (checked) {
      setSelectedDurations([...selectedDurations, duration]);
    } else {
      setSelectedDurations(selectedDurations.filter(d => d !== duration));
    }
  };

  const handleDifficultyChange = (difficulty: string, checked: boolean) => {
    if (checked) {
      setSelectedDifficulties([...selectedDifficulties, difficulty]);
    } else {
      setSelectedDifficulties(selectedDifficulties.filter(d => d !== difficulty));
    }
  };

  const handleRatingChange = (rating: number, checked: boolean) => {
    if (checked) {
      setSelectedRatings([...selectedRatings, rating]);
    } else {
      setSelectedRatings(selectedRatings.filter(r => r !== rating));
    }
  };

  const resetFilters = () => {
    setPriceRange([500, 5000]);
    setSelectedCategories([]);
    setSelectedDurations([]);
    setSelectedDifficulties([]);
    setSelectedRatings([]);
  };

  return (
    <div className="bg-white rounded-2xl p-6 travel-shadow sticky top-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          <Filter size={20} />
          فلترة النتائج
        </h3>
        <Button variant="outline" size="sm" onClick={resetFilters}>
          <RotateCcw size={16} className="ml-1" />
          إعادة تعيين
        </Button>
      </div>

      {/* Price Range */}
      <div className="mb-8">
        <h4 className="font-semibold text-gray-800 mb-4">نطاق السعر</h4>
        <Slider
          value={priceRange}
          onValueChange={setPriceRange}
          min={0}
          max={10000}
          step={100}
          className="mb-3"
        />
        <div className="flex justify-between text-sm text-gray-600">
          <span>{priceRange[0]} ريال</span>
          <span>{priceRange[1]} ريال</span>
        </div>
      </div>

      {/* Categories */}
      <div className="mb-8">
        <h4 className="font-semibold text-gray-800 mb-4">نوع الرحلة</h4>
        <div className="space-y-3">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={category}
                checked={selectedCategories.includes(category)}
                onCheckedChange={(checked) => handleCategoryChange(category, !!checked)}
              />
              <label htmlFor={category} className="text-sm text-gray-700 cursor-pointer">
                {category}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Duration */}
      <div className="mb-8">
        <h4 className="font-semibold text-gray-800 mb-4">مدة الرحلة</h4>
        <div className="space-y-3">
          {durations.map((duration) => (
            <div key={duration} className="flex items-center space-x-2">
              <Checkbox
                id={duration}
                checked={selectedDurations.includes(duration)}
                onCheckedChange={(checked) => handleDurationChange(duration, !!checked)}
              />
              <label htmlFor={duration} className="text-sm text-gray-700 cursor-pointer">
                {duration}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Difficulty */}
      <div className="mb-8">
        <h4 className="font-semibold text-gray-800 mb-4">مستوى الصعوبة</h4>
        <div className="space-y-3">
          {difficulties.map((difficulty) => (
            <div key={difficulty} className="flex items-center space-x-2">
              <Checkbox
                id={difficulty}
                checked={selectedDifficulties.includes(difficulty)}
                onCheckedChange={(checked) => handleDifficultyChange(difficulty, !!checked)}
              />
              <label htmlFor={difficulty} className="text-sm text-gray-700 cursor-pointer">
                {difficulty}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Rating */}
      <div className="mb-8">
        <h4 className="font-semibold text-gray-800 mb-4">التقييم</h4>
        <div className="space-y-3">
          {ratings.map((rating) => (
            <div key={rating} className="flex items-center space-x-2">
              <Checkbox
                id={`rating-${rating}`}
                checked={selectedRatings.includes(rating)}
                onCheckedChange={(checked) => handleRatingChange(rating, !!checked)}
              />
              <label htmlFor={`rating-${rating}`} className="text-sm text-gray-700 cursor-pointer flex items-center gap-1">
                {rating} نجوم وأكثر
              </label>
            </div>
          ))}
        </div>
      </div>

      <Button className="w-full bg-primary hover:bg-primary-600 text-white">
        تطبيق الفلاتر
      </Button>
    </div>
  );
};
