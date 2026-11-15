import { DOCUMENT, ViewportScroller } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './layout/footer/footer';
import { Header } from './layout/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private readonly document = inject(DOCUMENT);

  /** Keeps router anchor targets below the fixed responsive header. */
  constructor() {
    inject(ViewportScroller).setOffset(() => [
      0,
      this.document.querySelector('.header')?.getBoundingClientRect().height ?? 0,
    ]);
  }
}
