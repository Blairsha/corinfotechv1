import React, { useState, useRef } from 'react';
import Header from '../components/Header';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Server, Network, Shield, Users, Award, Zap, 
  Circle, Hexagon, FileText, ChevronRight, X,
  ArrowLeft, ArrowRight, Download, ZoomIn, ZoomOut
} from 'lucide-react';
import '../styles/animations.css';

// Импортируем изображения сертификатов
import CertPartnerInfotecs from '../assets/certificates/Сертификат_партнера_КорИнфоТех_ООО_2025_1.png';
import CertDeltaComputers from '../assets/certificates/Сертификат_Коринфотех-1.png';
import LicenseFSB1 from '../assets/certificates/Лицензия-ФСБ-1.png';
import LicenseFSB2 from '../assets/certificates/Лицензия-ФСБ-2.png';
import LicenseFSTEC from '../assets/certificates/Лицензия-ФСТЭК-Серия-КИ-0253-№012744-1.png';
import PermissionAlphaRegister from '../assets/certificates/РАЗРЕШЕНИЕ-с-19.02.2024-по-18.02.2027-1.png';
import CertISO from '../assets/certificates/Сертификат-ИСО-с-19.02.24-по-18.02.27-1.png';
import CertSulkan from '../assets/certificates/Xerox Scan_04082025174100-1.png';

