import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiermodelivraisonComponent } from './modifiermodelivraison.component';

describe('ModifiermodelivraisonComponent', () => {
  let component: ModifiermodelivraisonComponent;
  let fixture: ComponentFixture<ModifiermodelivraisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifiermodelivraisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifiermodelivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
