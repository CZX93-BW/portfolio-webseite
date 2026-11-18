import { Component, computed, ElementRef, inject, signal, viewChildren } from '@angular/core';

import { sharedSkills, SkillItem, skillGroups } from '../../data/skills';
import { translations } from '../../data/translations';
import { LanguageService } from '../../services/language';

/** Displays grouped skills with keyboard-accessible tabs and stable panel dimensions. */
@Component({
  selector: 'app-skill-set',
  imports: [],
  templateUrl: './skill-set.html',
  styleUrl: './skill-set.scss',
})
export class SkillSet {
  private readonly languageService = inject(LanguageService);
  private readonly tabs = viewChildren<ElementRef<HTMLButtonElement>>('skillTab');

  protected readonly skillGroups = skillGroups;
  protected readonly sharedSkills = sharedSkills;
  protected readonly activeCategory = signal(0);
  protected readonly text = computed(
    () => translations[this.languageService.currentLanguage()].skills,
  );

  /** Resolves translated practice labels while retaining product names. */
  protected skillName(skill: SkillItem): string {
    return skill.labelKey ? this.text().names[skill.labelKey] : skill.name;
  }

  /** Selects and focuses tabs with arrow keys, Home and End using automatic activation. */
  protected navigateTabs(event: KeyboardEvent, index: number): void {
    const count = this.skillGroups.length;
    const destinations: Record<string, number> = {
      ArrowRight: (index + 1) % count,
      ArrowLeft: (index + count - 1) % count,
      Home: 0,
      End: count - 1,
    };
    const next = destinations[event.key];
    if (next === undefined) return;
    event.preventDefault();
    this.activeCategory.set(next);
    this.tabs()[next]?.nativeElement.focus();
  }
}
