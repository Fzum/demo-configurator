import { State, Action, StateContext } from '@ngxs/store';
import { ChangeGrabstelle } from './grabstelle.actions';
import { GrabstellenConfig } from '../../model/dummy-config.model';
import {
  ResetVerabschiedungsfeier,
  ResetGrabstelle,
} from '../vorsorge-reset-actions';

export interface GrabstelleStateModel {
  config: GrabstellenConfig;
}

@State<GrabstelleStateModel>({
  name: 'grabstelle',
  defaults: { config: { someBooleanValue: undefined } },
})
export class GrabstelleState {
  @Action(ChangeGrabstelle)
  public changeGrabstelle(
    ctx: StateContext<GrabstelleStateModel>,
    { payload }: ChangeGrabstelle
  ) {
    ctx.patchState({ config: payload });
    ctx.dispatch(new ResetVerabschiedungsfeier());
  }

  @Action(ResetGrabstelle)
  public resetGrabstelle(ctx: StateContext<GrabstelleStateModel>) {
    ctx.setState({ config: undefined });
    ctx.dispatch(new ResetVerabschiedungsfeier());
  }
}
