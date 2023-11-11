export const BASH = `ng generate service data`;

export const SERVICE_TS = `import { Injectable } from '@angular/core';
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

export const COMPONENT_TS = `import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.fetchData().subscribe(
      result => this.data = result,
      error => console.error(error)
    );
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
    }
  }
};
