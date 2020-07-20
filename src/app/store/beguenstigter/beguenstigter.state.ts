import { State, Action, Selector, StateContext } from '@ngxs/store';
import { ChangeBeguenstigter } from './beguenstigter.actions';
import { BeguenstigterConfig } from '../../model/dummy-config.model';
import { ResetBeguenstiger } from '../vorsorge-reset-actions';

export interface BeguenstigterStateModel {
  config: BeguenstigterConfig;
}

@State<BeguenstigterStateModel>({
  name: 'beguenstigter',
  defaults: { config: { someBooleanValue: undefined } },
})
export class BeguenstigterState {
  @Action(ChangeBeguenstigter)
  public changeBeguenstigter(
    ctx: StateContext<BeguenstigterStateModel>,
    { payload }: ChangeBeguenstigter
  ) {
    ctx.patchState({ config: payload });
  }

  @Action(ResetBeguenstiger)
  public resetBeguenstiger() {
    console.log('nothing to reset');
  }
}
