import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutertailleComponent } from './ajoutertaille.component';

describe('AjoutertailleComponent', () => {
  let component: AjoutertailleComponent;
  let fixture: ComponentFixture<AjoutertailleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutertailleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutertailleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
