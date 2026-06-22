import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

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
  protected readonly footerLinks: FooterLink[] = [
    { label: 'Github', href: 'https://github.com/CZX93-BW' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/bastian-wollny' },
    { label: 'Email', href: 'mailto:bastian-wollny@web.de' },
    { label: 'Legal Notice', routerLink: '/legal-notice' },
    { label: 'Privacy Policy', routerLink: '/privacy-policy' },
  ];
}