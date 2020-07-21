import { Component, OnInit } from '@angular/core';
import { AbstractConfiguration } from '../abstract-configuration';
import { FormBuilder } from '@angular/forms';
import { VerabschiedungsfeierState } from './store/verabschiedungsfeier.state';
import { Select, Store } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import { ResetPaketauswahl } from '../shared/vorsorge-reset-actions';

@Component({
  selector: 'app-verabschiedungsfeier',
  templateUrl: './verabschiedungsfeier.component.html',
  styleUrls: ['./verabschiedungsfeier.component.scss'],
})
export class VerabschiedungsfeierComponent
  extends AbstractConfiguration<ResetPaketauswahl>
  implements OnInit {
  constructor(private fb: FormBuilder, private store: Store) {
    super(
      new ResetPaketauswahl(),
      'verabschiedungsfeier',
      store.select((store) => store.verabschiedungsfeier)
    );
  }

  @Select(VerabschiedungsfeierState.model) formModel: Observable<any>;
  @Select(VerabschiedungsfeierState) wholeForm: Observable<any>;

  formGroup = this.fb.group({
    inputOne: this.fb.control(''),
    inputTwo: this.fb.control(''),
  });

  ngOnInit(): void {}
}
