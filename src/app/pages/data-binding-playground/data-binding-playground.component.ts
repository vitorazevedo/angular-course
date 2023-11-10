import { CodePreviewComponent } from 'src/app/components/code-preview/code-preview.component';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { HTML, TYPESCRIPT } from './data-binding-playground.contants';

@Component({
  selector: 'app-data-binding-playground',
  standalone: true,
  imports: [CommonModule, CodePreviewComponent],
  templateUrl: './data-binding-playground.component.html',
  styleUrl: './data-binding-playground.component.scss'
})
export class DataBindingPlaygroundComponent {
  data = {
    title: 'Home works!',
    preview: {
      html: {
        language: 'html',
        code: HTML
      },
      typescript: {
        language: 'typescript',
        code: TYPESCRIPT
      }
    }
  };

  onKeyUp(title: string) {
    this.data.title = title;
  }
}
