import { CodePreviewComponent } from 'src/app/components/code-preview/code-preview.component';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { DATA } from './directives.contants';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule, CodePreviewComponent],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss'
})
export class DirectivesComponent {
  data = DATA;
}
