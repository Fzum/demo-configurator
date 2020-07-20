import { Component, OnInit } from '@angular/core';
import { ChangePaketauswahl } from './store/paketauswahl.actions';
import { AbstractConfiguration } from '../abstract-configuration';

@Component({
  selector: 'app-paketauswahl',
  templateUrl: './paketauswahl.component.html',
  styleUrls: ['./paketauswahl.component.scss'],
})
export class PaketauswahlComponent
  extends AbstractConfiguration<ChangePaketauswahl>
  implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {
    this.setAction(new ChangePaketauswahl({ someBooleanValue: true }));
  }
}
