import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterstateComponent } from './ajouterstate.component';

describe('AjouterstateComponent', () => {
  let component: AjouterstateComponent;
  let fixture: ComponentFixture<AjouterstateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterstateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterstateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
