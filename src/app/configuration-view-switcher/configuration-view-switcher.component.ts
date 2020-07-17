import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ConfigurationStepType } from '../model/configurationstep-type';
import { BestattungsartComponent } from '../configuration-view/bestattungsart/bestattungsart.component';
import { GrabstelleComponent } from '../configuration-view/grabstelle/grabstelle.component';
import { VerabschiedungsfeierComponent } from '../configuration-view/verabschiedungsfeier/verabschiedungsfeier.component';
import { PaketauswahlComponent } from '../configuration-view/paketauswahl/paketauswahl.component';
import { BeguenstigterComponent } from '../configuration-view/beguenstigter/beguenstigter.component';
import { Store } from '@ngxs/store';
import { ConfigruationChangedContract } from '../configuration-view/configuration-changed-contract';
import { ConfigurationChangeAction } from '../store/vorsorge-configuration.actions';
import { AbstractConfiguration } from '../configuration-view/abstract-configuration';

@Component({
  selector: 'app-configuration-view-switcher',
  templateUrl: './configuration-view-switcher.component.html',
  styleUrls: ['./configuration-view-switcher.component.scss'],
})
export class ConfigurationViewSwitcherComponent implements OnInit {
  constructor(private store: Store) {}

  @Input() configurationType: ConfigurationStepType;

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

  ngOnInit(): void {}

  public handleConfigurationUpdates() {
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
}
