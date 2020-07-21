import { State, Action, Selector, StateContext } from '@ngxs/store';
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
  @Selector()
  static model(state: VerabschiedungsfeierStateModel) {
    return state.model;
  }

  @Action(ResetVerabschiedungsfeier)
  public resetVarabschiedungsfeier(
    ctx: StateContext<VerabschiedungsfeierStateModel>
  ) {
    ctx.setState({ model: undefined });
    ctx.dispatch(new ResetPaketauswahl());
  }
}
