import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import {
  BestattungsartStateModel,
  BestattungsartState,
  BestattungsItem,
} from '../data/bestattungsart.state';
import { SelectBestattungsart } from '../data/bestattunsart.action';
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
