import { Component, computed, inject } from '@angular/core';

import { translations } from '../../data/translations';
import { LanguageService } from '../../services/language';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  private readonly languageService = inject(LanguageService);

  protected readonly text = computed(() => {
    return translations[this.languageService.currentLanguage()].hero;
  });

  protected readonly marqueeItems = computed(() => {
    const items = this.text().marqueeItems;
    return [...items, ...items, ...items, ...items];
  });
}