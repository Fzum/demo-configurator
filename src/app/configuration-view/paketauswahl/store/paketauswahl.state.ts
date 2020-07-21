import { State, Action, Selector, StateContext } from '@ngxs/store';
import { PaketauswahlConfig } from '../../../model/dummy-config.model';
import {
  ResetBeguenstiger,
  ResetPaketauswahl,
} from '../../shared/vorsorge-reset-actions';

export interface PaketauswahlStateModel {
  model: PaketauswahlConfig;
}

@State<PaketauswahlStateModel>({
  name: 'paketauswahl',
  defaults: { model: { inputOne: '', inputTwo: '' } },
})
export class PaketauswahlState {
  @Selector()
  static model(state: PaketauswahlStateModel) {
    return state.model;
  }

  @Action(ResetPaketauswahl)
  public resetPaketauswahl(ctx: StateContext<PaketauswahlStateModel>) {
    ctx.setState({ model: undefined });
    ctx.dispatch(new ResetBeguenstiger());
  }
}
