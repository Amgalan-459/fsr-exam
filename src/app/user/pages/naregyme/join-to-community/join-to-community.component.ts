
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-join-to-community',
  imports: [],
  templateUrl: './join-to-community.component.html',
  styleUrl: './join-to-community.component.css'
})
export class JoinToCommunityComponent {
  highlights = [
    {
      title: 'ДОРОЖНАЯ КАРТА ВНЕДРЕНИЯ SPORTCODE:',
      description: '->'
    },
    {
      title: '1. Пилотный запуск (6 месяцев)',
      description: 'MVP, интеграция с трекерами, запуск в 2–3 вузах-партнёрах'
    },
    {
      title: '2. Региональное масштабирование (ещё 6 месяцев)',
      description: 'Расширение на 10–15 вузов в 5 регионах, партнёрства с сетями фитнес-клубов.'
    },
    {
      title: '3. Федеральная интеграция (8-14 месяцев)',
      description: 'Подключение к «Госуслугам», согласование с Минспортом и Минобрнауки.'
    },
    {
      title: '4. Развитие экосистемы (параллельно с этапами 2–3)',
      description: 'Постепенный запуск маркетплейса, премиум-функций и партнёрских программ.'
    },
    {
      title: '5. Экспорт модели (стратегическая цель с 3-го года)',
      description: 'Адаптация для стран ЕАЭС после отработки модели в РФ.'
    }
  ];

  currentIndex = 0;
  private touchStartX = 0;
  private touchEndX = 0;

  constructor(private router: Router) {}

  goToSlide(index: number) { this.currentIndex = index; }

  nextSlide() { this.currentIndex = (this.currentIndex + 1) % this.highlights.length; }

  prevSlide() { this.currentIndex = (this.currentIndex - 1 + this.highlights.length) % this.highlights.length; }

  onTouchStart(event: TouchEvent) { this.touchStartX = event.changedTouches[0].screenX; }

  onTouchEnd(event: TouchEvent) {
    this.touchEndX = event.changedTouches[0].screenX;
    this.handleSwipe();
  }

  private handleSwipe() {
    const swipeDistance = this.touchEndX - this.touchStartX;
    const minSwipeDistance = 50;
    if (swipeDistance > minSwipeDistance) { this.prevSlide(); }
    else if (swipeDistance < -minSwipeDistance) { this.nextSlide(); }
  }

  join() {
    this.router.navigate(['/auth/forgot-password'])
  }
}
