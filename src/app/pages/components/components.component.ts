import { CodePreviewComponent } from 'src/app/components/code-preview/code-preview.component';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { BASH, HTML, SCSS, TYPESCRIPT, USAGE } from './components.contants';

@Component({
  selector: 'app-components',
  standalone: true,
  imports: [CommonModule, RouterLink, CodePreviewComponent],
  templateUrl: './components.component.html',
  styleUrl: './components.component.scss'
})
export class ComponentsComponent {
  data = {
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
}
