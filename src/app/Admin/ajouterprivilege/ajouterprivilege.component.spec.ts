import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterprivilegeComponent } from './ajouterprivilege.component';

describe('AjouterprivilegeComponent', () => {
  let component: AjouterprivilegeComponent;
  let fixture: ComponentFixture<AjouterprivilegeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterprivilegeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterprivilegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
