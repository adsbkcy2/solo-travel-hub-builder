
import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { MapPin, Star, Shield, Users, Globe, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-tajawal">من نحن</h1>
          <p className="text-xl max-w-2xl mx-auto">
            نحن شركة رائدة في مجال تنظيم الرحلات السياحية مع خبرة 15 عاماً في هذا المجال
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-tajawal">قصتنا</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              بدأت رحلتنا في عام 2010 برؤية بسيطة: توفير تجارب سفر استثنائية تتجاوز توقعات العملاء. ومنذ ذلك الحين، نمت شركتنا لتصبح واحدة من أبرز الشركات السياحية في المنطقة.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              نحن نؤمن بأن السفر ليس مجرد رؤية أماكن جديدة، بل هو تجربة تغير الحياة وتثري الروح. لذلك نهتم بكل التفاصيل لنضمن لعملائنا تجارب سفر لا تُنسى.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              اليوم، يثق بنا أكثر من 10,000 مسافر سنوياً لتنظيم رحلاتهم إلى أكثر من 50 وجهة حول العالم. ونحن فخورون بأن 98% من عملائنا يعودون إلينا لتنظيم رحلاتهم القادمة.
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="فريق رحلات سولو"
              className="rounded-3xl shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-tajawal">قيمنا</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              نحن ملتزمون بمجموعة من القيم الأساسية التي توجه كل ما نقوم به
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-blue-600" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">التميز</h3>
              <p className="text-gray-700">
                نسعى دائماً لتقديم أفضل الخدمات والتجارب لعملائنا بلا استثناء
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-green-600" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">الأمان والثقة</h3>
              <p className="text-gray-700">
                أمان وراحة عملائنا هما أولويتنا القصوى في كل خطوة من خطوات الرحلة
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-purple-600" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">خدمة شخصية</h3>
              <p className="text-gray-700">
                نصمم تجارب سفر فريدة تلبي احتياجات وتفضيلات كل عميل على حدة
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-tajawal">فريقنا</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            نحن فريق من الخبراء الشغوفين بالسفر والمتخصصين في تقديم تجارب استثنائية
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
