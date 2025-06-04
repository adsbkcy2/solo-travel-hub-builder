
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
    { name: 'من نحن', path: '/about' },
    { name: 'اتصل بنا', path: '/contact' },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone size={14} />
                <span>+966 50 123 4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} />
                <span>info@travelsolo.com</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={14} />
              <span>الرياض، المملكة العربية السعودية</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
              <MapPin className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary font-tajawal">رحلات سولو</h1>
              <p className="text-sm text-gray-600">وجهتك المثالية للسفر</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-700 hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button className="bg-secondary hover:bg-secondary-600 text-white">
              احجز الآن
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t">
            <nav className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-gray-700 hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="bg-secondary hover:bg-secondary-600 text-white mt-4">
                احجز الآن
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
