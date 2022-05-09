import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerprivilegeComponent } from './listerprivilege.component';

describe('ListerprivilegeComponent', () => {
  let component: ListerprivilegeComponent;
  let fixture: ComponentFixture<ListerprivilegeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListerprivilegeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerprivilegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
