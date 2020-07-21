import { Component, OnInit } from '@angular/core';
import { ChangeBestattungsart } from './store/bestattungsart.actions';
import { AbstractConfiguration } from '../abstract-configuration';
import { FormBuilder } from '@angular/forms';

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

  form = this.fb.group({
    inputOne: this.fb.control(''),
    inputTwo: this.fb.control(''),
  });

  ngOnInit(): void {
  }
}
