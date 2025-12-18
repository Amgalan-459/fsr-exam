
import { Component } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-info-metrics',
  imports: [],
  templateUrl: './info-metrics.component.html',
  styleUrl: './info-metrics.component.css'
})
export class InfoMetricsComponent {
  metrics = [
    { value: 'SPORTCODE:', label: 'ГЕЙМИФИКАЦИЯ СПОРТА В ПЯТИ ПРИНЦИПАХ'},
    { value: 'Цифровой след активности:', label: 'Реальные тренировки фиксируются через API российских фитнестрекеров и QR-метки на спортивных объектах.' },
    { value: 'Игровая ценность действий:', label: 'Каждое подтверждённое действие конвертируется в очки опыта и игровую валюту внутри персонализированного профиляаватара.' },
    { value: 'Социальный азарт и рейтинги:', label: 'Прогресс пользователя влияет на позицию его команды (вуз, факультет, город) в публичных рейтингах, создавая дух здорового соперничества.' },
    { value: 'Связь виртуального и реального:', label: 'Игровая прокачка открывает доступ к реальным бонусам: скидкам в спортивных магазинах, партнёрским абонементам, участию в эксклюзивных мероприятиях.' },
    { value: 'Инструмент для государства:', label: 'Платформа агрегирует анонимные данные об использовании спортивной инфраструктуры, предоставляя аналитику для эффективного управления объектами и программами.' }
  ];
  currentIndex = 0;

  private touchStartX = 0;
  private touchEndX = 0;

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.metrics.length;
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.metrics.length) % this.metrics.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }

  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.changedTouches[0].screenX;
  }

  onTouchEnd(event: TouchEvent) {
    this.touchEndX = event.changedTouches[0].screenX;
    this.handleSwipe();
  }

  private handleSwipe() {
    const swipeDistance = this.touchEndX - this.touchStartX;
    const minSwipeDistance = 50; // минимальное расстояние для свайпа

    if (swipeDistance > minSwipeDistance) {
      // свайп вправо
      this.prevSlide();
    } else if (swipeDistance < -minSwipeDistance) {
      // свайп влево
      this.nextSlide();
    }
  }
}
