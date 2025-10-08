import React from 'react';
import Header from '../components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, ExternalLink } from 'lucide-react';

const Distributors = () => {
  const distributors = [
        {
      name: 'Марвел-Дистрибуция',
      logo: '/logos/marvel.png',
      website: 'https://www.marvel.ru/',
      description: 'Ведущий дистрибьютор IT-продуктов и услуг в России, предлагающий широкий ассортимент товаров. Компания предоставляет техникe и программное обеспечение для бизнеса и организаций. Марвел активно развивает партнерские отношения, поддерживает стартапы и внедряет новейшие технологии.',
      category: 'ИТ-решения',
      products: ['Комплексные решения', 'Техника', 'Программное обеспечение']
    },
        {
      name: 'Ресурс-Медиа',
      logo: '/logos/resource-media.png',
      website: 'https://resurs-media.ru/',
      description: 'Компания, специализирующаяся на дистрибуции ИТ-продуктов и цифровых решений. Она предлагает широкий спектр программного обеспечения, включая решения для бизнеса и образовательных учреждений. Компания активно поддерживает проекты и инициативы, направленные на обучение и развитие.',
      category: 'Цифровые решения',
      products: ['ПО для бизнеса', 'Образовательные решения', 'Цифровизация']
    },
        {
      name: 'CompTek',
      logo: '/logos/comptek.png',
      website: 'https://www.comptek.ru/',
      description: 'Динамично развивающаяся компания на российском рынке дистрибуции ИТ-продуктов. Основное направление — поставка оборудования для сетевой безопасности, хранения данных и сетевой инфраструктуры. CompTek обеспечивает высокое качество обслуживания и обучение партнеров, создавая инновационные решения.',
      category: 'Сетевая инфраструктура',
      products: ['Безопасность', 'СХД', 'Сетевое оборудование']
    },
        {
      name: 'ELKO',
      logo: '/logos/elko.png',
      website: 'https://www.elkogroup.com/',
      description: 'Дистрибьютор решений и технологий в области IT, работающий на рынке Европы и СНГ. Компания предлагает разнообразный ассортимент продуктов и услуг, обеспечивая высокое качество обслуживания. ELKO активно развивает инновационные направления, фокусируясь на потребностях клиентов и рынке.',
      category: 'Международная дистрибуция',
      products: ['ИТ-оборудование', 'Компоненты', 'Корпоративные решения']
    },

        {
      name: '3Logic Group',
      logo: '/logos/3logic.png',
      website: 'https://3logic.ru/',
      description: 'Дистрибьютор IT-продукции и облачных решений. Компания предлагает комплексные услуги по внедрению и сопровождению информационных систем, фокусируясь на индивидуальных решениях для клиентов. 3Logic Group поддерживает высокие стандарты качества и активно развивает партнерские каналы.',
      category: 'Облачные решения',
      products: ['Облачные сервисы', 'Информационные системы', 'Индивидуальные решения']
    },

    {
      name: 'NAG',
      logo: '/logos/nag.png',
      website: 'https://nag.ru/',
      description: 'Российский разработчик и поставщик телекоммуникационного оборудования, решений для сетей передачи данных, систем видеонаблюдения и дата-центров. Компания предлагает собственные бренды (SNR, OMNY), проектирование инфраструктуры "под ключ" и сервисное обслуживание.',
      category: 'Телекоммуникации и сетевое оборудование',
      products: ['Сетевые коммутаторы', 'IP-видеонаблюдение', 'Серверные шкафы', 'Решения для ЦОД']
    },
    {
      name: 'OCS',
      logo: '/logos/ocs.png',
      website: 'https://www.ocs.ru/',
      description: 'Один из крупнейших дистрибьюторов IT-продуктов в России. Компания предлагает программное обеспечение, компьютерную технику и аксессуары. OCS активно развивает сети партнеров, предлагает услуги по системной интеграции и решает задачи на стыке технологий и бизнеса для своих клиентов.',
      category: 'Компьютерная техника',
      products: ['ПО', 'Компьютеры', 'Периферия']
    },

    {
      name: 'PROWAY',
      logo: '/logos/proway.png',
      website: 'https://proway.tech/',
      description: 'Многопрофильный IT-дистрибьютор с 30-летним опытом`, специализирующийся на поставках оборудования для автоматизации идентификации, сетевой инфраструктуры, систем хранения данных и решений кибербезопасности. Официальный партнер ведущих вендоров (Positive Technologies, INTEKEY, Рутокен)',
      category: 'Дистрибуция IT-оборудования',
      products: [
        'Серверы и системы хранения',
        'Сетевое оборудование',
        'Сканеры и терминалы сбора данных',
        'Решения для информационной безопасности',
        'Оборудование для автоматизации складов'
      ]
    },
        {
      name: 'Treolan',
      logo: '/logos/treolan.png',
      website: 'https://treolan.ru/',
      description: 'Ведущий дистрибьютор ИТ-решений в России. Компания предоставляет широкий ассортимент оборудования и ПО, поставляя крупнейшим компаниям и госструктурам. Она активно внедряет инновации и обеспечивает квалифицированную поддержку клиентов, что способствует развитию бизнеса.',
      category: 'ИТ-дистрибуция',
      products: ['Оборудование', 'ПО', 'Корпоративные решения']
    }
  ];

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
          
          @keyframes rotate-reverse {
            from { transform: rotate(0deg); }
            to { transform: rotate(-360deg); }
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
            0% { transform: translate(0, 0); }
            100% { transform: translate(100vw, -100vh); }
          }
          
          @keyframes wave-slow {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          
          @keyframes wave-medium {
            0% { transform: translateX(0); }
            100% { transform: translateX(-25%); }
          }
          
          @keyframes wave-fast {
            0% { transform: translateX(0); }
            100% { transform: translateX(-10%); }
          }
          
          @keyframes pulse-slow {
            0%, 100% { opacity: 0.1; transform: scale(1); }
            50% { opacity: 0.3; transform: scale(1.05); }
          }
          
          @keyframes pulse-medium {
            0%, 100% { opacity: 0.1; transform: scale(1); }
            50% { opacity: 0.2; transform: scale(1.03); }
          }
          
          .animate-float { animation: float 12s ease-in-out infinite; }
          .animate-rotate-slow { animation: rotate 60s linear infinite; }
          .animate-rotate-reverse { animation: rotate-reverse 45s linear infinite; }
          .animate-wave-slow { animation: wave-slow 30s linear infinite; }
          .animate-wave-medium { animation: wave-medium 20s linear infinite; }
          .animate-wave-fast { animation: wave-fast 15s linear infinite; }
          .animate-pulse-slow { animation: pulse-slow 8s ease-in-out infinite; }
          .animate-pulse-medium { animation: pulse-medium 6s ease-in-out infinite; }
          .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
          .animate-delay-100 { animation-delay: 0.1s; }
          .animate-delay-200 { animation-delay: 0.2s; }
          .animate-delay-300 { animation-delay: 0.3s; }
          .animate-delay-500 { animation-delay: 0.5s; }
          .animate-delay-1000 { animation-delay: 1s; }
          .animate-delay-2000 { animation-delay: 2s; }
          .animate-delay-3000 { animation-delay: 3s; }
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
        <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-primary/10 rounded-full blur-xl animate-float animation-delay-0" />
        <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-accent/10 rounded-full blur-xl animate-float animation-delay-3000" />
        <div className="absolute top-1/3 left-3/4 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float animation-delay-6000" />
        <div className="absolute top-3/4 left-1/5 w-48 h-48 bg-accent/10 rounded-full blur-xl animate-float animation-delay-9000" />
        <div className="absolute top-1/5 right-1/5 w-64 h-64 bg-primary/5 rounded-lg blur-xl animate-float animation-delay-5000" />
        <div className="absolute bottom-1/5 left-1/5 w-72 h-72 bg-accent/5 rounded-lg blur-xl animate-float animation-delay-7000" />

        {/* Анимированные градиенты */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/15 to-transparent animate-pulse-slow" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_var(--tw-gradient-stops))] from-accent/15 to-transparent animate-pulse-medium animation-delay-2000" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_var(--tw-gradient-stops))] from-primary/10 to-transparent animate-pulse-medium animation-delay-4000" />
        </div>

        {/* Движущиеся частицы */}
        {[...Array(120)].map((_, i) => (
          <div 
            key={`particle-${i}`}
            className="absolute rounded-full pointer-events-none"
            style={{
              width: `${2 + Math.random() * 5}px`,
              height: `${2 + Math.random() * 5}px`,
              backgroundColor: `rgba(12, 74, 255, ${0.1 + Math.random() * 0.2})`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `move-diagonal ${8000 + Math.random() * 12000}ms linear infinite ${Math.random() * 5000}ms`,
              opacity: 0.2 + Math.random() * 0.3,
              transform: `scale(${0.8 + Math.random() * 2})`
            }}
          />
        ))}

        {/* Крупные частицы с эффектом свечения */}
        {[...Array(30)].map((_, i) => (
          <div 
            key={`glow-particle-${i}`}
            className="absolute rounded-full pointer-events-none"
            style={{
              width: `${8 + Math.random() * 12}px`,
              height: `${8 + Math.random() * 12}px`,
              backgroundColor: `rgba(12, 74, 255, ${0.05})`,
              boxShadow: `0 0 ${10 + Math.random() * 20}px rgba(12, 74, 255, ${0.2 + Math.random() * 0.3})`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `move-diagonal ${15000 + Math.random() * 15000}ms linear infinite ${Math.random() * 10000}ms`,
              opacity: 0.1 + Math.random() * 0.2,
            }}
          />
        ))}

        {/* Дополнительные фоновые элементы */}
        <div className="absolute top-1/3 right-1/3 w-24 h-24 border-2 border-primary/15 rounded-full animate-rotate-slow" />
        <div className="absolute bottom-1/3 left-1/3 w-32 h-32 border-2 border-accent/15 rounded-full animate-rotate-reverse" />
        <div className="absolute top-2/3 right-2/3 w-40 h-40 border border-primary/10 rounded-full animate-rotate-slow animation-delay-3000" />
        <div className="absolute bottom-2/3 left-2/3 w-28 h-28 border border-accent/10 rounded-full animate-rotate-reverse animation-delay-2000" />

        {/* Анимированные линии */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-pulse-medium" />
        <div className="absolute top-0 left-1/2 h-full w-px bg-gradient-to-b from-transparent via-accent/10 to-transparent animate-pulse-slow animation-delay-2000" />
      </div>

      <Header />
      
      <main className="container mx-auto px-4 py-16 space-y-16 relative z-10">
        {/* Hero Section */}
        <section className="text-center space-y-8 animate-fade-in-up pt-8">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-muted/50 rounded-full text-sm font-medium mb-4 animate-fade-in">
            <Truck className="h-4 w-4 text-primary" />
            <span>Наши партнеры-дистрибьюторы</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Дистрибьюторы
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Мы сотрудничаем с ведущими дистрибьюторами IT-оборудования и программного обеспечения, что позволяет нам предлагать клиентам широкий ассортимент продукции и комплексные решения.
          </p>
        </section>

        {/* Распределительная сетка с ссылками на сайты */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {distributors.map((distributor, index) => (
            <a 
              key={distributor.name} 
              href={distributor.website}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <Card 
                className="group hover:shadow-lg transition-all duration-300 animate-fade-in-up bg-background/95 backdrop-blur-sm border-border/50 hover:border-primary/30 h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="space-y-4">
                  <div className="flex items-center gap-4">
                    {distributor.logo && (
                      <div className="w-16 h-16 bg-white p-2 rounded-lg border flex items-center justify-center transition-transform group-hover:scale-105 group-hover:shadow-md">
                        <img 
                          src={distributor.logo} 
                          alt={`Логотип ${distributor.name}`}
                          className="max-h-full max-w-full object-contain"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <div className="space-y-2">
                      <div className="text-xs text-muted-foreground font-medium">
                        {distributor.category}
                      </div>
                      <CardTitle className="text-lg leading-tight flex items-center gap-2">
                        {distributor.name}
                        <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{distributor.description}</p>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Основные направления:</h4>
                    <div className="flex flex-wrap gap-2">
                      {distributor.products.map((product) => (
                        <span 
                          key={product} 
                          className="text-xs px-2 py-1 bg-muted/20 rounded-md text-muted-foreground"
                        >
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </section>

        {/* CTA Раздел */}
        <section className="text-center space-y-8 py-16 rounded-xl relative overflow-hidden border border-muted/50 hover:shadow-lg transition-shadow group/cta animate-fade-in-up">
          {/* Градиентный фон и декоративные элементы */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-600/10 backdrop-blur-sm opacity-100 group-hover/cta:opacity-80 transition-opacity"></div>
          <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary/20 blur-xl animate-gradient-pulse"></div>
          <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-accent/20 blur-xl animate-gradient-pulse animate-delay-2000"></div>
          
          {/* Контент */}
          <div className="relative z-10 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Интересуетесь сотрудничеством с нашими дистрибьюторами?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Наши специалисты помогут подобрать оптимальные решения от наших партнеров-дистрибьюторов под ваши задачи.
            </p>
            <Button 
              asChild 
              size="lg" 
              className="text-lg px-8 hover:shadow-lg hover:shadow-primary/20 transition-all group/button bg-primary hover:bg-primary/90"
            >
              <Link to="/contacts" className="flex items-center">
                Получить консультацию
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/button:translate-x-1" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Distributors;