import { Component, OnInit } from '@angular/core';
import { ChangeBeguenstigter } from 'src/app/configuration-view/beguenstigter/store/beguenstigter.actions';
import { AbstractConfiguration } from '../abstract-configuration';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-beguenstigter',
  templateUrl: './beguenstigter.component.html',
  styleUrls: ['./beguenstigter.component.scss'],
})
export class BeguenstigterComponent
  extends AbstractConfiguration<ChangeBeguenstigter>
  implements OnInit {
  constructor(private fb: FormBuilder) {
    super();
  }

  form = this.fb.group({
    inputOne: this.fb.control(''),
    inputTwo: this.fb.control(''),
  });

  ngOnInit(): void {}
}
