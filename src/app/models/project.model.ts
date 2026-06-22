import { Language } from './language';

export type LocalizedText = string | Record<Language, string>;

export interface ProjectTechnology {
  name: string;
  iconPath: string;
}

export interface Project {
  id: string;
  number: string;
  title: LocalizedText;
  description: LocalizedText;
  technologies: ProjectTechnology[];
  previewImagePath: string;
  dialogImagePath: string;
  githubUrl: string;
  liveUrl: string;
}