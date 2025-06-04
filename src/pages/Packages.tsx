
import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PackageCard } from '@/components/packages/PackageCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Grid, List, Search, Filter } from 'lucide-react';
import { useContentManager } from '@/hooks/useContentManager';

const Packages = () => {
  const { packages, loading, searchPackages, filterPackages } = useContentManager();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    category: undefined as string | undefined,
    priceRange: [500, 5000] as [number, number],
    difficulty: undefined as string | undefined,
    rating: undefined as number | undefined
  });

  // تطبيق البحث والفلتر
  const searchResults = searchQuery ? searchPackages(searchQuery) : packages;
  const filteredPackages = filterPackages(filters).filter(pkg => 
    searchResults.some(searchPkg => searchPkg.id === pkg.id)
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="text-xl">جار تحميل الباقات...</div>
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
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-tajawal">الباقات السياحية</h1>
          <p className="text-xl max-w-2xl mx-auto">
            اختر من بين مجموعة واسعة من الباقات السياحية المصممة خصيصاً لتناسب جميع الأذواق والميزانيات
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
                placeholder="ابحث عن باقة..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-10"
              />
            </div>

            {/* فلتر النوع */}
            <Select 
              value={filters.category || ''} 
              onValueChange={(value) => setFilters(prev => ({ 
                ...prev, 
                category: value || undefined 
              }))}
            >
              <SelectTrigger>
                <SelectValue placeholder="نوع الرحلة" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">جميع الأنواع</SelectItem>
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

            {/* فلتر الصعوبة */}
            <Select 
              value={filters.difficulty || ''} 
              onValueChange={(value) => setFilters(prev => ({ 
                ...prev, 
                difficulty: value || undefined 
              }))}
            >
              <SelectTrigger>
                <SelectValue placeholder="مستوى الصعوبة" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">جميع المستويات</SelectItem>
                <SelectItem value="سهل">سهل</SelectItem>
                <SelectItem value="متوسط">متوسط</SelectItem>
                <SelectItem value="صعب">صعب</SelectItem>
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
              نطاق السعر: {filters.priceRange[0]} - {filters.priceRange[1]} ريال
            </label>
            <Slider
              value={filters.priceRange}
              onValueChange={(value) => setFilters(prev => ({ ...prev, priceRange: value as [number, number] }))}
              min={0}
              max={10000}
              step={100}
              className="mb-3"
            />
          </div>

          <div className="text-gray-600">
            عرض {filteredPackages.length} باقة سياحية
          </div>
        </div>

        {/* Packages Grid */}
        <div className={`grid gap-8 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`}>
          {filteredPackages.map((pkg) => (
            <PackageCard 
              key={pkg.id} 
              package={pkg} 
              viewMode={viewMode}
            />
          ))}
        </div>

        {filteredPackages.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg">لم يتم العثور على باقات تطابق معايير البحث</div>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => {
                setSearchQuery('');
                setFilters({
                  category: undefined,
                  priceRange: [500, 5000],
                  difficulty: undefined,
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

export default Packages;
