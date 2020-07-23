import { Component, OnInit, OnDestroy } from '@angular/core';
import { AbstractConfiguration } from '../abstract-configuration';
import { FormBuilder } from '@angular/forms';
import {
  GrabstelleState,
  MarkGrabstelleConfigurationAsDirty,
} from './store/grabstelle.state';
import { Observable, of } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { ResetVerabschiedungsfeier } from '../shared/vorsorge-reset-actions';

@Component({
  selector: 'app-grabstelle',
  templateUrl: './grabstelle.component.html',
  styleUrls: ['./grabstelle.component.scss'],
})
export class GrabstelleComponent
  extends AbstractConfiguration<ResetVerabschiedungsfeier>
  implements OnInit {
  constructor(private fb: FormBuilder, private store: Store) {
    super(
      new ResetVerabschiedungsfeier(),
      'grabstelle',
      store.select((state) => state.grabstelle)
    );
  }

  ngOnInit(): void {}

  markAsDirty() {
    this.store.dispatch(new MarkGrabstelleConfigurationAsDirty());
  }
}
