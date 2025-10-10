import React, { useState } from 'react';
import Header from '../components/Header';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

// Импортируем изображения
import image1 from '../assets/images/1.jpg';
import image2 from '../assets/images/2.jpg';
import image3 from '../assets/images/3.jpg';

import { 
  Server, 
  Network, 
  Settings,
  ExternalLink,
  ChevronRight,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      icon: Server,
      title: 'Поставка ИТ оборудования',
      description: 'Поставка всего спектра ИТ оборудования для создания современной инфраструктуры офиса',
      category: 'Оборудование',
      features: ['Консультации по выбору оборудования', 'Поставка', 'Настройка и тестирование'],
      fullDescription: 'ООО «КорИнфоТех» предлагает поставку ИТ оборудования для предприятий любого масштаба. Наши специалисты помогут подобрать оптимальное оборудование под ваши задачи, обеспечат своевременную поставку и профессиональную настройку. Работаем только с проверенными производителями и надежными дистрибьюторами, предоставляем гарантию, гарантийное и послегарантийное обслуживание.',
      details: [
        'Подбор оборудования под конкретные бизнес-задачи',
        'Тестирование оборудования перед поставкой',
        'Гарантия до 3 лет на все оборудование',
        'Круглосуточная техническая поддержка'
      ],
      benefits: [
        'Широкий ассортимент оборудования',
        'Работа с проверенными производителями',
        'Гарантийное обслуживание',
        'Профессиональная настройка оборудования'
      ],
      equipment: [
        'Вычислительная техника: ПК, ноутбуки, планшеты',
        'Периферийные устройства: мониторы, клавиатуры, мыши, ИБП',
        'Серверное оборудование',
        'Сетевое оборудование: коммутаторы, маршрутизаторы, Wi-Fi точки',
        'Офисное оборудование: принтеры, сканеры, МФУ',
        'Оборудование ВКС',
        'Телефония: IP-телефоны, АТС',
        'Системы видеонаблюдения и СКУД',
        'Средства информационной защиты (СКЗИ)',
        'Комплектующие СКС и ЛВС'
      ],
      image: image1
    },
    {
      icon: Network,
      title: 'Комплекс услуг для создания ИТ-структуры',
      description: 'Полный цикл услуг от проектирования ИТ-инфраструктуры предприятия до тестирования совместной работы оборудования',
      category: 'Услуги',
      features: ['Разработка проекта', 'Выбор оборудования', 'Прокладка кабельных трасс', 'Установка и настройка'],
      fullDescription: 'ООО «КорИнфоТех» предлагает полный цикл услуг от проектирования ИТ-инфраструктуры предприятия до прокладки всех видов кабелей, поставки, установки, настройки и активации оборудования. Мы создаем надежные и масштабируемые решения для офисных зданий, производственных помещений и распределенных филиалов. Наши проекты соответствуют международным стандартам и учитывают все современные требования к ИТ-инфраструктуре.',
      details: [
        'Бесплатный аудит существующей инфраструктуры',
        'Сертификаты соответствия стандартам',
        'Минимальное вмешательство в отделку помещений',
        'Разработка проекта под нужды заказчика',
        'Комплексные решения "Офис под ключ"'
      ],
      benefits: [
        'Полный цикл работ от проектирования до ввода в эксплуатацию',
        'Соблюдение международных стандартов',
        'Многолетний опыт реализации сложных проектов',
        'Учет всех современных требований'
      ],
      services: [
        'Проектирование СКС зданий',
        'Создание распределенных сетей IP-телефонии',
        'Разработка телекоммуникационных сетей',
        'Внедрение систем ВКС',
        'Построение локальных вычислительных сетей (ЛВС)',
        'Работы с СКЗИ (имеем лицензию ФСБ)'
      ],
      image: image2
    },
    {
      icon: Settings,
      title: 'Гарантийное и постгарантийное обслуживание',
      description: 'Все виды ремонта до полного восстановления работы оборудования',
      category: 'Поддержка',
      features: ['Диагностика', 'Доставка оборудования и запчастей', 'Ремонт до полного восстановления'],
      fullDescription: 'ООО «КорИнфоТех» осуществляет гарантийное и постгарантийное обслуживание оборудования. Постгарантийное обслуживание может производиться как для оборудования, поставленного нами, так и для оборудования, поставленного другими поставщиками. Мы обеспечиваем полное восстановление работоспособности вашего оборудования.',
      details: [
        'Бесплатный аудит имеющегося оборудования',
        'Диагностика и ремонт на месте или в сервисном центре',
        'Горячая линия для консультаций',
        'Время реакции специалиста от 1 часа до 2 рабочих дней',
        'Доставка оборудования и запчастей за наш счет'
      ],
      benefits: [
        'Обслуживание оборудования любых поставщиков',
        'Быстрое реагирование на неисправности',
        'Профессиональный ремонт',
        'Гарантия на выполненные работы'
      ],
      serviceTypes: [
        'Гарантийное обслуживание: ремонт или замена оборудования',
        'Постгарантийное обслуживание по договору',
        'Профилактический осмотр и диагностика',
        'Чистка ресурсных деталей',
        'Все виды ремонта на месте или в сервисном центре'
      ],
      image: image3
    }
  ];

  const openServiceModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <style>
        {`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); }
          25% { transform: translateY(-20px) translateX(10px) rotate(5deg); }
          50% { transform: translateY(0px) translateX(20px) rotate(0deg); }
          75% { transform: translateY(20px) translateX(10px) rotate(-5deg); }
        }
        
        @keyframes gradient-pulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }
        
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes sparkle {
          0% { transform: scale(0); opacity: 0; }
          50% { transform: scale(1); opacity: 1; }
          100% { transform: scale(0); opacity: 0; }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-gradient-pulse {
          animation: gradient-pulse 6s ease-in-out infinite;
        }
        
        /* Адаптивные стили для мобильных */
        @media (max-width: 640px) {
          .service-card {
            min-height: auto;
          }
          
          .modal-content {
            max-height: 90vh;
            overflow-y: auto;
          }
          
          .mobile-modal-grid {
            display: flex;
            flex-direction: column;
            height: 100%;
          }
          
          .mobile-modal-content {
            max-height: 60vh;
            overflow-y: auto;
            padding: 1rem;
          }
          
          .mobile-modal-actions {
            padding: 1rem;
            background: rgba(0, 0, 0, 0.02);
          }
        }
        `}</style>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDIwMCI+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDEyLCA3NCwgMjU1LCAwLjIpIiBzdHJva2Utd2lkdGg9IjMiIGQ9Ik0tMiwxMjUgQzE1MCwxMDAgMzAwLDE1MCA1MDAsMTAwIEM3MDAsNTAgODUwLDE1MCAxMDAyLDUwIj48L3BhdGg+PC9zdmc+')] animate-wave-slow" />
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDIwMCI+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDEyLCA3NCwgMjU1LCAwLjIpIiBzdHJva2Utd2lkdGg9IjMiIGQ9Ik0tMiwxNTAgQzE1MCwxMDAgMzAwLDE1MCA1MDAsNzUgQzcwMCwxNTAgODUwLDUwIDEwMDIsMTI1Ij48L3BhdGg+PC9zdmc+')] animate-wave-medium animation-delay-2000" />
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDIwMCI+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDEyLCA3NCwgMjU1LCAwLjIpIiBzdHJva2Utd2lkdGg9IjMiIGQ9Ik0tMiwxMDAgQzE1MCwxNTAgMzAwLDUwIDUwMCwxMjUgQzcwMCwyMDAgODUwLDc1IDEwMDIsMTAwIj48L3BhdGg+PC9zdmc+')] animate-wave-fast animation-delay-4000" />
        </div>

        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-xl animate-float animation-delay-0 max-sm:hidden" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/5 rounded-full blur-xl animate-float animation-delay-3000 max-sm:hidden" />
        <div className="absolute top-1/3 left-3/4 w-24 h-24 bg-primary/5 rounded-full blur-xl animate-float animation-delay-6000 max-sm:hidden" />
        <div className="absolute top-3/4 left-1/5 w-40 h-40 bg-accent/5 rounded-full blur-xl animate-float animation-delay-9000 max-sm:hidden" />

        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 to-transparent animate-pulse-slow" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_var(--tw-gradient-stops))] from-accent/10 to-transparent animate-pulse-medium animation-delay-2000" />
        </div>

        {[...Array(40)].map((_, i) => (
          <div 
            key={`particle-${i}`}
            className="absolute w-1.5 h-1.5 bg-primary/20 rounded-full pointer-events-none max-sm:hidden"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `move-diagonal ${10000 + Math.random() * 10000}ms infinite ${Math.random() * 5000}ms`,
              opacity: 0.1 + Math.random() * 0.2,
              transform: `scale(${0.5 + Math.random() * 1.5})`
            }}
          />
        ))}

        <div className="absolute top-1/3 right-1/3 w-16 h-16 border-2 border-primary/10 rounded-full animate-rotate-slow max-sm:hidden" />
        <div className="absolute bottom-1/3 left-1/3 w-24 h-24 border-2 border-accent/10 rounded-full animate-rotate-reverse max-sm:hidden" />
      </div>

      <Header />
      
      <main className="container mx-auto px-4 py-16 space-y-16 relative z-10">
        <section className="text-center space-y-8 animate-fade-in-up pt-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Наши направления
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            ООО «КорИнфоТех» предоставляет большой выбор оборудования и услуг от начального этапа — проектирования, до конечного — реализации проекта.
          </p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group hover:shadow-lg transition-all duration-300 animate-fade-in-up bg-background/90 backdrop-blur-sm border-border/50 hover:border-primary/30 cursor-pointer service-card"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openServiceModal(service)}
            >
              <CardHeader className="space-y-3 sm:space-y-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <div className="space-y-1 sm:space-y-2">
                  <span className="text-sm font-medium text-blue-600">
                    {service.category}
                  </span>
                  <CardTitle className="text-base sm:text-lg leading-tight">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                <p className="text-muted-foreground text-sm sm:text-base">{service.description}</p>
                <div className="space-y-1 sm:space-y-2">
                  {service.features.slice(0, 3).map((feature) => (
                    <div key={feature} className="flex items-center space-x-2 text-xs sm:text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                      <span className="truncate">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-1 sm:pt-2 flex items-center text-primary text-xs sm:text-sm font-medium group-hover:underline">
                  Подробнее
                  <ChevronRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="text-center space-y-6 py-8 sm:py-12 rounded-xl relative overflow-hidden border border-muted/50 hover:shadow-lg transition-shadow group/cta">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-600/10 backdrop-blur-sm opacity-100 group-hover/cta:opacity-80 transition-opacity"></div>
          <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary/20 blur-xl animate-gradient-pulse max-sm:hidden"></div>
          <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-accent/20 blur-xl animate-gradient-pulse animate-delay-2000 max-sm:hidden"></div>
          
          <div className="relative z-10 px-4 sm:px-0">
            <h2 className="text-2xl sm:text-3xl font-bold">Нужна помощь в создании проекта или выборе оборудования?</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mt-2 sm:mt-4">
              Специалисты нашей компании обязательно помогут вам выбрать необходимый состав оборудования или услуг, подсчитать общую стоимость и оформить заказ.
            </p>
            <Button 
              size="lg" 
              className="px-6 sm:px-8 text-base sm:text-lg group/button mt-4 sm:mt-6 hover:shadow-md transition-all bg-primary hover:bg-primary/90"
              onClick={() => navigate('/contacts')} 
            >
              Обсудить проект
              <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover/button:translate-x-1 group-hover/button:-translate-y-0.5" />
            </Button>
          </div>
        </section>
      </main>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-5xl lg:max-w-6xl p-0 rounded-xl overflow-hidden max-h-[95vh] sm:max-h-[90vh] w-[95vw] sm:w-full mx-auto">
          {selectedService && (
            <div className="relative flex flex-col h-full mobile-modal-grid">
              {/* Мобильная версия - вертикальный layout */}
              <div className="sm:hidden mobile-modal-content">
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mt-1 flex-shrink-0">
                    <selectedService.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="ml-3 flex-1">
                    <span className="text-sm font-medium text-blue-600 block">
                      {selectedService.category}
                    </span>
                    <DialogTitle className="text-lg mt-1 leading-tight">{selectedService.title}</DialogTitle>
                  </div>
                </div>
                
                <DialogDescription className="text-sm mb-4 leading-relaxed">
                  {selectedService.fullDescription}
                </DialogDescription>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-sm mb-2">Детали услуги:</h3>
                    <ul className="space-y-2">
                      {selectedService.details.map((detail, index) => (
                        <li key={index} className="flex items-start text-xs">
                          <CheckCircle className="h-3 w-3 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-sm mb-2">Преимущества:</h3>
                    <ul className="space-y-2">
                      {selectedService.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start text-xs">
                          <CheckCircle className="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="leading-relaxed">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {selectedService.equipment && (
                    <div>
                      <h3 className="font-semibold text-sm mb-2">Оборудование:</h3>
                      <ul className="space-y-2">
                        {selectedService.equipment.map((item, index) => (
                          <li key={index} className="flex items-start text-xs">
                            <CheckCircle className="h-3 w-3 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Кнопки действий для мобильной версии */}
              <div className="sm:hidden mobile-modal-actions space-y-2 border-t">
                <Button 
                  size="lg" 
                  className="w-full text-base group/button hover:shadow-md transition-all bg-primary hover:bg-primary/90"
                  onClick={() => {
                    setIsModalOpen(false);
                    navigate('/contacts');
                  }}
                >
                  Связаться с нами
                  <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover/button:translate-x-1 group-hover/button:-translate-y-0.5" />
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full text-sm"
                  onClick={() => setIsModalOpen(false)}
                >
                  Закрыть
                </Button>
              </div>

              {/* Десктопная версия - горизонтальный layout без изображения */}
              <div className="hidden sm:grid sm:grid-cols-[2fr_1fr] h-full">
                <div className="p-8 lg:p-10 overflow-y-auto max-h-[85vh]">
                  <div className="flex items-start mb-8">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mt-1 flex-shrink-0">
                      <selectedService.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="ml-5">
                      <span className="text-base font-medium text-blue-600">
                        {selectedService.category}
                      </span>
                      <DialogTitle className="text-2xl lg:text-3xl mt-2">{selectedService.title}</DialogTitle>
                    </div>
                  </div>
                  
                  <DialogDescription className="text-lg lg:text-xl mb-8 leading-relaxed">
                    {selectedService.fullDescription}
                  </DialogDescription>
                  
                  <div className="space-y-8">
                    <div>
                      <h3 className="font-semibold text-xl mb-4">Детали услуги:</h3>
                      <ul className="space-y-4">
                        {selectedService.details.map((detail, index) => (
                          <li key={index} className="flex items-start text-lg">
                            <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                            <span className="leading-relaxed">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-xl mb-4">Преимущества:</h3>
                      <ul className="space-y-4">
                        {selectedService.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start text-lg">
                            <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="leading-relaxed">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {selectedService.equipment && (
                      <div>
                        <h3 className="font-semibold text-xl mb-4">Оборудование:</h3>
                        <ul className="space-y-4">
                          {selectedService.equipment.map((item, index) => (
                            <li key={index} className="flex items-start text-lg">
                              <CheckCircle className="h-6 w-6 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {selectedService.services && (
                      <div>
                        <h3 className="font-semibold text-xl mb-4">Услуги:</h3>
                        <ul className="space-y-4">
                          {selectedService.services.map((item, index) => (
                            <li key={index} className="flex items-start text-lg">
                              <CheckCircle className="h-6 w-6 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {selectedService.serviceTypes && (
                      <div>
                        <h3 className="font-semibold text-xl mb-4">Типы обслуживания:</h3>
                        <ul className="space-y-4">
                          {selectedService.serviceTypes.map((item, index) => (
                            <li key={index} className="flex items-start text-lg">
                              <CheckCircle className="h-6 w-6 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Правая панель без изображения - только кнопки по центру */}
                <div className="bg-gradient-to-br from-primary/5 to-blue-600/10 p-6 lg:p-8 flex flex-col justify-center items-center">
                  <div className="w-full max-w-xs space-y-4">
                    <Button 
                      size="lg" 
                      className="w-full text-lg group/button hover:shadow-md transition-all bg-primary hover:bg-primary/90 h-12"
                      onClick={() => {
                        setIsModalOpen(false);
                        navigate('/contacts');
                      }}
                    >
                      Связаться с нами
                      <ExternalLink className="ml-3 h-4 w-4 transition-transform group-hover/button:translate-x-1 group-hover/button:-translate-y-0.5" />
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full text-base h-10"
                      onClick={() => setIsModalOpen(false)}
                    >
                      Закрыть
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Services;