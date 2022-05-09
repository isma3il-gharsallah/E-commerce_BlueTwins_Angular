import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutertailleprodComponent } from './ajoutertailleprod.component';

describe('AjoutertailleprodComponent', () => {
  let component: AjoutertailleprodComponent;
  let fixture: ComponentFixture<AjoutertailleprodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutertailleprodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutertailleprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
