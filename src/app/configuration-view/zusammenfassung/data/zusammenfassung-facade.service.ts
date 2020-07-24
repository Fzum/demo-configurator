import { Injectable } from '@angular/core';
import { Select } from '@ngxs/store';
import {
  BestattungsartState,
  BestattungsartStateModel,
} from '../../bestattungsart/data/bestattungsart.state';
import { Observable } from 'rxjs';
import {
  BeguenstigterState,
  BeguenstigterStateModel,
} from '../../beguenstigter/data/beguenstigter.state';
import {
  GrabstelleState,
  GrabstelleStateModel,
} from '../../grabstelle/data/grabstelle.state';

@Injectable({
  providedIn: 'root',
})
export class ZusammenfassungFacadeService {
  @Select(BestattungsartState)
  bestattungsart$: Observable<BestattungsartStateModel>;

  @Select(BeguenstigterState)
  beguenstigter$: Observable<BeguenstigterStateModel>;

  @Select(GrabstelleState)
  grabstelle$: Observable<GrabstelleStateModel>;
}
