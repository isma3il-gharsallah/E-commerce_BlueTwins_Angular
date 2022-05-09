import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListergenderComponent } from './listergender.component';

describe('ListergenderComponent', () => {
  let component: ListergenderComponent;
  let fixture: ComponentFixture<ListergenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListergenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListergenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
