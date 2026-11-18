import type { translations } from './translations';

/** A technology or practice displayed with a decorative icon. */
export interface SkillItem {
  name: string;
  iconPath: string;
  labelKey?: keyof typeof translations.en.skills.names;
  learning?: boolean;
}

/** A selectable category with a stable ID shared by the tab and panel. */
export interface SkillGroup {
  id: 'frontend' | 'backend' | 'security';
  skills: SkillItem[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    skills: [
      { name: 'HTML', iconPath: 'icons/skillset/html.svg' },
      { name: 'CSS', iconPath: 'icons/skillset/css.svg' },
      { name: 'JavaScript', iconPath: 'icons/skillset/javascript.svg' },
      { name: 'TypeScript', iconPath: 'icons/skillset/typescript.svg' },
      { name: 'Angular', iconPath: 'icons/skillset/angular.svg' },
      { name: 'SCSS', iconPath: 'icons/skillset/styles.svg' },
      { name: 'Material Design', iconPath: 'icons/skillset/material_design.svg' },
      { name: 'Responsive Design', iconPath: 'icons/skillset/responsive.svg' },
      {
        name: 'Accessibility',
        iconPath: 'icons/skillset/accessibility.svg',
        labelKey: 'accessibility',
      },
    ],
  },
  {
    id: 'backend',
    skills: [
      { name: 'Python', iconPath: 'icons/skillset/python.svg' },
      { name: 'Django', iconPath: 'icons/skillset/django.svg' },
      { name: 'Django REST Framework', iconPath: 'icons/skillset/drf.svg' },
      { name: 'REST APIs', iconPath: 'icons/skillset/rest_api.svg' },
      { name: 'SQLite', iconPath: 'icons/skillset/sql.svg' },
      { name: 'Django ORM', iconPath: 'icons/skillset/data-model.svg' },
      {
        name: 'Data modelling',
        iconPath: 'icons/skillset/data-model.svg',
        labelKey: 'dataModelling',
      },
      { name: 'Supabase', iconPath: 'icons/skillset/supabase.svg' },
      { name: 'Postman', iconPath: 'icons/skillset/api-testing.svg' },
      { name: 'API tests', iconPath: 'icons/skillset/api-testing.svg', labelKey: 'apiTests' },
      { name: 'Docker', iconPath: 'icons/skillset/docker.svg', learning: true },
      { name: 'Docker Compose', iconPath: 'icons/skillset/docker.svg', learning: true },
    ],
  },
  {
    id: 'security',
    skills: [
      {
        name: 'Token authentication',
        iconPath: 'icons/skillset/token-auth.svg',
        labelKey: 'tokenAuth',
      },
      {
        name: 'Access control',
        iconPath: 'icons/skillset/securityicon.svg',
        labelKey: 'accessControl',
      },
      {
        name: 'Input validation',
        iconPath: 'icons/skillset/validation.svg',
        labelKey: 'validation',
      },
      {
        name: 'Password hashing',
        iconPath: 'icons/skillset/password.svg',
        labelKey: 'passwordHashing',
      },
      { name: 'CORS', iconPath: 'icons/skillset/origins.svg' },
      {
        name: 'Environment configuration',
        iconPath: 'icons/skillset/configuration.svg',
        labelKey: 'environment',
      },
    ],
  },
];

export const sharedSkills: SkillItem[] = [
  { name: 'Git', iconPath: 'icons/skillset/git.svg' },
  { name: 'Scrum', iconPath: 'icons/skillset/scrum.svg' },
  {
    name: 'Growth mindset',
    iconPath: 'icons/skillset/growthmindset.svg',
    labelKey: 'growthMindset',
  },
];
