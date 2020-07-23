import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfigurationstepMockService } from '../mock/configurationstep-mock-service.service';
import { ConfigurationStep } from '../model/configurationstep';
import { ConfigurationViewSwitcherComponent } from '../configuration-view-switcher/configuration-view-switcher.component';
import { ConfigurationType } from '../model/configuration-type';
import { Select, Store } from '@ngxs/store';
import { StoreState, StoreStateModel } from './store/store.state';
import { Observable } from 'rxjs';
import {
  NavigateBackwards,
  NavigateForwards,
  SetActiveConfiguration,
  LoadConfigurations,
} from './store/store.actions';

@Component({
  selector: 'app-step-by-step-configurer',
  templateUrl: './step-by-step-configurer.component.html',
  styleUrls: ['./step-by-step-configurer.component.scss'],
})
export class StepByStepConfigurerComponent implements OnInit {
  @ViewChild(ConfigurationViewSwitcherComponent)
  configurationViewSwitcher: ConfigurationViewSwitcherComponent;

  @Select(StoreState.activatedRouteIndices) activatedRouteIndices$: Observable<
    number[]
  >;
  @Select(StoreState.currentRouteIndex) currentRouteIndex$: Observable<number>;
  @Select(StoreState.configurations) configs$: Observable<ConfigurationStep[]>;
  @Select(StoreState.activeConfiguration) activeConfig$: Observable<
    ConfigurationStep
  >;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(new LoadConfigurations());
  }

  next(): void {
    this.handleStateUpdatesIfNotLastConfig();
    this.store.dispatch(new NavigateForwards());
  }

  private handleStateUpdatesIfNotLastConfig(): void {
    // const isNotLastConfig =
    //   this.activeConfig$.type !== ConfigurationType.BEGUENSTIGTER;
    // if (isNotLastConfig) {
    this.configurationViewSwitcher.handleConfigurationUpdates();
    // }
  }

  previous(): void {
    this.store.dispatch(new NavigateBackwards());
  }

  isNotActivated(i: number): boolean {
    const selectSnapshot: StoreStateModel = this.store.selectSnapshot(
      StoreState
    );
    return !selectSnapshot.activatedRouteIndices.includes(i);
  }

  public setActiveConfiguration(index: number) {
    this.store.dispatch(new SetActiveConfiguration(index));
  }
}
