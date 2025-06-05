
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

// هوك لإدارة المحتوى
export const useContentManager = () => {
  const [packages, setPackages] = useState<Package[]>([]);
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(true);

  // تحميل البيانات المحسنة
  useEffect(() => {
    const loadContent = async () => {
      try {
        console.log('بدء تحميل المحتوى...');
        
        // البيانات المحسنة للباقات مع عدد باقات حقيقي للوجهات
        const mockPackages: Package[] = [
          {
            id: '1',
            title: 'Dubai Explorer Package',
            destination: 'Dubai, UAE',
            image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            gallery: [
              'https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
              'https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
            ],
            duration: '5 Days / 4 Nights',
            price: 2500,
            originalPrice: 3200,
            rating: 4.8,
            reviews: 124,
            groupSize: '2-8 أشخاص',
            difficulty: 'سهل',
            category: 'مدن',
            description: 'استكشف جمال دبي الساحر في رحلة مليئة بالمغامرات والاكتشافات. زر برج خليفة، تسوق في دبي مول، واستمتع بالشواطئ الذهبية.',
            highlights: ['برج خليفة', 'نافورة دبي', 'سوق الذهب', 'جزيرة النخلة', 'دبي مول', 'صحراء دبي'],
            includes: ['طيران ذهاب وإياب', 'إقامة 4 نجوم', 'وجبات يومية', 'جولات سياحية', 'نقل مطار'],
            excludes: ['تأشيرة الدخول', 'تأمين السفر', 'مصروفات شخصية'],
            badge: 'الأكثر مبيعاً',
            active: true
          },
          {
            id: '2',
            title: 'Dubai Luxury Experience',
            destination: 'Dubai, UAE',
            image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            duration: '7 Days / 6 Nights',
            price: 4500,
            originalPrice: 5200,
            rating: 4.9,
            reviews: 89,
            groupSize: '2-6 أشخاص',
            difficulty: 'سهل',
            category: 'فاخر',
            description: 'تجربة فاخرة في دبي مع إقامة في أفضل الفنادق وأنشطة حصرية.',
            highlights: ['فندق برج العرب', 'يخت خاص', 'مطاعم فاخرة', 'تسوق حصري'],
            includes: ['طيران درجة أولى', 'إقامة 5 نجوم', 'وجبات فاخرة', 'سائق خاص'],
            badge: 'فاخر',
            active: true
          },
          {
            id: '3',
            title: 'Istanbul Cultural Journey',
            destination: 'Istanbul, Turkey',
            image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            duration: '6 Days / 5 Nights',
            price: 1800,
            originalPrice: 2300,
            rating: 4.7,
            reviews: 156,
            groupSize: '2-12 شخص',
            difficulty: 'متوسط',
            category: 'ثقافية',
            description: 'اكتشف تاريخ وثقافة إسطنبول العريقة، من آيا صوفيا إلى البازار الكبير.',
            highlights: ['آيا صوفيا', 'البازار الكبير', 'قصر توب كابي', 'مضيق البوسفور'],
            includes: ['طيران', 'إقامة', 'وجبات', 'جولات', 'دليل سياحي'],
            badge: 'جديد',
            active: true
          },
          {
            id: '4',
            title: 'Istanbul Historic Tour',
            destination: 'Istanbul, Turkey',
            image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            duration: '4 Days / 3 Nights',
            price: 1200,
            originalPrice: 1500,
            rating: 4.6,
            reviews: 73,
            groupSize: '4-16 شخص',
            difficulty: 'سهل',
            category: 'تاريخية',
            description: 'جولة تاريخية مركزة في أهم معالم إسطنبول التاريخية.',
            highlights: ['الجامع الأزرق', 'قصر دولما بهجة', 'صهريج البازيليك'],
            includes: ['طيران', 'إقامة 3 نجوم', 'إفطار', 'جولات'],
            active: true
          },
          {
            id: '5',
            title: 'Maldives Paradise Escape',
            destination: 'Maldives',
            image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            duration: '7 Days / 6 Nights',
            price: 6500,
            rating: 4.9,
            reviews: 201,
            groupSize: '2-4 أشخاص',
            difficulty: 'سهل',
            category: 'شواطئ',
            description: 'استمتع بأجمل الشواطئ في العالم في جزر المالديف، مع المياه الفيروزية والرمال البيضاء.',
            highlights: ['شواطئ خاصة', 'غوص وسنوركل', 'منتجعات فاخرة', 'رحلات دولفين'],
            includes: ['طيران', 'منتجع 5 نجوم', 'كل الوجبات', 'أنشطة مائية'],
            badge: 'فاخر',
            active: true
          }
        ];

        // حساب عدد الباقات الحقيقي لكل وجهة
        const packagesByDestination = mockPackages.reduce((acc, pkg) => {
          const destKey = pkg.destination.split(',')[0].trim();
          acc[destKey] = (acc[destKey] || 0) + 1;
          return acc;
        }, {} as Record<string, number>);

        const mockDestinations: Destination[] = [
          {
            id: '1',
            name: 'دبي',
            country: 'الإمارات العربية المتحدة',
            image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            rating: 4.8,
            packages: packagesByDestination['Dubai'] || 0,
            startingPrice: 1500,
            description: 'مدينة الأحلام والتسوق والفخامة، حيث يلتقي التراث بالحداثة',
            active: true
          },
          {
            id: '2',
            name: 'إسطنبول',
            country: 'تركيا',
            image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            rating: 4.7,
            packages: packagesByDestination['Istanbul'] || 0,
            startingPrice: 1200,
            description: 'المدينة التي تربط بين قارتين، مليئة بالتاريخ والثقافة',
            active: true
          },
          {
            id: '3',
            name: 'جزر المالديف',
            country: 'المالديف',
            image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            rating: 4.9,
            packages: packagesByDestination['Maldives'] || 0,
            startingPrice: 6500,
            description: 'جنة استوائية بمياه فيروزية وشواطئ رملية بيضاء',
            active: true
          }
        ];

        const mockHotels: Hotel[] = [
          {
            id: '1',
            name: 'Burj Al Arab',
            location: 'Dubai, UAE',
            image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            gallery: [
              'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
              'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
            ],
            stars: 5,
            rating: 4.9,
            reviews: 2847,
            pricePerNight: 2500,
            description: 'فندق فاخر على شكل شراع في دبي، يوفر إطلالات خلابة على الخليج العربي وخدمات استثنائية.',
            amenities: ['واي فاي مجاني', 'موقف سيارات', 'مسبح', 'مطعم', 'سبا', 'خدمة الغرف 24/7'],
            active: true
          },
          {
            id: '2',
            name: 'Four Seasons Bosphorus',
            location: 'Istanbul, Turkey',
            image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            stars: 5,
            rating: 4.8,
            reviews: 1923,
            pricePerNight: 1800,
            description: 'فندق فاخر على ضفاف البوسفور مع إطلالات رائعة على المضيق والمدينة القديمة.',
            amenities: ['واي فاي مجاني', 'موقف سيارات', 'مسبح داخلي', 'مطعم', 'سبا', 'صالة رياضية'],
            active: true
          }
        ];

        console.log(`تم تحميل ${mockPackages.length} باقة، ${mockDestinations.length} وجهة، ${mockHotels.length} فندق`);
        
        setPackages(mockPackages);
        setDestinations(mockDestinations);
        setHotels(mockHotels);
        
      } catch (error) {
        console.error('خطأ في تحميل المحتوى:', error);
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
