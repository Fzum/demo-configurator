import {
  State,
  Action,
  Selector,
} from '@ngxs/store';
import {
  BeguenstigterConfig,
} from '../../../model/dummy-config.model';
import { ResetBeguenstiger } from '../../shared/vorsorge-reset-actions';

export interface BeguenstigterStateModel {
  model: BeguenstigterConfig;
}

@State<BeguenstigterStateModel>({
  name: 'beguenstigter',
  defaults: {
    model: { inputOne: '', inputTwo: '' },
  },
})
export class BeguenstigterState {
  @Selector()
  static model(state: BeguenstigterStateModel) {
    return state.model;
  }

  @Action(ResetBeguenstiger)
  public resetBeguenstiger() {
    console.log('nothing to reset');
  }
}
