import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeretatcommandeComponent } from './listeretatcommande.component';

describe('ListeretatcommandeComponent', () => {
  let component: ListeretatcommandeComponent;
  let fixture: ComponentFixture<ListeretatcommandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeretatcommandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeretatcommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
