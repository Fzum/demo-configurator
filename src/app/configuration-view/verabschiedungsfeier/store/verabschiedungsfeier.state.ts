import { State, Action, Selector, StateContext } from '@ngxs/store';
import { ChangeVerabschiedungsfeier } from './verabschiedungsfeier.actions';
import { VerabschiedungsfeierConfig } from '../../../model/dummy-config.model';
import {
  ResetPaketauswahl,
  ResetVerabschiedungsfeier,
} from '../../shared/vorsorge-reset-actions';

export interface VerabschiedungsfeierStateModel {
  model: VerabschiedungsfeierConfig;
}

@State<VerabschiedungsfeierStateModel>({
  name: 'verabschiedungsfeier',
  defaults: { model: { inputOne: '', inputTwo: '' } },
})
export class VerabschiedungsfeierState {
  @Action(ChangeVerabschiedungsfeier)
  public changeVerabschiedungsfeier(
    ctx: StateContext<VerabschiedungsfeierStateModel>,
    { payload }: ChangeVerabschiedungsfeier
  ) {
    ctx.patchState({ model: payload });
    ctx.dispatch(new ResetPaketauswahl());
  }

  @Action(ResetVerabschiedungsfeier)
  public resetVarabschiedungsfeier(
    ctx: StateContext<VerabschiedungsfeierStateModel>
  ) {
    ctx.setState({ model: undefined });
    ctx.dispatch(new ResetPaketauswahl());
  }
}
