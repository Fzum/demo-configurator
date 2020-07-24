import { State, Action, StateContext, Selector } from '@ngxs/store';
import { GrabstellenConfig } from '../../../model/dummy-config.model';
import {
  ResetVerabschiedungsfeier,
  ResetGrabstelle,
} from '../../shared/vorsorge-reset-actions';
import { Observable } from 'rxjs';
import { DeleteActiveIndices } from 'src/app/step-by-step-configurer/store/store.actions';
import { SelectGrabstelle } from './grabstelle.action';

export interface GrabstelleStateModel {
  allItems: string[];
  selectedItem: string;
}

@State<GrabstelleStateModel>({
  name: 'grabstelle',
  defaults: {
    allItems: ['grabstelle 1', 'grabstelle 2', 'grabstelle 3'],
    selectedItem: '',
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
    ctx.patchState({ selectedItem: '' });
    ctx.dispatch(new ResetVerabschiedungsfeier());
  }

  @Action(SelectGrabstelle)
  public markAsDirty(
    ctx: StateContext<GrabstelleStateModel>,
    { payload }: SelectGrabstelle
  ) {
    ctx.patchState({ selectedItem: payload });
    ctx.dispatch(new ResetVerabschiedungsfeier());
    ctx.dispatch(new DeleteActiveIndices());
  }
}
