import { Language } from './language';

/**
 * Text value that can either be shared across all languages or localized per language.
 */
export type LocalizedText = string | Record<Language, string>;

/**
 * Technology item displayed inside a project dialog.
 */
export interface ProjectTechnology {
  /**
   * Visible technology name.
   */
  name: string;

  /**
   * Public asset path to the technology icon.
   */
  iconPath: string;
}

/**
 * Data contract for a portfolio project loaded from the project JSON file.
 */
export interface Project {
  /**
   * Stable project identifier used for tracking and dialog state.
   */
  id: string;

  /**
   * Display number shown in the project dialog.
   */
  number: string;

  /**
   * Project title, either shared or localized.
   */
  title: LocalizedText;

  /**
   * Project description, either shared or localized.
   */
  description: LocalizedText;

  /**
   * Technologies used by the project.
   */
  technologies: ProjectTechnology[];

  /**
   * Optional preview image shown near the project list on hover-capable devices.
   */
  previewImagePath: string;

  /**
   * Main image shown inside the project dialog.
   */
  dialogImagePath: string;

  /**
   * External GitHub repository URL.
   */
  githubUrl: string;

  /**
   * External live demo URL.
   */
  liveUrl: string;
}