const About = () => {
  const [isCertificatesOpen, setIsCertificatesOpen] = useState(false);
  const [currentCertIndex, setCurrentCertIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const certificatesRef = useRef(null);
  const aboutRef = useRef(null);

  const certificates = [
    {
      id: 1,
      title: "Сертификат партнера Infotecs",
      description: "Официальный партнер по системам защиты информации ViPNet",
      image: CertPartnerInfotecs,
      date: "15.04.2025 - 31.01.2026"
    },
    {
      id: 2,
      title: "Партнерский сертификат Delta Computers",
      description: "Статус «Advanced Partner» в партнерской программе",
      image: CertDeltaComputers,
      date: "17.02.2025 - 31.12.2025"
    },
    {
      id: 3,
      title: "Лицензия ФСБ России",
      description: "На работы в области шифрования информации",
      image: LicenseFSB1,
      date: "Бессрочно (с 11.02.2016)"
    },
    {
      id: 4,
      title: "Дополнение к лицензии ФСБ",
      description: "Адреса осуществления лицензируемой деятельности",
      image: LicenseFSB2,
      date: "Бессрочно"
    },
    {
      id: 5,
      title: "Лицензия ФСТЭК России",
      description: "На деятельность по технической защите конфиденциальной информации",
      image: LicenseFSTEC,
      date: "Бессрочно (с 19.01.2015)"
    },
    {
      id: 6,
      title: "Разрешение Альфа Регистр",
      description: "На применение знака соответствия системы «РосТехСертификация»",
      image: PermissionAlphaRegister,
      date: "19.02.2024 - 18.02.2027"
    },
    {
      id: 7,
      title: "Сертификат ISO 9001",
      description: "Соответствие системы менеджмента качества ГОСТ Р ИСО 9001-2015",
      image: CertISO,
      date: "19.02.2024 - 18.02.2027"
    },
    {
      id: 8,
      title: "Сертификат инсталлятора СУЛКАН",
      description: "Авторизованный инсталлятор структурированных кабельных систем СУЛКАН",
      image: CertSulkan,
      date: "до 25 Января 2026 г."
    }
  ];

  const features = [
    {
      icon: Server,
      title: 'Проектирование и монтаж',
      description: 'Структурированных кабельных систем'
    },
    {
      icon: Network,
      title: 'Прокладка волоконно-оптических кабелей',
      description: 'Проектирование современных сетей'
    },
    {
      icon: Shield,
      title: 'Системы аудио и видеоконференцсвязи',
      description: 'Поставка и настройка оборудования'
    },
    {
      icon: Users,
      title: 'Освещение помещений',
      description: 'Мультимедийными комплексами оборудования'
    },
    {
      icon: Award,
      title: 'Поставка вычислительной техники',
      description: 'И телекоммуникационного оборудования'
    },
    {
      icon: Zap,
      title: 'Консультационные мероприятия',
      description: 'По вопросам организации офисных сетей связи'
    }
  ];

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const openCertificatesModal = () => {
    setIsCertificatesOpen(true);
    document.body.style.overflow = 'hidden';
    setZoomLevel(1);
  };

  const closeCertificatesModal = () => {
    setIsCertificatesOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextCert = () => {
    setCurrentCertIndex((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));
    setZoomLevel(1);
  };

  const prevCert = () => {
    setCurrentCertIndex((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
    setZoomLevel(1);
  };

  const downloadCert = () => {
    const link = document.createElement('a');
    link.href = certificates[currentCertIndex].image;
    link.download = `Сертификат_КорИнфоТех_${certificates[currentCertIndex].id}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.25, 0.5));
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Фоновые элементы с анимациями */}
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
      
      <Header />
      
      <main className="container mx-auto px-4 py-16 space-y-24 relative z-10">
        {/* Основной заголовок */}
        <section ref={aboutRef} className="text-center space-y-8 animate-fade-in-up max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4">
            <button 
              onClick={() => scrollToSection(aboutRef)}
              className="inline-flex items-center gap-3 px-4 py-2 bg-muted/50 hover:bg-muted/70 rounded-full text-sm font-medium transition-colors"
            >
              <Users className="h-4 w-4 text-primary" />
              <span>О компании</span>
            </button>
            <button 
              onClick={() => scrollToSection(certificatesRef)}
              className="inline-flex items-center gap-3 px-4 py-2 bg-muted/50 hover:bg-muted/70 rounded-full text-sm font-medium transition-colors"
            >
              <FileText className="h-4 w-4 text-primary" />
              <span>Сертификаты</span>
            </button>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              КорИнфоТех
            </span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Основной деятельностью компании является создание современной информационной и телекоммуникационной инфраструктуры предприятий
          </p>
        </section>

        {/* Наши направления */}
        <section className="space-y-12">
          <div className="text-center space-y-4 animate-fade-in-up max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Наши направления
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              За годы работы компании спектр выполняемых работ и услуг существенно расширился
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={feature.title} 
                className="group hover:shadow-lg transition-all duration-300 animate-fade-in-up border-muted/50 hover:border-primary/20 overflow-hidden hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 space-y-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                    <feature.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-semibold text-xl">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Описание компании */}
        <section className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <div className="prose prose-lg dark:prose-invert space-y-6">
              <p className="text-lg leading-relaxed">
                Кроме того, выполняем аудит существующей инфраструктуры, проводим качественную настройку и обслуживание компьютерной техники и телефонии (IP-телефония, цифровая, аналоговая, DECT), установку и настройку систем видеоконференцсвязи, видеонаблюдения и контроля доступа.
              </p>
              <p className="text-lg leading-relaxed">
                При необходимости мы проводим профессиональные консультации по вопросам подключения интернета и телефонии. Также оказываем услуги по обслуживанию и предоставлению в аренду вычислительной техники, обслуживанию печатной и оргтехники.
              </p>
            </div>
          </div>
          
          <div className="relative animate-fade-in animation-delay-200">
            <div className="relative bg-card rounded-3xl p-8 shadow-xl border border-muted/50 overflow-hidden hover:shadow-primary/10 transition-all duration-300 group">
              <Hexagon className="absolute -top-8 -right-8 h-32 w-32 text-primary/10 rotate-45" />
              <Circle className="absolute -bottom-6 -left-6 h-24 w-24 text-accent/10" />
              
              <div className="grid grid-cols-2 gap-6 relative z-10">
                {[
                  { value: "10+", label: "Лет опыта" },
                  { value: "100+", label: "Проектов" },
                  { value: "100+", label: "Клиентов" },
                  { value: "24/7", label: "Поддержка" }
                ].map((stat, i) => (
                  <div 
                    key={i} 
                    className="text-center p-4 bg-muted/30 hover:bg-muted/50 rounded-xl transition-all cursor-default hover:scale-105 group-hover:shadow-sm group-hover:border group-hover:border-muted/20"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    <div className="text-3xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Принципы работы */}
        <section className="space-y-12">
          <div className="text-center space-y-4 animate-fade-in-up max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Принципы работы
              </span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Award, 
                title: "Качество", 
                description: "Высокое качество услуг гарантируется сертификацией системы менеджмента качества на соответствие требованиям ГОСТ Р ИСО 9001-2015" 
              },
              { 
                icon: Users, 
                title: "Профессионализм", 
                description: "Наша команда состоит из опытных специалистов с необходимыми сертификатами от производителей оборудования" 
              },
              { 
                icon: Zap, 
                title: "Инновации", 
                description: "Мы постоянно расширяем ассортимент услуг и следим за новейшими технологиями в области IT" 
              }
            ].map((value, i) => (
              <div 
                key={i} 
                className="text-center space-y-6 p-8 bg-card rounded-3xl border border-muted/50 hover:border-primary/20 transition-all animate-fade-in-up hover:shadow-md hover:bg-card/50 group" 
                style={{ animationDelay: `${i * 100 + 100}ms` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{value.title}</h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Сертификаты */}
        <section ref={certificatesRef} className="space-y-12">
          <div className="text-center space-y-4 animate-fade-in-up max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Наши сертификаты и лицензии
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Подтверждение качества наших услуг и компетенций
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificates.slice(0, 4).map((cert, index) => (
              <div 
                key={index}
                className="relative bg-card rounded-xl border border-muted/50 p-6 hover:border-primary/30 transition-all duration-300 animate-fade-in-up hover:shadow-md group overflow-hidden cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => {
                  setCurrentCertIndex(index);
                  openCertificatesModal();
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
                  <p className="text-muted-foreground text-sm flex-grow">{cert.description}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-xs text-muted-foreground/70">{cert.date}</span>
                    <ChevronRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center animate-fade-in-up">
            <button 
              className="inline-flex items-center justify-center px-6 py-3 border border-muted/50 rounded-full text-sm font-medium transition-all hover:bg-primary/10 hover:border-primary/30 hover:shadow-sm group"
              onClick={openCertificatesModal}
            >
              <span>Посмотреть все сертификаты</span>
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </section>
      </main>

      {/* Модальное окно с сертификатами */}
      {isCertificatesOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative bg-card rounded-xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-muted/50 animate-fade-in">
            <button 
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors"
              onClick={closeCertificatesModal}
            >
              <X className="h-6 w-6" />
            </button>
            
            <div className="relative h-full flex flex-col md:flex-row">
              {/* Навигация и информация */}
              <div className="md:w-1/3 p-6 border-b md:border-b-0 md:border-r border-muted/50 bg-gradient-to-b from-card to-muted/10">
                <h3 className="text-2xl font-bold mb-2">{certificates[currentCertIndex].title}</h3>
                <p className="text-muted-foreground mb-4">{certificates[currentCertIndex].description}</p>
                <div className="text-sm text-muted-foreground/70 mb-6">
                  <p>Срок действия: {certificates[currentCertIndex].date}</p>
                </div>
                
                <button 
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors"
                  onClick={downloadCert}
                >
                  <Download className="h-4 w-4" />
                  <span>Скачать сертификат</span>
                </button>
                
                <div className="mt-6 grid grid-cols-4 gap-2">
                  {certificates.map((cert, index) => (
                    <div 
                      key={cert.id}
                      className={`aspect-square rounded-md overflow-hidden cursor-pointer border-2 ${currentCertIndex === index ? 'border-primary' : 'border-transparent'}`}
                      onClick={() => {
                        setCurrentCertIndex(index);
                        setZoomLevel(1);
                      }}
                    >
                      <img 
                        src={cert.image} 
                        alt={cert.title}
                        className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Просмотр сертификата */}
              <div className="md:w-2/3 relative flex items-center justify-center p-6 bg-muted/5">
                <button 
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors z-10"
                  onClick={prevCert}
                >
                  <ArrowLeft className="h-6 w-6" />
                </button>
                
                <div className="w-full h-full flex items-center justify-center overflow-auto">
                  <div 
                    className="transition-transform duration-300"
                    style={{ transform: `scale(${zoomLevel})` }}
                  >
                    <img 
                      src={certificates[currentCertIndex].image} 
                      alt={certificates[currentCertIndex].title}
                      className="max-w-full max-h-[70vh] object-contain rounded-md shadow-lg"
                    />
                  </div>
                </div>
                
                <button 
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors z-10"
                  onClick={nextCert}
                >
                  <ArrowRight className="h-6 w-6" />
                </button>
                
                {/* Кнопки зума */}
                <div className="absolute bottom-4 right-4 flex gap-2 z-10">
                  <button 
                    className="p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors"
                    onClick={handleZoomIn}
                    disabled={zoomLevel >= 3}
                  >
                    <ZoomIn className="h-5 w-5" />
                  </button>
                  <button 
                    className="p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors"
                    onClick={handleZoomOut}
                    disabled={zoomLevel <= 0.5}
                  >
                    <ZoomOut className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;