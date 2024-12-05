import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ShoppingCart } from 'lucide-react';
import { Logo } from './Logo';
import { AuthButtons } from './auth/AuthButtons';
import { Button } from './ui/Button';
import { useAuth } from '../hooks/useAuth';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { user } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md md:hidden"
              aria-label="Menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-600" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" />
              )}
            </button>
            <Link to="/" className="ml-2 md:ml-0">
              <Logo />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-gray-700 hover:text-emerald-600 transition-colors ${
                isActive('/') ? 'text-emerald-600' : ''
              }`}
            >
              Accueil
            </Link>
            <Link 
              to="/products" 
              className={`text-gray-700 hover:text-emerald-600 transition-colors ${
                isActive('/products') ? 'text-emerald-600' : ''
              }`}
            >
              Nos Produits
            </Link>
            <Link 
              to="/recipes" 
              className={`text-gray-700 hover:text-emerald-600 transition-colors ${
                isActive('/recipes') ? 'text-emerald-600' : ''
              }`}
            >
              Idées Recettes
            </Link>
            <Link 
              to="/about" 
              className={`text-gray-700 hover:text-emerald-600 transition-colors ${
                isActive('/about') ? 'text-emerald-600' : ''
              }`}
            >
              Qui Sommes Nous
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <AuthButtons />
            <button 
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Search"
            >
              <Search className="h-5 w-5 text-gray-600" />
            </button>
            <Link 
              to="/cart"
              className="p-2 hover:bg-gray-100 rounded-full transition-colors relative"
              aria-label="Cart"
            >
              <ShoppingCart className="h-5 w-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`
        fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out
        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        md:hidden
      `}>
        <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsMenuOpen(false)} />
        <div className="relative w-4/5 max-w-xs bg-white h-full p-6">
          <div className="flex flex-col space-y-6">
            <Link
              to="/"
              className="text-lg font-medium text-gray-900 hover:text-emerald-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link
              to="/products"
              className="text-lg font-medium text-gray-900 hover:text-emerald-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Nos Produits
            </Link>
            <Link
              to="/recipes"
              className="text-lg font-medium text-gray-900 hover:text-emerald-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Idées Recettes
            </Link>
            <Link
              to="/about"
              className="text-lg font-medium text-gray-900 hover:text-emerald-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Qui Sommes Nous
            </Link>
            <Link
              to="/cart"
              className="text-lg font-medium text-gray-900 hover:text-emerald-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Mon Panier
            </Link>
            <div className="pt-6 border-t border-gray-200">
              <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full mb-3">
                  Créer un compte
                </Button>
              </Link>
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                <Button variant="secondary" className="w-full">
                  Se connecter
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}