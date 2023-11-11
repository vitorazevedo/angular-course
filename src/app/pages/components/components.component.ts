import { CodePreviewComponent } from 'src/app/components/code-preview/code-preview.component';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { DATA } from './components.contants';

@Component({
  selector: 'app-components',
  standalone: true,
  imports: [CommonModule, RouterLink, CodePreviewComponent],
  templateUrl: './components.component.html',
  styleUrl: './components.component.scss'
})
export class ComponentsComponent {
  data = DATA;
}
