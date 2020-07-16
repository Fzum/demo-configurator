import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrabstelleComponent } from './grabstelle.component';

describe('GrabstelleComponent', () => {
  let component: GrabstelleComponent;
  let fixture: ComponentFixture<GrabstelleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrabstelleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrabstelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
