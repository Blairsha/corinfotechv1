import React, { useState } from 'react';
import Header from '../components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Server, Cpu, BatteryFull, Shield, Monitor, Phone, Power, HardDrive, Video, Network, Code, Factory, Printer, Laptop, Smartphone, Wifi, ChevronLeft, ChevronRight } from 'lucide-react';

const Vendors = () => {
  const allManufacturers = [
    {
      name: 'AudioCodes',
      logo: '/logos/audiocodes.png',
      description: 'Производитель VoIP-шлюзов и решений для интеграции TDM/IP сетей с поддержкой SIP-протокола',
      category: 'Телефония и VoIP-оборудование',
      products: ['FXS/FXO шлюзы', 'SBC', 'Цифровые VoIP-шлюзы E1']
    },
    {
      name: 'ООО "АТС-КОНВЕРС"',
      logo: '/logos/ats-konvers.png',
      description: 'Системы защиты от перепадов напряжения и ИБП промышленного класса',
      category: 'Системы электропитания',
      products: ['Стабилизаторы 220В', 'Промышленные ИБП', 'Защита серверного оборудования']
    },
    {
      name: 'БАСТИОН',
      logo: '/logos/bastion.png',
      description: 'Разработка и производство профессиональных источников бесперебойного питания и электротехнического оборудования',
      category: 'Электропитание',
      products: ['ИБП', 'Стабилизаторы', 'Сетевая защита']
    },
    {
      name: 'Гравитон',
      logo: '/logos/graviton.png',
      description: 'Российские серверные решения и рабочие станции с локализацией производства',
      category: 'Серверное оборудование',
      products: ['Rack-серверы', 'Вычислительные кластеры', 'Отечественные ПК']
    },
    {
      name: 'Dahua Technology',
      logo: '/logos/dahua.png',
      description: 'Интеллектуальные системы видеоаналитики с распознаванием лиц и температурным скринингом',
      category: 'Системы безопасности',
      products: ['Тепловизоры', 'Умные видеокамеры', 'Видеорегистраторы с ИИ']
    },
    {
      name: 'Delta Computers',
      logo: '/logos/delta.png',
      description: 'Отечественный производитель IT-оборудования и ПО с повышенной отказоустойчивостью',
      category: 'Оборудование',
      products: ['Серверы', 'СХД', 'Сетевое оборудование']
    },
    {
      name: 'Zelax',
      logo: '/logos/zelax.png',
      description: 'Мультисервисные коммутаторы для конвергентных сетей передачи данных',
      category: 'Телекоммуникационное оборудование',
      products: ['SDH-коммутаторы', 'Маршрутизаторы Carrier-class', 'VoIP-шлюзы']
    },
    {
      name: 'ИМПУЛЬС',
      logo: '/logos/impuls.png',
      description: 'Разработка и производство систем защиты электропитания с собственным R&D',
      category: 'Электропитание',
      products: ['ИБП', 'Стабилизаторы', 'Защитные устройства']
    },

    {
      name: 'IRBIS',
      logo: '/logos/irbis.png',
      description: 'Производитель современного оборудования для коммерческого и потребительского рынка',
      category: 'Оборудование',
      products: ['ПК', 'Моноблоки', 'Серверы', 'Мониторы']
    },
    {
      name: 'ISS (SecurOS)',
      logo: '/logos/iss.png',
      description: 'Платформа видеоаналитики с биометрическим распознаванием и интеграцией с СКУД',
      category: 'Системы безопасности',
      products: ['Распознавание лиц', 'Детекция масок', 'Интеграция с PERCo-Web']
    },
    {
      name: 'CyberPower',
      logo: '/logos/cyberpower.png',
      description: 'Разработка систем бесперебойного питания и программных средств мониторинга электропитания',
      category: 'Электропитание',
      products: ['ИБП', 'ПО мониторинга', 'Аксессуары']
    },
    {
      name: 'Kvadra',
      logo: '/logos/kvadra.png',
      description: 'Производитель клиентских устройств, совместимых с российским ПО',
      category: 'Оборудование',
      products: ['ПК', 'Моноблоки', 'Тонкие клиенты']
    },
    {
      name: 'QTECH',
      logo: '/logos/qtech.png',
      description: 'Пассивное сетевое оборудование для ЦОД и телекоммуникационных решений',
      category: 'Сетевая инфраструктура',
      products: ['SFP+ кабели', 'Кросс-панели', 'Монтажные комплекты']
    },
    {
      name: 'LightCom',
      logo: '/logos/lightcom.png',
      description: 'Российский производитель компьютерного оборудования для госсектора',
      category: 'Оборудование',
      products: ['Мониторы', 'Серверы', 'Рабочие станции']
    },
    {
      name: 'NexTouch',
      logo: '/logos/nextouch.png',
      description: 'Лидер по производству сенсорных дисплеев в России для образования',
      category: 'Оборудование',
      products: ['Интерактивные панели', 'Дисплеи', 'Средства ВТ']
    },
    {
            name: 'Pantum',
      logo: '/logos/pantum.png',
      description: 'Энергоэффективные принтеры с замкнутым циклом переработки картриджей',
      category: 'Офисная техника',
      products: ['Лазерные МФУ', 'Экосервис картриджей', 'Сетевые принтеры']
    },
    {
      name: 'Парус электро',
      logo: '/logos/parus.png',
      description: 'Полный цикл работ по системам электропитания инфраструктурного оборудования',
      category: 'Электропитание',
      products: ['ИБП', 'Стабилизаторы', 'Распределительные щиты']
    },
    {
  name: 'Proway',
  logo: '/logos/proway.png',
  description: 'Российский производитель серверов и систем хранения данных для ЦОД',
  category: 'Серверное оборудование',
  products: ['Rack-серверы', 'СХД', 'Кластерные решения']
},
{
  name: 'RDW',
  logo: '/logos/RDW-comp.png',
  description: 'Производитель серверов с гибридным бэкплейном для SAS/SATA/NVMe-накопителей, включенных в реестр Минпромторга',
  category: 'Серверное оборудование',
  products: ['Серверы для ЦОД', 'Промышленные компьютеры', 'Системы хранения']
},
{
  name: 'SberDevices',
  logo: '/logos/sberdevices.png',
  description: 'Производитель smart-TV с miniLED-дисплеями и голосовым ассистентом Салют',
  category: 'Потребительская электроника',
  products: ['Телевизоры', 'Умные колонки', 'ОС Салют ТВ']
},
{
  name: 'Сайбер Электро',
  logo: '/logos/cyber-electro.png',
  description: 'Профессиональные ИБП для ЦОД и промышленности с сервисными байпасами',
  category: 'Системы электропитания',
  products: ['Трехфазные ИБП', 'Модульные системы', 'Шкафы для АКБ']
},
{
  name: 'Систэм Электрик',
  logo: '/logos/system-electric.png',
  description: 'Системы автоматизации распределения электроэнергии с цифровым мониторингом',
  category: 'Энергораспределение и автоматизация',
  products: ['Умные щиты', 'ПЛК-контроллеры', 'SCADA-системы']
},
{
  name: 'ФЛАТ-ПРО',
  logo: '/logos/flat-pro.png',
  description: 'Отечественные IP-телефоны с поддержкой 30 SIP-аккаунтов и русскоязычным интерфейсом',
  category: 'VoIP-оборудование',
  products: ['IP-телефоны B10', 'VoIP-шлюзы', 'Система Device Manager']
},
{
  name: 'Fplus',
  logo: '/logos/fplus.png',
  description: 'Серверные решения российской сборки с процессорами Intel Xeon Scalable',
  category: 'Серверное оборудование',
  products: ['Серверы Восход', 'Кластерные системы', 'Модули расширения']
},
{
  name: 'Huawei',
  logo: '/logos/huawei.png',
  description: 'Решения 5.5G и интеллектуальные сети следующего поколения',
  category:  'Сетевое оборудование',
  products: ['Маршрутизаторы NetEngine', 'Серверы FusionServer', 'SDN-контроллеры']
},
{
  name: 'ЭЛТЕКС',
  logo: '/logos/eltex.png',
  description: 'Беспроводные контроллеры WLC-HW и программные решения SoftWLC',
  category: 'Беспроводные сети',
  products: ['Wi-Fi контроллеры', 'POE-коммутаторы', 'IoT-шлюзы']
},
{
  name: 'YADRO',
  logo: '/logos/yadro.png',
  description: 'Высокопроизводительные СХД с поддержкой NVMe-oF и RDMA',
  category: 'Системы хранения данных',
  products: ['Кластерные СХД', 'Серверы Katana', 'Программные-defined storage']
},
{
  name: 'Yealink',
  logo: '/logos/yealink.png',
  description: 'Видеотелефоны для Microsoft Teams и решения гибридной работы',
  category: 'Видеокоммуникации',
  products: ['Видеобары MeetingBar', 'Трибкины', 'Сертифицированные устройства']
},
{
  name: 'Yeastar',
  logo: '/logos/yeastar.png',
  description: 'Гибридные АТС NeoGate с поддержкой GSM и VoIP-шлюзы FXS/FXO',
  category: 'VoIP-оборудование',
  products: ['IP-АТС S300', 'VoIP-шлюзы TG400W', 'Модули расширения']
}
  ];

  // Разделяем вендоров на группы по 15 на страницу
  const vendorsPerPage = 15;
  const vendorGroups = [];
  for (let i = 0; i < allManufacturers.length; i += vendorsPerPage) {
    vendorGroups.push(allManufacturers.slice(i, i + vendorsPerPage));
  }

  const categories = [...new Set(allManufacturers.map(m => m.category))];
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const filteredManufacturers = selectedCategories.length > 0
    ? allManufacturers.filter(m => selectedCategories.includes(m.category))
    : allManufacturers;

  // Разделяем отфильтрованных вендоров на группы
  const filteredVendorGroups = [];
  for (let i = 0; i < filteredManufacturers.length; i += vendorsPerPage) {
    filteredVendorGroups.push(filteredManufacturers.slice(i, i + vendorsPerPage));
  }

  const getCategoryIcon = (category) => {
  switch(category) {
    case 'Телефония и VoIP-оборудование':
    case 'VoIP-оборудование':
      return <Phone className="h-5 w-5" />;
    case 'Электропитание':
    case 'Системы электропитания':
      return <Power className="h-5 w-5" />;
    case 'Серверное оборудование':
      return <Server className="h-5 w-5" />;
    case 'Системы безопасности':
      return <Shield className="h-5 w-5" />;
    case 'Оборудование':
    case 'Компьютерная техника':
      return <Monitor className="h-5 w-5" />;
    case 'Энергораспределение и автоматизация':
      return <Factory className="h-5 w-5" />;
    case 'Офисная техника':
      return <Printer className="h-5 w-5" />;
    case 'Потребительская электроника':
      return <Smartphone className="h-5 w-5" />;
    case 'Сетевая инфраструктура':
    case 'Телекоммуникационное оборудование':
    case 'Беспроводные сети':
      return <Wifi className="h-5 w-5" />;
    case 'Системы хранения данных':
      return <HardDrive className="h-5 w-5" />;
    case 'Видеокоммуникации':
      return <Video className="h-5 w-5" />;
    default:
      return <Cpu className="h-5 w-5" />;
  }
};

  const nextPage = () => {
    if (currentPage < (selectedCategories.length ? filteredVendorGroups.length : vendorGroups.length) - 1) {
      setCurrentPage(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const toggleCategory = (category) => {
    setSelectedCategories(prev => {
      if (prev.includes(category)) {
        return prev.filter(c => c !== category);
      } else {
        return [...prev, category];
      }
    });
    setCurrentPage(0);
  };

  const resetFilter = () => {
    setSelectedCategories([]);
    setCurrentPage(0);
  };

  // Определяем текущую группу для отображения
  const currentVendors = selectedCategories.length > 0
    ? (filteredVendorGroups[currentPage] || [])
    : (vendorGroups[currentPage] || []);

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
        {/* Раздел заголовка */}
        <section className="text-center space-y-8 animate-fade-in-up pt-8">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Производители оборудования
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Мы сотрудничаем с ведущими российскими и международными производителями оборудования для телекоммуникаций, IT-инфраструктуры и систем безопасности.
          </p>
        </section>

       {/* Categories */}
<section className="space-y-8">
  <div className="flex flex-wrap gap-2 justify-center animate-fade-in-up animate-delay-100">
    <Button
      variant={selectedCategories.length === 0 ? "default" : "outline"}
      size="sm"
      onClick={resetFilter}
      className="rounded-full flex items-center gap-2"
    >
      <Cpu className="h-4 w-4" />
      Все производители
    </Button>
    
    {categories.map((category) => (
      <Button
        key={category} 
        variant={selectedCategories.includes(category) ? "default" : "outline"}
        size="sm"
        onClick={() => toggleCategory(category)}
        className="rounded-full flex items-center gap-2"
      >
        {getCategoryIcon(category)}
        {category}
      </Button>
    ))}
  </div>
  
  {selectedCategories.length > 0 && (
    <div className="text-center">
      <p className="text-muted-foreground">
        Показаны производители в категориях: 
        <span className="font-semibold text-primary ml-2">
          {selectedCategories.join(', ')}
        </span>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={resetFilter}
          className="ml-2 rounded-full"
        >
          Сбросить фильтр
        </Button>
      </p>
      <p className="text-sm text-muted-foreground mt-1">
        {filteredManufacturers.length} производителей найдено
      </p>
    </div>
  )}
</section>
        {/* Производители сетки */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentVendors.map((manufacturer, index) => (
            <Card 
              key={manufacturer.name} 
              className="group hover:shadow-lg transition-all duration-300 animate-fade-in-up bg-background/90 backdrop-blur-sm border-border/50 hover:border-primary/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="space-y-4">
                <div className="flex items-center gap-4">
                  {manufacturer.logo && (
                    <div className="w-16 h-16 bg-white p-2 rounded-lg border flex items-center justify-center transition-transform group-hover:scale-105 group-hover:shadow-md">
                      <img 
                        src={manufacturer.logo} 
                        alt={`Логотип ${manufacturer.name}`}
                        className="max-h-full max-w-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="space-y-2">
                    <Badge variant="secondary" className="text-xs bg-secondary/10">
                      {manufacturer.category}
                    </Badge>
                    <CardTitle className="text-lg leading-tight">{manufacturer.name}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{manufacturer.description}</p>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Продукция:</h4>
                  <div className="flex flex-wrap gap-2">
                    {manufacturer.products.map((product) => (
                      <Badge 
                        key={product} 
                        variant="outline" 
                        className="text-xs bg-background/80 backdrop-blur-sm"
                      >
                        {product}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Пагинация */}
        <div className="flex justify-between items-center animate-fade-in-up">
          <Button 
            variant="outline" 
            className="gap-2" 
            onClick={prevPage}
            disabled={currentPage === 0}
          >
            <ChevronLeft className="h-4 w-4" />
            Назад
          </Button>
          
          <div className="text-sm text-muted-foreground">
            Страница {currentPage + 1} из {selectedCategories.length ? filteredVendorGroups.length : vendorGroups.length}
          </div>
          
          <Button 
            variant="outline" 
            className="gap-2" 
            onClick={nextPage}
            disabled={currentPage === (selectedCategories.length ? filteredVendorGroups.length : vendorGroups.length) - 1}
          >
            Вперед
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* CTA Раздел */}
        <section className="text-center space-y-8 py-16 animate-fade-in-up">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Хотите узнать больше?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Наши специалисты помогут подобрать оборудование от этих производителей под ваши задачи.
            </p>
          </div>
          <Button 
            asChild 
            size="lg" 
            className="text-lg px-8 hover:shadow-lg hover:shadow-primary/20 transition-all group"
          >
            <Link to="/contacts" className="flex items-center">
              Получить консультацию
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </section>
      </main>
    </div>
  );
};

export default Vendors;