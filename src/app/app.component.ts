import { Component } from '@angular/core';

import { cards } from './cards/cads.interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  data = {
    title: 'CodeSandbox'
  };

  cards: cards[] = [
    { title: 'Delectus quod magni', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus provident culpa sapiente earum adipisci quibusdam.' },
    { title: 'Delectus quod magni', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus provident culpa sapiente earum adipisci quibusdam.' }
  ];

  onKeyUp(title: string) {
    this.data.title = title;
  }
}
