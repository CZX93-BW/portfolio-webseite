import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { translations } from '../../data/translations';
import { LanguageService } from '../../services/language';

/**
 * Legal notice page component.
 *
 * Renders the localized legal notice content and exposes a back navigation link
 * to return from the standalone legal route to the main portfolio page.
 */
@Component({
  selector: 'app-legal-notice',
  imports: [RouterLink],
  templateUrl: './legal-notice.html',
  styleUrl: './legal-notice.scss',
})
export class LegalNoticeComponent {
  private readonly languageService = inject(LanguageService);

  /**
   * Legal notice translation block for the currently selected language.
   */
  protected readonly text = computed(() => {
    return translations[this.languageService.currentLanguage()].legalNotice;
  });
}
