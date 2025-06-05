
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { useContentManager } from '@/hooks/useContentManager';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { settings } = useContentManager();

  const navLinks = [
    { name: 'الرئيسية', path: '/' },
    { name: 'الباقات السياحية', path: '/packages' },
    { name: 'الوجهات', path: '/destinations' },
    { name: 'الفنادق', path: '/hotels' },
    { name: 'الرحلات المنظمة', path: '/trips' },
    { name: 'من نحن', path: '/about' },
    { name: 'تواصل معنا', path: '/contact' }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            {settings?.phone && (
              <div className="flex items-center gap-1">
                <Phone size={14} />
                <span>{settings.phone}</span>
              </div>
            )}
            {settings?.email && (
              <div className="flex items-center gap-1">
                <Mail size={14} />
                <span>{settings.email}</span>
              </div>
            )}
          </div>
          <div className="hidden md:flex items-center gap-4">
            <span>مرحباً بكم في {settings?.siteName || 'رحلات سولو'}</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={settings?.logo || '/uploads/logo.jpg'} 
              alt={settings?.siteName || 'رحلات سولو'}
              className="h-12 w-12 object-contain ml-3"
              onError={(e) => {
                e.currentTarget.src = '/placeholder.svg';
              }}
            />
            <div>
              <h1 className="text-xl font-bold text-primary">
                {settings?.siteName || 'رحلات سولو'}
              </h1>
              <p className="text-xs text-gray-600 hidden sm:block">
                {settings?.siteDescription || 'وكالة سفر متخصصة'}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-reverse space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-gray-700 hover:text-primary transition-colors font-medium ${
                  location.pathname === link.path ? 'text-primary border-b-2 border-primary' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/consultation">
              <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-white">
                استشارة مجانية
              </Button>
            </Link>
            <Link to="/booking">
              <Button size="sm" className="bg-primary hover:bg-primary-600">
                احجز الآن
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-3 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-gray-700 hover:text-primary transition-colors font-medium py-2 ${
                    location.pathname === link.path ? 'text-primary font-bold' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-gray-200">
                <Link to="/consultation" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" size="sm" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                    استشارة مجانية
                  </Button>
                </Link>
                <Link to="/booking" onClick={() => setIsMenuOpen(false)}>
                  <Button size="sm" className="w-full bg-primary hover:bg-primary-600">
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
