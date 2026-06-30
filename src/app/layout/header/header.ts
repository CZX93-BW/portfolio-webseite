import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { translations } from '../../data/translations';
import { Language } from '../../models/language';
import { LanguageService } from '../../services/language';

/**
 * Global header component.
 *
 * Provides main section navigation, language switching and the mobile menu
 * state used by the responsive header layout.
 */
@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private readonly languageService = inject(LanguageService);

  /**
   * Tracks whether the mobile navigation panel is currently visible.
   */
  protected readonly isMobileMenuOpen = signal(false);

  /**
   * Header translation block for the currently selected language.
   */
  protected readonly text = computed(() => {
    return translations[this.languageService.currentLanguage()].header;
  });

  /**
   * Toggles the mobile menu open state.
   */
  protected toggleMobileMenu(): void {
    this.isMobileMenuOpen.update((isOpen) => !isOpen);
  }

  /**
   * Closes the mobile menu after navigation or language interaction.
   */
  protected closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }

  /**
   * Updates the active language through the shared language service.
   *
   * @param language - Language selected in the header switcher.
   */
  protected setLanguage(language: Language): void {
    this.languageService.setLanguage(language);
  }

  /**
   * Checks whether a language switcher option is currently active.
   *
   * @param language - Language code to compare.
   * @returns `true` when the option represents the active language.
   */
  protected isCurrentLanguage(language: Language): boolean {
    return this.languageService.isCurrentLanguage(language);
  }
}
