import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { ConfigurationstepMockService } from '../mock/configurationstep-mock-service.service';
import { ConfigurationStep } from '../model/configurationstep';
import { BestattungsartComponent } from '../configuration-view/bestattungsart/bestattungsart.component';
import { GrabstelleComponent } from '../configuration-view/grabstelle/grabstelle.component';
import { Store } from '@ngxs/store';
import { ConfigruationChangedContract } from '../configuration-view/configuration-changed-contract';
import { ConfigurationChangeAction } from '../store/vorsorge-configuration.actions';
import { VerabschiedungsfeierComponent } from '../configuration-view/verabschiedungsfeier/verabschiedungsfeier.component';
import { PaketauswahlComponent } from '../configuration-view/paketauswahl/paketauswahl.component';
import { BeguenstigterComponent } from '../configuration-view/beguenstigter/beguenstigter.component';
import { AbstractConfiguration } from '../configuration-view/abstract-configuration';

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

  @ViewChild(VerabschiedungsfeierComponent)
  verabschiedungsfeierComponent: VerabschiedungsfeierComponent;

  @ViewChild(PaketauswahlComponent)
  paketauswahlComponent: PaketauswahlComponent;

  @ViewChild(BeguenstigterComponent)
  beguenstigterComponent: BeguenstigterComponent;

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
    this.handleConfigurationUpdates();

    if (this.configurationIndex < this.configurationSteps.length - 1) {
      this.configurationIndex++;
    }

    this.setActiveConfiguration();
  }

  private handleConfigurationUpdates() {
    const component: ConfigruationChangedContract<any> = this.getActiveViewChild();
    if (component.isConfigurationChanged()) {
      const action: ConfigurationChangeAction = component.getAction();
      this.store.dispatch(action);
    }
  }

  getActiveViewChild(): AbstractConfiguration<ConfigurationChangeAction> {
    return [
      this.bestattungsArtComponent,
      this.grabstelleComponent,
      this.verabschiedungsfeierComponent,
      this.paketauswahlComponent,
      this.beguenstigterComponent,
    ].filter((c) => c !== undefined)[0];
  }

  previous(): void {
    if (this.configurationIndex > 0) {
      this.configurationIndex--;
    }

    this.setActiveConfiguration();
  }
}
