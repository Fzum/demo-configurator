import { Injectable } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Beguenstiger, BeguenstigterState } from './beguenstigter.state';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { SelectBeguenstigter } from './beguenstigter.actions';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BeguenstigerFacadeService {
  @Select(BeguenstigterState.beguenstigte)
  beguenstigte$: Observable<Beguenstiger[]>;

  @Select(BeguenstigterState.selectedBeguenstigter)
  selectedBeguenstigter$: Observable<Beguenstiger>;

  constructor(private store: Store) {}

  @Dispatch()
  selectBeguenstigter(b: Beguenstiger) {
    return new SelectBeguenstigter(b);
  }
}
