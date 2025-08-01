import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ModeToggle } from './ModeToggle';
import { Menu, X, Phone, Mail } from 'lucide-react';
import logoImage from '@/assets/IMG_0089.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'О нас', href: '/about' },
    { name: 'Наши услуги', href: '/services' },
    { name: 'Наши проекты', href: '/projects' },
    { name: 'Дистрибьюторы', href: '/Distributors' },
    { name: 'Вендоры', href: '/Vendors' },
    { name: 'Контакты', href: '/contacts' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border/40">
      <div className="container mx-auto px-4">

        <div className="hidden md:flex justify-end py-2 text-sm text-muted-foreground border-b border-border/20">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>8-499-262-54-55</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>info@corinfotech.ru</span>
            </div>
          </div>
        </div>
        
        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center space-x-2">
            {/* Контейнер для логотипа с более темным размытым фоном */}
            <div className="relative w-16 h-16 rounded-lg flex items-center justify-center">
              {/* Темный размытый синий кружок */}
              <div className="absolute inset-0 bg-blue-600/40 rounded-full blur-md transform scale-110" />
              {/* Логотип */}
              <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                <img 
                  src={logoImage} 
                  alt="Логотип КорИнфоТех" 
                  className="w-full h-full object-contain" 
                />
              </div>
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-lg">КорИнфоТех</div>
              <div className="text-xs text-muted-foreground">IT Solutions</div>
            </div>
          </Link>

          {/* Компьютерная навигация*/}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary relative group ${
                  isActive(item.href) ? 'text-primary' : 'text-foreground'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${
                  isActive(item.href) ? 'w-full' : ''
                }`} />
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <ModeToggle />
            
            {/* Моб меню кнопки */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mмоб навигация */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/20 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary px-2 py-1 rounded ${
                    isActive(item.href) ? 'text-primary bg-primary/10' : 'text-foreground'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 px-2 pt-4 border-t border-border/20">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>8-499-262-54-55</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>info@corinfotech.ru</span>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;