import { CodePreviewComponent } from 'src/app/components/code-preview/code-preview.component';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { DATA } from './data-binding-playground.contants';

@Component({
  selector: 'app-data-binding-playground',
  standalone: true,
  imports: [CommonModule, CodePreviewComponent],
  templateUrl: './data-binding-playground.component.html',
  styleUrl: './data-binding-playground.component.scss'
})
export class DataBindingPlaygroundComponent {
  data = DATA;

  onKeyUp(title: string) {
    this.data.title = title;
  }
}
