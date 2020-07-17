import { Component, OnInit } from '@angular/core';
import { ChangeBeguenstigter } from 'src/app/store/vorsorge-configuration.actions';
import { AbstractConfiguration } from '../abstract-configuration';

@Component({
  selector: 'app-beguenstigter',
  templateUrl: './beguenstigter.component.html',
  styleUrls: ['./beguenstigter.component.scss'],
})
export class BeguenstigterComponent
  extends AbstractConfiguration<ChangeBeguenstigter>
  implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {
    this.setAction(
      new ChangeBeguenstigter({
        someBooleanValue: true,
        someOtherBooleanValue: true,
      })
    );
  }
}
