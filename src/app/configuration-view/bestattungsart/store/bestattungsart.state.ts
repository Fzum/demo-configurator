import { State, Action, Selector, StateContext } from '@ngxs/store';
import { BestattungsArtConfig } from '../../../model/dummy-config.model';

export interface BestattungsartStateModel {
  model: BestattungsArtConfig;
}

const defaults: { model: { inputOne: string; inputTwo: string } } = {
  model: { inputOne: '', inputTwo: '' },
};

@State<BestattungsartStateModel>({
  name: 'bestattungsart',
  defaults,
})
export class BestattungsartState {
  @Selector()
  static model(state: BestattungsartStateModel): BestattungsArtConfig {
    return state.model;
  }
}
