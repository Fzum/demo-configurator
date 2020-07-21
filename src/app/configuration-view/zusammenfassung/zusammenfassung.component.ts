import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { BestattungsartState } from '../bestattungsart/store/bestattungsart.state';
import { Observable } from 'rxjs';
import {
  BestattungsArtConfig,
  GrabstellenConfig,
  VerabschiedungsfeierConfig,
  PaketauswahlConfig,
  BeguenstigterConfig,
} from 'src/app/model/dummy-config.model';
import { GrabstelleState } from '../grabstelle/store/grabstelle.state';
import { VerabschiedungsfeierState } from '../verabschiedungsfeier/store/verabschiedungsfeier.state';
import { PaketauswahlState } from '../paketauswahl/store/paketauswahl.state';
import { BeguenstigterState } from '../beguenstigter/store/beguenstigter.state';

@Component({
  selector: 'app-zusammenfassung',
  templateUrl: './zusammenfassung.component.html',
  styleUrls: ['./zusammenfassung.component.scss'],
})
export class ZusammenfassungComponent implements OnInit {
  constructor(private store: Store) {}

  @Select(BestattungsartState.model)
  bestattungsartModel$: Observable<BestattungsArtConfig>;

  @Select(GrabstelleState.model)
  grabstellenModel$: Observable<GrabstellenConfig>;

  @Select(VerabschiedungsfeierState.model)
  verabschiedungsfeierModel$: Observable<VerabschiedungsfeierConfig>;

  @Select(PaketauswahlState.model)
  paketauswahlModel$: Observable<PaketauswahlConfig>;

  @Select(BeguenstigterState.model)
  beguenstigterMode$: Observable<BeguenstigterConfig>;

  ngOnInit(): void {}
}
