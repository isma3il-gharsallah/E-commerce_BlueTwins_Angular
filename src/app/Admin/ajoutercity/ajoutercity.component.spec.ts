import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutercityComponent } from './ajoutercity.component';

describe('AjoutercityComponent', () => {
  let component: AjoutercityComponent;
  let fixture: ComponentFixture<AjoutercityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutercityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutercityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
