import { State, Action, Selector, StateContext } from '@ngxs/store';
import { BestattungsArtConfig } from '../../../model/dummy-config.model';
import { ResetGrabstelle } from '../../shared/vorsorge-reset-actions';
import { DeleteActiveIndices } from 'src/app/step-by-step-configurer/store/store.actions';
import { SelectBestattungsart } from './bestattunsart.action';

export interface BestattungsartStateModel {
  allItems: string[];
  selectedItem: string;
}

@State<BestattungsartStateModel>({
  name: 'bestattungsart',
  defaults: {
    allItems: ['bestattungsart 1', 'bestattungsart 2', 'bestattungsart 3'],
    selectedItem: undefined,
  },
})
export class BestattungsartState {
  @Action(SelectBestattungsart)
  public markAsDirty(
    ctx: StateContext<BestattungsartStateModel>,
    { payload }: SelectBestattungsart
  ) {
    ctx.patchState({ selectedItem: payload });
    ctx.dispatch(new ResetGrabstelle());
    ctx.dispatch(new DeleteActiveIndices());
  }
}
