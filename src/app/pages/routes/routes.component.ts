import { CodePreviewComponent } from 'src/app/components/code-preview/code-preview.component';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { DATA } from './routes.contants';

@Component({
  selector: 'app-routes',
  standalone: true,
  imports: [CommonModule, CodePreviewComponent],
  templateUrl: './routes.component.html',
  styleUrl: './routes.component.scss'
})
export class RoutesComponent {
  data = DATA;
}
