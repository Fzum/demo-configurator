import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ConfigurationStepType } from '../model/configurationstep-type';
import { Store } from '@ngxs/store';
import { ConfigruationChangedContract } from '../configuration-view/configuration-changed-contract';
import { ConfigurationChangeAction } from '../configuration-view/shared/vorsorge-configuration.actions';

@Component({
  selector: 'app-configuration-view-switcher',
  templateUrl: './configuration-view-switcher.component.html',
  styleUrls: ['./configuration-view-switcher.component.scss'],
})
export class ConfigurationViewSwitcherComponent implements OnInit {
  constructor(private store: Store) {}

  @Input() configurationType: ConfigurationStepType;

  @ViewChild('abstractConfiguration')
  abstractConfigurations: ConfigruationChangedContract<any>; // typesafety unknown extends XY

  ngOnInit(): void {}

  public handleConfigurationUpdates() {
    const activeConfigurationComponent: ConfigruationChangedContract<any> = this
      .abstractConfigurations;

    if (activeConfigurationComponent.isConfigurationChanged()) {
      const action: ConfigurationChangeAction = activeConfigurationComponent.getAction();
      this.store.dispatch(action);
    }
  }
}
