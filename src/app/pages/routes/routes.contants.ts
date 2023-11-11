
export const TYPESCRIPT_A = `import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  // Redirect to 'home' if no match found
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }`;

export const TYPESCRIPT_B = `import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    if (/* condition */) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}`;

export const TYPESCRIPT_C = `{ path: 'protected', component: ProtectedComponent, canActivate: [AuthGuard] }`;

export const TYPESCRIPT_D = `const routes: Routes = [
  {
    path: 'feature',
    loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule)
  }
];`;
export const TYPESCRIPT_E = `const routes: Routes = [
  { path: '', component: FeatureComponent }
];`;

export const HTML_A = `<router-outlet></router-outlet>`;
export const HTML_B = `<nav>
  <a routerLink="/home">Home</a>
    <a routerLink="/about">About</a>
</nav>
<router-outlet></router-outlet>`;

export const DATA = {
  preview: {
    scriptA: {
      language: 'typescript',
      code: TYPESCRIPT_A
    },
    scriptB: {
      language: 'typescript',
      code: TYPESCRIPT_B
    },
    scriptC: {
      language: 'typescript',
      code: TYPESCRIPT_C
    },
    scriptD: {
      language: 'typescript',
      code: TYPESCRIPT_D
    },
    scriptE: {
      language: 'typescript',
      code: TYPESCRIPT_E
    },
    htmlA: {
      language: 'html',
      code: HTML_A
    },
    htmlB: {
      language: 'html',
      code: HTML_B
    },
  }
};
