
import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Users, Phone, Mail, User, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const BookingForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    packageType: '',
    travelDate: '',
    returnDate: '',
    travelers: '2',
    specialRequests: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // في التطبيق الحقيقي، سيتم إرسال البيانات إلى API
    console.log('Booking submitted:', formData);
    
    toast({
      title: "تم استلام طلب الحجز",
      description: "سنتواصل معك قريباً لتأكيد الحجز وترتيب التفاصيل",
    });

    // إعادة تعيين النموذج
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      packageType: '',
      travelDate: '',
      returnDate: '',
      travelers: '2',
      specialRequests: ''
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
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-tajawal">احجز رحلتك الآن</h1>
          <p className="text-xl max-w-2xl mx-auto">
            املأ النموذج أدناه وسنتواصل معك لترتيب أفضل تجربة سفر لك
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 travel-shadow">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 font-tajawal">معلومات الحجز</h2>
              <p className="text-gray-600">املأ جميع الحقول المطلوبة وسنقوم بالتواصل معك خلال 24 ساعة</p>
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

                {/* نوع الباقة */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <MapPin size={16} className="inline ml-1" />
                    نوع الباقة المطلوبة *
                  </label>
                  <Select value={formData.packageType} onValueChange={(value) => handleInputChange('packageType', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="اختر نوع الباقة" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dubai">باقة دبي</SelectItem>
                      <SelectItem value="istanbul">باقة إسطنبول</SelectItem>
                      <SelectItem value="paris">باقة باريس</SelectItem>
                      <SelectItem value="maldives">باقة المالديف</SelectItem>
                      <SelectItem value="london">باقة لندن</SelectItem>
                      <SelectItem value="custom">باقة مخصصة</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* تاريخ المغادرة */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Calendar size={16} className="inline ml-1" />
                    تاريخ المغادرة *
                  </label>
                  <Input
                    type="date"
                    value={formData.travelDate}
                    onChange={(e) => handleInputChange('travelDate', e.target.value)}
                    required
                    className="w-full"
                  />
                </div>

                {/* تاريخ العودة */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Calendar size={16} className="inline ml-1" />
                    تاريخ العودة *
                  </label>
                  <Input
                    type="date"
                    value={formData.returnDate}
                    onChange={(e) => handleInputChange('returnDate', e.target.value)}
                    required
                    className="w-full"
                  />
                </div>

                {/* عدد المسافرين */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Users size={16} className="inline ml-1" />
                    عدد المسافرين *
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

              {/* طلبات خاصة */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  طلبات خاصة (اختياري)
                </label>
                <Textarea
                  value={formData.specialRequests}
                  onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                  placeholder="أضف أي طلبات خاصة أو ملاحظات..."
                  rows={4}
                  className="w-full"
                />
              </div>

              <div className="text-center pt-6">
                <Button type="submit" className="bg-primary hover:bg-primary-600 text-white px-8 py-3 text-lg">
                  إرسال طلب الحجز
                </Button>
                <p className="text-sm text-gray-500 mt-4">
                  سنتواصل معك خلال 24 ساعة لتأكيد الحجز
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

export default BookingForm;
