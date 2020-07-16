import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepByStepConfigurerComponent } from './step-by-step-configurer.component';

describe('StepByStepConfigurerComponent', () => {
  let component: StepByStepConfigurerComponent;
  let fixture: ComponentFixture<StepByStepConfigurerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepByStepConfigurerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepByStepConfigurerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
