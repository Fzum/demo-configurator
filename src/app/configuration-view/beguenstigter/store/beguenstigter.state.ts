import { State, Action, StateContext } from '@ngxs/store';
import { ChangeBeguenstigter } from './beguenstigter.actions';
import { BeguenstigterConfig } from '../../../model/dummy-config.model';
import { ResetBeguenstiger } from '../../shared/vorsorge-reset-actions';

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
