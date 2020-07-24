import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import {
  BestattungsartStateModel,
  BestattungsartState,
} from '../data/bestattungsart.state';
import { SelectBestattungsart } from '../data/bestattunsart.action';

@Component({
  selector: 'app-bestattungsart',
  templateUrl: './bestattungsart.component.html',
  styleUrls: ['./bestattungsart.component.scss'],
})
export class BestattungsartComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {}

  @Select(BestattungsartState.allItems)
  bestattungsarten$: Observable<string[]>;

  @Select((s: BestattungsartStateModel) => s.selectedItem)
  selectedBestattungsart$: Observable<string>;

  selectBestattunsgsart($event: string) {
    this.store.dispatch(new SelectBestattungsart($event));
  }
}
