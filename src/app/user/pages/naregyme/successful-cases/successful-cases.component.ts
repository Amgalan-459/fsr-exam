import { Component } from '@angular/core';

@Component({
  selector: 'app-successful-cases',
  imports: [],
  templateUrl: './successful-cases.component.html',
  styleUrl: './successful-cases.component.css'
})
export class SuccessfulCasesComponent {
  metrics = [
    { value: 'Релевантность', label: '->'},
    { value: '1) Импортозамещение в цифровой сфере:', label: 'Работа с API отечественных трекеров (Сбер Кольцо) и приоритет российским ITрешениям вместо зависимых от санкций аналогов.' },
    { value: '2) Поддержка национальных проектов:', label: 'Прямой инструмент для выполнения целей федерального проекта «Спорт — норма жизни» по вовлечению.' },
    { value: '3) Суверенитет данных:', label: 'Все данные пользователей хранятся и обрабатываются на российских серверах в соответствии с 152-ФЗ, без риска утечки за рубеж.' },
    { value: '4) Синергия с инфраструктурой:', label: 'Не требует строительства новых объектов, а повышает эффективность использования уже существующей спортивной инфраструктуры.' },
    { value: '5) Стимул для локальной экономики:', label: 'Партнёрская программа с российскими спортивными брендами, магазинами и производителями экипировки.' }
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
