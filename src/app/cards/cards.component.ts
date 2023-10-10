import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { cards } from './cads.interfaces';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {

  @Input({ required: true }) data: cards[] = [];

}
