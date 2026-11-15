import { Component, computed, ElementRef, HostListener, inject, OnInit, signal, viewChild } from '@angular/core';
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
export class Header implements OnInit {
  private readonly languageService = inject(LanguageService);
  private readonly menuButton = viewChild<ElementRef<HTMLButtonElement>>('menuButton');

  /**
   * Tracks whether the mobile navigation panel is currently visible.
   */
  protected readonly isMobileMenuOpen = signal(false);

  /**
   * Indicates whether the page is scrolled beyond the top.
   */
  protected readonly hasScrolled = signal(false);

  /**
   * Initializes the header state when the page loads.
   */
  ngOnInit(): void {
    this.updateScrollState();
  }

  /**
   * Updates the header contrast when the viewport scrolls.
   */
  @HostListener('window:scroll')
  protected updateScrollState(): void {
    this.hasScrolled.set(window.scrollY > 24);
  }

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
   * Closes the mobile navigation panel.
   */
  protected closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }

  /** Closes the mobile navigation with Escape and restores its trigger focus. */
  @HostListener('document:keydown.escape')
  protected closeMobileMenuWithEscape(): void {
    if (!this.isMobileMenuOpen()) return;
    this.closeMobileMenu();
    this.menuButton()?.nativeElement.focus();
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
