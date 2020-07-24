import { State, Action, Selector, StateContext } from '@ngxs/store';
import { BeguenstigterConfig } from '../../../model/dummy-config.model';
import { ResetBeguenstiger } from '../../shared/vorsorge-reset-actions';

export interface BeguenstigterStateModel {
  allItems: string[];
  selectedItem: string;
}

@State<BeguenstigterStateModel>({
  name: 'beguenstigter',
  defaults: {
    allItems: ['begünstigter 1', 'begünstigter 2', 'begünstigter 3'],
    selectedItem: undefined,
  },
})
export class BeguenstigterState {
  @Action(ResetBeguenstiger)
  public resetBeguenstiger(ctx: StateContext<BeguenstigterStateModel>) {
    ctx.patchState({ selectedItem: undefined });
  }
}
