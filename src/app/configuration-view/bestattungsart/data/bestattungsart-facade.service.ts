import { Injectable } from '@angular/core';
import { BestattungsartState, BestattungsItem } from './bestattungsart.state';
import { Observable } from 'rxjs/internal/Observable';
import { SelectBestattungsart } from './bestattunsart.action';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { Select } from '@ngxs/store';

@Injectable({
  providedIn: 'root',
})
export class BestattungsartFacadeService {
  constructor() {}

  @Select(BestattungsartState.allItems)
  bestattungsarten$: Observable<BestattungsItem[]>;

  @Select(BestattungsartState.selectedItem)
  selectedBestattungsart$: Observable<BestattungsItem>;

  @Dispatch()
  selectBestattungsart($event: BestattungsItem) {
    return new SelectBestattungsart($event);
  }
}
