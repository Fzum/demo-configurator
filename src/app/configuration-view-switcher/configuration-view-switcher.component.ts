import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ConfigurationType } from '../model/configuration-type';

@Component({
  selector: 'app-configuration-view-switcher',
  templateUrl: './configuration-view-switcher.component.html',
  styleUrls: ['./configuration-view-switcher.component.scss'],
})
export class ConfigurationViewSwitcherComponent implements OnInit {
  constructor() {}

  @Input() configurationType: ConfigurationType;

  ngOnInit(): void {}
}
