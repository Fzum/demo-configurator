import { Component, OnInit, NgModule, ViewChild } from '@angular/core';
import { ConfigurationstepMockService } from '../mock/configurationstep-mock-service.service';
import { ConfigurationStep } from '../model/configurationstep';
import { BestattungsartComponent } from '../configuration-view/bestattungsart/bestattungsart.component';
import { GrabstelleComponent } from '../configuration-view/grabstelle/grabstelle.component';
import { ConfigruationChangedContract } from '../configuration-view/configuration-changed-contract';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-step-by-step-configurer',
  templateUrl: './step-by-step-configurer.component.html',
  styleUrls: ['./step-by-step-configurer.component.scss'],
})
export class StepByStepConfigurerComponent implements OnInit {
  @ViewChild(BestattungsartComponent)
  bestattungsArtComponent: BestattungsartComponent;

  @ViewChild(GrabstelleComponent)
  grabstelleComponent: GrabstelleComponent;

  configurationIndex: number;
  configurationSteps: ConfigurationStep[];
  activeConfigurationStep: ConfigurationStep;

  constructor(service: ConfigurationstepMockService, private store: Store) {
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
    const component: ConfigruationChangedContract = this.getActiveViewChild();
    if (component.getIsConfigurationChanged) {
      this.store.dispatch(component.getActionToDispatch());
    }

    if (this.configurationIndex < this.configurationSteps.length - 1) {
      this.configurationIndex++;
    }

    this.setActiveConfiguration();
  }

  getActiveViewChild(): ConfigruationChangedContract {
    return this.bestattungsArtComponent !== null
      ? this.bestattungsArtComponent
      : this.grabstelleComponent;
  }

  previous(): void {
    if (this.configurationIndex > 0) {
      this.configurationIndex--;
    }

    this.setActiveConfiguration();
  }
}
