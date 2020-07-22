import {Component, OnInit, ViewChild} from '@angular/core';
import {ConfigurationstepMockService} from '../mock/configurationstep-mock-service.service';
import {ConfigurationStep} from '../model/configurationstep';
import {ConfigurationViewSwitcherComponent} from '../configuration-view-switcher/configuration-view-switcher.component';
import {ConfigurationType} from '../model/configuration-type';
import {Select, Store} from '@ngxs/store';
import {StoreState, StoreStateModel} from './store/store.state';
import {Observable} from 'rxjs';
import {NavigateBackwards, NavigateForwards} from './store/store.actions';

@Component({
    selector: 'app-step-by-step-configurer',
    templateUrl: './step-by-step-configurer.component.html',
    styleUrls: ['./step-by-step-configurer.component.scss'],
})
export class StepByStepConfigurerComponent implements OnInit {
    @ViewChild(ConfigurationViewSwitcherComponent)
    configurationViewSwitcher: ConfigurationViewSwitcherComponent;

    @Select(StoreState.activatedRouteIndices) activatedRouteIndices$: Observable<number[]>;
    @Select(StoreState.currentRouteIndex) currentRouteIndex: Observable<number>;

    configs = this.service.getConfigurationSteps();
    activeConfig: ConfigurationStep;

    constructor(private service: ConfigurationstepMockService,
                private store: Store) {
    }

    ngOnInit(): void {
        this.currentRouteIndex.subscribe(c => this.activeConfig = this.configs[c]);
    }

    next(): void {
        this.handleStateUpdatesIfNotLastConfig();
        this.store.dispatch(new NavigateForwards());
    }

    setActiveConfiguration(index: number): void {
        this.activeConfig = this.configs[index];
    }

    private handleStateUpdatesIfNotLastConfig(): void {
        const isNotLastConfig = this.activeConfig.type !== ConfigurationType.BEGUENSTIGTER;
        if (isNotLastConfig) {
            this.configurationViewSwitcher.handleConfigurationUpdates();
        }
    }

    previous(): void {
        this.store.dispatch(new NavigateBackwards());
    }

    isNotActivated(i: number): boolean {
        const selectSnapshot: StoreStateModel = this.store.selectSnapshot(StoreState);
        return !selectSnapshot.activatedRouteIndices.includes(i);
    }
}
