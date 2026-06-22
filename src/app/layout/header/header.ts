import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { translations } from '../../data/translations';
import { Language } from '../../models/language';
import { LanguageService } from '../../services/language';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private readonly languageService = inject(LanguageService);

  protected readonly text = computed(() => {
    return translations[this.languageService.currentLanguage()].header;
  });

  protected setLanguage(language: Language): void {
    this.languageService.setLanguage(language);
  }

  protected isCurrentLanguage(language: Language): boolean {
    return this.languageService.isCurrentLanguage(language);
  }
}