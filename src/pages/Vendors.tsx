import React, { useState } from 'react';
import Header from '../components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Server, Cpu, BatteryFull, Shield, Monitor, Phone, Power, HardDrive, Video, Network, Code, Factory, Printer, Laptop, Smartphone, Wifi, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const Vendors = () => {
  const allManufacturers = [
    {
      name: 'AudioCodes',
      logo: '/logos/audiocodes.png',
      description: 'Мировой лидер в области унифицированных коммуникаций, голосовой связи, контакт центров.',
      category: 'Телефония и VoIP-оборудование',
      products: ['IP-телефоны', 'маршрутизаторы', 'Цифровые VoIP-шлюзы E1'],
      website: 'https://www.audiocodes.com/'
    },
    {
      name: 'ООО "АТС-КОНВЕРС"',
      logo: '/logos/ats-konvers.png',
      description: 'Деятельность связана с наукоемкими разработками и производством систем гарантированного электропитания, устройств повышения качества электроэнергии, а также электронной защиты оборудования.',
      category: 'Системы электропитания',
      products: ['Стабилизаторы ', 'ИБП', 'АКБ'],
      website: 'https://www.atsconvers.ru/'
    },
    {
      name: 'БАСТИОН',
      logo: '/logos/bastion.png',
      description: 'Разработка и производство профессиональных источников бесперебойного питания и электротехнического оборудования.',
      category: 'Электропитание',
      products: ['ИБП', 'Стабилизаторы', 'Сетевая защита', 'АКБ'],
      website: 'https://bast.ru/'
    },
    {
      name: 'Гравитон',
      logo: '/logos/graviton.png',
      description: 'занимает одну из лидирующих позиций на российском рынке вычислительной техники.',
      category: 'Серверное оборудование',
      products: ['Ноутбуки', 'Моноблоки', 'Мини-ПК', 'Рабочие станции', 'Мониторы', 'МФУ', 'Принтер', 'ПК'],
      website: 'https://graviton.ru/'
    },
    {
      name: 'Dahua Technology',
      logo: '/logos/dahua.png',
      description: 'Разработка интеллектуальные системы видеоаналитики с распознаванием лиц и температурным скринингом.',
      category: 'Системы безопасности',
      products: ['Камеры видеонаблюдения', 'Системы хранения данных', 'IP-камеры'],
      website: 'https://www.dahuasecurity.com/'
    },
    {
      name: 'Delta Computers',
      logo: '/logos/delta.png',
      description: 'Российский разработчик и производитель IT-оборудования. В портфеле продуктов Delta Computers — серверы общего назначения, high-end серверы, GPU-решения, коммутаторы, системы хранения, шасси, персональные компьютеры, мониторы, автоматизированные рабочие места, а также сопутствующее программное обеспечение, в том числе микроконтроллерное.',
      category: 'Оборудование',
      products: ['Персональные компьютеры', 'Моноблоки', 'Мониторы', 'APM'],
      website: 'https://deltacomputers.ru/'
    },
    {
      name: 'Zelax',
      logo: '/logos/zelax.png',
      description: 'Ведущий российский разработчик и производитель решений для сетей передачи данных',
      category: 'Телекоммуникационное оборудование.',
      products: ['Коммутаторы', 'Маршрутизаторы', 'Шлюзы VoIP, TDMoP, RoIP', 'Модемы'],
      website: 'https://www.zelax.ru/'
    },
    {
      name: 'ИМПУЛЬС',
      logo: '/logos/impuls.png',
      description: 'Разработка и производство систем защиты электропитания.',
      category: 'Электропитание',
      products: ['ИБП', 'Стабилизаторы'],
      website: 'https://impuls.energy/'
    },

    {
      name: 'IRBIS',
      logo: '/logos/irbis.png',
      description: 'Российский производитель оборудования для коммерческого и потребительского рынка.',
      category: 'Оборудование',
      products: ['ПК', 'Моноблоки', 'Ноутбуки', 'Телевизоры', 'Мониторы'],
      website: 'https://www.irbis.su/'
    },
    {
      name: 'ISS (SecurOS)',
      logo: '/logos/iss.png',
      description: 'Российский разработчик профессиональных IT-решения для бизнеса и промышленности.',
      category: 'Системы безопасности',
      products: ['Видеосервера', 'Комплексные системы безопасности и технического контроля.'],
      website: 'https://iss.ru/'
    },
    {
      name: 'CyberPower',
      logo: '/logos/cyberpower.png',
      description: 'Производитель оборудования для управления электропитанием.',
      category: 'Электропитание',
      products: ['ИБП', 'ПО для управления энергией', 'Защита от скачков напряжения'],
      website: 'https://www.cyberpower.com/ru/ru'
    },
    {
      name: 'Kvadra',
      logo: '/logos/kvadra.png',
      description: 'Производитель клиентских устройств, совместимых с российским ПО',
      category: 'Оборудование',
      products: ['ПК', 'Моноблоки', 'Планшеты', 'Ноутбуки'],
      website: 'https://квадра.рф/'
    },
    {
      name: 'QTECH',
      logo: '/logos/qtech.png',
      description: 'Российский разработчик и производитель телекоммуникационного и IT-оборудования.',
      category: 'Сетевая инфраструктура',
      products: ['Коммутаторы', 'Маршрутизаторы', 'Северное оборудование', 'Системы хранения данных', 'ИБП', 'Видеонаблюдения'],
      website: 'https://www.qtech.ru/'
    },
    {
      name: 'LightCom',
      logo: '/logos/lightcom.png',
      description: 'Российский производитель компьютерного оборудования для госсектора и коммерческого сектора.',
      category: 'Оборудование',
      products: ['Мониторы', 'ПО', 'Персональные компьютеры', 'Рабочие станции', 'Моноблоки'],
      website: 'https://lightcom.msk.ru/'
    },
    {
      name: 'NexTouch',
      logo: '/logos/nextouch.png',
      description: 'Крупнейший российский производитель интерактивного оборудования.',
      category: 'Оборудование',
      products: ['Интерактивные панели', 'Дисплеи'],
      website: 'https://nextouch.ru/'
    },
    {
      name: 'Pantum',
      logo: '/logos/pantum.png',
      description: 'Международная китайская компания, которая занимается разработкой, производством и продажей расходных материалов и оборудования для печати.',
      category: 'Офисная техника',
      products: ['МФУ', 'Принтеры'],
      website: 'https://www.pantum.ru/'
    },
    {
      name: 'Парус электро',
      logo: '/logos/parus.png',
      description: 'Российский разработчик и производитель источников бесперебойного питания, зарядных станций электромобилей и другой силовой преобразовательной техники.',
      category: 'Электропитание',
      products: ['ИБП', 'АКБ', 'Распределительные щиты'],
      website: 'https://parus-electro.ru/'
    },
    {
      name: 'RDW',
      logo: '/logos/RDW-comp.png',
      description: 'Производитель серверов с гибридным бэкплейном для SAS/SATA/NVMe-накопителей, включенных в реестр Минпромторга',
      category: 'Серверное оборудование',
      products: ['Серверы и СХД', 'Персональные компьютеры', 'Моноблоки', 'Мониторы'],
      website: 'https://rdwcomp.ru/'
    },
    {
      name: 'SberDevices',
      logo: '/logos/sberdevices.png',
      description: 'Российский IT-компания, занимающаяся разработкой и производством умных устройств и программного обеспечения для потребителей и бизнеса.',
      category: 'Потребительская электроника',
      products: ['Телевизоры', 'Умные колонки', 'Интерактивные панели'],
      website: 'https://sberdevices.ru/'
    },
    {
      name: 'Сайбер Электро',
      logo: '/logos/cyber-electro.png',
      description: 'Российский бренд, производитель источников бесперебойного питания. Является совокупностью инновационных технологий, энергоэффективности, высокой надежности и производительности.',
      category: 'Системы электропитания',
      products: ['ИБП', 'Трехфазные ИБП', 'Модульные системы'],
      website: 'https://сайберэлектро.рф/'
    },
    {
      name: 'Систэм Электрик',
      logo: '/logos/system-electric.png',
      description: 'Российская производственная компания, разработчик и производитель решений в области распределения электроэнергии, автоматизации, инженерной инфраструктуры ЦОД и программного обеспечения.',
      category: 'Энергораспределение и автоматизация',
      products: ['ИБП', 'Электроустановочные изделия и аксессуары', 'Модульное оборудоване и щитки', 'Распределение электроэнергии низкого и среднего напряжения'],
      website: 'https://systeme.ru/'
    },
    {
      name: 'ФЛАТ-ПРО',
      logo: '/logos/flat-pro.png',
      description: 'Российский разработчик программно-аппаратных решений в области связи.',
      category: 'VoIP-оборудование',
      products: ['IP-телефоны', 'ПО'],
      website: 'https://flat-pro.ru/'
    },
    {
      name: 'Fplus',
      logo: '/logos/fplus.png',
      description: 'Российский производитель инфраструтурного оборудования, входит в одноимённых IT-холдинг.',
      category: 'Серверное оборудование',
      products: ['Принтеры', 'МФУ', 'Персональные компьютеры', 'Серверы', 'Системы хранения данных', 'Сетевое оборудование'],
      website: 'https://fplustech.ru/'
    },
    {
      name: 'Huawei',
      logo: '/logos/huawei.png',
      description: 'Китайская компания, один из лидеров в области телекоммуникаций, производитель смартфонов и бытовой электроники.',
      category:  'Сетевое оборудование',
      products: ['Смартфоны', 'ПО и лицензии', 'Оборудование для сетей', 'Ноутбуки','Планшеты'],
      website: 'https://www.huawei.ru/'
    },
    {
      name: 'ЭЛТЕКС',
      logo: '/logos/eltex.png',
      description: 'Ведущий российский разработчик и производитель телекоммуникационного оборудования.',
      category: 'Беспроводные сети',
      products: ['Коммутаторы', 'Маршрутизаторы', 'Видеонаблюдения и СКУД', 'Wi-Fi оборудование','VoIP - телефония'],
      website: 'https://eltex-co.ru/'
    },
    {
      name: 'YADRO',
      logo: '/logos/yadro.png',
      description: 'Российская IT-компания, производитель IT-оборудования, входит в состав "ИКС-Холдинга".',
      category: 'Системы хранения данных',
      products: ['Системы хранения данных', 'Серверы', 'Коммутаторы'],
      website: 'https://yadro.com/'
    },
    {
      name: 'Yealink',
      logo: '/logos/yealink.png',
      description: 'Ведущий мировой производитель абонентского оборудования для IP-телефонии  и видео-конференц-связи.',
      category: 'Видеокоммуникации',
      products: ['IP-телефоны', 'Гарнитуры'],
      website: 'https://www.yea-rus.ru/'
    },
    {
      name: 'Yeastar',
      logo: '/logos/yeastar.png',
      description: 'Производитель и разработчик IP-ATC, шлюзов и модулей.',
      category: 'VoIP-оборудование',
      products: ['IP-ATC', 'Модули', 'Шлюзы'],
      website: 'https://yeastar.ru/'
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
            <a 
              key={manufacturer.name} 
              href={manufacturer.website}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <Card 
                className="group hover:shadow-lg transition-all duration-300 animate-fade-in-up bg-background/90 backdrop-blur-sm border-border/50 hover:border-primary/30 h-full"
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
                      <CardTitle className="text-lg leading-tight flex items-center gap-2">
                        {manufacturer.name}
                        <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                      </CardTitle>
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
            </a>
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