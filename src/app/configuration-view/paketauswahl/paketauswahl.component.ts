import { Component, OnInit } from '@angular/core';
import { ChangePaketauswahl } from './store/paketauswahl.actions';
import { AbstractConfiguration } from '../abstract-configuration';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-paketauswahl',
  templateUrl: './paketauswahl.component.html',
  styleUrls: ['./paketauswahl.component.scss'],
})
export class PaketauswahlComponent
  extends AbstractConfiguration<ChangePaketauswahl>
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
