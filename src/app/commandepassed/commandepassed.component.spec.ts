import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandepassedComponent } from './commandepassed.component';

describe('CommandepassedComponent', () => {
  let component: CommandepassedComponent;
  let fixture: ComponentFixture<CommandepassedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandepassedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandepassedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
