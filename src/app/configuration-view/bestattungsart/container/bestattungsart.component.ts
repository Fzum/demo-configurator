import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { BestattungsartStateModel } from '../data/bestattungsart.state';

@Component({
  selector: 'app-bestattungsart',
  templateUrl: './bestattungsart.component.html',
  styleUrls: ['./bestattungsart.component.scss'],
})
export class BestattungsartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Select((s: BestattungsartStateModel) => s.allItems)
  bestattungsarten$: Observable<string[]>;

  @Select((s: BestattungsartStateModel) => s.selectedItem)
  selectedBestattungsart$: Observable<string>;
}
