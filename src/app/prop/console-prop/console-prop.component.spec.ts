import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsolePropComponent } from './console-prop.component';

describe('ConsolePropComponent', () => {
  let component: ConsolePropComponent;
  let fixture: ComponentFixture<ConsolePropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsolePropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsolePropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
