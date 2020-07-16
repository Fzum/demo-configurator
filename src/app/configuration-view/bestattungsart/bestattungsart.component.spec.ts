import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestattungsartComponent } from './bestattungsart.component';

describe('BestattungsartComponent', () => {
  let component: BestattungsartComponent;
  let fixture: ComponentFixture<BestattungsartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestattungsartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestattungsartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
