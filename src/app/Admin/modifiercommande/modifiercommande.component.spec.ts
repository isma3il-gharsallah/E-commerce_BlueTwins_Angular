import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiercommandeComponent } from './modifiercommande.component';

describe('ModifiercommandeComponent', () => {
  let component: ModifiercommandeComponent;
  let fixture: ComponentFixture<ModifiercommandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifiercommandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifiercommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
