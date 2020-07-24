import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import {
  BestattungsartStateModel,
  BestattungsartState,
  BestattungsItem,
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
  bestattungsarten$: Observable<BestattungsItem[]>;

  @Select(BestattungsartState.selectedItem)
  selectedBestattungsart$: Observable<BestattungsItem>;

  selectBestattunsgsart($event: BestattungsItem) {
    this.store.dispatch(new SelectBestattungsart($event));
  }
}
