
import React from 'react';
import { Shield, Award, Headphones, Globe, Clock, Heart } from 'lucide-react';
import { AnimatedCounter } from '@/components/ui/animated-counter';

export const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: 'أمان وثقة',
      description: 'رحلات آمنة مع ضمان شامل وتأمين سفر كامل لراحة البال',
      color: 'bg-blue-500'
    },
    {
      icon: Award,
      title: 'خبرة 15 عام',
      description: 'فريق محترف مع خبرة واسعة في تنظيم أفضل الرحلات السياحية',
      color: 'bg-amber-500'
    },
    {
      icon: Headphones,
      title: 'دعم 24/7',
      description: 'خدمة عملاء متواصلة على مدار الساعة لمساعدتك في أي وقت',
      color: 'bg-green-500'
    },
    {
      icon: Globe,
      title: '50+ وجهة',
      description: 'شبكة واسعة من الوجهات السياحية المختارة بعناية حول العالم',
      color: 'bg-purple-500'
    },
    {
      icon: Clock,
      title: 'مرونة كاملة',
      description: 'إمكانية تعديل أو إلغاء الحجز مع سياسة مرنة وعادلة',
      color: 'bg-red-500'
    },
    {
      icon: Heart,
      title: 'تجارب مخصصة',
      description: 'رحلات مصممة خصيصاً لتناسب اهتماماتك وميزانيتك',
      color: 'bg-pink-500'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-tajawal">
            لماذا تختار رحلات سولو؟
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            نحن ملتزمون بتقديم أفضل خدمات السفر لضمان تجربة استثنائية لا تُنسى
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 bg-gradient-card rounded-3xl border border-gray-100 hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="text-white" size={32} />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4 font-tajawal">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section with Animated Counters */}
        <div className="mt-20 bg-gradient-hero rounded-3xl p-12 text-white text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="animate-fade-in">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <AnimatedCounter end={10000} suffix="+" className="text-4xl md:text-5xl font-bold" />
              </div>
              <div className="text-lg opacity-90">عميل سعيد</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <AnimatedCounter end={500} suffix="+" className="text-4xl md:text-5xl font-bold" />
              </div>
              <div className="text-lg opacity-90">رحلة منظمة</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <AnimatedCounter end={50} suffix="+" className="text-4xl md:text-5xl font-bold" />
              </div>
              <div className="text-lg opacity-90">وجهة سياحية</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <AnimatedCounter end={15} className="text-4xl md:text-5xl font-bold" />
              </div>
              <div className="text-lg opacity-90">سنة خبرة</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
