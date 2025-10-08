import React, { useState } from 'react';
import Header from '../components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; 

// Логотипы клиентов
const clientLogos = {
  gcss: '/images/f245de80f5cd0b4524e93d684b1416bc_edited_edited_free_carve_photos.png',
  lorinii: '/images/LogoLorNii.png',
  rzd: '/images/bobsqm4xuyyaf2uaqox36ly79egwvg79-3-1024x469 (2).png',
  rosatom: '/images/2021-03-16__114726-2-300x99-fotor-bg-remover-20250714102450.png',
  transneft: '/images/013-300x169.png', 
  transcontainer: '/images/Logo_TransContainer-300x157-fotor-bg-remover-20250714102046.png',
  iedt: '/images/chKXATcCQppjLUKnqxzjTTYMF1vstmxNDdqr_f3u6U4bDnkmQdR.png',
  mariinsky: '/images/ee0cdb02d8fca1b928aab6ce954d0be866f90dc9-300x300.png',
  nart: '/images/cbcf2432-cc7b-4a73-99d8-5384ac7556dc-edited-300x169.png',
  otsrv: '/images/IMG_6460-300x152.png',
  railway: '/images/rzd-logo.png',
  jvf: '/images/jvf-logo.png',
  yfu: '/images/yfu-logo.png',
  rzdmed: '/images/8630c062dc3a99f9e8fd9f21af5707b1.png',
};

