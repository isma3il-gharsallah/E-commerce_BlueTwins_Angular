import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutergenderComponent } from './ajoutergender.component';

describe('AjoutergenderComponent', () => {
  let component: AjoutergenderComponent;
  let fixture: ComponentFixture<AjoutergenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutergenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutergenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
