import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierboutiqueComponent } from './modifierboutique.component';

describe('ModifierboutiqueComponent', () => {
  let component: ModifierboutiqueComponent;
  let fixture: ComponentFixture<ModifierboutiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierboutiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierboutiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
