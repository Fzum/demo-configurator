import { State, Action, Selector, StateContext } from '@ngxs/store';
import { BeguenstigterConfig } from '../../../model/dummy-config.model';
import { ResetBeguenstiger } from '../../shared/vorsorge-reset-actions';

export interface BeguenstigterStateModel {
  model: BeguenstigterConfig;
}

const defaults: { model: { inputOne: string; inputTwo: string } } = {
  model: { inputOne: '', inputTwo: '' },
};

@State<BeguenstigterStateModel>({
  name: 'beguenstigter',
  defaults,
})
export class BeguenstigterState {
  @Selector()
  static model(state: BeguenstigterStateModel): BeguenstigterConfig {
    return state.model;
  }

  @Action(ResetBeguenstiger)
  public resetBeguenstiger(ctx: StateContext<BeguenstigterStateModel>) {
    ctx.setState(defaults);
  }
}
