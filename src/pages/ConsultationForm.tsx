
import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MessageCircle, Phone, Mail, User, Calendar, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ConsultationForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    preferredContact: '',
    destination: '',
    budget: '',
    travelDates: '',
    travelers: '2',
    interests: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // في التطبيق الحقيقي، سيتم إرسال البيانات إلى API
    console.log('Consultation request submitted:', formData);
    
    toast({
      title: "تم استلام طلب الاستشارة",
      description: "خبير السفر المختص سيتواصل معك قريباً لتقديم الاستشارة المجانية",
    });

    // إعادة تعيين النموذج
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      preferredContact: '',
      destination: '',
      budget: '',
      travelDates: '',
      travelers: '2',
      interests: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Page Header */}
      <div className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-tajawal">استشارة مجانية</h1>
          <p className="text-xl max-w-2xl mx-auto">
            احصل على استشارة مجانية من خبراء السفر لدينا لتخطيط رحلتك المثالية
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 travel-shadow">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 font-tajawal">
                <MessageCircle className="inline ml-2" size={32} />
                طلب استشارة مجانية
              </h2>
              <p className="text-gray-600">أخبرنا عن خطط سفرك وسنقدم لك أفضل النصائح والتوصيات</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* الاسم الكامل */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <User size={16} className="inline ml-1" />
                    الاسم الكامل *
                  </label>
                  <Input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    placeholder="أدخل اسمك الكامل"
                    required
                    className="w-full"
                  />
                </div>

                {/* البريد الإلكتروني */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Mail size={16} className="inline ml-1" />
                    البريد الإلكتروني *
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="أدخل بريدك الإلكتروني"
                    required
                    className="w-full"
                  />
                </div>

                {/* رقم الهاتف */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Phone size={16} className="inline ml-1" />
                    رقم الهاتف *
                  </label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="أدخل رقم هاتفك"
                    required
                    className="w-full"
                  />
                </div>

                {/* طريقة التواصل المفضلة */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    طريقة التواصل المفضلة *
                  </label>
                  <Select value={formData.preferredContact} onValueChange={(value) => handleInputChange('preferredContact', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="اختر طريقة التواصل" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="phone">مكالمة هاتفية</SelectItem>
                      <SelectItem value="whatsapp">واتساب</SelectItem>
                      <SelectItem value="email">بريد إلكتروني</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* الوجهة المطلوبة */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <MapPin size={16} className="inline ml-1" />
                    الوجهة المطلوبة
                  </label>
                  <Input
                    type="text"
                    value={formData.destination}
                    onChange={(e) => handleInputChange('destination', e.target.value)}
                    placeholder="مثال: دبي، تركيا، أوروبا..."
                    className="w-full"
                  />
                </div>

                {/* الميزانية */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    الميزانية المتوقعة
                  </label>
                  <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="اختر نطاق الميزانية" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1000-3000">1,000 - 3,000 ريال</SelectItem>
                      <SelectItem value="3000-5000">3,000 - 5,000 ريال</SelectItem>
                      <SelectItem value="5000-10000">5,000 - 10,000 ريال</SelectItem>
                      <SelectItem value="10000+">أكثر من 10,000 ريال</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* تواريخ السفر */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Calendar size={16} className="inline ml-1" />
                    تواريخ السفر المفضلة
                  </label>
                  <Input
                    type="text"
                    value={formData.travelDates}
                    onChange={(e) => handleInputChange('travelDates', e.target.value)}
                    placeholder="مثال: شهر يونيو 2024"
                    className="w-full"
                  />
                </div>

                {/* عدد المسافرين */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    عدد المسافرين
                  </label>
                  <Select value={formData.travelers} onValueChange={(value) => handleInputChange('travelers', value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {[1,2,3,4,5,6,7,8,9,10].map(num => (
                        <SelectItem key={num} value={num.toString()}>{num} مسافر</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* الاهتمامات */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  اهتماماتك في السفر
                </label>
                <Input
                  type="text"
                  value={formData.interests}
                  onChange={(e) => handleInputChange('interests', e.target.value)}
                  placeholder="مثال: التاريخ، الطبيعة، المغامرات، التسوق..."
                  className="w-full"
                />
              </div>

              {/* رسالة إضافية */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  رسالة إضافية
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  placeholder="أخبرنا المزيد عن توقعاتك من الرحلة..."
                  rows={4}
                  className="w-full"
                />
              </div>

              <div className="text-center pt-6">
                <Button type="submit" className="bg-secondary hover:bg-secondary-600 text-white px-8 py-3 text-lg">
                  طلب استشارة مجانية
                </Button>
                <p className="text-sm text-gray-500 mt-4">
                  سيتم التواصل معك خلال ساعات قليلة
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ConsultationForm;
