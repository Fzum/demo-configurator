import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ConfigurationType } from '../model/configuration-type';
import { Store } from '@ngxs/store';
import { ConfigruationChangedContract } from '../configuration-view/configuration-changed-contract';
import { SetFormPristine } from '@ngxs/form-plugin';
import { DeleteActiveIndices } from '../step-by-step-configurer/store/store.actions';
import { last, first, filter } from 'rxjs/operators';

@Component({
  selector: 'app-configuration-view-switcher',
  templateUrl: './configuration-view-switcher.component.html',
  styleUrls: ['./configuration-view-switcher.component.scss'],
})
export class ConfigurationViewSwitcherComponent implements OnInit {
  constructor(private store: Store) {}

  @Input() configurationType: ConfigurationType;

  @ViewChild('abstractConfiguration')
  abstractConfigurations: ConfigruationChangedContract<any>; // typesafety unknown extends XY

  ngOnInit(): void {}
}
