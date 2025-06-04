
import { useState, useEffect } from 'react';

// نوع البيانات للباقات
export interface Package {
  id: string;
  title: string;
  destination: string;
  image: string;
  gallery?: string[];
  duration: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  groupSize?: string;
  difficulty: string;
  category: string;
  description: string;
  highlights: string[];
  includes: string[];
  excludes?: string[];
  badge?: string;
  active?: boolean;
  itinerary?: Array<{
    day: string;
    title: string;
    activities: string[];
  }>;
}

// نوع البيانات للوجهات
export interface Destination {
  id: string;
  name: string;
  country: string;
  image: string;
  rating: number;
  packages: number;
  startingPrice: number;
  description: string;
  active?: boolean;
}

// نوع البيانات للفنادق
export interface Hotel {
  id: string;
  name: string;
  location: string;
  image: string;
  gallery?: string[];
  stars: number;
  rating: number;
  reviews: number;
  pricePerNight: number;
  description: string;
  amenities: string[];
  active?: boolean;
}

// دالة لتحويل محتوى markdown إلى كائن
const parseMarkdownFile = (content: string) => {
  const frontMatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (!frontMatterMatch) return null;

  const frontMatter = frontMatterMatch[1];
  const data: any = {};
  
  frontMatter.split('\n').forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.substring(0, colonIndex).trim();
      let value = line.substring(colonIndex + 1).trim();
      
      // إزالة الاقتباس إذا كان موجوداً
      if (value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1);
      }
      
      // تحويل القيم الرقمية
      if (!isNaN(Number(value)) && value !== '') {
        data[key] = Number(value);
      } else if (value === 'true') {
        data[key] = true;
      } else if (value === 'false') {
        data[key] = false;
      } else {
        data[key] = value;
      }
    }
  });

  return data;
};

// دالة لجلب قائمة الملفات من مجلد
const fetchContentFiles = async (folder: string) => {
  try {
    const response = await fetch(`/content/${folder}/`);
    if (!response.ok) {
      console.log(`مجلد ${folder} غير موجود، استخدام البيانات التجريبية`);
      return [];
    }
    
    // محاولة قراءة قائمة الملفات
    const text = await response.text();
    const files = text.match(/href="([^"]*\.md)"/g)?.map(match => 
      match.replace('href="', '').replace('"', '')
    ) || [];
    
    return files;
  } catch (error) {
    console.log(`خطأ في جلب ملفات ${folder}:`, error);
    return [];
  }
};

// دالة لجلب محتوى ملف واحد
const fetchFileContent = async (path: string) => {
  try {
    const response = await fetch(path);
    if (response.ok) {
      return await response.text();
    }
  } catch (error) {
    console.log(`خطأ في جلب الملف ${path}:`, error);
  }
  return null;
};

