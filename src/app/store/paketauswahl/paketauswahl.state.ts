import { State, Action, Selector, StateContext } from '@ngxs/store';
import { ChangePaketauswahl } from './paketauswahl.actions';
import { PaketauswahlConfig } from '../../model/dummy-config.model';
import {
  ResetBeguenstiger,
  ResetPaketauswahl,
} from '../vorsorge-reset-actions';

export interface PaketauswahlStateModel {
  config: PaketauswahlConfig;
}

@State<PaketauswahlStateModel>({
  name: 'paketauswahl',
  defaults: { config: { someBooleanValue: undefined } },
})
export class PaketauswahlState {
  @Action(ChangePaketauswahl)
  public changePaketauswahl(
    ctx: StateContext<PaketauswahlStateModel>,
    { payload }: ChangePaketauswahl
  ) {
    ctx.patchState({ config: payload });
    ctx.dispatch(new ResetBeguenstiger());
  }

  @Action(ResetPaketauswahl)
  public resetPaketauswahl(ctx: StateContext<PaketauswahlStateModel>) {
    ctx.setState({ config: undefined });
    ctx.dispatch(new ResetBeguenstiger());
  }
}
