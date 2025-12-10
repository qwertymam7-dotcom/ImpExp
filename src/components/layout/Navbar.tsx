import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Button } from '../ui/Button';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Check if we are on the home page
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Spices', path: '/products' },
    { name: 'Heritage', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  // If not on home, navbar should always have background or be styled for visibility
  const shouldShowBackground = isScrolled || !isHome;

  return (
    <nav
      className={cn(
        'fixed w-full z-50 transition-all duration-300 font-sans',
        shouldShowBackground ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-spice-terracotta p-2 rounded-lg group-hover:bg-spice-ochre transition-colors">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <span className={cn(
              "text-2xl font-bold tracking-tight font-serif",
              shouldShowBackground ? "text-corporate-900" : "text-white"
            )}>
              Tamil<span className="text-spice-turmeric">Spices</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-spice-turmeric",
                  shouldShowBackground ? "text-corporate-900" : "text-gray-100"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact">
              <Button size="sm" variant={shouldShowBackground ? 'primary' : 'primary'}>
                Bulk Inquiry
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "p-2 rounded-md focus:outline-none",
                shouldShowBackground ? "text-corporate-900" : "text-white"
              )}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block px-3 py-2 rounded-md text-base font-medium text-corporate-900 hover:text-spice-terracotta hover:bg-spice-cream"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 px-3">
              <Link to="/contact" className="w-full">
                <Button className="w-full">Bulk Inquiry</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
