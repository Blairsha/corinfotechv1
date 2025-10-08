import React, { useState } from 'react';
import Header from '../components/Header';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Building,
  ChevronRight,
  ExternalLink,
  Navigation
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Contacts = () => {
  const [showPhone, setShowPhone] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [isCalling, setIsCalling] = useState(false);
  const [isMailing, setIsMailing] = useState(false);
  const [isRouting, setIsRouting] = useState(false);
  
  const phoneNumber = "8-499-262-54-55";
  const emailAddress = "info@corinfotech.ru";
  const address = "г. Москва, ул. Каланчевская 2/1";

  const handleCall = () => {
    setIsCalling(true);
    window.location.href = `tel:${phoneNumber}`;
    setTimeout(() => setIsCalling(false), 3000);
  };

  const handleEmail = () => {
    setIsMailing(true);
    
    // Пытаемся открыть Gmail в новом окне
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=Вопрос по услугам&body=`;
    const gmailWindow = window.open(gmailUrl, '_blank', 'noopener,noreferrer');
    
    // Проверяем, открылось ли окно Gmail
    const gmailCheck = setInterval(() => {
      if (!gmailWindow || gmailWindow.closed || typeof gmailWindow.closed === 'undefined') {
        clearInterval(gmailCheck);
        // Если Gmail не открылся, используем стандартный mailto
        window.location.href = `mailto:${emailAddress}?subject=Вопрос по услугам&body=Здравствуйте, у меня вопрос...`;
      }
      setIsMailing(false);
    }, 500);
  };

  const handleBuildRoute = () => {
    setIsRouting(true);
    
    // Создаем URL для построения маршрута в Яндекс.Картах
    const yandexMapsUrl = `https://yandex.ru/maps/?rtext=~${encodeURIComponent(address)}&rtt=auto`;
    
    // Открываем в новом окне
    const routeWindow = window.open(yandexMapsUrl, '_blank', 'noopener,noreferrer');
    
    // Проверяем, открылось ли окно
    const routeCheck = setInterval(() => {
      if (!routeWindow || routeWindow.closed || typeof routeWindow.closed === 'undefined') {
        clearInterval(routeCheck);
        // Если окно не открылось, открываем в текущем окне
        window.location.href = yandexMapsUrl;
      }
      setIsRouting(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Фоновые элементы */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Анимированные волны */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDIwMCI+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDEyLCA3NCwgMjU1LCAwLjIpIiBzdHJva2Utd2lkdGg9IjMiIGQ9Ik0tMiwxMjUgQzE1MCwxMDAgMzAwLDE1MCA1MDAsMTAwIEM3MDAsNTAgODUwLDE1MCAxMDAyLDUwIj48L3BhdGg+PC9zdmc+')] animate-wave-slow" />
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDIwMCI+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDEyLCA3NCwgMjU1LCAwLjIpIiBzdHJva2Utd2lkdGg9IjMiIGQ9Ik0tMiwxNTAgQzE1MCwxMDAgMzAwLDE1MCA1MDAsNzUgQzcwMCwxNTAgODUwLDUwIDEwMDIsMTI1Ij48L3BhdGg+PC9zdmc+')] animate-wave-medium animation-delay-2000" />
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDIwMCI+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDEyLCA3NCwgMjU1LCAwLjIpIiBzdHJva2Utd2lkdGg9IjMiIGQ9Ik0tMiwxMDAgQzE1MCwxNTAgMzAwLDUwIDUwMCwxMjUgQzcwMCwyMDAgODUwLDc1IDEwMDIsMTAwIj48L3BhdGg+PC9zdmc+')] animate-wave-fast animation-delay-4000" />
        </div>

        {/* Парящие геометрические фигуры */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-xl animate-float animation-delay-0" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/5 rounded-full blur-xl animate-float animation-delay-3000" />
        <div className="absolute top-1/3 left-3/4 w-24 h-24 bg-primary/5 rounded-full blur-xl animate-float animation-delay-6000" />
        <div className="absolute top-3/4 left-1/5 w-40 h-40 bg-accent/5 rounded-full blur-xl animate-float animation-delay-9000" />

        {/* Анимированные градиенты */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 to-transparent animate-pulse-slow" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_var(--tw-gradient-stops))] from-accent/10 to-transparent animate-pulse-medium animation-delay-2000" />
        </div>

        {/* Движущиеся частицы */}
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-1.5 h-1.5 bg-primary/20 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `move-diagonal ${10000 + Math.random() * 10000}ms infinite ${Math.random() * 5000}ms`,
              opacity: 0.2 + Math.random() * 0.3
            }}
          />
        ))}
      </div>
      
      {/* Header */}
      <Header />

      {/* Основной контент */}
      <div className="container mx-auto px-4 relative z-10 py-8 md:py-12 mt-8">
        <div className="max-w-7xl mx-auto space-y-12 md:space-y-16">
          {/* Hero Section */}
          <section className="text-center space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-muted/50 text-sm font-medium animate-fade-in">
              <MapPin className="h-4 w-4 mr-2 text-primary" />
              Мы находимся в Москве
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Наши контакты
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Свяжитесь с нами удобным для вас способом
            </p>
          </section>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-8">
              <Card className="bg-background/50 backdrop-blur-sm border-muted/30 hover:shadow-lg transition-all">
                <CardContent className="p-8 space-y-6">
                  <h2 className="text-2xl font-bold">Контактная информация</h2>
                  
                  <div className="space-y-6">
                    {[
                      { 
                        icon: MapPin, 
                        title: "Фактический адрес", 
                        content: address,
                        link: "https://yandex.ru/maps/-/CDBQjBd3"
                      },
                      { 
                        icon: Building, 
                        title: "Адрес для корреспонденции", 
                        content: "107174, г. Москва, ул. Каланчевская 2/1, стр.1"
                      },
                      { 
                        icon: Phone, 
                        title: "Телефон", 
                        content: phoneNumber,
                        action: () => setShowPhone(!showPhone)
                      },
                      { 
                        icon: Mail, 
                        title: "E-mail", 
                        content: emailAddress,
                        action: () => setShowEmail(!showEmail)
                      },
                      { 
                        icon: Clock, 
                        title: "Время работы", 
                        content: "Пн-Пт: 9:00 - 18:00"
                      }
                    ].map((item, i) => (
                      <div 
                        key={i}
                        className="flex items-start gap-4 group cursor-pointer"
                        onClick={item.action}
                      >
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-primary/20 transition-colors">
                          <item.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium">{item.title}</h3>
                          <p className="text-muted-foreground">{item.content}</p>
                          {item.link && (
                            <a 
                              href={item.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-sm text-primary inline-flex items-center mt-1 hover:underline"
                              onClick={(e) => e.stopPropagation()}
                            >
                              Посмотреть на карте <ChevronRight className="h-4 w-4 ml-1" />
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button 
                  size="lg" 
                  className="w-full group relative overflow-hidden"
                  onClick={handleCall}
                  disabled={isCalling}
                >
                  <Phone className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  {isCalling ? (
                    <span className="flex items-center">
                      <span className="animate-pulse">Набор номера</span>
                      <span className="ml-2 font-medium">{phoneNumber}</span>
                    </span>
                  ) : (
                    <>
                      Позвонить
                      {showPhone && (
                        <span className="ml-2 font-medium">{phoneNumber}</span>
                      )}
                    </>
                  )}
                  
                  {isCalling && (
                    <span className="absolute inset-0 bg-primary/10 animate-pulse" />
                  )}
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full group relative overflow-hidden"
                  onClick={handleEmail}
                  disabled={isMailing}
                >
                  <Mail className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  {isMailing ? (
                    <span className="flex items-center">
                      <span className="animate-pulse">Открытие почты</span>
                      <span className="ml-2 font-medium">{emailAddress}</span>
                    </span>
                  ) : (
                    <>
                      Написать на почту
                      {showEmail && (
                        <span className="ml-2 font-medium">{emailAddress}</span>
                      )}
                    </>
                  )}
                  
                  {isMailing && (
                    <span className="absolute inset-0 bg-primary/5 animate-pulse" />
                  )}
                </Button>
              </div>
            </div>

            {/* Right Column - Map */}
            <div>
              <Card className="bg-background/50 backdrop-blur-sm border-muted/30 h-full overflow-hidden hover:shadow-lg transition-all">
                <CardHeader>
                  <CardTitle className="text-2xl">Как нас найти</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="aspect-video">
                    <iframe 
                      src="https://yandex.ru/map-widget/v1/?um=constructor%3A9290f153911bee62e173d061c97fc5536b07f8902bbb5e6873959da9d6aa2382&source=constructor" 
                      width="100%" 
                      height="100%" 
                      frameBorder="0"
                      className="border-0"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="p-6">
                    <p className="text-muted-foreground mb-6">
                      Мы находимся в центре Москвы, недалеко от Комсомольской площади
                    </p>
                    <div className="flex justify-center">
                      <Button 
                        size="lg"
                        className="w-full max-w-md py-6 text-base group relative overflow-hidden bg-primary hover:bg-primary/90"
                        onClick={handleBuildRoute}
                        disabled={isRouting}
                      >
                        <Navigation className="h-5 w-5 mr-3 transition-transform group-hover:translate-x-1" />
                        {isRouting ? (
                          <span className="flex items-center">
                            <span className="animate-pulse">Открытие карт</span>
                          </span>
                        ) : (
                          "Построить маршрут"
                        )}
                        
                        {isRouting && (
                          <span className="absolute inset-0 bg-primary/10 animate-pulse" />
                        )}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Раздел */}
          <section className="text-center space-y-6 py-12 rounded-xl relative overflow-hidden border border-muted/50 hover:shadow-lg transition-shadow group/cta">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-600/10 backdrop-blur-sm opacity-100 group-hover/cta:opacity-80 transition-opacity"></div>
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary/20 blur-xl animate-pulse-slow"></div>
            <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-accent/20 blur-xl animate-pulse-medium animation-delay-2000"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold">Дополнительная информация</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
                Для получения дополнительной информации о наших услугах или сотрудничестве, 
                пожалуйста, свяжитесь с нами по указанным контактам. Наши специалисты всегда 
                готовы помочь вам с решением ваших задач.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                <Button 
                  size="lg" 
                  className="px-8 text-lg group/button hover:shadow-md transition-all bg-primary hover:bg-primary/90"
                  onClick={handleCall}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Позвонить нам
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="px-8 text-lg group/button hover:shadow-md transition-all"
                  onClick={handleEmail}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Написать письмо
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contacts;