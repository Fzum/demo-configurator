import { Action, Selector, State, StateContext } from '@ngxs/store';
import {
  DeleteActiveIndices,
  NavigateBackwards,
  NavigateForwards,
  StoreAction,
  LoadConfigurations,
  SetActiveConfiguration,
} from './store.actions';
import { ConfigurationstepMockService } from 'src/app/mock/configurationstep-mock-service.service';
import { ConfigurationStep } from 'src/app/model/configurationstep';
import { Injectable } from '@angular/core';

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
  public static activatedRouteIndices(state: StoreStateModel): number[] {
    return state.activatedRouteIndices;
  }

  @Selector()
  public static currentRouteIndex(state: StoreStateModel): number {
    return state.currentRouteIndex;
  }

  @Selector()
  public static configurations(state: StoreStateModel): ConfigurationStep[] {
    return state.configurations;
  }

  @Selector()
  public static activeConfiguration(state: StoreStateModel): ConfigurationStep {
    return state.activeConfig;
  }

  @Selector()
  public static isRouteNotActivated(ctx: StateContext<StoreStateModel>): boolean {
    const state: StoreStateModel = ctx.getState();
    return !state.activatedRouteIndices.includes(state.currentRouteIndex);
  }

  @Action(LoadConfigurations)
  public loadConfigurations(ctx: StateContext<StoreStateModel>) {
    const configurations: ConfigurationStep[] = this.service.getConfigurationSteps();
    const activeConfig: ConfigurationStep = configurations[0];

    ctx.patchState({ configurations, activeConfig });
  }

  @Action(StoreAction)
  public add(
    ctx: StateContext<StoreStateModel>,
    { payload }: StoreAction
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

    if (activatedRouteIndices.includes(currentRouteIndex)) {
      ctx.patchState({
        currentRouteIndex: currentRouteIndex + 1,
      });
    } else {
      ctx.patchState({
        activatedRouteIndices: [...activatedRouteIndices, currentRouteIndex],
        currentRouteIndex: currentRouteIndex + 1,
      });
    }

    ctx.dispatch(new SetActiveConfiguration());
  }

  @Action(NavigateBackwards)
  public navigateBackward(ctx: StateContext<StoreStateModel>): void {
    ctx.patchState({ currentRouteIndex: ctx.getState().currentRouteIndex - 1 });
    ctx.dispatch(new SetActiveConfiguration());
  }

  @Action(SetActiveConfiguration)
  public setActiveConfiguration(
    ctx: StateContext<StoreStateModel>,
    { payload }: SetActiveConfiguration
  ) {
    const state: StoreStateModel = ctx.getState();

    if (payload) {
      ctx.patchState({
        activeConfig: state.configurations[payload],
      });
    } else {
      ctx.patchState({
        activeConfig: state.configurations[state.currentRouteIndex],
      });
    }
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
