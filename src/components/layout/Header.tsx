
import React, { useState } from 'react';
import { Menu, X, MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'الرئيسية', path: '/' },
    { name: 'الباقات السياحية', path: '/packages' },
    { name: 'الفنادق', path: '/hotels' },
    { name: 'الرحلات', path: '/trips' },
    { name: 'الوجهات', path: '/destinations' },
    { name: 'من نحن', path: '/about' },
    { name: 'اتصل بنا', path: '/contact' },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar - Hidden on small screens */}
      <div className="bg-primary text-white py-1 md:py-2 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-xs md:text-sm">
            <div className="flex items-center gap-4 md:gap-6">
              <div className="flex items-center gap-2">
                <Phone size={12} className="md:w-4 md:h-4" />
                <span>+966 50 123 4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={12} className="md:w-4 md:h-4" />
                <span>info@travelsolo.com</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={12} className="md:w-4 md:h-4" />
              <span>الرياض، المملكة العربية السعودية</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 md:gap-3">
            <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-hero rounded-full flex items-center justify-center">
              <MapPin className="text-white" size={16} />
            </div>
            <div>
              <h1 className="text-lg md:text-2xl font-bold text-primary font-tajawal">رحلات سولو</h1>
              <p className="text-xs md:text-sm text-gray-600 hidden md:block">وجهتك المثالية للسفر</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-700 hover:text-primary transition-colors font-medium text-sm xl:text-base"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4">
            <Link to="/consultation">
              <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white text-sm xl:text-base px-3 xl:px-4">
                استشارة مجانية
              </Button>
            </Link>
            <Link to="/booking">
              <Button className="bg-secondary hover:bg-secondary-600 text-white text-sm xl:text-base px-3 xl:px-4">
                احجز الآن
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t">
            <nav className="flex flex-col gap-3">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-gray-700 hover:text-primary transition-colors font-medium py-2 text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col gap-3 mt-4">
                <Link to="/consultation" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" className="w-full border-secondary text-secondary hover:bg-secondary hover:text-white">
                    استشارة مجانية
                  </Button>
                </Link>
                <Link to="/booking" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-secondary hover:bg-secondary-600 text-white">
                    احجز الآن
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
