import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaketauswahlComponent } from './paketauswahl.component';

describe('PaketauswahlComponent', () => {
  let component: PaketauswahlComponent;
  let fixture: ComponentFixture<PaketauswahlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaketauswahlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaketauswahlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
