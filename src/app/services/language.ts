import { Injectable, signal } from '@angular/core';

import { Language } from '../models/language';

/**
 * Stores and updates the active interface language.
 *
 * The service exposes the selected language as a readonly signal so components
 * can reactively read translations without mutating the language state directly.
 */
@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly activeLanguage = signal<Language>('en');

  /**
   * Readonly signal containing the currently selected language.
   */
  readonly currentLanguage = this.activeLanguage.asReadonly();

  /**
   * Updates the active application language.
   *
   * @param language - Language code selected by the user.
   */
  setLanguage(language: Language): void {
    this.activeLanguage.set(language);
  }

  /**
   * Checks whether the provided language is currently active.
   *
   * @param language - Language code to compare against the active language.
   * @returns `true` when the given language is selected.
   */
  isCurrentLanguage(language: Language): boolean {
    return this.currentLanguage() === language;
  }
}
