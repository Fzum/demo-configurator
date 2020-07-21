import { Component, OnInit } from '@angular/core';
import { AbstractConfiguration } from '../abstract-configuration';
import { FormBuilder } from '@angular/forms';
import { Select } from '@ngxs/store';
import { BestattungsartState } from './store/bestattungsart.state';
import { Observable } from 'rxjs';
import { ResetGrabstelle } from '../shared/vorsorge-reset-actions';

@Component({
  selector: 'app-bestattungsart',
  templateUrl: './bestattungsart.component.html',
  styleUrls: ['./bestattungsart.component.scss'],
})
export class BestattungsartComponent
  extends AbstractConfiguration<ResetGrabstelle>
  implements OnInit {
  constructor(private fb: FormBuilder) {
    super(new ResetGrabstelle());
  }

  @Select(BestattungsartState.model) formModel: Observable<any>;
  @Select(BestattungsartState) wholeForm: Observable<any>;

  form = this.fb.group({
    inputOne: this.fb.control(''),
    inputTwo: this.fb.control(''),
  });

  ngOnInit(): void {}
}
