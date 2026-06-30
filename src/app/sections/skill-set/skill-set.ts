import { Component, computed, inject } from '@angular/core';

import { translations } from '../../data/translations';
import { LanguageService } from '../../services/language';

/**
 * Single skill entry rendered in the skill grid.
 */
interface SkillItem {
  /**
   * Visible skill label.
   */
  name: string;

  /**
   * Public asset path to the skill icon.
   */
  iconPath: string;
}

/**
 * Internal grouping for maintaining skills by category.
 *
 * Group titles are used for data organization and do not need to be rendered as
 * visible headings in the current design.
 */
interface SkillGroup {
  title: string;
  skills: SkillItem[];
}

/**
 * Skill set section component.
 *
 * Displays the technology overview and keeps the skill data grouped internally
 * while exposing a flat list to the template.
 */
@Component({
  selector: 'app-skill-set',
  imports: [],
  templateUrl: './skill-set.html',
  styleUrl: './skill-set.scss',
})
export class SkillSet {
  private readonly languageService = inject(LanguageService);

  /**
   * Skill-section translation block for the active language.
   */
  protected readonly text = computed(() => {
    return translations[this.languageService.currentLanguage()].skills;
  });

  /**
   * Internally grouped skill data.
   */
  protected readonly skillGroups: SkillGroup[] = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML', iconPath: 'icons/skillset/html.svg' },
        { name: 'CSS', iconPath: 'icons/skillset/css.svg' },
        { name: 'JavaScript', iconPath: 'icons/skillset/javascript.svg' },
        { name: 'Material Design', iconPath: 'icons/skillset/material_design.svg' },
        { name: 'TypeScript', iconPath: 'icons/skillset/typescript.svg' },
        { name: 'Angular', iconPath: 'icons/skillset/angular.svg' },
        { name: 'Supabase', iconPath: 'icons/skillset/supabase.svg' },
        { name: 'Git', iconPath: 'icons/skillset/git.svg' },
        { name: 'REST-API', iconPath: 'icons/skillset/rest_api.svg' },
        { name: 'Scrum', iconPath: 'icons/skillset/scrum.svg' },
        { name: 'Growth mindset', iconPath: 'icons/skillset/growthmindset.svg' },
      ],
    },
  ];

  /**
   * Flat skill list consumed by the template.
   */
  protected get skills(): SkillItem[] {
    return this.skillGroups.flatMap((group) => group.skills);
  }
}
