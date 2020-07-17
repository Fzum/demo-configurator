import {
  Component,
  OnInit,
  Input,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { ConfigurationStepType } from '../model/configurationstep-type';
import { Store } from '@ngxs/store';
import { ConfigruationChangedContract } from '../configuration-view/configuration-changed-contract';
import { ConfigurationChangeAction } from '../store/vorsorge-configuration.actions';

@Component({
  selector: 'app-configuration-view-switcher',
  templateUrl: './configuration-view-switcher.component.html',
  styleUrls: ['./configuration-view-switcher.component.scss'],
})
export class ConfigurationViewSwitcherComponent implements OnInit {
  constructor(private store: Store) {}

  @Input() configurationType: ConfigurationStepType;

  @ViewChildren('abstractConfiguration')
  abstractConfigurations: QueryList<ConfigruationChangedContract<any>>; // typesafety unknown extends XY

  ngOnInit(): void {}

  public handleConfigurationUpdates() {
    const component: ConfigruationChangedContract<any> = this
      .abstractConfigurations.first;

    if (component.isConfigurationChanged()) {
      const action: ConfigurationChangeAction = component.getAction();
      this.store.dispatch(action);
    }
  }
}
