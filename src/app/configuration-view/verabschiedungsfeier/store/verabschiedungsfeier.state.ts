import { State, Action, Selector, StateContext } from '@ngxs/store';
import { ChangeVerabschiedungsfeier } from './verabschiedungsfeier.actions';
import { VerabschiedungsfeierConfig } from '../../../model/dummy-config.model';
import {
  ResetPaketauswahl,
  ResetVerabschiedungsfeier,
} from '../../shared/vorsorge-reset-actions';

export interface VerabschiedungsfeierStateModel {
  config: VerabschiedungsfeierConfig;
}

@State<VerabschiedungsfeierStateModel>({
  name: 'verabschiedungsfeier',
  defaults: { config: { someBooleanValue: undefined } },
})
export class VerabschiedungsfeierState {
  @Action(ChangeVerabschiedungsfeier)
  public changeVerabschiedungsfeier(
    ctx: StateContext<VerabschiedungsfeierStateModel>,
    { payload }: ChangeVerabschiedungsfeier
  ) {
    ctx.patchState({ config: payload });
    ctx.dispatch(new ResetPaketauswahl());
  }

  @Action(ResetVerabschiedungsfeier)
  public resetVarabschiedungsfeier(
    ctx: StateContext<VerabschiedungsfeierStateModel>
  ) {
    ctx.setState({ config: undefined });
    ctx.dispatch(new ResetPaketauswahl());
  }
}
