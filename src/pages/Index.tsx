import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Flame" className="text-primary" size={32} />
            <span className="text-2xl font-bold text-foreground">ТеплоКот</span>
          </div>
          <nav className="hidden md:flex gap-6 text-foreground">
            <button onClick={() => scrollToSection('hero')} className="hover:text-primary transition-colors">Главная</button>
            <button onClick={() => scrollToSection('benefits')} className="hover:text-primary transition-colors">Преимущества</button>
            <button onClick={() => scrollToSection('models')} className="hover:text-primary transition-colors">Модели</button>
            <button onClick={() => scrollToSection('pricing')} className="hover:text-primary transition-colors">Цены</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">Контакты</button>
          </nav>
          <Button onClick={() => scrollToSection('contact')} className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Заказать
          </Button>
        </div>
      </header>

      <section id="hero" className="relative py-20 md:py-32 bg-gradient-to-br from-primary/20 via-black to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Угольные котлы нового поколения
              </h1>
              <p className="text-xl text-muted-foreground">
                Экономичное отопление с высоким КПД до 92%. Низкий расход угля и надёжность на годы.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => scrollToSection('contact')} className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Icon name="Phone" className="mr-2" size={20} />
                  Получить консультацию
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('models')}>
                  <Icon name="List" className="mr-2" size={20} />
                  Выбрать модель
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/05d7f894-a11c-4f57-835b-9ff1370c6611/files/f39313e6-efb0-494f-9e85-7239492c1212.jpg" 
                alt="Угольный котёл" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Почему выбирают наши котлы
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Современные технологии для максимальной эффективности и экономии
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg animate-fade-in">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="TrendingDown" className="text-primary" size={24} />
                </div>
                <CardTitle>Низкий расход угля</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Экономия до 40% топлива по сравнению с обычными котлами благодаря улучшенной камере сгорания
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary transition-all hover:shadow-lg animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Zap" className="text-secondary" size={24} />
                </div>
                <CardTitle>Высокий КПД до 92%</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Максимальная эффективность теплопередачи за счёт многоходового теплообменника
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Clock" className="text-primary" size={24} />
                </div>
                <CardTitle>Автономность до 24 часов</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Большая топочная камера позволяет работать на одной загрузке сутки
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary transition-all hover:shadow-lg animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Shield" className="text-secondary" size={24} />
                </div>
                <CardTitle>Гарантия 5 лет</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Долговечность и надёжность подтверждены многолетней эксплуатацией
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="models" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Модельный ряд
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Подберите котёл под площадь вашего дома
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all animate-scale-in">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">ТК-15</CardTitle>
                  <Icon name="Home" className="text-primary" size={32} />
                </div>
                <CardDescription className="text-lg">Для небольших домов</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <Icon name="Ruler" className="text-muted-foreground" size={20} />
                  <span>До 150 м²</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Flame" className="text-muted-foreground" size={20} />
                  <span>Мощность 15 кВт</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Gauge" className="text-muted-foreground" size={20} />
                  <span>КПД до 90%</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Clock" className="text-muted-foreground" size={20} />
                  <span>Автономность 18 часов</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all border-2 border-primary animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">ТК-25</CardTitle>
                  <Icon name="Building" className="text-primary" size={32} />
                </div>
                <CardDescription className="text-lg">Оптимальный выбор</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <Icon name="Ruler" className="text-muted-foreground" size={20} />
                  <span>До 250 м²</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Flame" className="text-muted-foreground" size={20} />
                  <span>Мощность 25 кВт</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Gauge" className="text-muted-foreground" size={20} />
                  <span>КПД до 92%</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Clock" className="text-muted-foreground" size={20} />
                  <span>Автономность 24 часа</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">ТК-40</CardTitle>
                  <Icon name="Factory" className="text-primary" size={32} />
                </div>
                <CardDescription className="text-lg">Для больших объектов</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <Icon name="Ruler" className="text-muted-foreground" size={20} />
                  <span>До 400 м²</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Flame" className="text-muted-foreground" size={20} />
                  <span>Мощность 40 кВт</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Gauge" className="text-muted-foreground" size={20} />
                  <span>КПД до 92%</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Clock" className="text-muted-foreground" size={20} />
                  <span>Автономность 30 часов</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Цены и комплектация
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Выгодные предложения с полной комплектацией
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="hover:shadow-xl transition-all">
              <CardHeader className="bg-muted/50">
                <CardTitle className="text-2xl text-center">Базовая</CardTitle>
                <div className="text-center mt-4">
                  <span className="text-4xl font-bold text-primary">89 900 ₽</span>
                  <p className="text-muted-foreground mt-2">ТК-15</p>
                </div>
              </CardHeader>
              <CardContent className="pt-6 space-y-3">
                <div className="flex items-start gap-2">
                  <Icon name="Check" className="text-secondary mt-1" size={20} />
                  <span>Котёл ТК-15</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Check" className="text-secondary mt-1" size={20} />
                  <span>Дымоход (комплект)</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Check" className="text-secondary mt-1" size={20} />
                  <span>Регулятор тяги</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Check" className="text-secondary mt-1" size={20} />
                  <span>Инструкция и гарантия</span>
                </div>
                <Button className="w-full mt-6" variant="outline" onClick={() => scrollToSection('contact')}>
                  Заказать
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all border-2 border-primary relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                Популярный
              </div>
              <CardHeader className="bg-primary/10">
                <CardTitle className="text-2xl text-center">Стандарт</CardTitle>
                <div className="text-center mt-4">
                  <span className="text-4xl font-bold text-primary">129 900 ₽</span>
                  <p className="text-muted-foreground mt-2">ТК-25</p>
                </div>
              </CardHeader>
              <CardContent className="pt-6 space-y-3">
                <div className="flex items-start gap-2">
                  <Icon name="Check" className="text-secondary mt-1" size={20} />
                  <span>Котёл ТК-25</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Check" className="text-secondary mt-1" size={20} />
                  <span>Дымоход (комплект)</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Check" className="text-secondary mt-1" size={20} />
                  <span>Регулятор тяги</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Check" className="text-secondary mt-1" size={20} />
                  <span>Автоматика безопасности</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Check" className="text-secondary mt-1" size={20} />
                  <span>Монтаж и пуско-наладка</span>
                </div>
                <Button className="w-full mt-6 bg-primary hover:bg-primary/90" onClick={() => scrollToSection('contact')}>
                  Заказать
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all">
              <CardHeader className="bg-muted/50">
                <CardTitle className="text-2xl text-center">Премиум</CardTitle>
                <div className="text-center mt-4">
                  <span className="text-4xl font-bold text-primary">179 900 ₽</span>
                  <p className="text-muted-foreground mt-2">ТК-40</p>
                </div>
              </CardHeader>
              <CardContent className="pt-6 space-y-3">
                <div className="flex items-start gap-2">
                  <Icon name="Check" className="text-secondary mt-1" size={20} />
                  <span>Котёл ТК-40</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Check" className="text-secondary mt-1" size={20} />
                  <span>Дымоход (усиленный)</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Check" className="text-secondary mt-1" size={20} />
                  <span>Регулятор тяги</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Check" className="text-secondary mt-1" size={20} />
                  <span>Автоматика безопасности</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Check" className="text-secondary mt-1" size={20} />
                  <span>Монтаж и пуско-наладка</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Check" className="text-secondary mt-1" size={20} />
                  <span>Сервисное обслуживание (1 год)</span>
                </div>
                <Button className="w-full mt-6" variant="outline" onClick={() => scrollToSection('contact')}>
                  Заказать
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-br from-secondary/20 via-black to-primary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-foreground">
              Оставьте заявку
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Наш специалист свяжется с вами для консультации и расчёта стоимости
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Контактная информация</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold">Телефон</p>
                      <p className="text-muted-foreground">+7 (800) 123-45-67</p>
                      <p className="text-sm text-muted-foreground">Звонок бесплатный</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" className="text-secondary" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-muted-foreground">info@teplokot.ru</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold">Адрес</p>
                      <p className="text-muted-foreground">г. Москва, ул. Промышленная, 15</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" className="text-secondary" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold">Режим работы</p>
                      <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                      <p className="text-muted-foreground">Сб-Вс: 10:00 - 16:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Форма обратной связи</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Ваше имя
                      </label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Иван Иванов"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Телефон
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+7 (999) 123-45-67"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Сообщение
                      </label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Укажите площадь дома и интересующую модель"
                        rows={4}
                      />
                    </div>

                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                      <Icon name="Send" className="mr-2" size={20} />
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Flame" className="text-primary" size={32} />
                <span className="text-2xl font-bold">ТеплоКот</span>
              </div>
              <p className="text-white/70">
                Надёжные угольные котлы для вашего дома с 2010 года
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Навигация</h3>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('benefits')} className="block text-white/70 hover:text-primary transition-colors">
                  Преимущества
                </button>
                <button onClick={() => scrollToSection('models')} className="block text-white/70 hover:text-primary transition-colors">
                  Модели
                </button>
                <button onClick={() => scrollToSection('pricing')} className="block text-white/70 hover:text-primary transition-colors">
                  Цены
                </button>
                <button onClick={() => scrollToSection('contact')} className="block text-white/70 hover:text-primary transition-colors">
                  Контакты
                </button>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Контакты</h3>
              <div className="space-y-2 text-white/70">
                <p>+7 (800) 123-45-67</p>
                <p>info@teplokot.ru</p>
                <p>г. Москва, ул. Промышленная, 15</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/70">
            <p>&copy; 2024 ТеплоКот. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}