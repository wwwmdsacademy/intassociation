import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MessageCircle, Users, GraduationCap, Building, Palette, Cpu, Wrench } from "lucide-react"

export default function AssociationLanding() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/modern-architectural-cityscape-skyscrapers.jpg"
            alt="Современная архитектура и небоскрёбы"
            className="w-full h-full object-cover scale-105"
          />
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
          {/* Additional dark overlay for text contrast */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <nav className="absolute top-0 left-0 right-0 z-20 p-6 backdrop-blur-sm bg-black/10">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="text-2xl font-bold text-white tracking-wider">АССОЦИАЦИЯ</div>
            <div className="hidden md:flex space-x-8 text-sm font-medium">
              <a
                href="#projects"
                className="text-white/90 hover:text-primary transition-colors duration-300 tracking-wide"
              >
                ПРОЕКТЫ
              </a>
              <a
                href="#education"
                className="text-white/90 hover:text-primary transition-colors duration-300 tracking-wide"
              >
                ОБУЧЕНИЕ
              </a>
              <a
                href="#contact"
                className="text-white/90 hover:text-primary transition-colors duration-300 tracking-wide"
              >
                КОНТАКТЫ
              </a>
            </div>
          </div>
        </nav>

        <div className="relative z-10 max-w-6xl mx-auto text-center px-6">
          {/* Main heading with extended white font */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-8 text-balance leading-[0.9] tracking-wider font-sans">
            <span className="block mb-2">АССОЦИАЦИЯ</span>
            <span className="block text-3xl md:text-4xl lg:text-5xl font-extralight text-white/90 tracking-widest">
              АРХИТЕКТОРОВ • ДИЗАЙНЕРОВ
            </span>
            <span className="block text-3xl md:text-4xl lg:text-5xl font-extralight text-white/90 tracking-widest">
              ИНЖЕНЕРОВ • ПРОГРАММИСТОВ
            </span>
            <span className="block text-2xl md:text-3xl lg:text-4xl font-thin text-primary mt-4 tracking-widest">
              РОССИИ И КАЗАХСТАНА
            </span>
          </h1>

          {/* Subtitle with modern styling */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="w-24 h-px bg-primary mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl lg:text-3xl font-light text-white/90 text-pretty leading-relaxed tracking-wide">
              Мы создаём сообщество, где профессионалы получают доступ к заказам, обучению и партнёрствам
            </p>
            <div className="w-24 h-px bg-primary mx-auto mt-8"></div>
          </div>

          {/* Enhanced CTA buttons with modern landing page styling */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-12 py-6 text-lg font-medium tracking-wide rounded-none border-2 border-primary hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              <MessageCircle className="mr-3 h-6 w-6" />
              ПРИСОЕДИНИТЬСЯ К НАМ
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-black px-12 py-6 text-lg font-medium tracking-wide rounded-none bg-transparent backdrop-blur-sm hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              <MessageCircle className="mr-3 h-6 w-6" />
              УЗНАТЬ БОЛЬШЕ
            </Button>
          </div>

          {/* Additional landing page elements */}
          <div className="mt-16 flex justify-center items-center space-x-8 text-white/60">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm tracking-wider">УЧАСТНИКОВ</div>
            </div>
            <div className="w-px h-12 bg-white/30"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">200+</div>
              <div className="text-sm tracking-wider">ПРОЕКТОВ</div>
            </div>
            <div className="w-px h-12 bg-white/30"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">2</div>
              <div className="text-sm tracking-wider">СТРАНЫ</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 bg-gradient-to-b from-background to-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium tracking-wider mb-6">
              НАШИ ДОСТИЖЕНИЯ
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-foreground mb-8 text-balance leading-tight tracking-wide">
              Проекты, реализованные
              <span className="block text-primary font-normal">совместно с Ассоциацией</span>
            </h2>
            <div className="w-24 h-px bg-primary mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Более 200 успешно завершённых проектов в области архитектуры, дизайна, инженерии и IT
            </p>
          </div>

          {/* Stats infographic */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            <div className="text-center group">
              <div className="relative mb-4">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Building className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-xs text-white font-bold">✓</span>
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">85+</div>
              <div className="text-sm text-muted-foreground tracking-wider uppercase">Архитектурных проектов</div>
            </div>

            <div className="text-center group">
              <div className="relative mb-4">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Palette className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-xs text-white font-bold">✓</span>
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">60+</div>
              <div className="text-sm text-muted-foreground tracking-wider uppercase">Дизайн-проектов</div>
            </div>

            <div className="text-center group">
              <div className="relative mb-4">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Wrench className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-xs text-white font-bold">✓</span>
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">45+</div>
              <div className="text-sm text-muted-foreground tracking-wider uppercase">Инженерных решений</div>
            </div>

            <div className="text-center group">
              <div className="relative mb-4">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Cpu className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-xs text-white font-bold">✓</span>
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">35+</div>
              <div className="text-sm text-muted-foreground tracking-wider uppercase">IT-разработок</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:scale-105 transition-all duration-500 border-0 shadow-2xl bg-card/80 backdrop-blur-sm overflow-hidden">
              <div className="aspect-square overflow-hidden relative">
                <img
                  src="/modern-residential-building-architecture.jpg"
                  alt="Архитектурный проект"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-sm font-medium">Премиум класс</div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Жилой комплекс</h3>
                <p className="text-muted-foreground mb-4">Современная архитектура с элементами экологичности</p>
                <div className="flex items-center text-sm text-primary font-medium">
                  <Building className="h-4 w-4 mr-2" />
                  Архитектура
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:scale-105 transition-all duration-500 border-0 shadow-2xl bg-card/80 backdrop-blur-sm overflow-hidden">
              <div className="aspect-square overflow-hidden relative">
                <img
                  src="/luxury-living-room.png"
                  alt="Дизайн интерьера"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-sm font-medium">Люкс сегмент</div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Дизайн интерьера</h3>
                <p className="text-muted-foreground mb-4">Премиальные решения для жилых пространств</p>
                <div className="flex items-center text-sm text-primary font-medium">
                  <Palette className="h-4 w-4 mr-2" />
                  Дизайн
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:scale-105 transition-all duration-500 border-0 shadow-2xl bg-card/80 backdrop-blur-sm overflow-hidden">
              <div className="aspect-square overflow-hidden relative">
                <img
                  src="/engineering-infrastructure-systems.jpg"
                  alt="Инженерные решения"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-sm font-medium">Высокотехнологично</div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Инженерные системы</h3>
                <p className="text-muted-foreground mb-4">Комплексные технические решения</p>
                <div className="flex items-center text-sm text-primary font-medium">
                  <Wrench className="h-4 w-4 mr-2" />
                  Инженерия
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:scale-105 transition-all duration-500 border-0 shadow-2xl bg-card/80 backdrop-blur-sm overflow-hidden">
              <div className="aspect-square overflow-hidden relative">
                <img
                  src="/modern-web-app-interface.png"
                  alt="IT-разработка"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-sm font-medium">Инновационно</div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground">IT-разработка</h3>
                <p className="text-muted-foreground mb-4">Цифровые продукты нового поколения</p>
                <div className="flex items-center text-sm text-primary font-medium">
                  <Cpu className="h-4 w-4 mr-2" />
                  Программирование
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-32 px-6 bg-gradient-to-br from-card to-background relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ef4444' fillOpacity='0.02'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium tracking-wider mb-6">
              ОБРАЗОВАНИЕ И РАЗВИТИЕ
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-foreground mb-8 text-balance leading-tight tracking-wide">
              Наставничество и образовательные программы
            </h2>
            <div className="w-24 h-px bg-primary mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-muted-foreground mb-16 text-pretty max-w-4xl mx-auto leading-relaxed">
              Бесплатный вводный курс «Вдохновение» и годовое обучение для членов Ассоциации
            </p>
          </div>

          {/* Education infographic */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-2xl">
                  <GraduationCap className="h-12 w-12 text-white" />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-green-500 text-white text-xs rounded-full font-medium">
                  БЕСПЛАТНО
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-foreground">Курс «Вдохновение»</h3>
              <p className="text-muted-foreground leading-relaxed">
                Вводный курс для знакомства с индустрией и поиска своего направления
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-2xl">
                  <Users className="h-12 w-12 text-white" />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-blue-500 text-white text-xs rounded-full font-medium">
                  12 МЕСЯЦЕВ
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-foreground">Годовое обучение</h3>
              <p className="text-muted-foreground leading-relaxed">
                Комплексная программа профессионального развития для членов Ассоциации
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-2xl">
                  <Building className="h-12 w-12 text-white" />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-purple-500 text-white text-xs rounded-full font-medium">
                  ПРАКТИКА
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-foreground">Реальные проекты</h3>
              <p className="text-muted-foreground leading-relaxed">
                Работа над настоящими заказами под руководством опытных наставников
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-12 py-6 text-lg font-medium tracking-wide rounded-none border-2 border-primary hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              <GraduationCap className="mr-3 h-6 w-6" />
              ЗАПИСАТЬСЯ НА КУРС
            </Button>
          </div>
        </div>
      </section>

      {/* Problems Solution Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-background to-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium tracking-wider mb-6">
              РЕШЕНИЯ ДЛЯ ПРОФЕССИОНАЛОВ
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-foreground mb-8 text-balance leading-tight tracking-wide">
              Решаем ключевые проблемы специалистов
            </h2>
            <div className="w-24 h-px bg-primary mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-10 hover:shadow-2xl transition-all duration-500 border-0 bg-card/80 backdrop-blur-sm group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="relative z-10">
                <div className="mx-auto mb-6 w-20 h-20 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl">
                  <Building className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-3xl mb-6 font-light tracking-wide">Заказы</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="mb-6">
                  <div className="text-sm text-muted-foreground mb-2">ПРОБЛЕМА:</div>
                  <p className="text-lg text-foreground/80 mb-4">Нет стабильных заказов?</p>
                  <div className="w-12 h-px bg-primary mx-auto mb-4"></div>
                  <div className="text-sm text-primary font-medium mb-2">РЕШЕНИЕ:</div>
                  <p className="text-muted-foreground leading-relaxed">
                    Мы предоставляем реальные проекты от проверенных заказчиков с гарантированной оплатой
                  </p>
                </div>
                <div className="flex justify-center items-center space-x-4 text-sm text-primary">
                  <span className="font-medium">50+ заказов/месяц</span>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center p-10 hover:shadow-2xl transition-all duration-500 border-0 bg-card/80 backdrop-blur-sm group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="relative z-10">
                <div className="mx-auto mb-6 w-20 h-20 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-3xl mb-6 font-light tracking-wide">Партнёрство</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="mb-6">
                  <div className="text-sm text-muted-foreground mb-2">ПРОБЛЕМА:</div>
                  <p className="text-lg text-foreground/80 mb-4">Нет партнёров и команды?</p>
                  <div className="w-12 h-px bg-primary mx-auto mb-4"></div>
                  <div className="text-sm text-primary font-medium mb-2">РЕШЕНИЕ:</div>
                  <p className="text-muted-foreground leading-relaxed">
                    Ассоциация объединяет специалистов в рабочие группы для совместных проектов
                  </p>
                </div>
                <div className="flex justify-center items-center space-x-4 text-sm text-primary">
                  <span className="font-medium">500+ участников</span>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center p-10 hover:shadow-2xl transition-all duration-500 border-0 bg-card/80 backdrop-blur-sm group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="relative z-10">
                <div className="mx-auto mb-6 w-20 h-20 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl">
                  <GraduationCap className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-3xl mb-6 font-light tracking-wide">Обучение</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="mb-6">
                  <div className="text-sm text-muted-foreground mb-2">ПРОБЛЕМА:</div>
                  <p className="text-lg text-foreground/80 mb-4">Нет развития?</p>
                  <div className="w-12 h-px bg-primary mx-auto mb-4"></div>
                  <div className="text-sm text-primary font-medium mb-2">РЕШЕНИЕ:</div>
                  <p className="text-muted-foreground leading-relaxed">
                    У нас есть менторские программы и профессиональное обучение от экспертов
                  </p>
                </div>
                <div className="flex justify-center items-center space-x-4 text-sm text-primary">
                  <span className="font-medium">20+ курсов</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Mission Section */}
      <section className="py-32 px-6 bg-gradient-to-br from-card to-background relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ef4444' fillOpacity='0.02'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium tracking-wider mb-6">
              НАША МИССИЯ
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-foreground mb-8 text-balance leading-tight tracking-wide">
              Социальная ответственность и ценности
            </h2>
            <div className="w-24 h-px bg-primary mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex items-start space-x-6 group">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground tracking-wide">
                  Поддержка молодых специалистов
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Помогаем начинающим профессионалам найти своё место в индустрии через менторство и стажировки
                </p>
                <div className="mt-4 flex items-center text-sm text-primary font-medium">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  150+ молодых специалистов в программе
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-6 group">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground tracking-wide">Наставничество</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Опытные специалисты делятся знаниями с новым поколением через персональные программы развития
                </p>
                <div className="mt-4 flex items-center text-sm text-primary font-medium">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  80+ активных наставников
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-6 group">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl">
                <Building className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground tracking-wide">Социальные проекты</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Участвуем в проектах, направленных на улучшение городской среды и качества жизни граждан
                </p>
                <div className="mt-4 flex items-center text-sm text-primary font-medium">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  25+ социальных проектов реализовано
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-6 group">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl">
                <Palette className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground tracking-wide">
                  Образовательные инициативы
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Развиваем творческие способности детей через архитектуру и дизайн в школах и детских центрах
                </p>
                <div className="mt-4 flex items-center text-sm text-primary font-medium">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  15+ образовательных программ для детей
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-32 px-6 bg-gradient-to-b from-background to-card/50 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ef4444' fillOpacity='0.02'%3E%3Cpath d='M0 0h80v80H0V0zm20 20v40h40V20H20zm20 35a15 15 0 1 1 0-30 15 15 0 0 1 0 30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium tracking-wider mb-6">
              ПРИСОЕДИНЯЙТЕСЬ К НАМ
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-foreground mb-8 text-balance leading-tight tracking-wide max-w-5xl mx-auto">
              Присоединяйтесь к Ассоциации и откройте новые возможности для профессионального роста и сотрудничества
            </h2>
            <div className="w-24 h-px bg-primary mx-auto mb-12"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Buttons */}
            <div className="space-y-8">
              <h3 className="text-3xl font-light mb-8 text-foreground tracking-wide">Связаться с нами</h3>

              <div className="space-y-6">
                <Button
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-medium tracking-wide rounded-none border-2 border-primary hover:scale-105 transition-all duration-300 shadow-2xl"
                >
                  <MessageCircle className="mr-3 h-6 w-6" />
                  WHATSAPP РОССИЯ
                </Button>

                <Button
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-medium tracking-wide rounded-none border-2 border-primary hover:scale-105 transition-all duration-300 shadow-2xl"
                >
                  <MessageCircle className="mr-3 h-6 w-6" />
                  WHATSAPP КАЗАХСТАН
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 text-lg font-medium tracking-wide rounded-none bg-transparent backdrop-blur-sm hover:scale-105 transition-all duration-300 shadow-2xl"
                >
                  <MessageCircle className="mr-3 h-6 w-6" />
                  TELEGRAM
                </Button>
              </div>

              <div className="pt-8 border-t border-border">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email для связи:</p>
                    <p className="text-xl font-medium text-foreground">info@association-arch.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-border/50">
              <h3 className="text-3xl font-light mb-8 text-foreground tracking-wide">Форма заявки</h3>
              <form className="space-y-6">
                <div>
                  <Input
                    placeholder="Ваше имя"
                    className="bg-background/50 border-border h-14 text-lg px-6 rounded-none"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    className="bg-background/50 border-border h-14 text-lg px-6 rounded-none"
                  />
                </div>
                <div>
                  <Input
                    placeholder="Телефон"
                    className="bg-background/50 border-border h-14 text-lg px-6 rounded-none"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Расскажите о себе и своей специализации"
                    rows={5}
                    className="bg-background/50 border-border text-lg px-6 py-4 rounded-none resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-medium tracking-wide rounded-none border-2 border-primary hover:scale-105 transition-all duration-300 shadow-2xl"
                >
                  ОТПРАВИТЬ ЗАЯВКУ
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h4 className="text-2xl font-light text-primary mb-6 tracking-wider">АССОЦИАЦИЯ</h4>
              <p className="text-muted-foreground leading-relaxed">
                Международная Ассоциация Архитекторов, Дизайнеров, Инженеров и Программистов России и Казахстана
              </p>
            </div>

            <div>
              <h5 className="text-lg font-medium mb-6 text-foreground tracking-wide">Специализации</h5>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center hover:text-primary transition-colors">
                  <Building className="h-4 w-4 mr-3 text-primary" />
                  Архитектура
                </li>
                <li className="flex items-center hover:text-primary transition-colors">
                  <Palette className="h-4 w-4 mr-3 text-primary" />
                  Дизайн
                </li>
                <li className="flex items-center hover:text-primary transition-colors">
                  <Wrench className="h-4 w-4 mr-3 text-primary" />
                  Инженерия
                </li>
                <li className="flex items-center hover:text-primary transition-colors">
                  <Cpu className="h-4 w-4 mr-3 text-primary" />
                  Программирование
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-medium mb-6 text-foreground tracking-wide">Услуги</h5>
              <ul className="space-y-3 text-muted-foreground">
                <li className="hover:text-primary transition-colors cursor-pointer">Поиск заказов</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Партнёрство</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Обучение</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Наставничество</li>
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-medium mb-6 text-foreground tracking-wide">Контакты</h5>
              <ul className="space-y-3 text-muted-foreground">
                <li className="hover:text-primary transition-colors">Россия</li>
                <li className="hover:text-primary transition-colors">Казахстан</li>
                <li className="hover:text-primary transition-colors">info@association-arch.com</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-muted-foreground text-center md:text-left">
                &copy; 2025 Международная Ассоциация Архитекторов, Дизайнеров, Инженеров и Программистов. Все права
                защищены.
              </p>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm tracking-wide"
                >
                  ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm tracking-wide"
                >
                  УСЛОВИЯ ИСПОЛЬЗОВАНИЯ
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
