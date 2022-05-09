import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiertailleComponent } from './modifiertaille.component';

describe('ModifiertailleComponent', () => {
  let component: ModifiertailleComponent;
  let fixture: ComponentFixture<ModifiertailleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifiertailleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifiertailleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
