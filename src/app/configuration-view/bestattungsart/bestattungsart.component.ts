import { Component, OnInit, OnDestroy } from '@angular/core';
import { AbstractConfiguration } from '../abstract-configuration';
import { FormBuilder } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { BestattungsartState } from './store/bestattungsart.state';
import { Observable } from 'rxjs';
import { ResetGrabstelle } from '../shared/vorsorge-reset-actions';
import { SetFormPristine } from '@ngxs/form-plugin';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-bestattungsart',
  templateUrl: './bestattungsart.component.html',
  styleUrls: ['./bestattungsart.component.scss'],
})
export class BestattungsartComponent
  extends AbstractConfiguration<ResetGrabstelle>
  implements OnInit, OnDestroy {
  constructor(private fb: FormBuilder, private store: Store) {
    super(new ResetGrabstelle());
  }

  @Select(BestattungsartState.model) formModel: Observable<any>;
  @Select(BestattungsartState) wholeForm: Observable<any>;

  form = this.fb.group({
    inputOne: this.fb.control(''),
    inputTwo: this.fb.control(''),
  });

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.wholeForm.pipe(first()).subscribe((form) => {
      if (form.dirty) this.store.dispatch(new ResetGrabstelle());
    });
    this.store.dispatch(new SetFormPristine('bestattungsart'));
  }
}
