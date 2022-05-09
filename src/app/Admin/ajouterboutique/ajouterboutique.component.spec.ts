import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterboutiqueComponent } from './ajouterboutique.component';

describe('AjouterboutiqueComponent', () => {
  let component: AjouterboutiqueComponent;
  let fixture: ComponentFixture<AjouterboutiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterboutiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterboutiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
