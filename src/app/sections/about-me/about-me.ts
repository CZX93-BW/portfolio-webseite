import { Component, computed, inject } from '@angular/core';

import { translations } from '../../data/translations';
import { LanguageService } from '../../services/language';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss',
})
export class AboutMe {
  private readonly languageService = inject(LanguageService);

  protected readonly text = computed(() => {
    return translations[this.languageService.currentLanguage()].about;
  });
}