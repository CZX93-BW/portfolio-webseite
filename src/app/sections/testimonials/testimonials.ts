import { Component } from '@angular/core';

import { Testimonial } from '../../models/testimonial.model';

@Component({
  selector: 'app-testimonials',
  imports: [],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
})
export class TestimonialsComponent {
  protected readonly testimonials: Testimonial[] = [
    new Testimonial(
      1,
      'Our project benefited enormously from Bastian’s efficient way of working.',
      'T. Schulz',
      'Frontend Developer',
    ),
    new Testimonial(
      2,
      'Bastian has proven to be a reliable group partner. His technical skills and proactive approach were crucial to the success of our project.',
      'H. Janisch',
      'Team Partner',
    ),
    new Testimonial(
      3,
      'I had the good fortune of working with Bastian in a group project. He stayed focused, supported the team and contributed reliable technical solutions.',
      'M. Weber',
      'Project Partner',
    ),
  ];

  protected activeIndex = 1;

  protected showPreviousTestimonial(): void {
    this.activeIndex = this.getPreviousIndex();
  }

  protected showNextTestimonial(): void {
    this.activeIndex = this.getNextIndex();
  }

  protected selectTestimonial(index: number): void {
    this.activeIndex = index;
  }

  protected getCardClass(index: number): string {
    if (index === this.activeIndex) {
      return 'testimonials__card--active';
    }

    if (index === this.getPreviousIndex()) {
      return 'testimonials__card--previous';
    }

    if (index === this.getNextIndex()) {
      return 'testimonials__card--next';
    }

    return 'testimonials__card--hidden';
  }

  private getPreviousIndex(): number {
    return this.activeIndex === 0
      ? this.testimonials.length - 1
      : this.activeIndex - 1;
  }

  private getNextIndex(): number {
    return this.activeIndex === this.testimonials.length - 1
      ? 0
      : this.activeIndex + 1;
  }
}