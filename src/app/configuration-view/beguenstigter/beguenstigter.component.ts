import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChangeBeguenstigter } from 'src/app/configuration-view/beguenstigter/store/beguenstigter.actions';
import { AbstractConfiguration } from '../abstract-configuration';
import { Select, Store } from '@ngxs/store';
import {
  BeguenstigterState,
  BeguenstigterStateModel,
} from 'src/app/configuration-view/beguenstigter/store/beguenstigter.state';
import { Observable } from 'rxjs';

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

  @Select(BeguenstigterState) beguenstigter$: Observable<
    BeguenstigterStateModel
  >;

  ngOnInit(): void {
    this.beguenstigter$.subscribe(console.log);
    this.setAction(new ChangeBeguenstigter({ someBooleanValue: true }));
  }
}
