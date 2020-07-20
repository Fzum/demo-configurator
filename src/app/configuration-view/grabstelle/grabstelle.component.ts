import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChangeGrabstelle } from './store/grabstelle.actions';
import { AbstractConfiguration } from '../abstract-configuration';

@Component({
  selector: 'app-grabstelle',
  templateUrl: './grabstelle.component.html',
  styleUrls: ['./grabstelle.component.scss'],
})
export class GrabstelleComponent extends AbstractConfiguration<ChangeGrabstelle>
  implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {
    this.setAction(new ChangeGrabstelle({ someBooleanValue: true }));
  }
}
