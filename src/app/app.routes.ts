import { Routes } from '@angular/router';

import {
    ComponentsPlaygroundComponent
} from './pages/components-playground/components-playground.component';
import { ComponentsComponent } from './pages/components/components.component';
import {
    DataBindingPlaygroundComponent
} from './pages/data-binding-playground/data-binding-playground.component';
import { DataBindingComponent } from './pages/data-binding/data-binding.component';
import { DirectivesComponent } from './pages/directives/directives.component';
import { RoutesComponent } from './pages/routes/routes.component';
import { ServicesComponent } from './pages/services/services.component';

export const routes: Routes = [
  { path: 'angular-data-binding', title: 'Angular - Data Binding', component: DataBindingComponent },
  { path: 'angular-data-binding-playground', title: 'Angular - Data Binding Playground', component: DataBindingPlaygroundComponent },
  { path: 'angular-components', title: 'Angular - Components', component: ComponentsComponent },
  { path: 'angular-components-playground', title: 'Angular - Components', component: ComponentsPlaygroundComponent },
  { path: 'angular-services', title: 'Angular - Services', component: ServicesComponent },
  { path: 'angular-routes', title: 'Angular - Routes', component: RoutesComponent },
  { path: 'angular-directives', title: 'Angular - Directives', component: DirectivesComponent },
];
