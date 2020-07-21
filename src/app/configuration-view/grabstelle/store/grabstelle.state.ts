import { State, Action, StateContext, Selector } from '@ngxs/store';
import { GrabstellenConfig } from '../../../model/dummy-config.model';
import {
  ResetVerabschiedungsfeier,
  ResetGrabstelle,
} from '../../shared/vorsorge-reset-actions';

export interface GrabstelleStateModel {
  model: GrabstellenConfig;
}

@State<GrabstelleStateModel>({
  name: 'grabstelle',
  defaults: { model: { inputOne: '', inputTwo: '' } },
})
export class GrabstelleState {
  @Selector()
  static model(state: GrabstelleStateModel) {
    return state.model;
  }

  @Action(ResetGrabstelle)
  public resetGrabstelle(ctx: StateContext<GrabstelleStateModel>) {
    ctx.setState({ model: undefined });
    ctx.dispatch(new ResetVerabschiedungsfeier());
  }
}
