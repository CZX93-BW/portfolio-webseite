import { Component, input } from '@angular/core';

/** Renders a typographic cover for backend projects without a frontend screenshot. */
@Component({
  selector: 'app-backend-preview',
  templateUrl: './backend-preview.html',
  styleUrl: './backend-preview.scss',
})
export class BackendPreview {
  readonly title = input.required<string>();
  readonly caption = input.required<string>();
}
