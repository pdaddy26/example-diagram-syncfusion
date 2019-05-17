import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionPropComponent } from './condition-prop.component';

describe('ConditionPropComponent', () => {
  let component: ConditionPropComponent;
  let fixture: ComponentFixture<ConditionPropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConditionPropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionPropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
