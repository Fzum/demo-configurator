import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { AbstractConfiguration } from '../abstract-configuration';
import { FormBuilder } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { BestattungsartState } from './store/bestattungsart.state';
import { Observable, of } from 'rxjs';
import { ResetGrabstelle } from '../shared/vorsorge-reset-actions';

@Component({
  selector: 'app-bestattungsart',
  templateUrl: './bestattungsart.component.html',
  styleUrls: ['./bestattungsart.component.scss'],
})
export class BestattungsartComponent
  extends AbstractConfiguration<ResetGrabstelle>
  implements OnInit {
  constructor(private fb: FormBuilder, public store: Store) {
    super(
      new ResetGrabstelle(),
      'bestattungsart',
      store.select((state) => state.bestattungsart)
    );
  }

  @Select(BestattungsartState.model) formModel: Observable<any>;
  @Select(BestattungsartState) wholeForm: Observable<any>;

  formGroup = this.fb.group({
    inputOne: this.fb.control(''),
    inputTwo: this.fb.control(''),
  });

  ngOnInit(): void {}
}
