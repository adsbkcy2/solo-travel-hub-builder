
// خدمة قراءة المحتوى من Netlify CMS
export interface CMSPackage {
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

export interface CMSDestination {
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

export interface CMSHotel {
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

export interface CMSSettings {
  siteName: string;
  siteDescription: string;
  logo: string;
  phone: string;
  email: string;
  address: string;
  socialMedia: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    youtube?: string;
    linkedin?: string;
  };
}

class ContentService {
  private baseUrl = '/content';

  // قراءة ملفات الباقات
  async getPackages(): Promise<CMSPackage[]> {
    try {
      console.log('محاولة تحميل الباقات من CMS...');
      
      // محاولة قراءة الملفات مباشرة
      const response = await fetch(`${this.baseUrl}/packages/`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const text = await response.text();
      console.log('استجابة الباقات:', text);
      
      // تحليل الملفات الموجودة
      const files = this.extractMarkdownFiles(text);
      const packages: CMSPackage[] = [];
      
      for (const file of files) {
        try {
          const fileResponse = await fetch(`${this.baseUrl}/packages/${file}`);
          if (fileResponse.ok) {
            const content = await fileResponse.text();
            const parsed = this.parseMarkdownFile(content, file);
            if (parsed) {
              packages.push(parsed as CMSPackage);
            }
          }
        } catch (error) {
          console.warn(`خطأ في قراءة ملف الباقة ${file}:`, error);
        }
      }
      
      console.log(`تم تحميل ${packages.length} باقة من CMS`);
      return packages;
      
    } catch (error) {
      console.error('خطأ في تحميل الباقات من CMS:', error);
      return this.getFallbackPackages();
    }
  }

  // قراءة ملفات الوجهات
  async getDestinations(): Promise<CMSDestination[]> {
    try {
      console.log('محاولة تحميل الوجهات من CMS...');
      
      const response = await fetch(`${this.baseUrl}/destinations/`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const text = await response.text();
      const files = this.extractMarkdownFiles(text);
      const destinations: CMSDestination[] = [];
      
      for (const file of files) {
        try {
          const fileResponse = await fetch(`${this.baseUrl}/destinations/${file}`);
          if (fileResponse.ok) {
            const content = await fileResponse.text();
            const parsed = this.parseMarkdownFile(content, file);
            if (parsed) {
              destinations.push(parsed as CMSDestination);
            }
          }
        } catch (error) {
          console.warn(`خطأ في قراءة ملف الوجهة ${file}:`, error);
        }
      }
      
      console.log(`تم تحميل ${destinations.length} وجهة من CMS`);
      return destinations;
      
    } catch (error) {
      console.error('خطأ في تحميل الوجهات من CMS:', error);
      return this.getFallbackDestinations();
    }
  }

  // قراءة ملفات الفنادق
  async getHotels(): Promise<CMSHotel[]> {
    try {
      console.log('محاولة تحميل الفنادق من CMS...');
      
      const response = await fetch(`${this.baseUrl}/hotels/`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const text = await response.text();
      const files = this.extractMarkdownFiles(text);
      const hotels: CMSHotel[] = [];
      
      for (const file of files) {
        try {
          const fileResponse = await fetch(`${this.baseUrl}/hotels/${file}`);
          if (fileResponse.ok) {
            const content = await fileResponse.text();
            const parsed = this.parseMarkdownFile(content, file);
            if (parsed) {
              hotels.push(parsed as CMSHotel);
            }
          }
        } catch (error) {
          console.warn(`خطأ في قراءة ملف الفندق ${file}:`, error);
        }
      }
      
      console.log(`تم تحميل ${hotels.length} فندق من CMS`);
      return hotels;
      
    } catch (error) {
      console.error('خطأ في تحميل الفنادق من CMS:', error);
      return this.getFallbackHotels();
    }
  }

  // قراءة إعدادات الموقع
  async getSettings(): Promise<CMSSettings> {
    try {
      console.log('محاولة تحميل إعدادات الموقع من CMS...');
      
      const response = await fetch(`${this.baseUrl}/settings/general.yml`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const yamlContent = await response.text();
      const settings = this.parseYamlFile(yamlContent);
      
      console.log('تم تحميل إعدادات الموقع من CMS:', settings);
      return settings as CMSSettings;
      
    } catch (error) {
      console.error('خطأ في تحميل إعدادات الموقع من CMS:', error);
      return this.getFallbackSettings();
    }
  }

  // استخراج أسماء الملفات من صفحة الفهرس
  private extractMarkdownFiles(html: string): string[] {
    const files: string[] = [];
    const regex = /href="([^"]*\.md)"/g;
    let match;
    
    while ((match = regex.exec(html)) !== null) {
      files.push(match[1]);
    }
    
    return files;
  }

  // تحليل ملف Markdown مع Front Matter
  private parseMarkdownFile(content: string, filename: string): any {
    try {
      // البحث عن Front Matter (YAML بين ---)
      const frontMatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
      if (!frontMatterMatch) {
        console.warn(`لم يتم العثور على Front Matter في ${filename}`);
        return null;
      }
      
      const frontMatter = frontMatterMatch[1];
      const data = this.parseYamlContent(frontMatter);
      
      // إضافة ID من اسم الملف
      data.id = filename.replace('.md', '').replace(/^map-/, '');
      
      return data;
      
    } catch (error) {
      console.error(`خطأ في تحليل الملف ${filename}:`, error);
      return null;
    }
  }

  // تحليل محتوى YAML
  private parseYamlContent(yamlContent: string): any {
    const data: any = {};
    const lines = yamlContent.split('\n');
    
    for (const line of lines) {
      if (line.trim() && !line.startsWith('#')) {
        const [key, ...valueParts] = line.split(':');
        if (key && valueParts.length > 0) {
          const value = valueParts.join(':').trim();
          
          // معالجة القيم المختلفة
          if (value === 'true') {
            data[key.trim()] = true;
          } else if (value === 'false') {
            data[key.trim()] = false;
          } else if (!isNaN(Number(value)) && value !== '') {
            data[key.trim()] = Number(value);
          } else if (value.startsWith('"') && value.endsWith('"')) {
            data[key.trim()] = value.slice(1, -1);
          } else {
            data[key.trim()] = value;
          }
        }
      }
    }
    
    return data;
  }

  // تحليل ملف YAML
  private parseYamlFile(yamlContent: string): any {
    return this.parseYamlContent(yamlContent);
  }

  // بيانات احتياطية للباقات
  private getFallbackPackages(): CMSPackage[] {
    console.log('استخدام البيانات الاحتياطية للباقات');
    return [
      {
        id: '1',
        title: 'Dubai Explorer Package',
        destination: 'Dubai, UAE',
        image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        duration: '5 Days / 4 Nights',
        price: 2500,
        originalPrice: 3200,
        rating: 4.8,
        reviews: 124,
        groupSize: '2-8 أشخاص',
        difficulty: 'سهل',
        category: 'مدن',
        description: 'استكشف جمال دبي الساحر في رحلة مليئة بالمغامرات والاكتشافات.',
        highlights: ['برج خليفة', 'نافورة دبي', 'سوق الذهب'],
        includes: ['طيران ذهاب وإياب', 'إقامة 4 نجوم', 'وجبات يومية'],
        badge: 'الأكثر مبيعاً',
        active: true
      }
    ];
  }

  // بيانات احتياطية للوجهات
  private getFallbackDestinations(): CMSDestination[] {
    console.log('استخدام البيانات الاحتياطية للوجهات');
    return [
      {
        id: '1',
        name: 'دبي',
        country: 'الإمارات العربية المتحدة',
        image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        rating: 4.8,
        packages: 2,
        startingPrice: 1500,
        description: 'مدينة الأحلام والتسوق والفخامة',
        active: true
      }
    ];
  }

  // بيانات احتياطية للفنادق
  private getFallbackHotels(): CMSHotel[] {
    console.log('استخدام البيانات الاحتياطية للفنادق');
    return [
      {
        id: '1',
        name: 'Burj Al Arab',
        location: 'Dubai, UAE',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        stars: 5,
        rating: 4.9,
        reviews: 2847,
        pricePerNight: 2500,
        description: 'فندق فاخر على شكل شراع في دبي',
        amenities: ['واي فاي مجاني', 'موقف سيارات', 'مسبح'],
        active: true
      }
    ];
  }

  // إعدادات احتياطية
  private getFallbackSettings(): CMSSettings {
    console.log('استخدام الإعدادات الاحتياطية');
    return {
      siteName: 'رحلات سولو',
      siteDescription: 'وكالة سفر متخصصة في الرحلات الفردية والجماعية',
      logo: '/uploads/logo.jpg',
      phone: '+966 XX XXX XXXX',
      email: 'info@solotrips.com',
      address: 'الرياض، المملكة العربية السعودية',
      socialMedia: {
        facebook: '#',
        twitter: '#',
        instagram: '#'
      }
    };
  }
}

export const contentService = new ContentService();
