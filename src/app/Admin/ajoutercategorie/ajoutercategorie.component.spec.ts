import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutercategorieComponent } from './ajoutercategorie.component';

describe('AjoutercategorieComponent', () => {
  let component: AjoutercategorieComponent;
  let fixture: ComponentFixture<AjoutercategorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutercategorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutercategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
