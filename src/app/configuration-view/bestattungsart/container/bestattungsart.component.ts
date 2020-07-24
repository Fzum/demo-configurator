import { Component, OnInit } from '@angular/core';
import {
  BestattungsItem,
} from '../data/bestattungsart.state';
import { BestattungsartFacadeService } from '../data/bestattungsart-facade.service';

@Component({
  selector: 'app-bestattungsart',
  templateUrl: './bestattungsart.component.html',
  styleUrls: ['./bestattungsart.component.scss'],
})
export class BestattungsartComponent implements OnInit {
  constructor(public service: BestattungsartFacadeService) {}

  ngOnInit(): void {}

  selectBestattunsgsart($event: BestattungsItem) {
    this.service.selectBestattungsart($event);
  }
}
