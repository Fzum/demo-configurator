import {Component, OnInit, ViewChild} from '@angular/core';
import {ConfigurationstepMockService} from '../mock/configurationstep-mock-service.service';
import {ConfigurationStep} from '../model/configurationstep';
import {ConfigurationViewSwitcherComponent} from '../configuration-view-switcher/configuration-view-switcher.component';
import {ConfigurationType} from '../model/configuration-type';

@Component({
    selector: 'app-step-by-step-configurer',
    templateUrl: './step-by-step-configurer.component.html',
    styleUrls: ['./step-by-step-configurer.component.scss'],
})
export class StepByStepConfigurerComponent implements OnInit {
    @ViewChild(ConfigurationViewSwitcherComponent)
    configurationViewSwitcher: ConfigurationViewSwitcherComponent;

    index: number;
    configs: ConfigurationStep[];
    activeConfig: ConfigurationStep;

    constructor(service: ConfigurationstepMockService) {
        this.index = 0;
        this.configs = service.getConfigurationSteps();
        this.setActiveConfiguration();
    }

    ngOnInit(): void {
    }

    setActiveConfiguration(index?: number): void {
        this.activeConfig = this.configs[index ? index : this.index];
    }

    next(): void {
        const isNotLastConfig = this.activeConfig.type !== ConfigurationType.BEGUENSTIGTER;
        if (isNotLastConfig) {
            this.configurationViewSwitcher.handleConfigurationUpdates();
        }

        if (this.index < this.configs.length - 1) {
            this.index++;
        }

        this.setActiveConfiguration();
    }

    previous(): void {
        if (this.index > 0) {
            this.index--;
        }

        this.setActiveConfiguration();
    }
}
