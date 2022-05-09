import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouteretatcommandeComponent } from './ajouteretatcommande.component';

describe('AjouteretatcommandeComponent', () => {
  let component: AjouteretatcommandeComponent;
  let fixture: ComponentFixture<AjouteretatcommandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouteretatcommandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouteretatcommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
