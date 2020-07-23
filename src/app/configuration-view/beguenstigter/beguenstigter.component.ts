import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BeguenstigterState } from './store/beguenstigter.state';
import { Select } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import { AbstractConfiguration } from '../abstract-configuration';

@Component({
  selector: 'app-beguenstigter',
  templateUrl: './beguenstigter.component.html',
  styleUrls: ['./beguenstigter.component.scss'],
})
export class BeguenstigterComponent extends AbstractConfiguration<void>
  implements OnInit {
  constructor(private fb: FormBuilder) {
    super(undefined, undefined, of(undefined));
  }

  @Select(BeguenstigterState.model) formModel: Observable<any>;
  @Select(BeguenstigterState) wholeForm: Observable<any>;

  formGroup = this.fb.group({
    inputOne: this.fb.control(''),
    inputTwo: this.fb.control(''),
  });

  ngOnInit(): void {}
}
