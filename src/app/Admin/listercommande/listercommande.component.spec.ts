import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListercommandeComponent } from './listercommande.component';

describe('ListercommandeComponent', () => {
  let component: ListercommandeComponent;
  let fixture: ComponentFixture<ListercommandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListercommandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListercommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
