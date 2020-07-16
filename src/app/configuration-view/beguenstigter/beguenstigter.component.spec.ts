import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeguenstigterComponent } from './beguenstigter.component';

describe('BeguenstigterComponent', () => {
  let component: BeguenstigterComponent;
  let fixture: ComponentFixture<BeguenstigterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeguenstigterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeguenstigterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
