import { Routes } from '@angular/router';

import {
    ComponentsPlaygroundComponent
} from './pages/components-playground/components-playground.component';
import {
    DataBindingPlaygroundComponent
} from './pages/data-binding-playground/data-binding-playground.component';
import { DataBindingComponent } from './pages/data-binding/data-binding.component';

export const routes: Routes = [
  { path: 'angular-data-binding', title: 'Angular - Data Binding', component: DataBindingComponent },
  { path: 'angular-data-binding-playground', title: 'Angular - Data Binding Playground', component: DataBindingPlaygroundComponent },
  { path: 'angular-components', title: 'Angular - Components', component: ComponentsPlaygroundComponent },
];
