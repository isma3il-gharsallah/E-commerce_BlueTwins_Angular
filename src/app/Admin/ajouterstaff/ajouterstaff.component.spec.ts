import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterstaffComponent } from './ajouterstaff.component';

describe('AjouterstaffComponent', () => {
  let component: AjouterstaffComponent;
  let fixture: ComponentFixture<AjouterstaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterstaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterstaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
