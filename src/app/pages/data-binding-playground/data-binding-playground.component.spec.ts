import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingPlaygroundComponent } from './data-binding-playground.component';

describe('DataBindingPlaygroundComponent', () => {
  let component: DataBindingPlaygroundComponent;
  let fixture: ComponentFixture<DataBindingPlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataBindingPlaygroundComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(DataBindingPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
