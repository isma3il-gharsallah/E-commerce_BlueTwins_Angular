import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListertailleComponent } from './listertaille.component';

describe('ListertailleComponent', () => {
  let component: ListertailleComponent;
  let fixture: ComponentFixture<ListertailleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListertailleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListertailleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
