import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Project } from '../models/project.model';

/**
 * Loads portfolio project data from the public JSON file.
 *
 * Keeping project data outside the component allows new projects to be added
 * without changing the project section template.
 */
@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private readonly httpClient = inject(HttpClient);

  /**
   * Fetches all projects displayed in the featured projects section.
   *
   * @returns Observable list of project entries.
   */
  getProjects(): Observable<Project[]> {
    return this.httpClient.get<Project[]>('/data/projects.json');
  }
}
