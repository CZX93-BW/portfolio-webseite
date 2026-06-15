import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private readonly httpClient = inject(HttpClient);

  getProjects(): Observable<Project[]> {
    return this.httpClient.get<Project[]>('/data/projects.json');
  }
}