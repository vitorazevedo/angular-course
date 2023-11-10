import { Routes } from '@angular/router';

import { ComponentsComponent } from './pages/components/components.component';
import {
    DataBindingExampleComponent
} from './pages/data-binding-example/data-binding-example.component';

export const routes: Routes = [
  { path: 'angular-data-binding-example', title: 'Angular - Data Binding Example', component: DataBindingExampleComponent },
  { path: 'components', title: 'Angular', component: ComponentsComponent },
];
