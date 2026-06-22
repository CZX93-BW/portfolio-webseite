import { Component, computed, inject, signal } from '@angular/core';
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

  protected readonly isMobileMenuOpen = signal(false);

  protected readonly text = computed(() => {
    return translations[this.languageService.currentLanguage()].header;
  });

  protected toggleMobileMenu(): void {
    this.isMobileMenuOpen.update((isOpen) => !isOpen);
  }

  protected closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }

  protected setLanguage(language: Language): void {
    this.languageService.setLanguage(language);
  }

  protected isCurrentLanguage(language: Language): boolean {
    return this.languageService.isCurrentLanguage(language);
  }
}