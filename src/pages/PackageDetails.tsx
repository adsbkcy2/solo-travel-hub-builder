
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Star, 
  Calendar, 
  Users, 
  MapPin, 
  Plane, 
  Hotel, 
  Camera, 
  Shield,
  Clock,
  Heart,
  Share2
} from 'lucide-react';

const PackageDetails = () => {
  const { id } = useParams();
  const [selectedDate, setSelectedDate] = useState('');
  const [travelers, setTravelers] = useState(2);

  // Mock data - في التطبيق الحقيقي سيتم جلب البيانات من API
  const packageData = {
    id: 1,
    title: 'رحلة استكشافية إلى دبي',
    destination: 'دبي، الإمارات العربية المتحدة',
    images: [
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1571935941633-e4b8b95e3c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ],
    duration: '5 أيام / 4 ليالي',
    price: 2500,
    originalPrice: 3200,
    rating: 4.8,
    reviews: 124,
    groupSize: '2-8 أشخاص',
    difficulty: 'سهل',
    category: 'مدن',
    description: 'استكشف جمال دبي الساحر في رحلة مليئة بالمغامرات والاكتشافات. من ناطحات السحاب الشاهقة إلى التراث العريق، تقدم هذه الرحلة تجربة متكاملة تجمع بين الحداثة والأصالة.',
    highlights: [
      'زيارة برج خليفة وصعود لأعلى منصة مشاهدة',
      'جولة في نافورة دبي وعرض الأضواء الساحر',
      'تسوق في سوق الذهب وسوق التوابل التراثي',
      'رحلة بحرية حول جزيرة النخلة',
      'تجربة السفاري الصحراوي مع العشاء البدوي',
      'زيارة دبي مول وأكواريوم دبي'
    ],
    includes: [
      'تذاكر الطيران ذهاب وإياب',
      'الإقامة في فندق 5 نجوم',
      'وجبة الإفطار يومياً',
      'المواصلات الداخلية',
      'دليل سياحي محترف',
      'تأمين السفر الشامل'
    ],
    excludes: [
      'وجبات الغداء والعشاء',
      'المشتريات الشخصية',
      'الأنشطة الاختيارية',
      'فيزا الدخول'
    ],
    itinerary: [
      {
        day: 'اليوم الأول',
        title: 'الوصول واستكشاف وسط دبي',
        activities: [
          'الوصول إلى مطار دبي والتوجه للفندق',
          'جولة في وسط دبي القديم',
          'زيارة سوق الذهب وسوق التوابل',
          'عشاء ترحيبي في مطعم تراثي'
        ]
      },
      {
        day: 'اليوم الثاني',
        title: 'برج خليفة ودبي مول',
        activities: [
          'زيارة برج خليفة وصعود للطابق 148',
          'جولة في دبي مول وأكواريوم دبي',
          'مشاهدة عرض نافورة دبي المساء',
          'وقت حر للتسوق'
        ]
      },
      // ... المزيد من الأيام
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Image Gallery */}
      <div className="relative h-[60vh] overflow-hidden">
        <img 
          src={packageData.images[0]}
          alt={packageData.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        
        {/* Action Buttons */}
        <div className="absolute top-6 left-6 flex gap-3">
          <Button variant="outline" className="bg-white/80 backdrop-blur-sm">
            <Heart size={16} className="ml-1" />
            حفظ
          </Button>
          <Button variant="outline" className="bg-white/80 backdrop-blur-sm">
            <Share2 size={16} className="ml-1" />
            مشاركة
          </Button>
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-8 right-8 text-white">
          <div className="flex items-center gap-2 mb-2">
            <Badge className="bg-accent text-white">الأكثر مبيعاً</Badge>
            <Badge className="bg-red-500 text-white">خصم 22%</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2 font-tajawal">
            {packageData.title}
          </h1>
          <p className="text-xl flex items-center gap-2">
            <MapPin size={20} />
            {packageData.destination}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Quick Info */}
            <div className="bg-white rounded-2xl p-6 mb-8 travel-shadow">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Calendar className="text-blue-600" size={24} />
                  </div>
                  <div className="text-sm text-gray-600">المدة</div>
                  <div className="font-bold">{packageData.duration}</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Users className="text-green-600" size={24} />
                  </div>
                  <div className="text-sm text-gray-600">حجم المجموعة</div>
                  <div className="font-bold">{packageData.groupSize}</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Star className="text-purple-600" size={24} />
                  </div>
                  <div className="text-sm text-gray-600">التقييم</div>
                  <div className="font-bold">{packageData.rating}/5</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Shield className="text-orange-600" size={24} />
                  </div>
                  <div className="text-sm text-gray-600">المستوى</div>
                  <div className="font-bold">{packageData.difficulty}</div>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="overview" className="bg-white rounded-2xl travel-shadow">
              <TabsList className="grid w-full grid-cols-4 p-2 m-2">
                <TabsTrigger value="overview">نظرة عامة</TabsTrigger>
                <TabsTrigger value="itinerary">البرنامج</TabsTrigger>
                <TabsTrigger value="includes">يشمل/لا يشمل</TabsTrigger>
                <TabsTrigger value="reviews">التقييمات</TabsTrigger>
              </TabsList>
              
              <div className="p-6">
                <TabsContent value="overview" className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 font-tajawal">وصف الرحلة</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {packageData.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold mb-4 font-tajawal">أبرز المعالم</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {packageData.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                          <span className="text-gray-700">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="itinerary">
                  <h3 className="text-2xl font-bold mb-6 font-tajawal">برنامج الرحلة</h3>
                  <div className="space-y-6">
                    {packageData.itinerary.map((day, index) => (
                      <div key={index} className="border-r-4 border-primary pr-6 pb-6">
                        <h4 className="text-xl font-bold text-primary mb-2">{day.day}</h4>
                        <h5 className="text-lg font-semibold mb-3">{day.title}</h5>
                        <ul className="space-y-2">
                          {day.activities.map((activity, actIndex) => (
                            <li key={actIndex} className="flex items-start gap-2">
                              <Clock size={16} className="text-gray-400 mt-1 flex-shrink-0" />
                              <span className="text-gray-700">{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="includes">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-bold text-green-600 mb-4 font-tajawal">الرحلة تشمل</h4>
                      <ul className="space-y-3">
                        {packageData.includes.map((item, index) => (
                          <li key={index} className="flex items-center gap-3">
                            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-green-600 rounded-full" />
                            </div>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-red-600 mb-4 font-tajawal">الرحلة لا تشمل</h4>
                      <ul className="space-y-3">
                        {packageData.excludes.map((item, index) => (
                          <li key={index} className="flex items-center gap-3">
                            <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-red-600 rounded-full" />
                            </div>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="reviews">
                  <div>
                    <h3 className="text-2xl font-bold mb-6 font-tajawal">آراء المسافرين</h3>
                    {/* Reviews content */}
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 travel-shadow sticky top-8">
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-3xl font-bold text-primary">
                    {packageData.price.toLocaleString()} ريال
                  </span>
                  {packageData.originalPrice && (
                    <span className="text-lg text-gray-500 line-through">
                      {packageData.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
                <p className="text-gray-600">للشخص الواحد</p>
              </div>

              {/* Booking Form */}
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    تاريخ المغادرة
                  </label>
                  <input 
                    type="date"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    عدد المسافرين
                  </label>
                  <select 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    value={travelers}
                    onChange={(e) => setTravelers(Number(e.target.value))}
                  >
                    {[1,2,3,4,5,6,7,8].map(num => (
                      <option key={num} value={num}>{num} مسافر</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between mb-2">
                  <span>السعر الأساسي ({travelers} مسافر)</span>
                  <span>{(packageData.price * travelers).toLocaleString()} ريال</span>
                </div>
                <div className="flex justify-between mb-2 text-green-600">
                  <span>الخصم</span>
                  <span>-{((packageData.originalPrice - packageData.price) * travelers).toLocaleString()} ريال</span>
                </div>
                <div className="flex justify-between font-bold text-lg border-t pt-2">
                  <span>المجموع</span>
                  <span>{(packageData.price * travelers).toLocaleString()} ريال</span>
                </div>
              </div>

              <Button className="w-full bg-primary hover:bg-primary-600 text-white py-4 text-lg font-bold mb-3">
                احجز الآن
              </Button>
              
              <Button variant="outline" className="w-full border-secondary text-secondary hover:bg-secondary hover:text-white">
                اطلب استشارة مجانية
              </Button>

              {/* Trust Badges */}
              <div className="mt-6 pt-6 border-t">
                <div className="grid grid-cols-3 gap-4 text-center text-sm">
                  <div>
                    <Shield className="w-8 h-8 text-green-600 mx-auto mb-1" />
                    <div className="text-gray-600">دفع آمن</div>
                  </div>
                  <div>
                    <Clock className="w-8 h-8 text-blue-600 mx-auto mb-1" />
                    <div className="text-gray-600">إلغاء مجاني</div>
                  </div>
                  <div>
                    <Star className="w-8 h-8 text-yellow-600 mx-auto mb-1" />
                    <div className="text-gray-600">ضمان الجودة</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PackageDetails;
