import {
  State,
  Action,
  StateContext,
  Select,
  createSelector,
  Selector,
} from '@ngxs/store';
import { ChangeBeguenstigter } from './beguenstigter.actions';
import {
  BeguenstigterConfig,
  DummyConfig,
} from '../../../model/dummy-config.model';
import { ResetBeguenstiger } from '../../shared/vorsorge-reset-actions';
import { BestattungsartState } from '../../bestattungsart/store/bestattungsart.state';

export interface BeguenstigterStateModel {
  model: BeguenstigterConfig;
}

@State<BeguenstigterStateModel>({
  name: 'beguenstigter',
  defaults: {
    model: { inputOne: '', inputTwo: '' },
  },
})
export class BeguenstigterState {
  @Selector()
  static model(state: BeguenstigterStateModel) {
    return state.model;
  }

  @Action(ChangeBeguenstigter)
  public changeBeguenstigter(
    ctx: StateContext<BeguenstigterStateModel>,
    { payload }: ChangeBeguenstigter
  ) {
    ctx.patchState({ model: payload });
  }

  @Action(ResetBeguenstiger)
  public resetBeguenstiger() {
    console.log('nothing to reset');
  }
}
