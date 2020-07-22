import {Action, Selector, State, StateContext} from '@ngxs/store';
import {DeleteActiveIndices, NavigateBackwards, NavigateForwards, StoreAction} from './store.actions';

export interface StoreStateModel {
  currentRouteIndex: number;
  activatedRouteIndices: number[];
}

@State<StoreStateModel>({
  name: 'store',
  defaults: {
    currentRouteIndex: 0,
    activatedRouteIndices: []
  }
})
export class StoreState {
  @Selector()
  public static activatedRouteIndices(state: StoreStateModel): number[] {
    return state.activatedRouteIndices;
  }

  @Selector()
  public static currentRouteIndex(state: StoreStateModel): number {
    return state.currentRouteIndex;
  }

  @Action(StoreAction)
  public add(ctx: StateContext<StoreStateModel>, {payload}: StoreAction): void {
    const stateModel = ctx.getState();
    stateModel.activatedRouteIndices = [...stateModel.activatedRouteIndices, payload];
    ctx.setState(stateModel);
  }

  @Action(NavigateForwards)
  public navigateForward(ctx: StateContext<StoreStateModel>): void {
    const currentRouteIndex = ctx.getState().currentRouteIndex;
    const activatedRouteIndices = ctx.getState().activatedRouteIndices;

    if (activatedRouteIndices.includes(currentRouteIndex)) {
      ctx.patchState({
        currentRouteIndex: currentRouteIndex + 1
      });
    } else {
      ctx.patchState({
        activatedRouteIndices: [...activatedRouteIndices, currentRouteIndex],
        currentRouteIndex: currentRouteIndex + 1
      });
    }
  }

  @Action(NavigateBackwards)
  public navigateBackward(ctx: StateContext<StoreStateModel>): void {
    ctx.patchState({currentRouteIndex: ctx.getState().currentRouteIndex - 1});
  }

  @Action(DeleteActiveIndices)
  public deleteActiveIndices(ctx: StateContext<StoreStateModel>): void {
    const state: StoreStateModel = ctx.getState();
    const currentRouteIndex = state.currentRouteIndex;
    const activatedRouteIndices = state.activatedRouteIndices;
    const routesBeforeResetConfigs = activatedRouteIndices.splice(0, currentRouteIndex + 1);

    ctx.patchState({activatedRouteIndices: routesBeforeResetConfigs});
  }
}
