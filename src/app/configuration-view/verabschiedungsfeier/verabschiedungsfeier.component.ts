import { Component, OnInit } from '@angular/core';
import { AbstractConfiguration } from '../abstract-configuration';
import { ChangeVerabschiedungsfeier } from './store/verabschiedungsfeier.actions';
import { FormBuilder } from '@angular/forms';

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

    form = this.fb.group({
      inputOne: this.fb.control(''),
      inputTwo: this.fb.control(''),
    });

  ngOnInit(): void {
  }
}
