import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutermodelivraisonComponent } from './ajoutermodelivraison.component';

describe('AjoutermodelivraisonComponent', () => {
  let component: AjoutermodelivraisonComponent;
  let fixture: ComponentFixture<AjoutermodelivraisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutermodelivraisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutermodelivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
