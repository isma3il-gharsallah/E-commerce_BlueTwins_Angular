import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerboutiqueComponent } from './listerboutique.component';

describe('ListerboutiqueComponent', () => {
  let component: ListerboutiqueComponent;
  let fixture: ComponentFixture<ListerboutiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListerboutiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerboutiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
