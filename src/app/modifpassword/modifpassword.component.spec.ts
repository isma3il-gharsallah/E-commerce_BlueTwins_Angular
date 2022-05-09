import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifpasswordComponent } from './modifpassword.component';

describe('ModifpasswordComponent', () => {
  let component: ModifpasswordComponent;
  let fixture: ComponentFixture<ModifpasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifpasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
