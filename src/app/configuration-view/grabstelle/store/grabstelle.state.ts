import { State, Action, StateContext, Selector } from '@ngxs/store';
import { GrabstellenConfig } from '../../../model/dummy-config.model';
import {
  ResetVerabschiedungsfeier,
  ResetGrabstelle,
} from '../../shared/vorsorge-reset-actions';

export interface GrabstelleStateModel {
  model: GrabstellenConfig;
}

const defaults: { model: { inputOne: string; inputTwo: string } } = {
  model: { inputOne: '', inputTwo: '' },
};

@State<GrabstelleStateModel>({
  name: 'grabstelle',
  defaults,
})
export class GrabstelleState {
  @Selector()
  static model(state: GrabstelleStateModel) {
    return state.model;
  }

  @Action(ResetGrabstelle)
  public resetGrabstelle(ctx: StateContext<GrabstelleStateModel>) {
    ctx.setState(defaults);
    ctx.dispatch(new ResetVerabschiedungsfeier());
  }
}
