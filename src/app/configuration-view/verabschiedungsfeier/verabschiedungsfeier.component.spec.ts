import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerabschiedungsfeierComponent } from './verabschiedungsfeier.component';

describe('VerabschiedungsfeierComponent', () => {
  let component: VerabschiedungsfeierComponent;
  let fixture: ComponentFixture<VerabschiedungsfeierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerabschiedungsfeierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerabschiedungsfeierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
