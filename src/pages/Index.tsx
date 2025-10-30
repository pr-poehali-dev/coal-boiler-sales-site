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
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
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
          <Button onClick={() => scrollToSection('contact')} className="bg-primary hover:bg-primary/90 text-white">
            Заказать
          </Button>
        </div>
      </header>

      <section id="hero" className="relative py-32 md:py-48 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://cdn.poehali.dev/files/dfbd9923-3951-4ef4-9a1c-945becb5303a.jpg" 
            alt="Горящий уголь" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight" style={{
              background: 'linear-gradient(135deg, #EF7F1A 0%, #FF6B35 50%, #DC2626 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 40px rgba(239, 127, 26, 0.3)'
            }}>
              Угольные котлы нового поколения
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow-lg">
              Экономичное отопление с высоким КПД до 92%. Низкий расход угля и надёжность на годы.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Button size="lg" onClick={() => scrollToSection('contact')} className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 shadow-xl shadow-primary/20">
                <Icon name="Phone" className="mr-2" size={24} />
                Получить консультацию
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('models')} className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                <Icon name="List" className="mr-2" size={24} />
                Выбрать модель
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
      </section>

      <section id="benefits" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Почему выбирают наши котлы
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Современные технологии для максимальной эффективности и экономии
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 border-border hover:border-primary transition-all hover:shadow-lg animate-fade-in bg-white">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="TrendingDown" className="text-primary" size={24} />
                </div>
                <CardTitle className="text-foreground">Низкий расход угля</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Экономия до 40% топлива по сравнению с обычными котлами благодаря улучшенной камере сгорания
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-secondary transition-all hover:shadow-lg animate-fade-in bg-white" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Zap" className="text-secondary" size={24} />
                </div>
                <CardTitle className="text-foreground">Высокий КПД до 92%</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Максимальная эффективность теплопередачи за счёт многоходового теплообменника
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-primary transition-all hover:shadow-lg animate-fade-in bg-white" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Clock" className="text-primary" size={24} />
                </div>
                <CardTitle className="text-foreground">Автономность до 24 часов</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Большая топочная камера позволяет работать на одной загрузке сутки
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-secondary transition-all hover:shadow-lg animate-fade-in bg-white" style={{ animationDelay: '0.3s' }}>
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Shield" className="text-secondary" size={24} />
                </div>
                <CardTitle className="text-foreground">Гарантия 5 лет</CardTitle>
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
            <Card className="hover:shadow-xl transition-all animate-scale-in bg-white">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl text-foreground">ТК-15</CardTitle>
                  <Icon name="Home" className="text-primary" size={32} />
                </div>
                <CardDescription className="text-lg">Для небольших домов</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Мощность:</span>
                    <span className="font-semibold">15 кВт</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Площадь обогрева:</span>
                    <span className="font-semibold">до 150 м²</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Объём загрузки:</span>
                    <span className="font-semibold">30 кг</span>
                  </div>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white" onClick={() => scrollToSection('contact')}>
                  Узнать цену
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all animate-scale-in border-2 border-primary bg-white" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="inline-block bg-primary text-white text-xs px-2 py-1 rounded mb-2">
                      Популярный
                    </div>
                    <CardTitle className="text-2xl text-foreground">ТК-25</CardTitle>
                  </div>
                  <Icon name="Home" className="text-primary" size={32} />
                </div>
                <CardDescription className="text-lg">Для средних домов</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Мощность:</span>
                    <span className="font-semibold">25 кВт</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Площадь обогрева:</span>
                    <span className="font-semibold">до 250 м²</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Объём загрузки:</span>
                    <span className="font-semibold">50 кг</span>
                  </div>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white" onClick={() => scrollToSection('contact')}>
                  Узнать цену
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all animate-scale-in bg-white" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl text-foreground">ТК-40</CardTitle>
                  <Icon name="Home" className="text-primary" size={32} />
                </div>
                <CardDescription className="text-lg">Для больших домов</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Мощность:</span>
                    <span className="font-semibold">40 кВт</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Площадь обогрева:</span>
                    <span className="font-semibold">до 400 м²</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Объём загрузки:</span>
                    <span className="font-semibold">80 кг</span>
                  </div>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white" onClick={() => scrollToSection('contact')}>
                  Узнать цену
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Цены и комплектация
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Прозрачное ценообразование с учётом всех работ
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="bg-white">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl text-foreground">Базовая комплектация</CardTitle>
                    <CardDescription className="mt-2">Котёл с основным оборудованием</CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-primary">от 45 000 ₽</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-secondary" size={20} />
                    <span>Угольный котёл выбранной модели</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-secondary" size={20} />
                    <span>Набор инструментов для обслуживания</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-secondary" size={20} />
                    <span>Инструкция по эксплуатации</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-secondary" size={20} />
                    <span>Гарантия 5 лет</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary bg-white">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <div className="inline-block bg-primary text-white text-xs px-2 py-1 rounded mb-2">
                      Рекомендуем
                    </div>
                    <CardTitle className="text-2xl text-foreground">Под ключ</CardTitle>
                    <CardDescription className="mt-2">Полный монтаж и подключение</CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-primary">от 75 000 ₽</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-secondary" size={20} />
                    <span>Всё из базовой комплектации</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-secondary" size={20} />
                    <span>Доставка до объекта</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-secondary" size={20} />
                    <span>Монтаж и подключение котла</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-secondary" size={20} />
                    <span>Пусконаладочные работы</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-secondary" size={20} />
                    <span>Обучение эксплуатации</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-br from-muted/30 to-muted/10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-foreground">
              Закажите консультацию
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              Наши специалисты помогут подобрать оптимальную модель для вашего дома
            </p>

            <Card className="bg-white">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Телефон"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Комментарий (площадь дома, город и т.д.)"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white" size="lg">
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить заявку
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>

            <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <Icon name="Phone" className="mx-auto text-primary" size={32} />
                <div className="font-semibold text-foreground">Телефон</div>
                <div className="text-muted-foreground">+7 (999) 123-45-67</div>
              </div>
              <div className="space-y-2">
                <Icon name="Mail" className="mx-auto text-primary" size={32} />
                <div className="font-semibold text-foreground">Email</div>
                <div className="text-muted-foreground">info@teplokot.ru</div>
              </div>
              <div className="space-y-2">
                <Icon name="Clock" className="mx-auto text-primary" size={32} />
                <div className="font-semibold text-foreground">Режим работы</div>
                <div className="text-muted-foreground">Пн-Пт: 9:00-18:00</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Flame" className="text-primary" size={28} />
              <span className="text-xl font-bold">ТеплоКот</span>
            </div>
            <div className="text-center md:text-left">
              <p className="text-sm text-background/70">
                © 2024 ТеплоКот. Все права защищены.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
