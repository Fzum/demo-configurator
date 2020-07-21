import { Component, OnInit } from '@angular/core';
import { ChangeBestattungsart } from './store/bestattungsart.actions';
import { AbstractConfiguration } from '../abstract-configuration';
import { FormBuilder } from '@angular/forms';
import { Select } from '@ngxs/store';
import { BestattungsartState } from './store/bestattungsart.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bestattungsart',
  templateUrl: './bestattungsart.component.html',
  styleUrls: ['./bestattungsart.component.scss'],
})
export class BestattungsartComponent
  extends AbstractConfiguration<ChangeBestattungsart>
  implements OnInit {
  constructor(private fb: FormBuilder) {
    super();
  }

  @Select(BestattungsartState.model) formModel: Observable<any>;
  @Select(BestattungsartState) wholeForm: Observable<any>;

  form = this.fb.group({
    inputOne: this.fb.control(''),
    inputTwo: this.fb.control(''),
  });

  ngOnInit(): void {}
}
