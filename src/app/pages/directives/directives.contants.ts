
export const TYPESCRIPT_A = `import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  template: '<h3>User Profile</h3>'
})
export class UserProfileComponent {}`;
export const HTML_A = `<app-user-profile></app-user-profile>`;

export const NGIF = `<p *ngIf="isLoggedIn">Welcome back, user!</p>`;
export const NGFOR = `<ul>
  <li *ngFor="let item of items">{{ item }}</li>
</ul>`;

export const HTML_C = `<div [ngStyle]="{'font-style': isActive ? 'italic' : 'normal'}">
  This text changes style based on 'isActive' state.
</div>`;

export const TYPESCRIPT_D = `import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() set appHighlight(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}
}`;
export const HTML_D = `<p [appHighlight]="'yellow'">This text will be highlighted in yellow.</p>`;

export const DATA = {
  preview: {
    scriptA: {
      language: 'typescript',
      code: TYPESCRIPT_A
    },
    htmlA: {
      language: 'html',
      code: HTML_A
    },
    ngif: {
      language: 'html',
      code: NGIF
    },
    ngfor: {
      language: 'html',
      code: NGFOR
    },
    htmlC: {
      language: 'html',
      code: HTML_C
    },
    scriptD: {
      language: 'typescript',
      code: TYPESCRIPT_D
    },
    htmlD: {
      language: 'html',
      code: HTML_D
    }
  }
};
