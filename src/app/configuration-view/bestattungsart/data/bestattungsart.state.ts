import { State, Action, Selector, StateContext } from '@ngxs/store';
import { ResetGrabstelle } from '../../shared/vorsorge-reset-actions';
import { DeleteActiveIndices } from 'src/app/step-by-step-configurer/store/store.actions';
import { SelectBestattungsart } from './bestattunsart.action';

export interface BestattungsItem {
  title: string;
  description: string;
}

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
