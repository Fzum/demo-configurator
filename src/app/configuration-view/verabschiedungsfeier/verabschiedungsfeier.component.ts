import { Component, OnInit } from '@angular/core';
import { AbstractConfiguration } from '../abstract-configuration';
import { FormBuilder } from '@angular/forms';
import { VerabschiedungsfeierState } from './store/verabschiedungsfeier.state';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ResetPaketauswahl } from '../shared/vorsorge-reset-actions';

@Component({
  selector: 'app-verabschiedungsfeier',
  templateUrl: './verabschiedungsfeier.component.html',
  styleUrls: ['./verabschiedungsfeier.component.scss'],
})
export class VerabschiedungsfeierComponent
  extends AbstractConfiguration<ResetPaketauswahl>
  implements OnInit {
  constructor(private fb: FormBuilder) {
    super(new ResetPaketauswahl());
  }

  @Select(VerabschiedungsfeierState.model) formModel: Observable<any>;
  @Select(VerabschiedungsfeierState) wholeForm: Observable<any>;

  form = this.fb.group({
    inputOne: this.fb.control(''),
    inputTwo: this.fb.control(''),
  });

  ngOnInit(): void {}
}
