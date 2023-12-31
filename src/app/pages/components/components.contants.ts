export const BASH = `ng generate component [component-name]`;

export const TYPESCRIPT = `import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})

export class ExampleComponent {
  message = 'Welcome to ExampleComponent!';
}`;

export const HTML = `<div>
  <h1>{{ message }}</h1>
</div>`;

export const SCSS = `div {
  text-align: center;
  padding: 20px;

  h1 {
    color: blue;
  }
}`;

export const USAGE = `<app-example></app-example>`;

export const DATA = {
  preview: {
    bash: {
      language: 'bash',
      code: BASH
    },
    typescript: {
      language: 'typescript',
      code: TYPESCRIPT
    },
    html: {
      language: 'html',
      code: HTML
    },
    scss: {
      language: 'scss',
      code: SCSS
    },
    usage: {
      language: 'html',
      code: USAGE
    }
  }
};
