import { Component, OnInit } from '@angular/core';
import { AbstractConfiguration } from '../abstract-configuration';
import { ChangeVerabschiedungsfeier } from './store/verabschiedungsfeier.actions';
import { FormBuilder } from '@angular/forms';
import { VerabschiedungsfeierState } from './store/verabschiedungsfeier.state';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-verabschiedungsfeier',
  templateUrl: './verabschiedungsfeier.component.html',
  styleUrls: ['./verabschiedungsfeier.component.scss'],
})
export class VerabschiedungsfeierComponent
  extends AbstractConfiguration<ChangeVerabschiedungsfeier>
  implements OnInit {
  constructor(private fb: FormBuilder) {
    super();
  }

  @Select(VerabschiedungsfeierState.model) formModel: Observable<any>;

  form = this.fb.group({
    inputOne: this.fb.control(''),
    inputTwo: this.fb.control(''),
  });

  ngOnInit(): void {}
}
