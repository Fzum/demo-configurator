import { Component, OnInit } from '@angular/core';
import { ChangeBestattungsart } from './store/bestattungsart.actions';
import { AbstractConfiguration } from '../abstract-configuration';

@Component({
  selector: 'app-bestattungsart',
  templateUrl: './bestattungsart.component.html',
  styleUrls: ['./bestattungsart.component.scss'],
})
export class BestattungsartComponent
  extends AbstractConfiguration<ChangeBestattungsart>
  implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {
    this.setAction(new ChangeBestattungsart({ someBooleanValue: true }));
  }
}
