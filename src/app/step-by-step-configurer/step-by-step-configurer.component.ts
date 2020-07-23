import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfigurationViewSwitcherComponent } from '../configuration-view-switcher/configuration-view-switcher.component';

import { StoreFacadeService } from './store/store-facade.service';

@Component({
  selector: 'app-step-by-step-configurer',
  templateUrl: './step-by-step-configurer.component.html',
  styleUrls: ['./step-by-step-configurer.component.scss'],
})
export class StepByStepConfigurerComponent implements OnInit {
  @ViewChild(ConfigurationViewSwitcherComponent)
  configurationViewSwitcher: ConfigurationViewSwitcherComponent;

  constructor(public service: StoreFacadeService) {}

  ngOnInit(): void {
  }

  next(): void {
    this.handleStateUpdatesIfNotLastConfig();
    this.service.navigateForwards();
  }

  private handleStateUpdatesIfNotLastConfig(): void {
    // const isNotLastConfig =
    //   this.activeConfig$.type !== ConfigurationType.BEGUENSTIGTER;
    // if (isNotLastConfig) {
    this.configurationViewSwitcher.handleConfigurationUpdates();
    // }
  }

  previous(): void {
    this.service.navigateBackwards();
  }
}