// Данные проектов
const projectGroups = [
  [
    {
      title: 'Модернизация корпоративной системы IP-телефонии',
      client: 'ФГУП «Главный центр специальной связи»',
      logo: clientLogos.gcss,
      category: 'IP-телефония',
      shortDescription: 'Модернизация ядра информационной системы корпоративной телефонии и развертывание сервиса "Живучий Офис" в филиалах компании.',
      fullDescription: 'Компанией «КорИнфоТех» была выполнена модернизация ядра информационной системы корпоративной телефонии ФЛАТ с развертыванием серверов с установленным на них сервисом "Живучий Офис" в 9 региональных и 66 территориальных отделениях. «Живучий офис» — специально сконфигурированное ядро Флат Softswich, настроенное на поддержание работоспособности определённой локации при разрыве связи с центральным ядром.',
      results: [
        'Организация сети IP телефонии с бесплатными звонками между отделениями',
        'Стандартизация инфраструктуры корпоративной телефонии',
        'Создание централизованного управления удаленными узлами связи'
      ],
      concepts: ['IP-АТС', 'Флат', 'Отказоустойчивость', 'Живучий офис']
    },
    {
      title: 'Поставка и проведение работ по установке ПАК для внедрения использования экспертной настройки кохлеарного имплантата',
      client: 'ФГБУ «СПб НИИ ЛОР» Минздрава России',
      logo: clientLogos.lorinii,
      category: 'Медицинские технологии',
      shortDescription: 'Поставка программно-аппаратного комплекса для настройки имплантатов',
      fullDescription: 'Компанией «КорИнфоТех» была произведена поставка и проведены работы по установке программно-аппаратного комплекса (ПАК) для внедрения использования экспертной настройки кохлеарного имплантата.',
      results: [
        'Обеспечение точной настройки медицинского оборудования',
        'Автоматизация процесса калибровки',
        'Интеграция с существующей медицинской инфраструктурой'
      ],
      concepts: ['Медицинское оборудование', 'Кохлеарные имплантаты', 'Калибровка']
    },
    {
      title: 'Строительство структурированной кабельной сети (СКС)',
      client: 'Филиалы ОАО «РЖД»',
      logo: clientLogos.rzd,
      category: 'Сетевая инфраструктура',
      shortDescription: 'Создание СКС для крупных железнодорожных подразделений',
      fullDescription: 'Компанией «КорИнфоТех» были осуществлены: поставка комплектующих и активного сетевого оборудования для СКС (до 1000 рабочих мест), строительство СКС, тестирование СКС на соответствие требованиям 5-ой категории, настройка сетевого оборудования, подключение СКС к внешним ресурсам заказчика.',
      clients: [
        'Центральная дирекция закупок и снабжения',
        'Центр фирменного транспортного обслуживания',
        'Центр инновационного развития',
        'Департамент технической политики (ЦТЕХ) ОАО РЖД',
        'Дирекция по комплексной реконструкции железных дорог',
        'Главное Управление МВД по Московской области',
        'ФГУП «Главный центр специальной связи»',
        'ГУП «МОСГОРТРАНС»',
        'Московский филиал АО «Федеральная пассижерская компания»'
      ],
      concepts: ['СКС', 'Сетевое оборудование', 'Оптоволокно', 'Cat 6A']
    },
    {
      title: 'Поставка устройств для вывода графической информации (мониторов)',
      client: 'ПАО «Транснефть»',
      logo: clientLogos.transneft,
      category: 'Оборудование',
      shortDescription: 'Поставка мониторов для рабочих станций',
      fullDescription: 'Компанией «КорИнфоТех» была осуществлена поставка устройств для вывода графической информации (мониторов) для ПАО «Транснефть».',
      concepts: ['Мониторы', 'Рабочие станции']
    },
    {
      title: 'Поставка базовых рабочих станций',
      client: 'АО «Концерн Росэнергоатом»',
      logo: clientLogos.rosatom,
      category: 'IT-инфраструктура',
      shortDescription: 'Поставка рабочих станций на российских процессорах',
      fullDescription: 'Компанией «КорИнфоТех» на все, входящие в АО «Концерн Росэнергоатом», действующие АЭС, была осуществлена поставка базовых рабочих станций  «Бобер» на основе процессора «Байкал — М» российского производства.',
      concepts: ['Системный блок Бобер', 'Байкал-М', 'Российские процессоры']
    },
    {
      title: 'Поставка серверного оборудования',
      client: 'АО «Прорыв» (входит в госкорпорацию «Росатом»)',
      logo: clientLogos.rosatom,
      category: 'IT-инфраструктура',
      shortDescription: 'Оснащение серверной инфраструктуры',
      fullDescription: 'Компанией «КорИнфоТех» была осуществлена поставка серверов и систем хранения Yadro и выполнены работы по их установке и настройке   для АО «Прорыв» (входит в госкорпорацию «Росатом»).',
      concepts: ['Серверы', 'Системы хранения данных']
    },
    {
      title: 'Поставка серверного оборудования и систем хранения данных',
      client: 'Филиал №11 ООО «Отраслевой центр разработки и внедрения информационных систем» (ОЦРВ) Сириус',
      logo: clientLogos.otsrv,
      category: 'IT-инфраструктура',
      shortDescription: 'Поставка серверов и СХД',
      fullDescription: 'Компанией «КорИнфоТех» была осуществлена поставка серверного оборудования и систем хранения данных для Филиала №11 ООО «Отраслевой центр разработки и внедрения информационных систем» (ОЦРВ) Сириус.',
      concepts: ['Серверы', 'Системы хранения данных']
    },
    {
      title: 'Оказание услуг по техническому обслуживанию оборудования серверной',
      client: 'АО «Институт экономики и развития транспорта»',
      logo: clientLogos.nart,
      category: 'IT-аутсорсинг',
      shortDescription: 'Обслуживание серверного оборудования и телекоммуникаций',
      fullDescription: 'Компания «КорИнфоТех» выполняла услуги по техническому обслуживанию оборудования серверной, телефонной станции AVAYA, коммутации рабочих мест пользователей и кабельной сети, а также оборудования ИнфоТекс.',
      concepts: ['Техподдержка', 'Телефония', 'Серверное оборудование']
    },
    {
      title: 'Поставка мобильных рабочих мест',
      client: 'Дирекция по эксплуатации путевых машин ОАО «РЖД»',
      logo: clientLogos.rzd,
      category: 'Мобильные решения',
      shortDescription: 'Оснащение мобильными устройствами',
      fullDescription: 'Компанией «КорИнфоТех» была выполнена поставка мобильных рабочих мест (планшетных компьютеров с физически отделяемой клавиатурой), используемых машинистами-инструкторами для организации учебного процесса и контроля машинистов.',
      concepts: ['Планшеты', 'Мобильные решения']
    },
    {
      title: 'Поставка и последующее оказание услуг по сервисному обслуживанию сетевого оборудования и оборудования для видеоконференцсвязи (ВКС)',
      client: 'Дирекция тяги – филиал ОАО «РЖД»',
      logo: clientLogos.rzd,
      category: 'Сетевое оборудование',
      shortDescription: 'Поставка и обслуживание сетевого оборудования и ВКС',
      fullDescription: 'Компанией «КорИнфоТех» была выполнена поставка сетевого оборудования и оборудования для видеоконференцсвязи (ВКС) как в центральную дирекцию тяги, так и в региональные дирекции и в последствии оказывались услуги по сервисному обслуживанию и ремонту поставленного оборудования во всех дирекциях.',
      concepts: ['Сетевое оборудование', 'ВКС', 'Техническое обслуживание']
    }
  ],
  [
    {
      title: 'Оказание услуг по техническому обслуживанию оборудования видеоконференцсвязи (ВКС)',
      client: 'Дирекция железнодорожных вокзалов – филиал ОАО «РЖД»; Центр фирменного транспортного обслуживания — филиал ОАО «РЖД»',
      logo: clientLogos.rzd,
      category: 'Техническое обслуживание',
      shortDescription: 'Обслуживание серверов и видеотерминалов Polycom',
      fullDescription: 'Компания «КорИнфоТех» выполняла услуги по техническому обслуживанию серверов и видеотерминалов Polycom, а также обновлению программного обеспечения с целью скорейшего восстановления работы оборудования.',
      concepts: ['ВКС', 'Polycom', 'Техническое обслуживание']
    },
    {
      title: 'Организация подключения коммутационного оборудования к СПД ОАО «РЖД»',
      client: 'Дирекция по строительству сетей связи ОАО «РЖД»',
      logo: clientLogos.rzd,
      category: 'Сетевое оборудование',
      shortDescription: 'Поставка и монтаж коммуникационного оборудования',
      fullDescription: 'Компанией «КорИнфоТех» была осуществлена поставка коммуникационного оборудования и выполнены работы по его монтажу для организации подключения к сети корпоративной передачи данных ОАО «РЖД» Центра внутренних коммуникаций и бренда работодателя, согласно инвестиционному проекту «Обеспечение безопасности перевозочного процесса».',
      concepts: ['Сетевое оборудование', 'Коммутаторы', 'Монтаж']
    },
    {
      title: 'Модернизация структурированной кабельной сети (СКС)',
      client: 'ЧУЗ «ЦКБ «РЖД-Медицина»',
      logo: clientLogos.rzdmed,
      category: 'Сетевая инфраструктура',
      shortDescription: 'Расширение СКС для создания дополнительных рабочих мест',
      fullDescription: 'Компанией «КорИнфоТех» были выполнены работ по расширению (модернизации) структурированной кабельной сети (СКС) с целью создания дополнительных рабочих мест в существующей СКС и подключение расширенной (модернизированной) СКС к интернету и телефонии.',
      concepts: ['СКС', 'Модернизация', 'Сетевая инфраструктура']
    },
    {
      title: 'Модернизация главной переговорной',
      client: 'ПАО «ТрансКонтейнер»',
      logo: clientLogos.transcontainer,
      category: 'Оборудование',
      shortDescription: 'Поставка оборудования видеоотображения',
      fullDescription: 'В рамках модернизации главной переговорной ПАО «Трансконтейнер» компанией «КорИнфоТех» была осуществлена поставка оборудования видеоотображения.',
      concepts: ['Видеостены', 'Оборудование', 'Модернизация']
    },
    {
      title: 'Модернизация системы хранения данных',
      client: 'Главный вычислительный центр — филиал ОАО «РЖД»',
      logo: clientLogos.rzd,
      category: 'Системы хранения данных',
      shortDescription: 'Модернизация системы хранения данных корпоративного класса VSP',
      fullDescription: 'Компанией «КорИнфоТех» была произведена модернизация системы хранения данных корпоративного класса VSP на площадке Главного Вычислительного Центра — филиала ОАО «РЖД». VSP — высокопроизводительная платформа хранения с масштабированием в трех измерениях, поддерживающая все типы данных. Ее архитектура хранения данных корпоративного класса гибко адаптируется к требованиям, связанным с производительностью, емкостью и использованием систем хранения на базе решений разных производителей.',
      concepts: ['VSP', 'СХД', 'Модернизация']
    },
    {
      title: 'Внедрение ПАК HITACHI UCP SELECT FOR SAP HANA',
      client: 'Главный вычислительный центр — филиал ОАО «РЖД»',
      logo: clientLogos.rzd,
      category: 'Вычислительные системы',
      shortDescription: 'Внедрение высокопроизводительной платформы для хранения и обработки данных',
      fullDescription: 'ООО «КорИнфоТех» внедрил программно-аппаратный комплекс HITACHI UCP SELECT FOR SAP HANA на площадку Главного Вычислительного Центра. SAP HANA — это высокопроизводительная платформа для хранения и обработки данных, в основе которой лежит технология вычислений in-memory с использованием принципа поколоночного хранения данных, платформы, разработанной и выведенной на рынок компанией SAP SE. Архитектура HANA обеспечивает как высокоскоростную обработку транзакций, так и работу со сложными аналитическими запросами, совмещая решение этих задач в рамках единой платформы.',
      concepts: ['SAP HANA', 'HITACHI UCP', 'Вычислительные системы']
    },
    {
      title: 'Интеграция системы хранения в комплектации AVRORA-HPB',
      client: 'Главный вычислительный центр — филиал ОАО «РЖД»',
      logo: clientLogos.rzd,
      category: 'Системы хранения данных',
      shortDescription: 'Тестирование системы хранения на основе комплектующих Hewlett-Packard',
      fullDescription: 'Система в комплектации AVRORA-HPB на основе комплектующих Hewlett-Packard прошла тестирование на площадке Главного Информационно-Вычислительного Центра филиала ОАО «Российские Железные Дороги». Проведено тестирование: интеграции системы хранения данных AVRORA в существующую инфраструктуру Системы Резервного Копирования Главного Вычислительного Центра, построенную на базе Solaris 10 и NetBackup 6.5; работоспособности в задачах резервного копирования образов VMWare при помощи NetBackup 6.5 и VMWare Consolidated Backup; параметров производительности в обозначенных выше задачах.',
      concepts: ['AVRORA-HPB', 'Hewlett-Packard', 'Тестирование']
    },
    {
      title: 'Интеграция системы хранения в комплектации AVRORA Corporate',
      client: 'Южный федеральный университет',
      logo: clientLogos.iedt,
      category: 'Системы хранения данных',
      shortDescription: 'Интеграция СХД для автоматизации работы деканатов',
      fullDescription: 'Южный федеральный университет – исследовательский университет инновационно-предпринимательского типа ведёт инновационную деятельность в таких отраслях как медицина и здравоохранение, приборостроение, энергетика, и суперкомпьютерные технологии. Участвуя в национальном проекте «Инновационное образование», университет активно совершенствует технологическое оснащение учебного процесса. Системы хранения данных в комплектации AVRORA Corporate были интегрированы в IT-инфраструктуру  Южного Федерального Университета в рамках проекта по автоматизации работы деканатов, отвечающих за учебный процесс.',
      concepts: ['AVRORA Corporate', 'Автоматизация', 'Образование']
    },
    {
      title: 'Интеграция программно-определяемой СХД RADIX 5',
      client: 'Федеральное государственное учреждение культуры «Государственный академический Мариинский театр»',
      logo: clientLogos.mariinsky,
      category: 'Мультимедийные системы',
      shortDescription: 'Внедрение системы хранения для медиа-сайта театра',
      fullDescription: '«Мариинский театр» – один из значимых музыкальных театров в России. В настоящее время театр уделяет большое внимание хранению записей концертов и спектаклей с участием выдающихся исполнителей. Система хранения в комплектации RADIX 5 внедрена в театр в целях подключения к комплексу обработки и хранения аудио и видео-контента медиа-сайта Мариинского театра. Медиа-сайта является новым проектом Мариинского театра, который в HD-формате обеспечивает доступ посетителей сайта к аудио-визуальному контенту, отражающему историческое наследие и сегодняшний день Мариинского театра.',
      concepts: ['RADIX 5', 'Медиахранение', 'Культура']
    }
  ]
];

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const navigate = useNavigate();

  const toggleExpand = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  const nextPage = () => {
    if (currentPage < projectGroups.length - 1) {
      setCurrentPage(prev => prev + 1);
      setExpandedProject(null);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 50);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
      setExpandedProject(null);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 50);
    }
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

        @keyframes move-diagonal {
          0% { transform: translate(0, 0) rotate(0deg); }
          100% { transform: translate(100px, 100px) rotate(360deg); }
        }

        .animate-wave-slow {
          animation: wave 20s ease-in-out infinite;
        }

        .animate-wave-medium {
          animation: wave 15s ease-in-out infinite;
        }

        .animate-wave-fast {
          animation: wave 10s ease-in-out infinite;
        }

        .animate-float {
          animation: float 20s ease-in-out infinite;
        }

        .animate-rotate-slow {
          animation: rotate 60s linear infinite;
        }

        .animate-rotate-reverse {
          animation: rotate 45s linear infinite reverse;
        }

        .animate-pulse-slow {
          animation: pulse 8s ease-in-out infinite;
        }

        .animate-pulse-medium {
          animation: pulse 6s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animation-delay-3000 {
          animation-delay: 3s;
        }

        .animation-delay-6000 {
          animation-delay: 6s;
        }

        .animation-delay-9000 {
          animation-delay: 9s;
        }

        @keyframes wave {
          0%, 100% { transform: translateX(0) translateY(0); }
          25% { transform: translateX(-10px) translateY(5px); }
          50% { transform: translateX(-20px) translateY(0); }
          75% { transform: translateX(-10px) translateY(-5px); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }

        /* Мобильная адаптация */
        @media (max-width: 768px) {
          .mobile-padding {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          
          .mobile-card-layout {
            padding: 1rem;
          }
          
          .mobile-flex-col {
            flex-direction: column;
          }
          
          .mobile-text-center {
            text-align: center;
          }
          
          .mobile-logo-small {
            width: 3rem;
            height: 3rem;
          }
          
          .mobile-title-size {
            font-size: 1.25rem;
            line-height: 1.4;
          }
          
          .mobile-description-size {
            font-size: 0.875rem;
          }
          
          .mobile-badge-small {
            font-size: 0.75rem;
            padding: 0.25rem 0.5rem;
          }
          
          .mobile-pagination-stack {
            flex-direction: column;
            gap: 1rem;
          }
          
          .mobile-pagination-buttons {
            width: 100%;
            justify-content: space-between;
          }
          
          .mobile-cta-padding {
            padding: 1.5rem;
          }
        }

        @media (max-width: 640px) {
          .mobile-grid-1 {
            grid-template-columns: 1fr;
          }
          
          .mobile-space-y-4 > * + * {
            margin-top: 1rem;
          }
          
          .mobile-text-lg {
            font-size: 1.125rem;
          }
          
          .mobile-text-xl {
            font-size: 1.25rem;
          }
        }

        @media (max-width: 480px) {
          .mobile-hidden {
            display: none;
          }
          
          .mobile-visible {
            display: block;
          }
        }
        `}
      </style>

      {/* Фоновые элементы */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Анимированные волны */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDIwMCI+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDEyLCA3NCwgMjU1LCAwLjIpIiBzdHJva2Utd2lkdGg9IjMiIGQ9Ik0tMiwxMjUgQzE1MCwxMDAgMzAwLDE1MCA1MDAsMTAwIEM3MDAsNTAgODUwLDE1MCAxMDAyLDUwIj48L3BhdGg+PC9zdmc+')] animate-wave-slow" />
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDIwMCI+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDEyLCA3NCwgMjU1LCAwLjIpIiBzdHJva2Utd2lkdGg9IjMiIGQ9Ik0tMiwxNTAgQzE1MCwxMDAgMzAwLDE1MCA1MDAsNzUgQzcwMCwxNTAgODUwLDUwIDEwMDIsMTI1Ij48L3BhdGg+PC9zdmc+')] animate-wave-medium animation-delay-2000" />
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDIwMCI+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDEyLCA3NCwgMjU1LCAwLjIpIiBzdHJva2Utd2lkdGg9IjMiIGQ9Ik0tMiwxMDAgQzE1MCwxNTAgMzAwLDUwIDUwMCwxMjUgQzcwMCwyMDAgODUwLDc1IDEwMDIsMTAwIj48L3BhdGg+PC9zdmc+')] animate-wave-fast animation-delay-4000" />
        </div>

        {/* Парящие геометрические фигуры */}
        <div className="absolute top-1/4 left-1/4 w-8 h-8 md:w-32 md:h-32 bg-primary/5 rounded-full blur-xl animate-float animation-delay-0" />
        <div className="absolute bottom-1/4 right-1/4 w-12 h-12 md:w-48 md:h-48 bg-accent/5 rounded-full blur-xl animate-float animation-delay-3000" />
        <div className="absolute top-1/3 left-3/4 w-6 h-6 md:w-24 md:h-24 bg-primary/5 rounded-full blur-xl animate-float animation-delay-6000" />
        <div className="absolute top-3/4 left-1/5 w-10 h-10 md:w-40 md:h-40 bg-accent/5 rounded-full blur-xl animate-float animation-delay-9000" />

        {/* Анимированные градиенты */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 to-transparent animate-pulse-slow" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_var(--tw-gradient-stops))] from-accent/10 to-transparent animate-pulse-medium animation-delay-2000" />
        </div>

        {/* Движущиеся частицы */}
        {[...Array(50)].map((_, i) => (
          <div 
            key={`particle-${i}`}
            className="absolute w-1 h-1 md:w-1.5 md:h-1.5 bg-primary/20 rounded-full pointer-events-none"
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
        <div className="absolute top-1/3 right-1/3 w-8 h-8 md:w-16 md:h-16 border-2 border-primary/10 rounded-full animate-rotate-slow" />
        <div className="absolute bottom-1/3 left-1/3 w-12 h-12 md:w-24 md:h-24 border-2 border-accent/10 rounded-full animate-rotate-reverse" />
      </div>

      <Header />
      
      <main className="container mx-auto px-4 md:px-6 py-8 md:py-16 space-y-8 md:space-y-16 relative z-10 mobile-padding">
        {/* Раздел проекта */}
        <section className="text-center space-y-4 md:space-y-8 animate-fade-in-up">
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold tracking-tight animate-fade-in-up animation-delay-200 mobile-text-center">
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Наши проекты
            </span>
          </h1>
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animation-delay-300 mobile-text-center mobile-description-size">
            Реализованные решения для государственных и коммерческих организаций
          </p>
        </section>

        {/* Сетка проектов */}
        <section className="space-y-4 md:space-y-8">
          {projectGroups[currentPage].map((project, index) => (
            <Card 
              key={index} 
              className="border-l-4 hover:shadow-lg transition-all duration-300 animate-fade-in-up bg-background/90 backdrop-blur-sm border-border/50 hover:border-primary/50 group overflow-hidden mobile-card-layout"
              style={{ animationDelay: `${index * 0.1 + 0.5}s` }}
            >
              <CardHeader className="pb-0 relative z-10 md:p-6 p-4">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 md:gap-4 mobile-flex-col">
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-3 md:mb-2">
                      <Badge variant="outline" className="bg-background/80 backdrop-blur-sm mobile-badge-small">
                        {project.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg md:text-xl lg:text-2xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent mobile-title-size">
                      {project.title}
                    </CardTitle>
                    <div className="mt-3 md:mt-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4 mobile-flex-col mobile-space-y-4">
                      {project.logo && (
                        <div className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0 bg-white p-1 md:p-2 rounded-lg border flex items-center justify-center transition-transform hover:scale-105 hover:shadow-md mobile-logo-small">
                          <img 
                            src={project.logo} 
                            alt={`Логотип ${project.client}`}
                            className="max-h-full max-w-full object-contain"
                            loading="lazy"
                          />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="text-xs md:text-sm text-primary font-medium">ЗАКАЗЧИК:</div>
                        <div className="text-base md:text-lg font-semibold break-words mobile-text-lg">{project.client}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-4 md:pt-6 relative z-10 md:p-6 p-4">
                <p className="text-muted-foreground mb-4 md:mb-6 text-sm md:text-base mobile-description-size">{project.shortDescription}</p>
                
                <div className="flex justify-between items-center">
                  <Button 
                    variant="ghost" 
                    className="px-0 text-primary hover:bg-transparent hover:text-primary/80 transition-colors group/button focus:ring-0 focus:ring-offset-0 focus:outline-none text-sm md:text-base"
                    onClick={() => toggleExpand(index)}
                  >
                    {expandedProject === index ? (
                      <>
                        Свернуть <ChevronUp className="ml-1 md:ml-2 h-3 w-3 md:h-4 md:w-4 transition-transform group-hover/button:translate-y-0.5" />
                      </>
                    ) : (
                      <>
                        Подробнее <ChevronDown className="ml-1 md:ml-2 h-3 w-3 md:h-4 md:w-4 transition-transform group-hover/button:translate-y-0.5" />
                      </>
                    )}
                  </Button>
                </div>

                {expandedProject === index && (
                  <div className="mt-4 md:mt-6 space-y-4 md:space-y-6 border-t pt-4 md:pt-6">
                    <div>
                      <h3 className="font-semibold mb-2 md:mb-3 text-base md:text-lg mobile-text-lg">Описание проекта:</h3>
                      <p className="text-muted-foreground text-sm md:text-base mobile-description-size">{project.fullDescription}</p>
                    </div>
                    
                    {project.results && (
                      <div>
                        <h3 className="font-semibold mb-2 md:mb-3 text-base md:text-lg mobile-text-lg">Результаты:</h3>
                        <ul className="space-y-2 md:space-y-3">
                          {project.results.map((result, i) => (
                            <li key={i} className="flex items-start">
                              <span className="inline-block w-1.5 h-1.5 md:w-2 md:h-2 bg-primary rounded-full mt-1.5 md:mt-2 mr-2 md:mr-2 flex-shrink-0"></span>
                              <span className="text-sm md:text-base mobile-description-size">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {project.clients && (
                      <div>
                        <h3 className="font-semibold mb-2 md:mb-3 text-base md:text-lg mobile-text-lg">Дополнительные заказчики:</h3>
                        <div className="grid md:grid-cols-2 gap-2 md:gap-3 mobile-grid-1">
                          {project.clients.map((client, i) => (
                            <div key={i} className="flex items-start">
                              <span className="inline-block w-1.5 h-1.5 md:w-2 md:h-2 bg-primary rounded-full mt-1.5 md:mt-2 mr-2 md:mr-2 flex-shrink-0"></span>
                              <span className="text-sm md:text-base mobile-description-size break-words">{client}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div>
                      <h3 className="font-semibold mb-2 md:mb-3 text-base md:text-lg mobile-text-lg">Ключевые понятия:</h3>
                      <div className="text-sm md:text-base text-muted-foreground mobile-description-size">
                        {project.concepts.join(', ')}
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Пагинация */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 animate-fade-in-up mobile-pagination-stack">
          <Button 
            variant="outline" 
            className="gap-2 focus:ring-0 focus:ring-offset-0 focus:outline-none w-full md:w-auto justify-center mobile-pagination-buttons" 
            onClick={prevPage}
            disabled={currentPage === 0}
          >
            <ChevronLeft className="h-4 w-4" />
            Предыдущие проекты
          </Button>
          
          <div className="text-sm text-muted-foreground text-center mobile-text-center">
            Страница {currentPage + 1} из {projectGroups.length}
          </div>
          
          <Button 
            variant="outline" 
            className="gap-2 focus:ring-0 focus:ring-offset-0 focus:outline-none w-full md:w-auto justify-center mobile-pagination-buttons" 
            onClick={nextPage}
            disabled={currentPage === projectGroups.length - 1}
          >
            Следующие проекты
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* CTA секция */}
        <section className="text-center space-y-4 md:space-y-6 py-6 md:py-12 rounded-xl relative overflow-hidden border border-muted/50 hover:shadow-lg transition-shadow group/cta mobile-cta-padding">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-600/10 backdrop-blur-sm opacity-100 group-hover/cta:opacity-80 transition-opacity"></div>
          <div className="absolute -top-10 -right-10 md:-top-20 md:-right-20 w-20 h-20 md:w-40 md:h-40 rounded-full bg-primary/20 blur-xl animate-gradient-pulse"></div>
          <div className="absolute -bottom-10 -left-10 md:-bottom-20 md:-left-20 w-30 h-30 md:w-60 md:h-60 rounded-full bg-accent/20 blur-xl animate-gradient-pulse animate-delay-2000"></div>
          
          <div className="relative z-10">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mobile-text-xl">Готовы к сотрудничеству</h2>
            <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto mt-2 md:mt-4 mobile-description-size">
              Оставьте заявку и мы предложим оптимальное решение для вашего бизнеса
            </p>
            <Button 
              size="lg" 
              className="px-6 md:px-8 text-base md:text-lg group/button mt-4 md:mt-6 hover:shadow-md transition-all bg-primary hover:bg-primary/90 w-full md:w-auto"
              onClick={() => navigate('/Contacts')} 
            >
              Обсудить проект
              <ExternalLink className="ml-1 md:ml-2 h-3 w-3 md:h-4 md:w-4 transition-transform group-hover/button:translate-x-1 group-hover/button:-translate-y-0.5" />
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Projects;