
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
        // في التطبيق الحقيقي، هذه البيانات ستأتي من Netlify CMS
        // هنا نضع بيانات تجريبية حتى يتم ربط CMS
        
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
          },
          {
            id: '2',
            title: 'جولة ثقافية في إسطنبول',
            destination: 'إسطنبول، تركيا',
            image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            duration: '7 أيام / 6 ليالي',
            price: 1800,
            originalPrice: 2300,
            rating: 4.9,
            reviews: 89,
            difficulty: 'متوسط',
            category: 'ثقافية',
            description: 'اكتشف التاريخ العريق والثقافة الغنية في إسطنبول.',
            highlights: ['آيا صوفيا', 'القصر الأزرق', 'البازار الكبير', 'مضيق البوسفور'],
            includes: ['طيران', 'إقامة', 'جولات', 'مرشد'],
            badge: 'جديد',
            active: true
          },
          {
            id: '3',
            title: 'رحلة رومانسية إلى باريس',
            destination: 'باريس، فرنسا',
            image: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            duration: '6 أيام / 5 ليالي',
            price: 3200,
            originalPrice: 4000,
            rating: 4.9,
            reviews: 156,
            difficulty: 'سهل',
            category: 'رومانسية',
            description: 'استمتع بأجواء باريس الرومانسية ومعالمها الخلابة.',
            highlights: ['برج إيفل', 'متحف اللوفر', 'قوس النصر', 'نهر السين'],
            includes: ['طيران', 'إقامة فاخرة', 'جولات', 'عشاء رومانسي'],
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
          },
          {
            id: '2',
            name: 'إسطنبول',
            country: 'تركيا',
            image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            rating: 4.7,
            packages: 32,
            startingPrice: 1200,
            description: 'حيث تلتقي أوروبا بآسيا في جمال خلاب',
            active: true
          }
        ];

        const mockHotels: Hotel[] = [
          {
            id: '1',
            name: 'فندق برج العرب',
            location: 'دبي، الإمارات',
            image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            stars: 5,
            rating: 4.9,
            reviews: 324,
            pricePerNight: 1200,
            description: 'فندق فاخر بإطلالة خلابة على البحر',
            amenities: ['واي فاي مجاني', 'مسبح', 'مطعم', 'صالة رياضية', 'سبا'],
            active: true
          },
          {
            id: '2',
            name: 'فندق السلطان أحمد',
            location: 'إسطنبول، تركيا',
            image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            stars: 4,
            rating: 4.6,
            reviews: 189,
            pricePerNight: 300,
            description: 'فندق تاريخي في قلب المدينة القديمة',
            amenities: ['واي فاي مجاني', 'إفطار', 'مطعم', 'موقف سيارات'],
            active: true
          }
        ];

        setPackages(mockPackages);
        setDestinations(mockDestinations);
        setHotels(mockHotels);
        setLoading(false);
      } catch (error) {
        console.error('Error loading content:', error);
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
