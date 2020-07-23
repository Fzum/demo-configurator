import { State, Action, StateContext, Selector } from '@ngxs/store';
import { GrabstellenConfig } from '../../../model/dummy-config.model';
import {
  ResetVerabschiedungsfeier,
  ResetGrabstelle,
} from '../../shared/vorsorge-reset-actions';
import { Observable } from 'rxjs';
import { DeleteActiveIndices } from 'src/app/step-by-step-configurer/store/store.actions';
import { MarkGrabstelleConfigurationAsDirty } from './grabstelle.action';

export interface GrabstelleStateModel {
  model: GrabstellenConfig;
  isDirty: boolean;
}

const defaults: GrabstelleStateModel = {
  model: { inputOne: '', inputTwo: '' },
  isDirty: false,
};

@State<GrabstelleStateModel>({
  name: 'grabstelle',
  defaults,
})
export class GrabstelleState {
  @Selector()
  static model(state: GrabstelleStateModel): GrabstellenConfig {
    return state.model;
  }

  @Action(ResetGrabstelle)
  public resetGrabstelle(ctx: StateContext<GrabstelleStateModel>) {
    ctx.setState(defaults);
    ctx.dispatch(new ResetVerabschiedungsfeier());
  }

  @Action(MarkGrabstelleConfigurationAsDirty)
  public markAsDirty(ctx: StateContext<GrabstelleStateModel>) {
    ctx.patchState({ isDirty: true });
    ctx.dispatch(new ResetVerabschiedungsfeier());
    ctx.dispatch(new DeleteActiveIndices());
  }
}
