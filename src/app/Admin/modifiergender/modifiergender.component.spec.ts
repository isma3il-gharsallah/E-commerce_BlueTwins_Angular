import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiergenderComponent } from './modifiergender.component';

describe('ModifiergenderComponent', () => {
  let component: ModifiergenderComponent;
  let fixture: ComponentFixture<ModifiergenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifiergenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifiergenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
