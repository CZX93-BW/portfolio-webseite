import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { translations } from '../../data/translations';
import { LanguageService } from '../../services/language';

interface FooterLink {
  label: string;
  href?: string;
  routerLink?: string;
}

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  private readonly languageService = inject(LanguageService);

  protected readonly text = computed(() => {
    return translations[this.languageService.currentLanguage()].footer;
  });

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