import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifieretatcommandeComponent } from './modifieretatcommande.component';

describe('ModifieretatcommandeComponent', () => {
  let component: ModifieretatcommandeComponent;
  let fixture: ComponentFixture<ModifieretatcommandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifieretatcommandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifieretatcommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
