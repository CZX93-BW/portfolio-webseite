import { Component, computed, inject } from '@angular/core';

import { translations } from '../../data/translations';
import { LanguageService } from '../../services/language';

/**
 * Testimonials section component.
 *
 * Renders a small carousel from localized testimonial data and calculates card
 * classes for active, previous, next and hidden carousel states.
 */
@Component({
  selector: 'app-testimonials',
  imports: [],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
})
export class TestimonialsComponent {
  private readonly languageService = inject(LanguageService);

  /**
   * Testimonials translation block for the active language.
   */
  protected readonly text = computed(() => {
    return translations[this.languageService.currentLanguage()].testimonials;
  });

  /**
   * Localized testimonial items used by the carousel.
   */
  protected readonly testimonials = computed(() => {
    return this.text().items;
  });

  /**
   * Index of the currently active testimonial card.
   */
  protected activeIndex = 1;

  /**
   * Moves the carousel to the previous testimonial.
   */
  protected showPreviousTestimonial(): void {
    this.activeIndex = this.getPreviousIndex();
  }

  /**
   * Moves the carousel to the next testimonial.
   */
  protected showNextTestimonial(): void {
    this.activeIndex = this.getNextIndex();
  }

  /**
   * Selects a testimonial by index.
   *
   * @param index - Target testimonial index.
   */
  protected selectTestimonial(index: number): void {
    this.activeIndex = index;
  }

  /**
   * Returns the visual state class for a testimonial card.
   *
   * @param index - Card index to classify.
   * @returns BEM modifier class for the carousel position.
   */
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

  /**
   * Calculates the previous testimonial index with wraparound.
   */
  private getPreviousIndex(): number {
    return this.activeIndex === 0
      ? this.testimonials().length - 1
      : this.activeIndex - 1;
  }

  /**
   * Calculates the next testimonial index with wraparound.
   */
  private getNextIndex(): number {
    return this.activeIndex === this.testimonials().length - 1
      ? 0
      : this.activeIndex + 1;
  }
}
