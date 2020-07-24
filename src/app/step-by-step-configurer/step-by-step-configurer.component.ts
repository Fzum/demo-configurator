import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfigurationViewSwitcherComponent } from '../configuration-view-switcher/configuration-view-switcher.component';

import { StoreFacadeService } from './store/store-facade.service';
import { Observable, from } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-step-by-step-configurer',
  templateUrl: './step-by-step-configurer.component.html',
  styleUrls: ['./step-by-step-configurer.component.scss'],
})
export class StepByStepConfigurerComponent implements OnInit {
  @ViewChild(ConfigurationViewSwitcherComponent)
  configurationViewSwitcher: ConfigurationViewSwitcherComponent;

  constructor(public service: StoreFacadeService) {}

  ngOnInit(): void {}

  next(): void {
    this.service.navigateForwards();
  }

  previous(): void {
    this.service.navigateBackwards();
  }

  public isNotInActivatedRouteIndices(i: number): Observable<boolean> {
    return this.service.activatedRouteIndices$.pipe(map((a) => !a.includes(i)));
  }
}
