import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ConfigurationStepType} from '../model/configurationstep-type';
import {Store} from '@ngxs/store';
import {ConfigruationChangedContract} from '../configuration-view/configuration-changed-contract';
import {SetFormPristine} from '@ngxs/form-plugin';

@Component({
  selector: 'app-configuration-view-switcher',
  templateUrl: './configuration-view-switcher.component.html',
  styleUrls: ['./configuration-view-switcher.component.scss'],
})
export class ConfigurationViewSwitcherComponent implements OnInit {
  constructor(private store: Store) {
  }

  @Input() configurationType: ConfigurationStepType;

  @ViewChild('abstractConfiguration')
  abstractConfigurations: ConfigruationChangedContract<any>; // typesafety unknown extends XY

  ngOnInit(): void {
  }

  public handleConfigurationUpdates(): void {
    const activeConfigurationComponent: ConfigruationChangedContract<any> = this
      .abstractConfigurations;

    activeConfigurationComponent
      .getForm()
      .subscribe((form: { dirty: any }) => {
        if (form.dirty) {
          this.store.dispatch(activeConfigurationComponent.getResetAction());
          this.store.dispatch(
            new SetFormPristine(activeConfigurationComponent.getResetPath())
          );
        }
      });
  }
}
