import React, { useState } from 'react';
import Header from '../components/Header';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { 
  Server, 
  Network, 
  Shield, 
  Monitor, 
  Smartphone, 
  Cable, 
  Eye,
  Settings,
  Headphones,
  Wifi,
  ExternalLink,
  X,
  ChevronRight,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      icon: Server,
      title: 'Поставка оргтехники и вычислительной техники',
      description: 'Серверы, принтеры, МФУ, ПЭВМ и т.п. для создания современной IT-структуры предприятий',
      category: 'IT-инфраструктура',
      features: ['Консультации по выбору', 'Поставка оборудования', 'Настройка и тестирование'],
      fullDescription: 'Мы предлагаем полный цикл поставки оргтехники и вычислительной техники для предприятий любого масштаба. Наши специалисты помогут подобрать оптимальное оборудование под ваши задачи, обеспечат своевременную поставку и профессиональную настройку. Работаем только с проверенными производителями, предоставляем гарантию и послегарантийное обслуживание.',
      details: [
        'Бесплатный аудит существующей инфраструктуры',
        'Подбор оборудования под конкретные бизнес-задачи',
        'Тестирование оборудования перед поставкой',
        'Гарантия до 3 лет на все оборудование',
        'Круглосуточная техническая поддержка'
      ],
      benefits: [
        'Снижение затрат на IT-инфраструктуру до 30%',
        'Повышение производительности работы сотрудников',
        'Минимизация простоев оборудования',
        'Масштабируемость решений'
      ]
    },
    {
      icon: Network,
      title: 'Проектирование телекоммуникационных сетей',
      description: 'Структурированные кабельные сети зданий, распределенные сети IP-телефонии, распределенные системы ВКС',
      category: 'Сети и связь',
      features: ['Проектирование', 'Монтаж', 'Тестирование'],
      fullDescription: 'Профессиональное проектирование телекоммуникационных сетей любой сложности. Мы создаем надежные и масштабируемые решения для офисных зданий, производственных помещений и распределенных филиалов. Наши проекты соответствуют международным стандартам и учитывают все современные требования к сетевой инфраструктуре.',
      details: [
        '3D-моделирование сетевой инфраструктуры',
        'Расчет пропускной способности и нагрузок',
        'Разработка схем кабельных трасс',
        'План размещения активного оборудования',
        'Технико-экономическое обоснование'
      ],
      benefits: [
        'Оптимизация затрат на строительство сетей',
        'Обеспечение отказоустойчивости',
        'Поддержка современных технологий (PoE, 10GbE, Wi-Fi 6)',
        'Готовность к будущему расширению'
      ]
    },
    {
      icon: Shield,
      title: 'Создание телекоммуникационной инфраструктуры',
      description: 'Комплексные решения "Офис под ключ"',
      category: 'Инфраструктура',
      features: ['Полный цикл работ', 'Гарантийное обслуживание', 'Техническая поддержка'],
      fullDescription: 'Комплексное создание телекоммуникационной инфраструктуры "под ключ" для новых офисов, производственных объектов и коммерческих помещений. От проектирования до ввода в эксплуатацию - мы берем на себя все этапы работ, обеспечивая бесшовную интеграцию всех систем.',
      details: [
        'Единый подрядчик для всех IT-систем',
        'Согласование проектов с контролирующими органами',
        'Автоматизация процессов документооборота',
        'Интеграция с системами безопасности',
        'Обучение персонала'
      ],
      benefits: [
        'Сокращение сроков ввода объекта на 40%',
        'Единая точка ответственности',
        'Оптимизация бюджета до 25%',
        'Гарантированное качество всех компонентов'
      ]
    },
    {
      icon: Monitor,
      title: 'Поставка оборудования',
      description: 'Комплектующие СКС, оборудование ЛВС и телефонии, ВКС, мобильные средства коммуникации',
      category: 'Оборудование',
      features: ['Широкий ассортимент', 'Сертифицированное оборудование', 'Конкурентные цены'],
      fullDescription: 'Мы являемся официальными партнерами ведущих производителей сетевого и телекоммуникационного оборудования. Предлагаем комплексные поставки всего необходимого для построения современной IT-инфраструктуры с гарантией качества и лучшими условиями на рынке.',
      details: [
        'Более 5000 позиций в каталоге',
        'Прямые контракты с производителями',
        'Гибкая система скидок для постоянных клиентов',
        'Экспресс-доставка в течение 24 часов',
        'Техническая консультация при выборе'
      ],
      benefits: [
        'Экономия до 30% от рыночной стоимости',
        'Гарантия подлинности оборудования',
        'Бесплатное тестирование перед покупкой',
        'Обновление ПО в течение гарантийного срока'
      ]
    },
    {
      icon: Cable,
      title: 'Монтаж компьютерных сетей и телефонии',
      description: 'Последующее обслуживание систем связи',
      category: 'Монтаж',
      features: ['Профессиональный монтаж', 'Соблюдение стандартов', 'Гарантия качества'],
      fullDescription: 'Профессиональный монтаж компьютерных сетей и систем телефонии с соблюдением международных стандартов качества. Наши специалисты имеют все необходимые сертификаты и многолетний опыт реализации сложных проектов любого масштаба.',
      details: [
        'Монтаж СКС категории 6А и выше',
        'Установка телекоммуникационных шкафов',
        'Прокладка кабельных трасс любой сложности',
        'Маркировка и документация',
        'Тестирование кабельных линий'
      ],
      benefits: [
        'Пожизненная гарантия на кабельную систему',
        'Сертификаты соответствия стандартам',
        'Минимальное вмешательство в отделку помещений',
        'Оптимальное использование пространства'
      ]
    },
    {
      icon: Settings,
      title: 'Настройка ЛВС и компьютерной техники',
      description: 'Обслуживание и настройка локальных вычислительных сетей и МФУ',
      category: 'Настройка',
      features: ['Оптимизация производительности', 'Обновление ПО', 'Регулярное обслуживание'],
      fullDescription: 'Профессиональная настройка локальных вычислительных сетей и компьютерной техники для обеспечения максимальной производительности и безопасности. Наши решения оптимизируют работу ИТ-инфраструктуры и снижают эксплуатационные расходы.',
      details: [
        'Настройка маршрутизаторов и коммутаторов',
        'Конфигурирование VLAN, QoS, ACL',
        'Оптимизация работы Wi-Fi сетей',
        'Настройка принтеров и МФУ',
        'Установка и обновление ПО'
      ],
      benefits: [
        'Увеличение скорости сети до 40%',
        'Снижение количества инцидентов на 60%',
        'Централизованное управление устройствами',
        'Автоматизация рутинных задач'
      ]
    },
    {
      icon: Smartphone,
      title: 'Настройка корпоративных АТС',
      description: 'В том числе и виртуальных телефонных станций',
      category: 'Телефония',
      features: ['IP-телефония', 'Виртуальные АТС', 'Интеграция с CRM'],
      fullDescription: 'Настройка корпоративных АТС любой сложности - от традиционных офисных решений до современных облачных телефоний. Мы обеспечиваем полную интеграцию телефонной системы с бизнес-процессами компании для повышения эффективности коммуникаций.',
      details: [
        'Миграция с традиционных АТС на IP',
        'Настройка маршрутизации вызовов',
        'Интеграция с CRM и ERP системами',
        'Настройка колл-центров',
        'Внедрение единой коммуникационной платформы'
      ],
      benefits: [
        'Снижение затрат на связь до 50%',
        'Повышение качества обслуживания клиентов',
        'Мобильность сотрудников',
        'Детальная аналитика звонков'
      ]
    },
    {
      icon: Wifi,
      title: 'Настройка распределенных систем ВКС',
      description: 'Видеоконференцсвязь и системы совместной работы',
      category: 'Видеосвязь',
      features: ['HD качество', 'Многоточечные соединения', 'Запись конференций'],
      fullDescription: 'Внедрение и настройка систем видеоконференцсвязи для эффективной коммуникации распределенных команд и удаленных сотрудников. Мы предлагаем решения от лидеров рынка ВКС, адаптированные под ваши бизнес-процессы.',
      details: [
        'Подбор оптимального оборудования ВКС',
        'Интеграция с календарями и системами бронирования',
        'Настройка многоточечных конференций',
        'Обеспечение безопасности видеотрафика',
        'Обучение пользователей'
      ],
      benefits: [
        'Сокращение командировочных расходов',
        'Увеличение скорости принятия решений',
        'Улучшение коммуникации между филиалами',
        'Профессиональное качество видео и звука'
      ]
    },
    {
      icon: Cable,
      title: 'Прокладка волоконно-оптического кабеля',
      description: 'Высокоскоростные каналы передачи данных',
      category: 'Оптические сети',
      features: ['Сварка оптики', 'Тестирование линий', 'Документирование'],
      fullDescription: 'Профессиональная прокладка волоконно-оптических линий связи для создания высокоскоростных и надежных каналов передачи данных. Наши специалисты выполняют работы любой сложности с использованием современного оборудования и соблюдением всех стандартов качества.',
      details: [
        'Проектирование ВОЛС',
        'Прокладка кабеля в кабельной канализации',
        'Монтаж подвесных линий',
        'Сварка оптических волокон',
        'Измерения OTDR и рефлектометрия'
      ],
      benefits: [
        'Скорость передачи данных до 100 Гбит/с',
        'Дальность связи до 100 км без усилителей',
        'Защита от электромагнитных помех',
        'Долговечность решения (25+ лет)'
      ]
    },
    {
      icon: Eye,
      title: 'Системы контроля доступа и видеонаблюдения',
      description: 'Монтаж, настройка и последующее обслуживание',
      category: 'Безопасность',
      features: ['IP-камеры', 'Аналитика видео', 'Удаленный доступ'],
      fullDescription: 'Комплексные решения по безопасности: проектирование, монтаж и обслуживание систем контроля доступа и видеонаблюдения. Мы создаем интеллектуальные системы безопасности, которые интегрируются с вашей IT-инфраструктурой и обеспечивают надежную защиту объектов.',
      details: [
        'Проектирование системы безопасности',
        'Подбор оборудования под задачи объекта',
        'Монтаж камер и СКУД',
        'Настройка аналитических функций',
        'Интеграция с другими системами'
      ],
      benefits: [
        'Снижение рисков краж и несанкционированного доступа',
        'Удаленный мониторинг объектов 24/7',
        'Автоматическое оповещение о событиях',
        'Юридически значимая запись'
      ]
    },
    {
      icon: Shield,
      title: 'Работы с СКЗИ',
      description: 'Средства криптозащиты информации, работы с аудио/видео приложениями',
      category: 'Информационная безопасность',
      features: ['Сертифицированные решения', 'Шифрование данных', 'Аудит безопасности'],
      fullDescription: 'Комплексные решения в области информационной безопасности, включая работы со средствами криптографической защиты информации (СКЗИ). Мы помогаем защитить ваши данные от несанкционированного доступа и соответствовать требованиям регуляторов.',
      details: [
        'Внедрение сертифицированных СКЗИ',
        'Настройка инфраструктуры открытых ключей (PKI)',
        'Шифрование каналов связи и данных',
        'Аудит безопасности информационных систем',
        'Разработка политик безопасности'
      ],
      benefits: [
        'Соответствие требованиям ФСТЭК и ФСБ',
        'Защита конфиденциальной информации',
        'Предотвращение утечек данных',
        'Юридическая значимость электронных документов'
      ]
    },
    {
      icon: Headphones,
      title: 'Техническое обслуживание',
      description: 'Сопровождение выполненных поставок и работ',
      category: 'Поддержка',
      features: ['24/7 поддержка', 'Плановое обслуживание', 'Экстренный ремонт'],
      fullDescription: 'Комплексное техническое обслуживание IT-инфраструктуры с гарантией бесперебойной работы всех систем. Наши сервисные инженеры обеспечивают круглосуточную поддержку, профилактику и оперативное устранение неисправностей.',
      details: [
        'Абонентское обслуживание IT-систем',
        'Мониторинг и проактивное реагирование',
        'Планово-профилактические работы',
        'Удаленная и on-site поддержка',
        'Резервное копирование и восстановление данных'
      ],
      benefits: [
        'Снижение простоев IT-систем на 90%',
        'Предсказуемые расходы на поддержку',
        'Приоритетное реагирование на инциденты',
        'Единая точка контакта для всех IT-вопросов'
      ]
    }
  ];

  const categories = [...new Set(services.map(service => service.category))];
  
  const filteredServices = selectedCategory 
    ? services.filter(service => service.category === selectedCategory) 
    : services;

  const toggleCategory = (category) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

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
          
          .category-badge {
            padding: 0.4rem 0.8rem;
            font-size: 0.75rem;
          }
          
          .modal-content {
            max-height: 90vh;
            overflow-y: auto;
          }
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
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-xl animate-float animation-delay-0 max-sm:hidden" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/5 rounded-full blur-xl animate-float animation-delay-3000 max-sm:hidden" />
        <div className="absolute top-1/3 left-3/4 w-24 h-24 bg-primary/5 rounded-full blur-xl animate-float animation-delay-6000 max-sm:hidden" />
        <div className="absolute top-3/4 left-1/5 w-40 h-40 bg-accent/5 rounded-full blur-xl animate-float animation-delay-9000 max-sm:hidden" />

        {/* Анимированные градиенты */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 to-transparent animate-pulse-slow" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_var(--tw-gradient-stops))] from-accent/10 to-transparent animate-pulse-medium animation-delay-2000" />
        </div>

        {/* Движущиеся частицы */}
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

        {/* Дополнительные фоновые элементы */}
        <div className="absolute top-1/3 right-1/3 w-16 h-16 border-2 border-primary/10 rounded-full animate-rotate-slow max-sm:hidden" />
        <div className="absolute bottom-1/3 left-1/3 w-24 h-24 border-2 border-accent/10 rounded-full animate-rotate-reverse max-sm:hidden" />
      </div>

      <Header />
      
      <main className="container mx-auto px-4 py-16 space-y-16 relative z-10">
        {/* Заголовок */}
        <section className="text-center space-y-8 animate-fade-in-up pt-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Наши услуги
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            ООО «КорИнфоТех» предоставляет большой выбор услуг от начального этапа — проектирование телекоммуникационных систем и сетей, до конечного — строительство, тестирование, гарантийное и послегарантийное обслуживание.
          </p>
        </section>

        {/* Категории с фильтрацией */}
        <section className="space-y-8">
          <div className="flex flex-wrap gap-2 justify-center animate-fade-in-up animate-delay-100">
            {categories.map((category) => (
              <span 
                key={category} 
                onClick={() => toggleCategory(category)}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm rounded-full cursor-pointer transition-all
                  ${selectedCategory === category 
                    ? 'bg-primary text-primary-foreground shadow-sm shadow-primary/30' 
                    : 'bg-transparent border border-border/50 hover:bg-accent/10'}`}
              >
                {category}
              </span>
            ))}
            {selectedCategory && (
              <span 
                onClick={() => setSelectedCategory(null)}
                className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm bg-transparent border border-border/50 rounded-full cursor-pointer hover:bg-accent/10"
              >
                Сбросить
              </span>
            )}
          </div>
        </section>

        {/* Сетка услуг с фильтрацией */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredServices.map((service, index) => (
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
                  <Badge variant="secondary" className="text-xs bg-secondary/10 category-badge">
                    {service.category}
                  </Badge>
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

        {/* CTA Section */}
        <section className="text-center space-y-6 py-8 sm:py-12 rounded-xl relative overflow-hidden border border-muted/50 hover:shadow-lg transition-shadow group/cta">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-600/10 backdrop-blur-sm opacity-100 group-hover/cta:opacity-80 transition-opacity"></div>
          <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary/20 blur-xl animate-gradient-pulse max-sm:hidden"></div>
          <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-accent/20 blur-xl animate-gradient-pulse animate-delay-2000 max-sm:hidden"></div>
          
          <div className="relative z-10 px-4 sm:px-0">
            <h2 className="text-2xl sm:text-3xl font-bold">Готовы к сотрудничеству?</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mt-2 sm:mt-4">
              Оставьте заявку и мы предложим оптимальное решение для вашего бизнеса
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

      {/* Модальное окно с деталями услуги */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-3xl p-0 rounded-xl overflow-hidden max-h-[90vh] sm:max-h-[80vh] modal-content">
          {selectedService && (
            <div className="relative">
              {/* Кнопка закрытия */}
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 p-1 sm:p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
              >
                <X className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
              
              <div className="flex flex-col sm:grid sm:grid-cols-2">
                {/* Левая колонка с информацией */}
                <div className="p-4 sm:p-6 md:p-8">
                  <div className="flex items-start mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-14 sm:h-14 bg-primary/10 rounded-lg flex items-center justify-center mt-1">
                      <selectedService.icon className="h-5 w-5 sm:h-7 sm:w-7 text-primary" />
                    </div>
                    <div className="ml-3 sm:ml-4">
                      <Badge variant="secondary" className="text-xs bg-secondary/10">
                        {selectedService.category}
                      </Badge>
                      <DialogTitle className="text-lg sm:text-xl mt-1">{selectedService.title}</DialogTitle>
                    </div>
                  </div>
                  
                  <DialogDescription className="text-sm sm:text-base mb-4 sm:mb-6">
                    {selectedService.fullDescription}
                  </DialogDescription>
                  
                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <h3 className="font-semibold text-sm sm:text-base mb-1 sm:mb-2">Детали услуги:</h3>
                      <ul className="space-y-1 sm:space-y-2">
                        {selectedService.details.map((detail, index) => (
                          <li key={index} className="flex items-start text-xs sm:text-sm">
                            <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-sm sm:text-base mb-1 sm:mb-2">Преимущества:</h3>
                      <ul className="space-y-1 sm:space-y-2">
                        {selectedService.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start text-xs sm:text-sm">
                            <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Правая колонка с изображением и кнопкой */}
                <div className="bg-gradient-to-br from-primary/5 to-blue-600/10 p-6 flex flex-col">
                  <div className="flex-1 flex items-center justify-center">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-40 sm:h-64 flex items-center justify-center text-muted-foreground text-sm sm:text-base">
                      Изображение услуги
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Button 
                      size="lg" 
                      className="w-full text-base sm:text-lg group/button hover:shadow-md transition-all bg-primary hover:bg-primary/90"
                      onClick={() => {
                        setIsModalOpen(false);
                        navigate('/contacts');
                      }}
                    >
                      Заказать услугу
                      <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover/button:translate-x-1 group-hover/button:-translate-y-0.5" />
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full mt-2 sm:mt-3 text-sm sm:text-base"
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