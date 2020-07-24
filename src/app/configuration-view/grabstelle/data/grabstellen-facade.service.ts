import { Injectable } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { GrabstelleState, Grabstelle } from '../data/grabstelle.state';
import { Observable } from 'rxjs';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { SelectGrabstelle } from './grabstelle.action';

@Injectable({
  providedIn: 'root',
})
export class GrabstellenFacadeService {
  @Select(GrabstelleState.allItems)
  grabstellen$: Observable<Grabstelle[]>;

  @Select(GrabstelleState.selectedItem)
  selectedGrabstelle$: Observable<Grabstelle>;

  @Dispatch()
  selectGrabstelle($event: Grabstelle) {
    return new SelectGrabstelle($event);
  }
}
