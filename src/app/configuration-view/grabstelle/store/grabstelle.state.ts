import { State, Action, StateContext } from '@ngxs/store';
import { ChangeGrabstelle } from './grabstelle.actions';
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
  @Action(ChangeGrabstelle)
  public changeGrabstelle(
    ctx: StateContext<GrabstelleStateModel>,
    { payload }: ChangeGrabstelle
  ) {
    ctx.patchState({ model: payload });
    ctx.dispatch(new ResetVerabschiedungsfeier());
  }

  @Action(ResetGrabstelle)
  public resetGrabstelle(ctx: StateContext<GrabstelleStateModel>) {
    ctx.setState({ model: undefined });
    ctx.dispatch(new ResetVerabschiedungsfeier());
  }
}
