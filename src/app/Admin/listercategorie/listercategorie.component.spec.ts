import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListercategorieComponent } from './listercategorie.component';

describe('ListercategorieComponent', () => {
  let component: ListercategorieComponent;
  let fixture: ComponentFixture<ListercategorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListercategorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListercategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
