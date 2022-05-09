import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListernewsletterComponent } from './listernewsletter.component';

describe('ListernewsletterComponent', () => {
  let component: ListernewsletterComponent;
  let fixture: ComponentFixture<ListernewsletterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListernewsletterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListernewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
