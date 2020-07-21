import { State, Action, Selector, StateContext } from '@ngxs/store';
import { VerabschiedungsfeierConfig } from '../../../model/dummy-config.model';
import {
  ResetPaketauswahl,
  ResetVerabschiedungsfeier,
} from '../../shared/vorsorge-reset-actions';

export interface VerabschiedungsfeierStateModel {
  model: VerabschiedungsfeierConfig;
}

const defaults: { model: { inputOne: string; inputTwo: string } } = {
  model: { inputOne: '', inputTwo: '' },
};

@State<VerabschiedungsfeierStateModel>({
  name: 'verabschiedungsfeier',
  defaults,
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
    ctx.setState(defaults);
    ctx.dispatch(new ResetPaketauswahl());
  }
}
