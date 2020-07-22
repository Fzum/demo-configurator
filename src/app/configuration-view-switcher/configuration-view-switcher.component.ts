import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ConfigurationType} from '../model/configuration-type';
import {Store} from '@ngxs/store';
import {ConfigruationChangedContract} from '../configuration-view/configuration-changed-contract';
import {SetFormPristine} from '@ngxs/form-plugin';
import {DeleteActiveIndices} from '../step-by-step-configurer/store/store.actions';

@Component({
  selector: 'app-configuration-view-switcher',
  templateUrl: './configuration-view-switcher.component.html',
  styleUrls: ['./configuration-view-switcher.component.scss'],
})
export class ConfigurationViewSwitcherComponent implements OnInit {
  constructor(private store: Store) {
  }

  @Input() configurationType: ConfigurationType;

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
          const resetAction = activeConfigurationComponent.getResetAction();
          const setFormAction = new SetFormPristine(activeConfigurationComponent.getResetPath());
          const deleteActiveIndices = new DeleteActiveIndices();

          this.store.dispatch(resetAction);
          this.store.dispatch(setFormAction);
          this.store.dispatch(deleteActiveIndices);
        }
      });
  }
}
