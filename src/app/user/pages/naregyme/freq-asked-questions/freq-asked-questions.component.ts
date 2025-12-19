
import { Component } from '@angular/core';

@Component({
  selector: 'app-freq-asked-questions',
  imports: [],
  templateUrl: './freq-asked-questions.component.html',
  styleUrl: './freq-asked-questions.component.css'
})
export class FreqAskedQuestionsComponent {
  faqs = [
    {
      question: 'Достижение государственных целей в спорте через цифровую мотивацию.',
      answer: 'Платформа становится рабочим инструментом для выполнения показателей нацпроекта «Спорт — норма жизни» за счёт превращения в личные игровые достижения и социальное соперничество молодёжи.'
    },
    {
      question: 'Повышение эффективности управления социальной инфраструктурой.',
      answer: 'Аналитика на основе анонимных данных об использовании объектов даёт органам власти инструмент для принятия решений, что ведёт к рациональному использованию бюджетных средств.'
    },
    {
      question: 'Формирование здоровой цифровой среды сообществ.',
      answer: 'Проект создаёт безопасную и социально-полезную альтернативу развлекательному цифровому контенту, воспитывая привычку к ЗОЖ и укрепляя связи внутри учебных групп, вузов и локальных сообществ через общие спортивные цели.'
    }
  ];

  currentIndex = 0;
  private touchStartX = 0;
  private touchEndX = 0;

  goToSlide(index: number) { this.currentIndex = index; }

  nextSlide() { this.currentIndex = (this.currentIndex + 1) % this.faqs.length; }

  prevSlide() { this.currentIndex = (this.currentIndex - 1 + this.faqs.length) % this.faqs.length; }

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
}
