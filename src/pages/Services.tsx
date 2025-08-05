import React from 'react';
import Header from '../components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Server, 
  Network, 
  Shield, 
  Monitor, 
  Smartphone, 
  Cable, 
  Eye,
  Lock,
  Settings,
  Headphones,
  Database,
  Wifi,
  Rss,
  ArrowRight
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Server,
      title: 'Поставка оргтехники и вычислительной техники',
      description: 'Серверы, принтеры, МФУ, ПЭВМ и т.п. для создания современной IT-структуры предприятий',
      category: 'IT-инфраструктура',
      features: ['Консультации по выбору', 'Поставка оборудования', 'Настройка и тестирование']
    },
    {
      icon: Network,
      title: 'Проектирование телекоммуникационных сетей',
      description: 'Структурированные кабельные сети зданий, распределенные сети IP-телефонии, распределенные системы ВКС',
      category: 'Сети и связь',
      features: ['Проектирование', 'Монтаж', 'Тестирование']
    },
    {
      icon: Shield,
      title: 'Создание телекоммуникационной инфраструктуры',
      description: 'Комплексные решения "Офис под ключ"',
      category: 'Инфраструктура',
      features: ['Полный цикл работ', 'Гарантийное обслуживание', 'Техническая поддержка']
    },
    {
      icon: Monitor,
      title: 'Поставка оборудования',
      description: 'Комплектующие СКС, оборудование ЛВС и телефонии, ВКС, мобильные средства коммуникации',
      category: 'Оборудование',
      features: ['Широкий ассортимент', 'Сертифицированное оборудование', 'Конкурентные цены']
    },
    {
      icon: Cable,
      title: 'Монтаж компьютерных сетей и телефонии',
      description: 'Последующее обслуживание систем связи',
      category: 'Монтаж',
      features: ['Профессиональный монтаж', 'Соблюдение стандартов', 'Гарантия качества']
    },
    {
      icon: Settings,
      title: 'Настройка ЛВС и компьютерной техники',
      description: 'Обслуживание и настройка локальных вычислительных сетей и МФУ',
      category: 'Настройка',
      features: ['Оптимизация производительности', 'Обновление ПО', 'Регулярное обслуживание']
    },
    {
      icon: Smartphone,
      title: 'Настройка корпоративных АТС',
      description: 'В том числе и виртуальных телефонных станций',
      category: 'Телефония',
      features: ['IP-телефония', 'Виртуальные АТС', 'Интеграция с CRM']
    },
    {
      icon: Wifi,
      title: 'Настройка распределенных систем ВКС',
      description: 'Видеоконференцсвязь и системы совместной работы',
      category: 'Видеосвязь',
      features: ['HD качество', 'Многоточечные соединения', 'Запись конференций']
    },
    {
      icon: Cable,
      title: 'Прокладка волоконно-оптического кабеля',
      description: 'Высокоскоростные каналы передачи данных',
      category: 'Оптические сети',
      features: ['Сварка оптики', 'Тестирование линий', 'Документирование']
    },
    {
      icon: Eye,
      title: 'Системы контроля доступа и видеонаблюдения',
      description: 'Монтаж, настройка и последующее обслуживание',
      category: 'Безопасность',
      features: ['IP-камеры', 'Аналитика видео', 'Удаленный доступ']
    },
    {
      icon: Shield,
      title: 'Работы с СКЗИ',
      description: 'Средства криптозащиты информации, работы с аудио/видео приложениями',
      category: 'Информационная безопасность',
      features: ['Сертифицированные решения', 'Шифрование данных', 'Аудит безопасности']
    },
    {
      icon: Headphones,
      title: 'Техническое обслуживание',
      description: 'Сопровождение выполненных поставок и работ',
      category: 'Поддержка',
      features: ['24/7 поддержка', 'Плановое обслуживание', 'Экстренный ремонт']
    }
  ];

  const categories = [...new Set(services.map(service => service.category))];

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
            `}</style>

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
        {[...Array(80)].map((_, i) => (
          <div 
            key={`particle-${i}`}
            className="absolute w-1.5 h-1.5 bg-primary/20 rounded-full pointer-events-none"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `move-diagonal ${10000 + Math.random() * 10000}ms infinite ${Math.random() * 5000}ms`,
              opacity: 0.1 + Math.random() * 0.2,
              transform: `scale(${0.5 + Math.random() * 1.5})`
            }}
          />
        ))}

        {/* Дополнительные фоновые элементы */}
        <div className="absolute top-1/3 right-1/3 w-16 h-16 border-2 border-primary/10 rounded-full animate-rotate-slow" />
        <div className="absolute bottom-1/3 left-1/3 w-24 h-24 border-2 border-accent/10 rounded-full animate-rotate-reverse" />
      </div>

      <Header />
      
      <main className="container mx-auto px-4 py-16 space-y-16 relative z-10">
        {/* Раздел*/}
        <section className="text-center space-y-8 animate-fade-in-up pt-8">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Наши услуги
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            ООО «КорИнфоТех» предоставляет большой выбор услуг от начального этапа — проектирование телекоммуникационных систем и сетей, до конечного — строительство, тестирование, гарантийное и послегарантийное обслуживание.
          </p>
        </section>

       {/* Категории */}
<section className="space-y-8">
  <div className="flex flex-wrap gap-2 justify-center animate-fade-in-up animate-delay-100">
    {categories.map((category) => (
      <span 
        key={category} 
        className="px-4 py-2 text-sm bg-transparent border border-border/50 rounded-full cursor-pointer"
      >
        {category}
      </span>
    ))}
  </div>
</section>

        {/* Сетка услуг */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group hover:shadow-lg transition-all duration-300 animate-fade-in-up bg-background/90 backdrop-blur-sm border-border/50 hover:border-primary/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <div className="space-y-2">
                  <Badge variant="secondary" className="text-xs bg-secondary/10">
                    {service.category}
                  </Badge>
                  <CardTitle className="text-lg leading-tight">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* CTA Section */}
        <section className="text-center space-y-8 py-16 animate-fade-in-up">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Готовы начать проект?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Специалисты нашей компании обязательно помогут вам выбрать необходимые услуги, подсчитать общую стоимость и оформить заказ.
            </p>
          </div>
          <Button 
            asChild 
            size="lg" 
            className="text-lg px-8 hover:shadow-lg hover:shadow-primary/20 transition-all group"
          >
            <Link to="/contacts" className="flex items-center">
              Связаться с нами
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </section>
      </main>
    </div>
  );
};

export default Services;