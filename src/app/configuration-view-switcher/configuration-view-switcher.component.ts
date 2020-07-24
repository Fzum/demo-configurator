import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ConfigurationType } from '../model/configuration-type';
import { Store } from '@ngxs/store';
import { ConfigruationChangedContract } from '../configuration-view/configuration-changed-contract';

@Component({
  selector: 'app-configuration-view-switcher',
  templateUrl: './configuration-view-switcher.component.html',
  styleUrls: ['./configuration-view-switcher.component.scss'],
})
export class ConfigurationViewSwitcherComponent implements OnInit {
  constructor() {}

  @Input() configurationType: ConfigurationType;

  @ViewChild('abstractConfiguration')
  abstractConfigurations: ConfigruationChangedContract<any>; // typesafety unknown extends XY

  ngOnInit(): void {}
}
