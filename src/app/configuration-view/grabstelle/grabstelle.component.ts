import { Component, OnInit } from '@angular/core';
import { ConfigruationChangedContract } from '../configuration-changed-contract';
import { ChangeGrabstelle } from 'src/app/store/vorsorge-configuration.actions';

@Component({
  selector: 'app-grabstelle',
  templateUrl: './grabstelle.component.html',
  styleUrls: ['./grabstelle.component.scss'],
})
export class GrabstelleComponent
  implements OnInit, ConfigruationChangedContract {
  constructor() {}

  isConfigurationChanged: boolean;

  ngOnInit(): void {}

  getIsConfigurationChanged(): boolean {
    return this.isConfigurationChanged;
  }

  getActionToDispatch() {
    return new ChangeGrabstelle({
      someBooleanValue: true,
      someOtherBooleanValue: true,
    });
  }

  setChanged(): void {
    this.isConfigurationChanged = true;
  }
}
