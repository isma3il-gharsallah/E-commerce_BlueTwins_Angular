import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListercompteComponent } from './listercompte.component';

describe('ListercompteComponent', () => {
  let component: ListercompteComponent;
  let fixture: ComponentFixture<ListercompteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListercompteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListercompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
