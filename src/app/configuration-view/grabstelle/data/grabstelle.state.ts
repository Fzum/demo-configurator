import { State, Action, StateContext, Selector } from '@ngxs/store';
import { GrabstellenConfig } from '../../../model/dummy-config.model';
import {
  ResetVerabschiedungsfeier,
  ResetGrabstelle,
} from '../../shared/vorsorge-reset-actions';
import { Observable } from 'rxjs';
import { DeleteActiveIndices } from 'src/app/step-by-step-configurer/store/store.actions';
import { SetGrabstelle } from './grabstelle.action';

export interface GrabstelleStateModel {
  allItems: string[];
  selectedItem: string;
}

@State<GrabstelleStateModel>({
  name: 'grabstelle',
  defaults: {
    allItems: ['grabstelle 1', 'grabstelle 2', 'grabstelle 3'],
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
    ctx.dispatch(new ResetVerabschiedungsfeier());
  }

  @Action(SetGrabstelle)
  public markAsDirty(ctx: StateContext<GrabstelleStateModel>) {
    ctx.dispatch(new ResetVerabschiedungsfeier());
    ctx.dispatch(new DeleteActiveIndices());
  }
}