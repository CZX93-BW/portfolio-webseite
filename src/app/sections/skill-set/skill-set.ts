import { Component } from '@angular/core';

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
    /* {
      title: 'Backend',
      skills: [
        { name: 'Python', iconPath: 'icons/skillset/python.svg' },
        { name: 'Django', iconPath: 'icons/skillset/django.svg' },
        { name: 'Flask', iconPath: 'icons/skillset/flask.svg' },
        { name: 'PostgreSQL', iconPath: 'icons/skillset/postgresql.svg' },
        { name: 'SQL', iconPath: 'icons/skillset/sql.svg' },
        { name: 'Redis', iconPath: 'icons/skillset/redis.svg' },
        { name: 'Docker', iconPath: 'icons/skillset/docker.svg' },
        { name: 'Linux', iconPath: 'icons/skillset/linux.svg' },
        { name: 'Cloud', iconPath: 'icons/skillset/cloud.svg' },
      ],
    },
    {
      title: 'DevSecOps',
      skills: [
        { name: 'DRF', iconPath: 'icons/skillset/drf.svg' },
        { name: 'CI/CD', iconPath: 'icons/skillset/cd.svg' },
      ],
    }, */
  ];

  protected get skills(): SkillItem[] {
    return this.skillGroups.flatMap((group) => group.skills);
  }
}