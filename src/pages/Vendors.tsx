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
      description: 'Технологии Voice over Packet и оборудование для построения инфраструктуры передачи голоса',
      category: 'Телефония',
      products: ['VoIP шлюзы', 'IP-АТС', 'Голосовые шлюзы']
    },
    {
      name: 'ООО "АТС-КОНВЕРС"',
      logo: '/logos/ats-konvers.png',
      description: 'Наукоемкие разработки и производство систем гарантированного электропитания, устройств повышения качества электроэнергии, электронной защиты оборудования',
      category: 'Электропитание',
      products: ['ИБП', 'Стабилизаторы', 'Защита оборудования']
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
      description: 'Производитель отечественной вычислительной техники для импортозамещения',
      category: 'Оборудование',
      products: ['Серверы', 'Рабочие станции', 'Микрокомпьютеры']
    },
    {
      name: 'Dahua Technology',
      logo: '/logos/dahua.png',
      description: 'Производство систем видеонаблюдения, охранных систем и решений "умный дом"',
      category: 'Видеонаблюдение',
      products: ['IP-камеры', 'Видеорегистраторы', 'Аналитика']
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
      description: 'Производитель телекоммуникационного оборудования для корпоративной инфраструктуры',
      category: 'Сетевое оборудование',
      products: ['Коммутаторы', 'Маршрутизаторы', 'Шлюзы']
    },
    {
      name: 'ИМПУЛЬС',
      logo: '/logos/impuls.png',
      description: 'Разработка и производство систем защиты электропитания с собственным R&D',
      category: 'Электропитание',
      products: ['ИБП', 'Стабилизаторы', 'Защитные устройства']
    },
    {
      name: 'Ipmatika',
      logo: '/logos/ipmatika.png',
      description: 'Разработчик решений в области информационных технологий и автоматизации',
      category: 'ПО',
      products: ['ПО автоматизации', 'Системы учета', 'BI решения']
    },
    {
      name: 'IRBIS',
      logo: '/logos/irbis.png',
      description: 'Производитель современного оборудования для коммерческого и потребительского рынка',
      category: 'Оборудование',
      products: ['ПК', 'Моноблоки', 'Серверы']
    },
    {
      name: 'ISS (SecurOS)',
      logo: '/logos/iss.png',
      description: 'Мировой лидер в разработке систем видеонаблюдения и видеоаналитики',
      category: 'Видеонаблюдение',
      products: ['Видеокамеры', 'Видеоаналитика', 'Серверы']
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
      description: 'Российский разработчик сетевого и телекоммуникационного оборудования',
      category: 'Сетевое оборудование',
      products: ['Коммутаторы', 'Маршрутизаторы', 'Пассивное оборудование']
    },
    {
      name: 'LightCom',
      logo: '/logos/lightcom.png',
      description: 'Российский производитель компьютерного оборудования для госсектора',
      category: 'Оборудование',
      products: ['Мониторы', 'Серверы', 'Рабочие станции']
    },
    {
      name: 'NAG (National Instruments)',
      logo: '/logos/nag.png',
      description: 'Разработчик решений для автоматизации тестирования, измерений и управления',
      category: 'Промышленная автоматизация',
      products: ['Контроллеры', 'Системы сбора данных', 'ПО управления']
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
      description: 'Производитель доступных и экологичных решений для печати',
      category: 'Печать',
      products: ['Принтеры', 'МФУ', 'Расходные материалы']
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
      description: 'Разработчик и дистрибьютор IT-оборудования',
      category: 'Оборудование',
      products: ['Серверы', 'СХД', 'Сетевое оборудование']
    },
    {
      name: 'RDW',
      logo: '/logos/RDW-comp.png',
      description: 'Один из ведущих производителей компьютерной техники в России. Создаёт универсальную и надёжную вычислительную технику с обратной совместимостью, соответствующую требованиям современного мира информационных технологий.',
      category: 'Компьютерная техника',
      products: ['Промышленные компьютеры', 'Оборудование для ЦОД', 'Серверы и СХД']
    },
    {
      name: 'SberDevices',
      logo: '/logos/sberdevices.png',
      description: 'Молодая IT-компания, созданная в 2019 году (входит в группу компаний Сбербанк). Специализируется на разработке умных устройств и программного обеспечения.',
      category: 'Умные устройства',
      products: ['Голосовые ассистенты', 'Умные колонки', 'Программные платформы']
    },
    {
      name: 'Сайбер Электро',
      logo: '/logos/cyber-electro.png',
      description: 'Российский производитель источников бесперебойного питания',
      category: 'Электропитание',
      products: ['ИБП', 'Стабилизаторы', 'Сетевые фильтры']
    },
    {
      name: 'Систэм Электрик',
      logo: '/logos/system-electric.png',
      description: 'Разработчик решений в области распределения электроэнергии и автоматизации',
      category: 'Электропитание',
      products: ['Распределительные щиты', 'Автоматика', 'ПО управления']
    },
    {
      name: 'ФЛАТ-ПРО',
      logo: '/logos/flat-pro.png',
      description: 'Разработчик IP телефонов и VOIP шлюзов',
      category: 'Телефония',
      products: ['IP-телефоны', 'VoIP шлюзы', 'Софтсвичи']
    },
    {
      name: 'Fplus',
      logo: '/logos/fplus.png',
      description: 'Технологический кластер решений для построения IT-инфраструктуры',
      category: 'Инфраструктура',
      products: ['Серверы', 'СХД', 'Коммутаторы']
    },
    {
      name: 'Huawei',
      logo: '/logos/huawei.png',
      description: 'Лидирующий поставщик телекоммуникационных решений для операторов связи',
      category: 'Телекоммуникации',
      products: ['Сетевое оборудование', 'Серверы', 'Телефония']
    },
    {
      name: 'ЭЛТЕКС',
      logo: '/logos/eltex.png',
      description: 'Российский разработчик и производитель телекоммуникационного и сетевого оборудования',
      category: 'Сетевое оборудование',
      products: ['Коммутаторы', 'Маршрутизаторы', 'IoT контроллеры']
    },
    {
      name: 'YADRO',
      logo: '/logos/yadro.png',
      description: 'Разработчик высокопроизводительных систем хранения данных и серверного оборудования',
      category: 'Оборудование',
      products: ['СХД', 'Серверы', 'Вычислительные системы']
    },
    {
      name: 'Yealink',
      logo: '/logos/yealink.png',
      description: 'Производитель решений для IP-коммуникаций, совместимых с SIP и WebRTC',
      category: 'Телефония',
      products: ['IP-телефоны', 'ВКС', 'Головные гарнитуры']
    },
    {
      name: 'Yeastar',
      logo: '/logos/yeastar.png',
      description: 'Лидер в производстве гибридных IP-АТС и VoIP-шлюзов',
      category: 'Телефония',
      products: ['IP-АТС', 'VoIP шлюзы', 'Софтфоны']
    },
  ];

  // Разделяем вендоров на группы по 10 на страницу
  const vendorsPerPage = 15;
  const vendorGroups = [];
  for (let i = 0; i < allManufacturers.length; i += vendorsPerPage) {
    vendorGroups.push(allManufacturers.slice(i, i + vendorsPerPage));
  }

  const categories = [...new Set(allManufacturers.map(m => m.category))];
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  const filteredManufacturers = selectedCategory 
    ? allManufacturers.filter(m => m.category === selectedCategory)
    : allManufacturers;

  // Разделяем отфильтрованных вендоров на группы
  const filteredVendorGroups = [];
  for (let i = 0; i < filteredManufacturers.length; i += vendorsPerPage) {
    filteredVendorGroups.push(filteredManufacturers.slice(i, i + vendorsPerPage));
  }

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'Телефония': return <Phone className="h-5 w-5" />;
      case 'Электропитание': return <Power className="h-5 w-5" />;
      case 'Оборудование': return <HardDrive className="h-5 w-5" />;
      case 'Видеонаблюдение': return <Video className="h-5 w-5" />;
      case 'Сетевое оборудование': return <Network className="h-5 w-5" />;
      case 'ПО': return <Code className="h-5 w-5" />;
      case 'Промышленная автоматизация': return <Factory className="h-5 w-5" />;
      case 'Печать': return <Printer className="h-5 w-5" />;
      case 'Компьютерная техника': return <Laptop className="h-5 w-5" />;
      case 'Умные устройства': return <Smartphone className="h-5 w-5" />;
      case 'Инфраструктура': return <Wifi className="h-5 w-5" />;
      case 'Телекоммуникации': return <Server className="h-5 w-5" />;
      default: return <Cpu className="h-5 w-5" />;
    }
  };

  const nextPage = () => {
    if (currentPage < (selectedCategory ? filteredVendorGroups.length : vendorGroups.length) - 1) {
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

  const resetFilter = () => {
    setSelectedCategory(null);
    setCurrentPage(0);
  };

  // Определяем текущую группу для отображения
  const currentVendors = selectedCategory 
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
        {/* Раздел */}
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
              variant={!selectedCategory ? "default" : "outline"}
              size="sm"
              onClick={resetFilter}
              className="flex items-center gap-2"
            >
              <Cpu className="h-4 w-4" />
              Все производители
            </Button>
            
            {categories.map((category) => (
              <Button
                key={category} 
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentPage(0);
                }}
                className="flex items-center gap-2"
              >
                {getCategoryIcon(category)}
                {category}
              </Button>
            ))}
          </div>
          
          {selectedCategory && (
            <div className="text-center">
              <p className="text-muted-foreground">
                Показаны производители в категории: <span className="font-semibold text-primary">{selectedCategory}</span>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={resetFilter}
                  className="ml-2"
                >
                  Сбросить фильтр
                </Button>
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
            Страница {currentPage + 1} из {selectedCategory ? filteredVendorGroups.length : vendorGroups.length}
          </div>
          
          <Button 
            variant="outline" 
            className="gap-2" 
            onClick={nextPage}
            disabled={currentPage === (selectedCategory ? filteredVendorGroups.length : vendorGroups.length) - 1}
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
;