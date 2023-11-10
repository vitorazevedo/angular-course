import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsPlaygroundComponent } from './components-playground.component';

describe('ComponentsPlaygroundComponent', () => {
  let component: ComponentsPlaygroundComponent;
  let fixture: ComponentFixture<ComponentsPlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentsPlaygroundComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentsPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
