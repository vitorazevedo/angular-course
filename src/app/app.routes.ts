import { Routes } from '@angular/router';

import { ComponentsComponent } from './pages/components/components.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', title: 'Angular', component: HomeComponent },
  { path: 'components', title: 'Angular', component: ComponentsComponent },
];
