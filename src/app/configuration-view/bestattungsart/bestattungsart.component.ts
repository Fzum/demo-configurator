import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';

import { ChangeBestattungsArt } from '../../store/vorsorge-configuration.actions';

@Component({
  selector: 'app-bestattungsart',
  templateUrl: './bestattungsart.component.html',
  styleUrls: ['./bestattungsart.component.scss'],
})
export class BestattungsartComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {}

  simulateBestattungsartChange(): void {
    console.log('should dispatch now');
    this.store.dispatch(
      new ChangeBestattungsArt({
        someBooleanValue: true,
        someOtherBooleanValue: true,
        yetAnotherBooleanValue: true,
      })
    );
  }
}
