import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ModeToggle } from './ModeToggle';
import { Menu, X, Phone, Mail } from 'lucide-react';
import logoImage from '@/assets/IMG_0089.png';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'О нас', href: '/' }, 
    { name: 'Направления', href: '/services' },
    { name: 'Проекты', href: '/projects' },
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
        
        {/* Основная навигация */}
        <div className="flex items-center justify-between py-4">

          <Link to="/home" className="flex items-center space-x-2">
            <div className="relative w-16 h-16 rounded-lg flex items-center justify-center">
              <div className="absolute inset-0 bg-blue-600/40 rounded-full blur-md transform scale-110" />
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
            </div>
          </Link>

          {/* Пк навигация */}
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

        {/* Моб навигация с анимациями */}
        <AnimatePresence>
        {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ 
                opacity: 1, 
                height: 'auto',
                transition: { 
                  height: { 
                    type: 'spring', 
                    stiffness: 300, 
                    damping: 25,
                    mass: 0.5
                  },
                  opacity: { duration: 0.3 }
                }
              }}
              exit={{ 
                opacity: 0, 
                height: 0,
                transition: { 
                  height: { duration: 0.3 },
                  opacity: { duration: 0.2 }
                }
              }}
              className="md:hidden overflow-hidden"
            >
              <motion.nav
                initial={{ y: -20, opacity: 0 }}
                animate={{ 
                  y: 0, 
                  opacity: 1,
                  transition: { 
                    type: 'spring', 
                    stiffness: 300, 
                    damping: 25,
                    delay: 0.1
                  }
                }}
                exit={{ 
                  y: -20, 
                  opacity: 0,
                  transition: { 
                    type: 'spring', 
                    stiffness: 300,
                    damping: 25
                  }
                }}
                className="flex flex-col space-y-1 py-4 border-t border-border/20"
              >
                {navigation.map((item, index) => (
                  <motion.div
                  key={item.name}
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      scale: 1,
                      transition: { 
                        delay: index * 0.07 + 0.15,
                        type: 'spring', 
                        stiffness: 300,
                        damping: 20,
                        mass: 0.5
                      }
                    }}
                    exit={{ 
                      opacity: 0, 
                      y: -10,
                      scale: 0.95,
                      transition: { 
                        delay: index * 0.03,
                        duration: 0.2
                      }
                    }}
                    whileTap={{ 
                      scale: 0.95,
                      transition: { type: 'spring', stiffness: 500 }
                    }}
                    whileHover={{ 
                      scale: 1.02,
                      transition: { type: 'spring', stiffness: 300 }
                    }}
                  >
                    <Link
                  to={item.href}
                      className={`block text-sm font-medium px-6 py-3 rounded-lg mx-2 ${
                        isActive(item.href) 
                          ? 'text-primary bg-primary/10' 
                          : 'text-foreground hover:bg-accent/50'
                  }`}
                      onClick={() => {
                        setIsMenuOpen(false);
                        window.scrollTo(0, 0);
                      }}
                    >
                      <motion.span
                        className="flex items-center"
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                >
                  {item.name}
                        {isActive(item.href) && (
                          <motion.span
                            className="ml-2 w-2 h-2 rounded-full bg-primary"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ 
                              type: 'spring',
                              stiffness: 500,
                              damping: 15
                            }}
                          />
                        )}
                      </motion.span>
                </Link>
                  </motion.div>
              ))}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      delay: navigation.length * 0.07 + 0.2,
                      type: 'spring',
                      stiffness: 300
                    }
                  }}
                  exit={{ 
                    opacity: 0, 
                    y: 10,
                    transition: { duration: 0.2 }
                  }}
                  className="flex flex-col space-y-3 px-6 pt-6 pb-2 border-t border-border/20 mt-2 mx-2"
                >
                  <motion.div 
                    className="flex items-center space-x-2 text-sm text-muted-foreground p-2 rounded-lg hover:bg-accent/30"
                    whileHover={{ x: 3 }}
                    whileTap={{ scale: 0.97 }}
                  >
                  <Phone className="h-4 w-4" />
                  <span>8-499-262-54-55</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center space-x-2 text-sm text-muted-foreground p-2 rounded-lg hover:bg-accent/30"
                    whileHover={{ x: 3 }}
                    whileTap={{ scale: 0.97 }}
                  >
                  <Mail className="h-4 w-4" />
                  <span>info@corinfotech.ru</span>
                  </motion.div>
                </motion.div>
              </motion.nav>
            </motion.div>
        )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;