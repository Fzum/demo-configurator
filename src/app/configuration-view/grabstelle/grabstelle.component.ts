import { Component, OnInit, OnDestroy } from '@angular/core';
import { AbstractConfiguration } from '../abstract-configuration';
import { FormBuilder } from '@angular/forms';
import { GrabstelleState } from './store/grabstelle.state';
import { Observable } from 'rxjs';
import { Select } from '@ngxs/store';
import { ResetVerabschiedungsfeier } from '../shared/vorsorge-reset-actions';

@Component({
  selector: 'app-grabstelle',
  templateUrl: './grabstelle.component.html',
  styleUrls: ['./grabstelle.component.scss'],
})
export class GrabstelleComponent
  extends AbstractConfiguration<ResetVerabschiedungsfeier>
  implements OnInit {
  constructor(private fb: FormBuilder) {
    super(new ResetVerabschiedungsfeier());
  }

  @Select(GrabstelleState.model) formModel: Observable<any>;
  @Select(GrabstelleState) wholeForm: Observable<any>;

  form = this.fb.group({
    inputOne: this.fb.control(''),
    inputTwo: this.fb.control(''),
  });

  ngOnInit(): void {}
}
