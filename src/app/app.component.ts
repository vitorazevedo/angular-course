import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { cards } from './cards/cads.interfaces';
import { CardsComponent } from './cards/cards.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CardsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  data = {
    title: 'Angular'
  };

  cards: cards[] = [
    { title: 'Delectus quod magni', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus provident culpa sapiente earum adipisci quibusdam.' },
    { title: 'Delectus quod magni', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus provident culpa sapiente earum adipisci quibusdam.' }
  ];

  onKeyUp(title: string) {
    this.data.title = title;
  }

  onClicked(index: number) {
    console.log('app received index:', index);
  }

  getFullYear(): number {
    return new Date().getFullYear();
  }
}
