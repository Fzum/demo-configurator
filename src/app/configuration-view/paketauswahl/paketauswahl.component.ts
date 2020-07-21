import { Component, OnInit } from '@angular/core';
import { AbstractConfiguration } from '../abstract-configuration';
import { FormBuilder } from '@angular/forms';
import { PaketauswahlState } from './store/paketauswahl.state';
import { Select, Store } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import { ResetBeguenstiger } from '../shared/vorsorge-reset-actions';

@Component({
  selector: 'app-paketauswahl',
  templateUrl: './paketauswahl.component.html',
  styleUrls: ['./paketauswahl.component.scss'],
})
export class PaketauswahlComponent
  extends AbstractConfiguration<ResetBeguenstiger>
  implements OnInit {
  constructor(private fb: FormBuilder, private store: Store) {
    super(
      new ResetBeguenstiger(),
      'paketauswahl',
      store.select((state) => state.paketauswahl)
    );
  }

  @Select(PaketauswahlState.model) formModel: Observable<any>;
  @Select(PaketauswahlState) wholeForm: Observable<any>;

  formGroup = this.fb.group({
    inputOne: this.fb.control(''),
    inputTwo: this.fb.control(''),
  });

  ngOnInit(): void {}
}
