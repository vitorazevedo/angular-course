import { CodePreviewComponent } from 'src/app/components/code-preview/code-preview.component';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { DATA } from './services.contants';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, CodePreviewComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  data = DATA;
}
