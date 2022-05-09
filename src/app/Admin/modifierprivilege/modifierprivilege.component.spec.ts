import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierprivilegeComponent } from './modifierprivilege.component';

describe('ModifierprivilegeComponent', () => {
  let component: ModifierprivilegeComponent;
  let fixture: ComponentFixture<ModifierprivilegeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierprivilegeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierprivilegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
