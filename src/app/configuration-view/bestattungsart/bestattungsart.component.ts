import { Component, OnInit } from '@angular/core';

import { ChangeBestattungsArt } from '../../store/vorsorge-configuration.actions';
import { ConfigruationChangedContract } from '../configuration-changed-contract';
import { AbstractConfiguration } from '../abstract-configuration';

@Component({
  selector: 'app-bestattungsart',
  templateUrl: './bestattungsart.component.html',
  styleUrls: ['./bestattungsart.component.scss'],
})
export class BestattungsartComponent
  extends AbstractConfiguration<ChangeBestattungsArt>
  implements OnInit {
  private isConfigurationChanged: boolean;

  constructor() {
    super();
  }

  ngOnInit(): void {}
}
