import { Action, Selector, State, StateContext } from '@ngxs/store';
import {
  DeleteActiveIndices,
  NavigateBackwards,
  NavigateForwards,
  AddActivatedRoute,
  LoadConfigurations,
  NavigateToConfiguration,
} from './store.actions';
import { Injectable } from '@angular/core';
import { ConfigurationStep } from '../model/configurationstep';
import { ConfigurationstepMockService } from '../mock.service';

export interface StoreStateModel {
  currentRouteIndex: number;
  activatedRouteIndices: number[];
  configurations: ConfigurationStep[];
  activeConfig: ConfigurationStep;
}

@State<StoreStateModel>({
  name: 'store',
  defaults: {
    currentRouteIndex: 0,
    activatedRouteIndices: [],
    configurations: [],
    activeConfig: undefined,
  },
})
@Injectable() // needed for IVY! otherwise DI won't work
export class StoreState {
  constructor(private service: ConfigurationstepMockService) {}

  @Selector()
  static activatedRouteIndices(state: StoreStateModel): number[] {
    return state.activatedRouteIndices;
  }

  @Selector()
  static configurations(state: StoreStateModel): ConfigurationStep[] {
    return state.configurations;
  }

  @Selector()
  static activeConfiguration(state: StoreStateModel): ConfigurationStep {
    return state.activeConfig;
  }

  @Action(LoadConfigurations)
  public loadConfigurations(ctx: StateContext<StoreStateModel>) {
    const configurations: ConfigurationStep[] = this.service.getConfigurationSteps();
    const activeConfig: ConfigurationStep = configurations[0];

    ctx.patchState({ configurations, activeConfig });
  }

  @Action(AddActivatedRoute)
  public add(
    ctx: StateContext<StoreStateModel>,
    { payload }: AddActivatedRoute
  ): void {
    const stateModel = ctx.getState();
    stateModel.activatedRouteIndices = [
      ...stateModel.activatedRouteIndices,
      payload,
    ];
    ctx.setState(stateModel);
  }

  @Action(NavigateForwards)
  public navigateForward(ctx: StateContext<StoreStateModel>): void {
    const currentRouteIndex = ctx.getState().currentRouteIndex;
    const activatedRouteIndices = ctx.getState().activatedRouteIndices;
    const nextIndex = currentRouteIndex + 1;

    if (activatedRouteIndices.includes(currentRouteIndex)) {
      ctx.patchState({
        currentRouteIndex: nextIndex,
      });
    } else {
      ctx.patchState({
        activatedRouteIndices: [...activatedRouteIndices, currentRouteIndex],
        currentRouteIndex: nextIndex,
      });
    }

    ctx.dispatch(new NavigateToConfiguration(nextIndex));
  }

  @Action(NavigateBackwards)
  public navigateBackward(ctx: StateContext<StoreStateModel>): void {
    const previousIndex = ctx.getState().currentRouteIndex - 1;

    ctx.patchState({ currentRouteIndex: previousIndex });
    ctx.dispatch(new NavigateToConfiguration(previousIndex));
  }

  @Action(NavigateToConfiguration)
  public setActiveConfiguration(
    ctx: StateContext<StoreStateModel>,
    { payload }: NavigateToConfiguration
  ) {
    const state: StoreStateModel = ctx.getState();
    ctx.patchState({
      currentRouteIndex: payload,
      activeConfig: state.configurations[payload],
    });
  }

  @Action(DeleteActiveIndices)
  public deleteActiveIndices(ctx: StateContext<StoreStateModel>): void {
    const state: StoreStateModel = ctx.getState();
    const currentRouteIndex = state.currentRouteIndex;
    const activatedRouteIndices = state.activatedRouteIndices;
    const routesBeforeResetConfigs = activatedRouteIndices.splice(
      0,
      currentRouteIndex + 1
    );

    ctx.patchState({ activatedRouteIndices: routesBeforeResetConfigs });
  }
}