// هوك لإدارة المحتوى من Netlify CMS
export const useContentManager = () => {
  const [packages, setPackages] = useState<Package[]>([]);
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(true);

  // تحميل البيانات من ملفات المحتوى
  useEffect(() => {
    const loadContent = async () => {
      try {
        console.log('بدء تحميل المحتوى من Netlify CMS...');
        
        // تحميل الباقات
        const packageFiles = await fetchContentFiles('packages');
        const packagesData: Package[] = [];
        
        for (const file of packageFiles) {
          const content = await fetchFileContent(`/content/packages/${file}`);
          if (content) {
            const data = parseMarkdownFile(content);
            if (data && data.active !== false) {
              packagesData.push({
                id: file.replace('.md', ''),
                title: data.title || 'بدون عنوان',
                destination: data.destination || 'غير محدد',
                image: data.image || '/placeholder.svg',
                gallery: data.gallery || [],
                duration: data.duration || 'غير محدد',
                price: data.price || 0,
                originalPrice: data.originalPrice,
                rating: data.rating || 0,
                reviews: data.reviews || 0,
                groupSize: data.groupSize,
                difficulty: data.difficulty || 'سهل',
                category: data.category || 'عام',
                description: data.description || '',
                highlights: data.highlights || [],
                includes: data.includes || [],
                excludes: data.excludes || [],
                badge: data.badge,
                active: data.active !== false,
                itinerary: data.itinerary || []
              });
            }
          }
        }

        // تحميل الوجهات
        const destinationFiles = await fetchContentFiles('destinations');
        const destinationsData: Destination[] = [];
        
        for (const file of destinationFiles) {
          const content = await fetchFileContent(`/content/destinations/${file}`);
          if (content) {
            const data = parseMarkdownFile(content);
            if (data && data.active !== false) {
              destinationsData.push({
                id: file.replace('.md', ''),
                name: data.name || 'بدون اسم',
                country: data.country || 'غير محدد',
                image: data.image || '/placeholder.svg',
                rating: data.rating || 0,
                packages: data.packages || 0,
                startingPrice: data.startingPrice || 0,
                description: data.description || '',
                active: data.active !== false
              });
            }
          }
        }

        // تحميل الفنادق
        const hotelFiles = await fetchContentFiles('hotels');
        const hotelsData: Hotel[] = [];
        
        for (const file of hotelFiles) {
          const content = await fetchFileContent(`/content/hotels/${file}`);
          if (content) {
            const data = parseMarkdownFile(content);
            if (data && data.active !== false) {
              hotelsData.push({
                id: file.replace('.md', ''),
                name: data.name || 'بدون اسم',
                location: data.location || 'غير محدد',
                image: data.image || '/placeholder.svg',
                gallery: data.gallery || [],
                stars: data.stars || 1,
                rating: data.rating || 0,
                reviews: data.reviews || 0,
                pricePerNight: data.pricePerNight || 0,
                description: data.description || '',
                amenities: data.amenities || [],
                active: data.active !== false
              });
            }
          }
        }

        console.log(`تم تحميل ${packagesData.length} باقة، ${destinationsData.length} وجهة، ${hotelsData.length} فندق`);
        
        setPackages(packagesData);
        setDestinations(destinationsData);
        setHotels(hotelsData);
        
        // في حالة عدم وجود محتوى، استخدام البيانات التجريبية
        if (packagesData.length === 0 && destinationsData.length === 0 && hotelsData.length === 0) {
          console.log('لم يتم العثور على محتوى، استخدام البيانات التجريبية');
          loadFallbackData();
        }
        
      } catch (error) {
        console.error('خطأ في تحميل المحتوى:', error);
        loadFallbackData();
      } finally {
        setLoading(false);
      }
    };

    // البيانات التجريبية كبديل
    const loadFallbackData = () => {
      const mockPackages: Package[] = [
        {
          id: '1',
          title: 'رحلة استكشافية إلى دبي',
          destination: 'دبي، الإمارات',
          image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          duration: '5 أيام / 4 ليالي',
          price: 2500,
          originalPrice: 3200,
          rating: 4.8,
          reviews: 124,
          groupSize: '2-8 أشخاص',
          difficulty: 'سهل',
          category: 'مدن',
          description: 'استكشف جمال دبي الساحر في رحلة مليئة بالمغامرات والاكتشافات.',
          highlights: ['برج خليفة', 'نافورة دبي', 'سوق الذهب', 'جزيرة النخلة'],
          includes: ['طيران', 'إقامة', 'وجبات', 'جولات'],
          badge: 'الأكثر مبيعاً',
          active: true
        }
      ];

      const mockDestinations: Destination[] = [
        {
          id: '1',
          name: 'دبي',
          country: 'الإمارات العربية المتحدة',
          image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          rating: 4.8,
          packages: 25,
          startingPrice: 1500,
          description: 'مدينة الأحلام والتسوق والفخامة',
          active: true
        }
      ];

      setPackages(mockPackages);
      setDestinations(mockDestinations);
      setHotels([]);
    };

    loadContent();
  }, []);

  // دالة البحث في الباقات
  const searchPackages = (query: string) => {
    if (!query) return packages;
    
    return packages.filter(pkg =>
      pkg.title.toLowerCase().includes(query.toLowerCase()) ||
      pkg.destination.toLowerCase().includes(query.toLowerCase()) ||
      pkg.category.toLowerCase().includes(query.toLowerCase())
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
      hotel.location.toLowerCase().includes(query.toLowerCase())
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

  return {
    packages,
    destinations,
    hotels,
    loading,
    searchPackages,
    filterPackages,
    searchHotels,
    filterHotels
  };
};
