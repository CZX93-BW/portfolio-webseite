import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { translations } from '../../data/translations';
import { LanguageService } from '../../services/language';

/**
 * Privacy policy page component.
 *
 * Renders the localized privacy policy content as a separate route so it can be
 * linked directly from the footer and contact-form consent copy.
 */
@Component({
  selector: 'app-privacy-policy',
  imports: [RouterLink],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.scss',
})
export class PrivacyPolicyComponent {
  private readonly languageService = inject(LanguageService);

  /**
   * Privacy policy translation block for the currently selected language.
   */
  protected readonly text = computed(() => {
    return translations[this.languageService.currentLanguage()].privacyPolicy;
  });
}
