import { Component, OnInit, Input } from '@angular/core';
import { BeguenstigterStateModel } from '../../beguenstigter/data/beguenstigter.state';
import { BestattungsartStateModel } from '../../bestattungsart/data/bestattungsart.state';
import { GrabstelleStateModel } from '../../grabstelle/data/grabstelle.state';

@Component({
  selector: 'app-zusammenfassung-view',
  templateUrl: './zusammenfassung-view.component.html',
  styleUrls: ['./zusammenfassung-view.component.scss'],
})
export class ZusammenfassungViewComponent implements OnInit {
  @Input() bestattungsart: BestattungsartStateModel;
  @Input() grabstelle: GrabstelleStateModel;
  @Input() beguenstigter: BeguenstigterStateModel;

  constructor() {}

  ngOnInit(): void {}
}
