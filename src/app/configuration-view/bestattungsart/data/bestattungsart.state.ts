import { State, Action, Selector, StateContext } from '@ngxs/store';
import { DeleteActiveIndices } from '../../../navigation/data/store.actions';
import { SelectBestattungsart } from './bestattunsart.action';
import { ResetGrabstelle } from '../../grabstelle/data/grabstelle.action';
import { BestattungsItem } from '../model/bestattung.model';

export interface BestattungsartStateModel {
  allItems: BestattungsItem[];
  selectedItem: BestattungsItem;
}

@State<BestattungsartStateModel>({
  name: 'bestattungsart',
  defaults: {
    allItems: [
      { title: 'Erdbestattung', description: 'ab in die erde' },
      { title: 'Feuerbestattung', description: 'ab ins feuer' },
      { title: 'Alternative Bestattung', description: 'was besonderes' },
    ],
    selectedItem: undefined,
  },
})
export class BestattungsartState {
  @Selector()
  static allItems(state: BestattungsartStateModel) {
    return state.allItems;
  }

  @Selector()
  static selectedItem(state: BestattungsartStateModel) {
    return state.selectedItem;
  }

  @Action(SelectBestattungsart)
  public selectBestattungsart(
    ctx: StateContext<BestattungsartStateModel>,
    { payload }: SelectBestattungsart
  ) {
    ctx.patchState({ selectedItem: payload });
    ctx.dispatch(new ResetGrabstelle());
    ctx.dispatch(new DeleteActiveIndices());
  }
}
