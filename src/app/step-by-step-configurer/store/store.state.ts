import {Action, Selector, State, StateContext} from '@ngxs/store';
import {NavigateBackwards, NavigateForwards, StoreAction} from './store.actions';

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
    ctx.patchState({
      activatedRouteIndices: [...ctx.getState().activatedRouteIndices, currentRouteIndex],
      currentRouteIndex: currentRouteIndex + 1
    });
  }

  @Action(NavigateBackwards)
  public navigateBackward(ctx: StateContext<StoreStateModel>): void {
    ctx.patchState({currentRouteIndex: ctx.getState().currentRouteIndex - 1});
  }
}
