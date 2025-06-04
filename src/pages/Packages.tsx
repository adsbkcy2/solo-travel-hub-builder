
import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PackageCard } from '@/components/packages/PackageCard';
import { PackageFilters } from '@/components/packages/PackageFilters';
import { Button } from '@/components/ui/button';
import { Grid, List } from 'lucide-react';

const Packages = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filteredPackages, setFilteredPackages] = useState([]);

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
      category: 'مدن',
      difficulty: 'سهل',
      highlights: ['برج خليفة', 'نافورة دبي', 'سوق الذهب', 'جزيرة النخلة'],
      includes: ['طيران', 'إقامة', 'وجبات', 'جولات'],
      badge: 'الأكثر مبيعاً'
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
      category: 'ثقافية',
      difficulty: 'متوسط',
      highlights: ['آيا صوفيا', 'القصر الأزرق', 'البازار الكبير', 'مضيق البوسفور'],
      includes: ['طيران', 'إقامة', 'جولات', 'مرشد'],
      badge: 'جديد'
    },
    // ... المزيد من الباقات
  ];

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
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <PackageFilters onFilterChange={setFilteredPackages} />
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* View Controls */}
            <div className="flex justify-between items-center mb-8">
              <div className="text-gray-600">
                عرض {packages.length} باقة سياحية
              </div>
              <div className="flex items-center gap-2">
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
              </div>
            </div>

            {/* Packages Grid */}
            <div className={`grid gap-8 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`}>
              {packages.map((pkg) => (
                <PackageCard 
                  key={pkg.id} 
                  package={pkg} 
                  viewMode={viewMode}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Packages;
