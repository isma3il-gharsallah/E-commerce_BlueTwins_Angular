import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListermodelivraisonComponent } from './listermodelivraison.component';

describe('ListermodelivraisonComponent', () => {
  let component: ListermodelivraisonComponent;
  let fixture: ComponentFixture<ListermodelivraisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListermodelivraisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListermodelivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
