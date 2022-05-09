import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerstaffComponent } from './listerstaff.component';

describe('ListerstaffComponent', () => {
  let component: ListerstaffComponent;
  let fixture: ComponentFixture<ListerstaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListerstaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerstaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
