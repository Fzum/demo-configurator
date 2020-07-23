import { Injectable } from '@angular/core';
import { ConfigurationStep } from '../../model/configurationstep';
import { Select } from '@ngxs/store';
import { StoreState, StoreStateModel } from '../store/store.state';
import { Observable } from 'rxjs';
import {
  NavigateBackwards,
  NavigateForwards,
  SetActiveConfiguration,
  LoadConfigurations,
} from '../store/store.actions';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { ConfigurationType } from 'src/app/model/configuration-type';

@Injectable({
  providedIn: 'root',
})
export class StoreFacadeService {
  @Select(StoreState.activatedRouteIndices) activatedRouteIndices$: Observable<
    number[]
  >;
  @Select((s: StoreStateModel) => s.currentRouteIndex)
  currentRouteIndex$: Observable<number>;
  @Select(StoreState.configurations) configurations$: Observable<
    ConfigurationStep[]
  >;
  @Select(StoreState.activeConfiguration) activeConfig$: Observable<
    ConfigurationStep
  >;
  @Select(
    (s: StoreStateModel) =>
      s.activeConfig.type === ConfigurationType.BEGUENSTIGTER
  )
  isLastConfigurationStep$: Observable<boolean>;

  constructor() {
    this.loadConfigurations();
  }

  @Dispatch()
  private loadConfigurations = () => {
    return new LoadConfigurations();
  };

  @Dispatch()
  public navigateForwards() {
    return new NavigateForwards();
  }

  @Dispatch()
  public navigateBackwards() {
    return new NavigateBackwards();
  }

  @Dispatch()
  public setActiveConfiguration(index: number) {
    return new SetActiveConfiguration(index);
  }
}
