import { Component, OnInit } from '@angular/core';
import { ConfigurationstepMockService } from '../mock/configurationstep-mock-service.service';
import { ConfigurationStep } from '../model/configurationstep';

@Component({
  selector: 'app-step-by-step-configurer',
  templateUrl: './step-by-step-configurer.component.html',
  styleUrls: ['./step-by-step-configurer.component.scss'],
})
export class StepByStepConfigurerComponent implements OnInit {
  configurationSteps: ConfigurationStep[];

  constructor(service: ConfigurationstepMockService) {
    this.configurationSteps = service.getConfigurationSteps();
  }

  ngOnInit(): void {}
}
