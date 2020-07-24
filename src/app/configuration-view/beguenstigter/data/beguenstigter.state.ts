import { State, Action, StateContext, Selector } from '@ngxs/store';
import { SelectBeguenstigter } from './beguenstigter.actions';

export interface Beguenstiger {
  name: string;
  lastname: string;
}

export interface BeguenstigterStateModel {
  beguenstigte: Beguenstiger[];
  selectedBeguenstigter: Beguenstiger;
}

@State<BeguenstigterStateModel>({
  name: 'beguenstigter',
  defaults: {
    beguenstigte: [
      { name: 'Niklas', lastname: 'Peura' },
      { name: 'Milan', lastname: 'Koniar' },
      { name: 'Fabian', lastname: 'Sellemond' },
    ],
    selectedBeguenstigter: undefined,
  },
})
export class BeguenstigterState {
  @Selector()
  static beguenstigte(state: BeguenstigterStateModel): Beguenstiger[] {
    return state.beguenstigte;
  }

  @Selector()
  static selectedBeguenstigter(state: BeguenstigterStateModel): Beguenstiger {
    return state.selectedBeguenstigter;
  }

  @Action(SelectBeguenstigter)
  public selectBeguenstigter(
    ctx: StateContext<BeguenstigterStateModel>,
    { payload }: SelectBeguenstigter
  ) {
    ctx.patchState({ selectedBeguenstigter: payload });
  }

  @Action(SelectBeguenstigter)
  public resetBeguenstiger(ctx: StateContext<BeguenstigterStateModel>) {
    ctx.patchState({ selectedBeguenstigter: undefined });
  }
}
