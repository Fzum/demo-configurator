import { Injectable } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { GrabstelleState } from '../data/grabstelle.state';
import { Observable } from 'rxjs';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { SelectGrabstelle } from './grabstelle.action';

@Injectable({
  providedIn: 'root',
})
export class GrabstellenFacadeService {
  @Select(GrabstelleState.allItems)
  grabstellen$: Observable<string[]>;

  @Select(GrabstelleState.selectedItem)
  selectedGrabstelle$: Observable<string>;

  constructor(private store: Store) {}

  @Dispatch()
  selectGrabstelle($event: string) {
    return new SelectGrabstelle($event);
  }
}
