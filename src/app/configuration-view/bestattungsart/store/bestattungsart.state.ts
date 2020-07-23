import { State, Action, Selector, StateContext } from '@ngxs/store';
import { BestattungsArtConfig } from '../../../model/dummy-config.model';
import { ResetGrabstelle } from '../../shared/vorsorge-reset-actions';
import { DeleteActiveIndices } from 'src/app/step-by-step-configurer/store/store.actions';
import { MarkBestattungsConfigurationAsDirty } from './bestattunsart.action';

export interface BestattungsartStateModel {
  model: BestattungsArtConfig;
  isDirty: boolean;
}

@State<BestattungsartStateModel>({
  name: 'bestattungsart',
  defaults: {
    model: { inputOne: '', inputTwo: '' },
    isDirty: false,
  },
})
export class BestattungsartState {
  @Selector()
  static model(state: BestattungsartStateModel): BestattungsArtConfig {
    return state.model;
  }

  @Action(MarkBestattungsConfigurationAsDirty)
  public markAsDirty(ctx: StateContext<BestattungsartStateModel>) {
    ctx.patchState({ isDirty: true });
    ctx.dispatch(new ResetGrabstelle());
    ctx.dispatch(new DeleteActiveIndices());
  }
}
