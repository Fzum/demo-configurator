import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChangeGrabstelle } from './store/grabstelle.actions';
import { AbstractConfiguration } from '../abstract-configuration';
import { FormBuilder } from '@angular/forms';

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

    form = this.fb.group({
      inputOne: this.fb.control(''),
      inputTwo: this.fb.control(''),
    });

  ngOnInit(): void {
  }
}
