import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierstaffComponent } from './modifierstaff.component';

describe('ModifierstaffComponent', () => {
  let component: ModifierstaffComponent;
  let fixture: ComponentFixture<ModifierstaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierstaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierstaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
