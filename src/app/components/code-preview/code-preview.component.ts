
import { HighlightModule } from 'ngx-highlightjs';

import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-code-preview',
  standalone: true,
  imports: [CommonModule, HighlightModule],
  templateUrl: './code-preview.component.html',
  styleUrl: './code-preview.component.scss'
})
export class CodePreviewComponent {
  @Input() language: string = '';
  @Input() code: string = '';
}
