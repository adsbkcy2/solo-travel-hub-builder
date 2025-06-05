
import { useState, useEffect } from 'react';
import { contentService, CMSPackage, CMSDestination, CMSHotel, CMSSettings } from '@/services/contentService';

// تحديث الواجهات لتتطابق مع CMS
export interface Package extends CMSPackage {}
export interface Destination extends CMSDestination {}
export interface Hotel extends CMSHotel {}
export interface Settings extends CMSSettings {}

// هوك لإدارة المحتوى من Netlify CMS
export const useContentManager = () => {
  const [packages, setPackages] = useState<Package[]>([]);
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [settings, setSettings] = useState<Settings | null>(null);
  const [loading, setLoading] = useState(true);

  // تحميل جميع المحتويات من CMS
  useEffect(() => {
    const loadContent = async () => {
      try {
        console.log('بدء تحميل المحتوى من Netlify CMS...');
        setLoading(true);
        
        // تحميل جميع المحتويات بشكل متوازي
        const [packagesData, destinationsData, hotelsData, settingsData] = await Promise.all([
          contentService.getPackages(),
          contentService.getDestinations(),
          contentService.getHotels(),
          contentService.getSettings()
        ]);

        // تحديث عدد الباقات الحقيقي لكل وجهة
        const updatedDestinations = destinationsData.map(dest => {
          const packageCount = packagesData.filter(pkg => 
            pkg.destination.toLowerCase().includes(dest.name.toLowerCase()) ||
            pkg.destination.toLowerCase().includes(dest.country.toLowerCase())
          ).length;
          
          return {
            ...dest,
            packages: packageCount
          };
        });

        setPackages(packagesData);
        setDestinations(updatedDestinations);
        setHotels(hotelsData);
        setSettings(settingsData);
        
        console.log(`تم تحميل المحتوى من CMS:`, {
          packages: packagesData.length,
          destinations: updatedDestinations.length,
          hotels: hotelsData.length,
          settings: settingsData ? 'تم' : 'فشل'
        });
        
      } catch (error) {
        console.error('خطأ في تحميل المحتوى من CMS:', error);
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, []);

  // دالة البحث في الباقات
  const searchPackages = (query: string) => {
    if (!query) return packages;
    
    return packages.filter(pkg =>
      pkg.title.toLowerCase().includes(query.toLowerCase()) ||
      pkg.destination.toLowerCase().includes(query.toLowerCase()) ||
      pkg.category.toLowerCase().includes(query.toLowerCase()) ||
      pkg.description.toLowerCase().includes(query.toLowerCase())
    );
  };

  // دالة فلترة الباقات
  const filterPackages = (filters: {
    category?: string;
    priceRange?: [number, number];
    duration?: string;
    difficulty?: string;
    rating?: number;
  }) => {
    return packages.filter(pkg => {
      if (filters.category && pkg.category !== filters.category) return false;
      if (filters.priceRange && (pkg.price < filters.priceRange[0] || pkg.price > filters.priceRange[1])) return false;
      if (filters.difficulty && pkg.difficulty !== filters.difficulty) return false;
      if (filters.rating && pkg.rating < filters.rating) return false;
      return true;
    });
  };

  // دالة البحث في الفنادق
  const searchHotels = (query: string) => {
    if (!query) return hotels;
    
    return hotels.filter(hotel =>
      hotel.name.toLowerCase().includes(query.toLowerCase()) ||
      hotel.location.toLowerCase().includes(query.toLowerCase()) ||
      hotel.description.toLowerCase().includes(query.toLowerCase())
    );
  };

  // دالة فلترة الفنادق
  const filterHotels = (filters: {
    stars?: number;
    priceRange?: [number, number];
    rating?: number;
  }) => {
    return hotels.filter(hotel => {
      if (filters.stars && hotel.stars !== filters.stars) return false;
      if (filters.priceRange && (hotel.pricePerNight < filters.priceRange[0] || hotel.pricePerNight > filters.priceRange[1])) return false;
      if (filters.rating && hotel.rating < filters.rating) return false;
      return true;
    });
  };

  // دالة البحث في الوجهات
  const searchDestinations = (query: string) => {
    if (!query) return destinations;
    
    return destinations.filter(dest =>
      dest.name.toLowerCase().includes(query.toLowerCase()) ||
      dest.country.toLowerCase().includes(query.toLowerCase()) ||
      dest.description.toLowerCase().includes(query.toLowerCase())
    );
  };

  return {
    packages,
    destinations,
    hotels,
    settings,
    loading,
    searchPackages,
    filterPackages,
    searchHotels,
    filterHotels,
    searchDestinations
  };
};
