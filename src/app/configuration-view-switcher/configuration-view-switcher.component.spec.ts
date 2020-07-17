import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationViewSwitcherComponent } from './configuration-view-switcher.component';

describe('ConfigurationViewSwitcherComponent', () => {
  let component: ConfigurationViewSwitcherComponent;
  let fixture: ComponentFixture<ConfigurationViewSwitcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigurationViewSwitcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurationViewSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
