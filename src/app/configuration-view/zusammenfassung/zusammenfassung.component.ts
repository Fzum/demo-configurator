import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { BestattungsartState } from '../bestattungsart/store/bestattungsart.state';
import { Observable } from 'rxjs';
import {
  BestattungsArtConfig,
  GrabstellenConfig,
  BeguenstigterConfig,
} from 'src/app/model/dummy-config.model';
import { GrabstelleState } from '../grabstelle/store/grabstelle.state';
import { BeguenstigterState } from '../beguenstigter/store/beguenstigter.state';

@Component({
  selector: 'app-zusammenfassung',
  templateUrl: './zusammenfassung.component.html',
  styleUrls: ['./zusammenfassung.component.scss'],
})
export class ZusammenfassungComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {}
}
