import { Component } from '@angular/core';
import { AboutMe } from '../../sections/about-me/about-me';
import { ContactComponent } from '../../sections/contact/contact';
import { FeaturedProjectsComponent } from '../../sections/featured-projects/featured-projects';
import { Hero } from '../../sections/hero/hero';
import { SkillSet } from '../../sections/skill-set/skill-set';
import { TestimonialsComponent } from '../../sections/testimonials/testimonials';

/**
 * Main portfolio page component.
 *
 * Composes all landing-page sections in their display order and keeps the
 * section layout separate from routed legal pages.
 */
@Component({
  selector: 'app-main-page',
  imports: [
    Hero,
    AboutMe,
    SkillSet,
    FeaturedProjectsComponent,
    TestimonialsComponent,
    ContactComponent,
  ],
  templateUrl: './main-page.html',
  styleUrls: ['./main-page.scss'],
})
export class MainPageComponent {}
