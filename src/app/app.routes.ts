import { Routes } from '@angular/router';
import { LegalNoticeComponent } from './pages/legal-notice/legal-notice';
import { MainPageComponent } from './pages/main-page/main-page';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy';

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
    path: 'privacy-policy',
    component: PrivacyPolicyComponent,
    title: 'Privacy Policy | Bastian Wollny',
  },
  {
    path: '**',
    redirectTo: '',
  },
];