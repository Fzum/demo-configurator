import { State, Action, Selector, StateContext } from '@ngxs/store';
import { BestattungsArtConfig } from '../../../model/dummy-config.model';

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
}
