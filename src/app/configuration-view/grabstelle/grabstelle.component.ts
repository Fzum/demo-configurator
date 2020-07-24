import { Component, OnInit } from '@angular/core';
import { AbstractConfiguration } from '../abstract-configuration';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngxs/store';
import { ResetVerabschiedungsfeier } from '../shared/vorsorge-reset-actions';

@Component({
  selector: 'app-grabstelle',
  templateUrl: './grabstelle.component.html',
  styleUrls: ['./grabstelle.component.scss'],
})
export class GrabstelleComponent
  extends AbstractConfiguration<ResetVerabschiedungsfeier>
  implements OnInit {
  constructor(store: Store) {
    super(
      new ResetVerabschiedungsfeier(),
      'grabstelle',
      store.select((state) => state.grabstelle)
    );
  }

  ngOnInit(): void {}

}
