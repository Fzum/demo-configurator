import { State, Action, StateContext, Selector } from '@ngxs/store';
import { DeleteActiveIndices } from 'src/app/step-by-step-configurer/store/store.actions';
import { SelectGrabstelle, ResetGrabstelle } from './grabstelle.action';
import { ResetBeguenstiger } from '../../beguenstigter/data/beguenstigter.actions';

export interface Grabstelle {
  titel: string;
  place: string;
}

export interface GrabstelleStateModel {
  allItems: Grabstelle[];
  selectedItem: Grabstelle;
}

@State<GrabstelleStateModel>({
  name: 'grabstelle',
  defaults: {
    allItems: [
      { titel: 'Grabstelle 1', place: 'Ort 1' },
      { titel: 'Grabstelle 2', place: 'Ort 2' },
      { titel: 'Grabstelle 3', place: 'Ort 3' },
      { titel: 'Grabstelle 4', place: 'Ort 4' },
      { titel: 'Grabstelle 5', place: 'Ort 5' },
    ],
    selectedItem: undefined,
  },
})
export class GrabstelleState {
  @Selector()
  static allItems(state: GrabstelleStateModel) {
    return state.allItems;
  }

  @Selector()
  static selectedItem(state: GrabstelleStateModel) {
    return state.selectedItem;
  }

  @Action(ResetGrabstelle)
  public resetGrabstelle(ctx: StateContext<GrabstelleStateModel>) {
    ctx.patchState({ selectedItem: undefined });
    ctx.dispatch(new ResetBeguenstiger());
  }

  @Action(SelectGrabstelle)
  public markAsDirty(
    ctx: StateContext<GrabstelleStateModel>,
    { payload }: SelectGrabstelle
  ) {
    ctx.patchState({ selectedItem: payload });
    ctx.dispatch(new ResetBeguenstiger());
    ctx.dispatch(new DeleteActiveIndices());
  }
}
