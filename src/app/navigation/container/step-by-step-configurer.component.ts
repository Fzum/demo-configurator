import { Component, OnInit } from '@angular/core';
import { StoreFacadeService } from '../data/store-facade.service';

@Component({
  selector: 'app-step-by-step-configurer',
  templateUrl: './step-by-step-configurer.component.html',
  styleUrls: ['./step-by-step-configurer.component.scss'],
})
export class StepByStepConfigurerComponent implements OnInit {
  constructor(public service: StoreFacadeService) {}

  ngOnInit(): void {}
}
