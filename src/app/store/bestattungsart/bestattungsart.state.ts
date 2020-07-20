import { State, Action, Selector, StateContext } from '@ngxs/store';
import { ChangeBestattungsart } from './bestattungsart.actions';
import { BestattungsArtConfig } from '../../model/dummy-config.model';
import { ResetGrabstelle } from '../vorsorge-reset-actions';

export interface BestattungsartStateModel {
  config: BestattungsArtConfig;
}

@State<BestattungsartStateModel>({
  name: 'bestattungsart',
  defaults: { config: { someBooleanValue: undefined } },
})
export class BestattungsartState {
  @Action(ChangeBestattungsart)
  public changeBestattungsart(
    ctx: StateContext<BestattungsartStateModel>,
    { payload }: ChangeBestattungsart
  ) {
    ctx.patchState({ config: payload });
    ctx.dispatch(new ResetGrabstelle());
  }
}
