import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ConfigurationStep } from '../../model/configurationstep';

@Component({
  selector: 'app-navigation-view',
  templateUrl: './navigation-view.component.html',
  styleUrls: ['./navigation-view.component.scss'],
})
export class NavigationViewComponent implements OnInit {
  @Input() configurations: ConfigurationStep[];
  @Input() activeConfiguration: ConfigurationStep;
  @Input() activatedRouteIndices: number[];

  @Output() navigateToIndexE = new EventEmitter<number>();
  @Output() navigateBackE = new EventEmitter();
  @Output() navigateFrontE = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  navigateToIndex(index: number) {
    this.navigateToIndexE.emit(index);
  }

  isNotInActivatedRouteIndices(index: number) {
    return !this.activatedRouteIndices.includes(index);
  }

  navigateBack() {
    this.navigateBackE.emit();
  }

  navigateFront() {
    this.navigateFrontE.emit();
  }
}
