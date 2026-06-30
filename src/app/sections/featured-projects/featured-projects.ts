import { Component, computed, HostListener, inject, OnDestroy, OnInit, signal } from '@angular/core';

import { translations } from '../../data/translations';
import { LocalizedText, Project } from '../../models/project.model';
import { LanguageService } from '../../services/language';
import { ProjectService } from '../../services/project.service';

/**
 * Featured projects section component.
 *
 * Loads project data, renders the project overview, manages hover previews and
 * controls the project dialog including keyboard close behavior and page scroll
 * locking while a dialog is open.
 */
@Component({
  selector: 'app-featured-projects',
  imports: [],
  templateUrl: './featured-projects.html',
  styleUrl: './featured-projects.scss',
})
export class FeaturedProjectsComponent implements OnInit, OnDestroy {
  private readonly projectService = inject(ProjectService);
  private readonly languageService = inject(LanguageService);
  private previousBodyOverflow = '';
  private previousDocumentOverflow = '';

  /**
   * Project entries loaded from the public JSON data file.
   */
  protected readonly projects = signal<Project[]>([]);

  /**
   * Project currently shown as hover preview.
   */
  protected readonly activeProject = signal<Project | null>(null);

  /**
   * Project currently opened inside the dialog.
   */
  protected readonly selectedProject = signal<Project | null>(null);

  /**
   * Project-section translation block for the active language.
   */
  protected readonly text = computed(() => {
    return translations[this.languageService.currentLanguage()].projects;
  });

  /**
   * Loads project data when the section is initialized.
   */
  ngOnInit(): void {
    this.loadProjects();
  }

  /**
   * Restores document scrolling if the component is destroyed while a dialog is open.
   */
  ngOnDestroy(): void {
    this.unlockPageScroll();
  }

  /**
   * Closes the project dialog when the Escape key is pressed.
   */
  @HostListener('document:keydown.escape')
  closeProjectDialogWithEscape(): void {
    this.closeProjectDialog();
  }

  /**
   * Resolves localized project text for the current language.
   *
   * @param value - Shared or localized project text.
   * @returns Text for the active language, falling back to English.
   */
  protected getLocalizedText(value: LocalizedText): string {
    if (typeof value === 'string') {
      return value;
    }

    return value[this.languageService.currentLanguage()] ?? value.en;
  }

  /**
   * Displays a project preview on hover-capable devices.
   *
   * @param project - Project to show as preview.
   */
  protected showProjectPreview(project: Project): void {
    this.activeProject.set(project);
  }

  /**
   * Clears the hover preview.
   */
  protected hideProjectPreview(): void {
    this.activeProject.set(null);
  }

  /**
   * Opens the project dialog and locks background page scrolling.
   *
   * @param project - Project to display in the dialog.
   */
  protected openProjectDialog(project: Project): void {
    this.lockPageScroll();
    this.selectedProject.set(project);
  }

  /**
   * Closes the project dialog and restores page scrolling.
   */
  protected closeProjectDialog(): void {
    this.selectedProject.set(null);
    this.unlockPageScroll();
  }

  /**
   * Advances the dialog to the next project in the loaded project list.
   */
  protected showNextProject(): void {
    const nextProject = this.getNextProject();

    if (nextProject) {
      this.selectedProject.set(nextProject);
    }
  }

  /**
   * Calculates the next project, wrapping from the last item back to the first.
   *
   * @returns Next project or `null` when no valid selection exists.
   */
  private getNextProject(): Project | null {
    const projects = this.projects();
    const selectedProject = this.selectedProject();

    if (!selectedProject || projects.length === 0) {
      return null;
    }

    const currentIndex = projects.findIndex((project) => project.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % projects.length;

    return projects[nextIndex];
  }

  /**
   * Fetches project data from the project service.
   */
  private loadProjects(): void {
    this.projectService.getProjects().subscribe({
      next: (projects) => {
        this.projects.set(projects);
      },
      error: (error) => {
        console.error('Projects could not be loaded:', error);
      },
    });
  }

  /**
   * Stores current document overflow values and disables page scrolling.
   */
  private lockPageScroll(): void {
    if (this.selectedProject()) {
      return;
    }

    this.previousBodyOverflow = document.body.style.overflow;
    this.previousDocumentOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
  }

  /**
   * Restores document overflow values saved before the dialog was opened.
   */
  private unlockPageScroll(): void {
    document.body.style.overflow = this.previousBodyOverflow;
    document.documentElement.style.overflow = this.previousDocumentOverflow;
  }
}
