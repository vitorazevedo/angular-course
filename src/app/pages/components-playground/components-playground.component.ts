import { Cards } from 'src/app/components/cards/cads.interfaces';
import { CardsComponent } from 'src/app/components/cards/cards.component';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-components-playground',
  standalone: true,
  imports: [CommonModule, CardsComponent],
  templateUrl: './components-playground.component.html',
  styleUrl: './components-playground.component.scss'
})
export class ComponentsPlaygroundComponent {
  cards: Cards[] = [
    { title: 'Delectus quod magni', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus provident culpa sapiente earum adipisci quibusdam.' },
    { title: 'Delectus quod magni', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus provident culpa sapiente earum adipisci quibusdam.' }
  ];

  onClicked(index: number) {
    console.log('app received index:', index);
  }
}
