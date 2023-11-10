import { CodePreviewComponent } from 'src/app/components/code-preview/code-preview.component';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { HTML, TYPESCRIPT } from './data-binding.contants';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [CommonModule, RouterLink, CodePreviewComponent],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent {
  data = {
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
}
