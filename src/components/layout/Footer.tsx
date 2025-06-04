
import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const quickLinks = [
    { name: 'الرئيسية', path: '/' },
    { name: 'من نحن', path: '/about' },
    { name: 'الباقات السياحية', path: '/packages' },
    { name: 'الفنادق', path: '/hotels' },
    { name: 'اتصل بنا', path: '/contact' },
  ];

  const destinations = [
    { name: 'دبي', path: '/destination/dubai' },
    { name: 'إسطنبول', path: '/destination/istanbul' },
    { name: 'باريس', path: '/destination/paris' },
    { name: 'لندن', path: '/destination/london' },
    { name: 'المالديف', path: '/destination/maldives' },
  ];

  const services = [
    { name: 'حجز الطيران', path: '/services/flights' },
    { name: 'حجز الفنادق', path: '/services/hotels' },
    { name: 'تأشيرات السفر', path: '/services/visas' },
    { name: 'تأمين السفر', path: '/services/insurance' },
    { name: 'النقل المحلي', path: '/services/transport' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                <MapPin className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-tajawal">رحلات سولو</h3>
                <p className="text-gray-400 text-sm">وجهتك المثالية للسفر</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              نحن شركة رائدة في تنظيم الرحلات السياحية، نقدم أفضل الخدمات والتجارب الاستثنائية للمسافرين حول العالم.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-accent" />
                <span>+966 50 123 4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-accent" />
                <span>info@travelsolo.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-accent" />
                <span>الرياض، المملكة العربية السعودية</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 font-tajawal">روابط سريعة</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-gray-300 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-xl font-bold mb-6 font-tajawal">الوجهات الشائعة</h4>
            <ul className="space-y-3">
              {destinations.map((destination) => (
                <li key={destination.name}>
                  <Link 
                    to={destination.path}
                    className="text-gray-300 hover:text-accent transition-colors"
                  >
                    {destination.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6 font-tajawal">خدماتنا</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.path}
                    className="text-gray-300 hover:text-accent transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-2xl font-bold mb-4 font-tajawal">اشترك في نشرتنا الإخبارية</h4>
            <p className="text-gray-300 mb-6">احصل على أحدث العروض والوجهات السياحية مباشرة في بريدك الإلكتروني</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-accent"
              />
              <button className="px-6 py-3 bg-accent hover:bg-accent-600 text-white rounded-lg font-bold transition-colors">
                اشتراك
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 رحلات سولو. جميع الحقوق محفوظة.
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-accent rounded-full flex items-center justify-center transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-accent rounded-full flex items-center justify-center transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-accent rounded-full flex items-center justify-center transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-accent rounded-full flex items-center justify-center transition-colors">
                <Youtube size={18} />
              </a>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-400">
              <Link to="/privacy" className="hover:text-accent transition-colors">
                سياسة الخصوصية
              </Link>
              <Link to="/terms" className="hover:text-accent transition-colors">
                الشروط والأحكام
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
