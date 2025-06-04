
import React from 'react';
import { Star, Quote } from 'lucide-react';

export const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'أحمد محمد',
      location: 'الرياض، السعودية',
      rating: 5,
      text: 'تجربة رائعة مع رحلات سولو! كانت رحلة دبي منظمة بشكل ممتاز وكل التفاصيل كانت مدروسة. الفريق محترف جداً والخدمة استثنائية.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      trip: 'رحلة دبي الاستكشافية'
    },
    {
      id: 2,
      name: 'فاطمة العلي',
      location: 'جدة، السعودية',
      rating: 5,
      text: 'رحلة شهر عسل رائعة في المالديف! كل شيء كان مثالياً من الإقامة إلى الأنشطة. شكراً لفريق رحلات سولو على تنظيم هذه التجربة الاستثنائية.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b5bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      trip: 'عطلة رومانسية في المالديف'
    },
    {
      id: 3,
      name: 'سارة أحمد',
      location: 'الدمام، السعودية',
      rating: 5,
      text: 'أول مرة أسافر مع عائلتي وكانت تجربة لا تُنسى في إسطنبول. الأطفال استمتعوا كثيراً والبرنامج كان متنوع ومناسب للجميع.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      trip: 'جولة عائلية في إسطنبول'
    },
    {
      id: 4,
      name: 'محمد الحربي',
      location: 'مكة، السعودية',
      rating: 5,
      text: 'خدمة عملاء ممتازة ومتابعة مستمرة. حجزت رحلة باريس وكانت كل التفاصيل واضحة. أنصح بشدة بالتعامل مع رحلات سولو.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      trip: 'جولة ثقافية في باريس'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-tajawal">
            آراء عملائنا
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            اكتشف ما يقوله عملاؤنا عن تجاربهم السياحية معنا
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-3xl p-8 travel-shadow hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4 mb-6">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-primary/10"
                />
                <div className="flex-1">
                  <h4 className="font-bold text-gray-800 text-lg">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm mb-2">{testimonial.location}</p>
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        className="text-yellow-500 fill-current" 
                      />
                    ))}
                  </div>
                </div>
                <Quote className="text-primary/20 flex-shrink-0" size={40} />
              </div>

              <blockquote className="text-gray-700 leading-relaxed mb-4 text-lg">
                "{testimonial.text}"
              </blockquote>

              <div className="text-sm text-primary font-medium">
                {testimonial.trip}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center gap-4 animate-fade-in">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Star className="text-green-600 fill-current" size={24} />
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-800">4.9/5</div>
                <div className="text-gray-600">متوسط التقييم</div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Quote className="text-blue-600" size={24} />
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-800">500+</div>
                <div className="text-gray-600">تقييم إيجابي</div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Star className="text-purple-600 fill-current" size={24} />
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-800">98%</div>
                <div className="text-gray-600">رضا العملاء</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
