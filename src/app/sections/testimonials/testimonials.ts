import { Component, computed, inject } from '@angular/core';

import { translations } from '../../data/translations';
import { LanguageService } from '../../services/language';

@Component({
  selector: 'app-testimonials',
  imports: [],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
})
export class TestimonialsComponent {
  private readonly languageService = inject(LanguageService);

  protected readonly text = computed(() => {
    return translations[this.languageService.currentLanguage()].testimonials;
  });

  protected readonly testimonials = computed(() => {
    return this.text().items;
  });

  protected activeIndex = 1;

  protected showPreviousTestimonial(): void {
    this.activeIndex = this.getPreviousIndex();
  }

  protected showNextTestimonial(): void {
    this.activeIndex = this.getNextIndex();
  }

  protected selectTestimonial(index: number): void {
    this.activeIndex = index;
  }

  protected getCardClass(index: number): string {
    if (index === this.activeIndex) {
      return 'testimonials__card--active';
    }

    if (index === this.getPreviousIndex()) {
      return 'testimonials__card--previous';
    }

    if (index === this.getNextIndex()) {
      return 'testimonials__card--next';
    }

    return 'testimonials__card--hidden';
  }

  private getPreviousIndex(): number {
    return this.activeIndex === 0
      ? this.testimonials().length - 1
      : this.activeIndex - 1;
  }

  private getNextIndex(): number {
    return this.activeIndex === this.testimonials().length - 1
      ? 0
      : this.activeIndex + 1;
  }
}