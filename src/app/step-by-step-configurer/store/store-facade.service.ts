import { Injectable } from '@angular/core';
import { ConfigurationStep } from '../../model/configurationstep';
import { Select } from '@ngxs/store';
import { StoreState } from '../store/store.state';
import { Observable } from 'rxjs';
import {
  NavigateBackwards,
  NavigateForwards,
  SetActiveConfiguration,
  LoadConfigurations,
} from '../store/store.actions';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';

@Injectable({
  providedIn: 'root',
})
export class StoreFacadeService {
  @Select(StoreState.activatedRouteIndices) activatedRouteIndices$: Observable<
    number[]
  >;
  @Select(StoreState.currentRouteIndex) currentRouteIndex$: Observable<number>;
  @Select(StoreState.configurations) configs$: Observable<ConfigurationStep[]>;
  @Select(StoreState.activeConfiguration) activeConfig$: Observable<
    ConfigurationStep
  >;

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
