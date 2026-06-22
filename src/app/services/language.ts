import { Injectable, signal } from '@angular/core';

import { Language } from '../models/language';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly activeLanguage = signal<Language>('en');

  readonly currentLanguage = this.activeLanguage.asReadonly();

  setLanguage(language: Language): void {
    this.activeLanguage.set(language);
  }

  isCurrentLanguage(language: Language): boolean {
    return this.currentLanguage() === language;
  }
}