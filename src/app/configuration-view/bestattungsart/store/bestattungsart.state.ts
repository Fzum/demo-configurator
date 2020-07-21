import { State, Action, Selector, StateContext } from '@ngxs/store';
import { ChangeBestattungsart } from './bestattungsart.actions';
import { BestattungsArtConfig } from '../../../model/dummy-config.model';
import { ResetGrabstelle } from '../../shared/vorsorge-reset-actions';

export interface BestattungsartStateModel {
  model: BestattungsArtConfig;
}

@State<BestattungsartStateModel>({
  name: 'bestattungsart',
  defaults: { model: { inputOne: '', inputTwo: '' } },
})
export class BestattungsartState {
  @Selector()
  static model(state: BestattungsartStateModel) {
    return state.model;
  }

  @Action(ChangeBestattungsart)
  public changeBestattungsart(
    ctx: StateContext<BestattungsartStateModel>,
    { payload }: ChangeBestattungsart
  ) {
    ctx.patchState({ model: payload });
    ctx.dispatch(new ResetGrabstelle());
  }
}
