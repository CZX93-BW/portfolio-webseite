import { Component, computed, inject } from '@angular/core';

import { translations } from '../../data/translations';
import { LanguageService } from '../../services/language';

/**
 * About section component.
 *
 * Displays the personal introduction text and supporting profile highlights
 * using the currently selected translation.
 */
@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss',
})
export class AboutMe {
  private readonly languageService = inject(LanguageService);

  /**
   * About-section translation block for the active language.
   */
  protected readonly text = computed(() => {
    return translations[this.languageService.currentLanguage()].about;
  });
}
