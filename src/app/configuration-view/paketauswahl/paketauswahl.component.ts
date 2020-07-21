import { Component, OnInit } from '@angular/core';
import { AbstractConfiguration } from '../abstract-configuration';
import { FormBuilder } from '@angular/forms';
import { PaketauswahlState } from './store/paketauswahl.state';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ResetBeguenstiger } from '../shared/vorsorge-reset-actions';

@Component({
  selector: 'app-paketauswahl',
  templateUrl: './paketauswahl.component.html',
  styleUrls: ['./paketauswahl.component.scss'],
})
export class PaketauswahlComponent
  extends AbstractConfiguration<ResetBeguenstiger>
  implements OnInit {
  constructor(private fb: FormBuilder) {
    super(new ResetBeguenstiger());
  }

  @Select(PaketauswahlState.model) formModel: Observable<any>;
  @Select(PaketauswahlState) wholeForm: Observable<any>;

  form = this.fb.group({
    inputOne: this.fb.control(''),
    inputTwo: this.fb.control(''),
  });

  ngOnInit(): void {}
}
