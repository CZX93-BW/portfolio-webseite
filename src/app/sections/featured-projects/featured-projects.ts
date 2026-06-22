import { Component, computed, HostListener, inject, OnInit, signal } from '@angular/core';

import { translations } from '../../data/translations';
import { LocalizedText, Project } from '../../models/project.model';
import { LanguageService } from '../../services/language';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-featured-projects',
  imports: [],
  templateUrl: './featured-projects.html',
  styleUrl: './featured-projects.scss',
})
export class FeaturedProjectsComponent implements OnInit {
  private readonly projectService = inject(ProjectService);
  private readonly languageService = inject(LanguageService);

  protected readonly projects = signal<Project[]>([]);
  protected readonly activeProject = signal<Project | null>(null);
  protected readonly selectedProject = signal<Project | null>(null);

  protected readonly text = computed(() => {
    return translations[this.languageService.currentLanguage()].projects;
  });

  ngOnInit(): void {
    this.loadProjects();
  }

  @HostListener('document:keydown.escape')
  closeProjectDialogWithEscape(): void {
    this.closeProjectDialog();
  }

  protected getLocalizedText(value: LocalizedText): string {
    if (typeof value === 'string') {
      return value;
    }

    return value[this.languageService.currentLanguage()] ?? value.en;
  }

  protected showProjectPreview(project: Project): void {
    this.activeProject.set(project);
  }

  protected hideProjectPreview(): void {
    this.activeProject.set(null);
  }

  protected openProjectDialog(project: Project): void {
    this.selectedProject.set(project);
  }

  protected closeProjectDialog(): void {
    this.selectedProject.set(null);
  }

  protected showNextProject(): void {
    const nextProject = this.getNextProject();

    if (nextProject) {
      this.selectedProject.set(nextProject);
    }
  }

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
}