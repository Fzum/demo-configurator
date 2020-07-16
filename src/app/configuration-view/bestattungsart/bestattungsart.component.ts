import { Component, OnInit } from '@angular/core';

import { ChangeBestattungsArt } from '../../store/vorsorge-configuration.actions';
import { ConfigruationChangedContract } from '../configuration-changed-contract';

@Component({
  selector: 'app-bestattungsart',
  templateUrl: './bestattungsart.component.html',
  styleUrls: ['./bestattungsart.component.scss'],
})
export class BestattungsartComponent
  implements OnInit, ConfigruationChangedContract {
  private isConfigurationChanged: boolean;

  constructor() {}

  ngOnInit(): void {}

  getIsConfigurationChanged(): boolean {
    return this.isConfigurationChanged;
  }

  getActionToDispatch() {
    return new ChangeBestattungsArt({
      someBooleanValue: true,
      someOtherBooleanValue: true,
    });
  }

  simulateBestattungsartChange(): void {
    this.isConfigurationChanged = true;
  }
}
