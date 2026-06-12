import { Routes } from '@angular/router';
import { LegalNoticeComponent } from './pages/legal-notice/legal-notice';
import { MainPageComponent } from './pages/main-page/main-page';

export const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    title: 'Portfolio | Bastian Wollny',
  },
  {
    path: 'legal-notice',
    component: LegalNoticeComponent,
    title: 'Legal Notice | Bastian Wollny',
  },
  {
    path: '**',
    redirectTo: '',
  },
];