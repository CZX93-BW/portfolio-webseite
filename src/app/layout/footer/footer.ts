import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { translations } from '../../data/translations';
import { LanguageService } from '../../services/language';

/**
 * Link definition used to render footer navigation entries.
 *
 * A footer link can either point to an external URL via `href` or to an
 * internal Angular route via `routerLink`.
 */
interface FooterLink {
  label: string;
  href?: string;
  routerLink?: string;
}

/**
 * Global footer component.
 *
 * Displays portfolio metadata, legal navigation and external profile links.
 * All visible labels are read from the active translation set.
 */
@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  private readonly languageService = inject(LanguageService);

  /**
   * Footer translation block for the currently selected language.
   */
  protected readonly text = computed(() => {
    return translations[this.languageService.currentLanguage()].footer;
  });

  /**
   * Localized footer links rendered by the template.
   */
  protected readonly footerLinks = computed<FooterLink[]>(() => {
    const links = this.text().links;

    return [
      { label: links.github, href: 'https://github.com/CZX93-BW' },
      { label: links.linkedin, href: 'https://www.linkedin.com/in/bastian-wollny' },
      { label: links.email, href: 'mailto:bastian-wollny@web.de' },
      { label: links.legalNotice, routerLink: '/legal-notice' },
      { label: links.privacyPolicy, routerLink: '/privacy-policy' },
    ];
  });
}
