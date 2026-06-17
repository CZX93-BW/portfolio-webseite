import { Component } from '@angular/core';
import { AboutMe } from '../../sections/about-me/about-me';
import { Contact } from '../../sections/contact/contact';
import { FeaturedProjectsComponent } from '../../sections/featured-projects/featured-projects';
import { Hero } from '../../sections/hero/hero';
import { SkillSet } from '../../sections/skill-set/skill-set';
import { TestimonialsComponent } from '../../sections/testimonials/testimonials';

@Component({
  selector: 'app-main-page',
  imports: [
    Hero,
    AboutMe,
    SkillSet,
    FeaturedProjectsComponent,
    TestimonialsComponent,
    Contact,
  ],
  templateUrl: './main-page.html',
  styleUrls: ['./main-page.scss'],
})
export class MainPageComponent {}