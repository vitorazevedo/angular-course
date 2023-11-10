import { CodePreviewComponent } from 'src/app/components/code-preview/code-preview.component';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { HTML, TYPESCRIPT } from './data-binding-example.contants';

@Component({
  selector: 'app-data-binding-example',
  standalone: true,
  imports: [CommonModule, CodePreviewComponent],
  templateUrl: './data-binding-example.component.html',
  styleUrl: './data-binding-example.component.scss'
})
export class DataBindingExampleComponent {
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
