import { Injectable } from '@angular/core';
import { Select } from '@ngxs/store/src/decorators/select/select';
import { BestattungsartState, BestattungsItem } from './bestattungsart.state';
import { Observable } from 'rxjs/internal/Observable';
import { Store } from '@ngxs/store';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { SelectBestattungsart } from './bestattunsart.action';

@Injectable({
  providedIn: 'root',
})
export class BestattungsartFacadeService {
  @Select(BestattungsartState.allItems)
  bestattungsarten$: Observable<BestattungsItem[]>;

  @Select(BestattungsartState.selectedItem)
  selectedBestattungsart$: Observable<BestattungsItem>;

  @Dispatch()
  selectBestattungsart($event: BestattungsItem) {
    return new SelectBestattungsart($event);
  }
}
