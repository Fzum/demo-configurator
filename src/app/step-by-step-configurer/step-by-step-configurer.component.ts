import { Component, OnInit, NgModule } from '@angular/core';
import { ConfigurationstepMockService } from '../mock/configurationstep-mock-service.service';
import { ConfigurationStep } from '../model/configurationstep';

@Component({
  selector: 'app-step-by-step-configurer',
  templateUrl: './step-by-step-configurer.component.html',
  styleUrls: ['./step-by-step-configurer.component.scss'],
})
export class StepByStepConfigurerComponent implements OnInit {
  configurationIndex: number;
  configurationSteps: ConfigurationStep[];
  activeConfigurationStep: ConfigurationStep;

  constructor(service: ConfigurationstepMockService) {
    this.configurationIndex = 0;
    this.configurationSteps = service.getConfigurationSteps();
    this.setActiveConfiguration();
  }

  ngOnInit(): void {}

  private setActiveConfiguration(): void {
    this.activeConfigurationStep = this.configurationSteps[
      this.configurationIndex
    ];
  }

  next(): void {
    if (this.configurationIndex < this.configurationSteps.length - 1) {
      this.configurationIndex++;
    }

    this.setActiveConfiguration();
  }

  previous(): void {
    if (this.configurationIndex > 0) {
      this.configurationIndex--;
    }

    this.setActiveConfiguration();
  }
}
