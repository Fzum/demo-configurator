import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChangeGrabstelle } from './store/grabstelle.actions';
import { AbstractConfiguration } from '../abstract-configuration';
import { FormBuilder } from '@angular/forms';
import { GrabstelleState } from './store/grabstelle.state';
import { Observable } from 'rxjs';
import { Select } from '@ngxs/store';

@Component({
  selector: 'app-grabstelle',
  templateUrl: './grabstelle.component.html',
  styleUrls: ['./grabstelle.component.scss'],
})
export class GrabstelleComponent extends AbstractConfiguration<ChangeGrabstelle>
  implements OnInit {
  constructor(private fb: FormBuilder) {
    super();
  }

  @Select(GrabstelleState.model) formModel: Observable<any>;

  form = this.fb.group({
    inputOne: this.fb.control(''),
    inputTwo: this.fb.control(''),
  });

  ngOnInit(): void {}
}
