
import { Component } from '@angular/core';

@Component({
  selector: 'app-reviews',
  imports: [],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent {
  reviews = [
    { 
      head: '01. Пользователь + действие:',
      text: 'Бег, посещение секции, тренировка в зале.'
    },
    { 
      head: '02. Подтверждение активности:',
      text: 'Данные с фитнестрекера (API) / QR-код на объекте / отметка тренера.' 
    },
    { 
      head: '03. Обработка в SportCode:',
      text: 'Начисление очков опыта, игровой валюты, обновление статистики.' 
    },
    { 
      head: '04. Игровая механика:',
      text: 'Прокачка аватара, выполнение квестов, рост в рейтингах (личных, командных, вузовских).' 
    },
    { 
      head: '05. Вознаграждение:',
      text: 'Виртуальные бонусы (значки, уровни) и реальные (скидки, абонементы, мерч).' 
    },
    { 
      head: '06. Обратная связь и аналитика:',
      text: 'Персонализированные рекомендации по тренировкам + данные использовании инфраструктуры.' 
    }
  ];

  currentIndex = 0;
  private touchStartX = 0;
  private touchEndX = 0;

  goToSlide(index: number) {
    this.currentIndex = index;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.reviews.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.reviews.length) % this.reviews.length;
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
    const minSwipeDistance = 50;

    if (swipeDistance > minSwipeDistance) {
      this.prevSlide();
    } else if (swipeDistance < -minSwipeDistance) {
      this.nextSlide();
    }
  }
}
