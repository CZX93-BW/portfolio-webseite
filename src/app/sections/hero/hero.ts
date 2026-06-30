import { Component, computed, inject } from '@angular/core';

import { translations } from '../../data/translations';
import { LanguageService } from '../../services/language';

/**
 * Hero section component.
 *
 * Displays the intro headline, call-to-action links and duplicated marquee
 * items used by the continuous ticker animation.
 */
@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  private readonly languageService = inject(LanguageService);

  /**
   * Hero-section translation block for the active language.
   */
  protected readonly text = computed(() => {
    return translations[this.languageService.currentLanguage()].hero;
  });

  /**
   * Repeats marquee items to create a seamless horizontal animation.
   */
  protected readonly marqueeItems = computed(() => {
    const items = this.text().marqueeItems;
    return [...items, ...items, ...items, ...items];
  });
}
