export const BASH = `ng generate service my-service`;

export const SERVICE_TS = `import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyService {
  private data: any;

  constructor() { }

  setData(data: any): void {
    this.data = data;
  }

  getData(): any {
    return this.data;
  }
}`;

export const COMPONENT_TS = `import { Component } from '@angular/core';
import { MyService } from './my-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private myService: MyService) {}

  someMethod() {
    this.myService.setData({ key: 'value' });
    console.log(this.myService.getData());
  }
}`;

export const HTTP_TS = `import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  fetchData(): Observable<any> {
    return this.http.get('/api/data');
  }
}`;

export const DATA = {
  preview: {
    bash: {
      language: 'bash',
      code: BASH
    },
    service: {
      language: 'typescript',
      code: SERVICE_TS
    },
    component: {
      language: 'typescript',
      code: COMPONENT_TS
    },
    http: {
      language: 'typescript',
      code: HTTP_TS
    }
  }
};
