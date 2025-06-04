
import React from 'react';
import { Search, MapPin, Calendar, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 64, 175, 0.7), rgba(5, 150, 105, 0.7)), url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float" />
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-secondary/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-tajawal">
            اكتشف العالم معنا
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            رحلات استثنائية وتجارب لا تُنسى في أجمل الوجهات السياحية حول العالم
          </p>
          
          {/* Search Form */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 max-w-4xl mx-auto mb-8 animate-slide-up">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">الوجهة</label>
                <div className="relative">
                  <MapPin className="absolute right-3 top-3 text-gray-400" size={20} />
                  <Input 
                    placeholder="اختر وجهتك" 
                    className="pr-10 bg-white/90 border-0 text-gray-800"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">تاريخ المغادرة</label>
                <div className="relative">
                  <Calendar className="absolute right-3 top-3 text-gray-400" size={20} />
                  <Input 
                    type="date" 
                    className="pr-10 bg-white/90 border-0 text-gray-800"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">تاريخ العودة</label>
                <div className="relative">
                  <Calendar className="absolute right-3 top-3 text-gray-400" size={20} />
                  <Input 
                    type="date" 
                    className="pr-10 bg-white/90 border-0 text-gray-800"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">عدد المسافرين</label>
                <div className="relative">
                  <Users className="absolute right-3 top-3 text-gray-400" size={20} />
                  <Input 
                    placeholder="2 مسافرين" 
                    className="pr-10 bg-white/90 border-0 text-gray-800"
                  />
                </div>
              </div>
            </div>
            
            <Button className="w-full mt-6 bg-accent hover:bg-accent-600 text-white py-6 text-lg font-bold rounded-xl">
              <Search className="ml-2" size={20} />
              ابحث عن رحلتك المثالية
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
              <div className="text-lg opacity-90">رحلة سياحية</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
              <div className="text-lg opacity-90">وجهة سياحية</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">10000+</div>
              <div className="text-lg opacity-90">عميل سعيد</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">15</div>
              <div className="text-lg opacity-90">سنة خبرة</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};
