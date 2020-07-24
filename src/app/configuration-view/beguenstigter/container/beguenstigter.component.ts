import { Component, OnInit } from '@angular/core';
import { BeguenstigerFacadeService } from '../data/beguenstiger-facade.service';
import { Beguenstiger } from '../model/beguenstiger.model';

@Component({
  selector: 'app-beguenstigter',
  templateUrl: './beguenstigter.component.html',
  styleUrls: ['./beguenstigter.component.scss'],
})
export class BeguenstigterComponent implements OnInit {
  constructor(public service: BeguenstigerFacadeService) {}

  ngOnInit(): void {}

  selectBeguenstiger(b: Beguenstiger) {
    this.service.selectBeguenstigter(b);
  }
}
