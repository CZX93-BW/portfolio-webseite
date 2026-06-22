import { Component, computed, inject } from '@angular/core';

import { translations } from '../../data/translations';
import { LanguageService } from '../../services/language';

interface SkillItem {
  name: string;
  iconPath: string;
}

interface SkillGroup {
  title: string;
  skills: SkillItem[];
}

@Component({
  selector: 'app-skill-set',
  imports: [],
  templateUrl: './skill-set.html',
  styleUrl: './skill-set.scss',
})
export class SkillSet {
  private readonly languageService = inject(LanguageService);

  protected readonly text = computed(() => {
    return translations[this.languageService.currentLanguage()].skills;
  });

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
        { name: 'Vue.js', iconPath: 'icons/skillset/vuejs.svg' },
      ],
    },
  ];

  protected get skills(): SkillItem[] {
    return this.skillGroups.flatMap((group) => group.skills);
  }
}