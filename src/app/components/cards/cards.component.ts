import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Cards } from './cads.interfaces';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {

  @Input({ required: true }) data: Cards[] = [];

  @Output('onClicked') clicked = new EventEmitter<number>();

  onClick(index: number) {
    console.log('card emitted index:', index);
    this.clicked.emit(index);
  }
}
