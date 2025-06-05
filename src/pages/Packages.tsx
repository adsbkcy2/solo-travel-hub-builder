
import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PackageCard } from '@/components/packages/PackageCard';
import { PackageFilters } from '@/components/packages/PackageFilters';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Grid, List, Filter, X } from 'lucide-react';
import { useContentManager } from '@/hooks/useContentManager';

const Packages = () => {
  const { packages, loading, searchPackages, filterPackages } = useContentManager();
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    category: undefined as string | undefined,
    priceRange: [0, 10000] as [number, number],
    duration: undefined as string | undefined,
    difficulty: undefined as string | undefined,
    rating: undefined as number | undefined
  });

  // قراءة معاملات البحث من URL
  useEffect(() => {
    const destination = searchParams.get('destination');
    const departure = searchParams.get('departure');
    const returnDate = searchParams.get('return');
    const travelers = searchParams.get('travelers');

    if (destination) {
      setSearchQuery(destination);
    }
  }, [searchParams]);

  // تطبيق البحث والفلتر
  const searchResults = searchQuery ? searchPackages(searchQuery) : packages;
  const filteredPackages = filterPackages(filters).filter(pkg => 
    searchResults.some(searchPkg => searchPkg.id === pkg.id)
  );

  const clearAllFilters = () => {
    setSearchQuery('');
    setFilters({
      category: undefined,
      priceRange: [0, 10000],
      duration: undefined,
      difficulty: undefined,
      rating: undefined
    });
  };

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
            اكتشف مجموعة متنوعة من الباقات السياحية المصممة خصيصاً لتناسب جميع الأذواق والميزانيات
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Search and Controls */}
        <div className="bg-white rounded-2xl p-6 mb-8 travel-shadow">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            {/* Search Input */}
            <div className="flex-1 relative">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                type="text"
                placeholder="ابحث في الباقات..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-10"
              />
            </div>

            {/* View Mode and Filter Toggle */}
            <div className="flex gap-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid')}
              >
                <Grid size={16} />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
              >
                <List size={16} />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden"
              >
                <Filter size={16} />
                فلتر
              </Button>
            </div>
          </div>

          {/* Active Filters */}
          {(searchQuery || filters.category || filters.difficulty) && (
            <div className="flex flex-wrap gap-2 mb-4">
              {searchQuery && (
                <Badge variant="secondary" className="flex items-center gap-2">
                  البحث: {searchQuery}
                  <X size={14} className="cursor-pointer" onClick={() => setSearchQuery('')} />
                </Badge>
              )}
              {filters.category && (
                <Badge variant="secondary" className="flex items-center gap-2">
                  التصنيف: {filters.category}
                  <X size={14} className="cursor-pointer" onClick={() => setFilters(prev => ({ ...prev, category: undefined }))} />
                </Badge>
              )}
              {filters.difficulty && (
                <Badge variant="secondary" className="flex items-center gap-2">
                  الصعوبة: {filters.difficulty}
                  <X size={14} className="cursor-pointer" onClick={() => setFilters(prev => ({ ...prev, difficulty: undefined }))} />
                </Badge>
              )}
              <Button variant="ghost" size="sm" onClick={clearAllFilters}>
                مسح الكل
              </Button>
            </div>
          )}

          <div className="text-gray-600">
            عرض {filteredPackages.length} من {packages.length} باقة
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className={`${showFilters ? 'block' : 'hidden'} lg:block w-full lg:w-80 shrink-0`}>
            <PackageFilters
              filters={filters}
              onFiltersChange={setFilters}
              packages={packages}
            />
          </div>

          {/* Packages Grid/List */}
          <div className="flex-1">
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
                <div className="text-gray-500 text-lg mb-4">لم يتم العثور على باقات تطابق معايير البحث</div>
                <Button variant="outline" onClick={clearAllFilters}>
                  إعادة تعيين البحث
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-hero rounded-3xl p-8 text-center text-white mt-12">
          <h3 className="text-2xl font-bold mb-4">لم تجد الباقة المناسبة؟</h3>
          <p className="text-lg mb-6">اطلب استشارة مجانية وسنساعدك في تصميم باقة خاصة بك</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/consultation">
              <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-gray-100">
                اطلب استشارة مجانية
              </Button>
            </Link>
            <Link to="/booking">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                احجز الآن
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Packages;
