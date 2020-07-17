import { Component, OnInit, OnDestroy } from '@angular/core';

import { ChangeBestattungsArt } from '../../store/vorsorge-configuration.actions';
import { AbstractConfiguration } from '../abstract-configuration';

@Component({
  selector: 'app-bestattungsart',
  templateUrl: './bestattungsart.component.html',
  styleUrls: ['./bestattungsart.component.scss'],
})
export class BestattungsartComponent
  extends AbstractConfiguration<ChangeBestattungsArt>
  implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {
    this.setAction(new ChangeBestattungsArt({ someBooleanValue: true }));
  }
}
