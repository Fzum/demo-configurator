import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BeguenstigterState } from './store/beguenstigter.state';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-beguenstigter',
  templateUrl: './beguenstigter.component.html',
  styleUrls: ['./beguenstigter.component.scss'],
})
export class BeguenstigterComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  @Select(BeguenstigterState.model) formModel: Observable<any>;
  @Select(BeguenstigterState) wholeForm: Observable<any>;

  form = this.fb.group({
    inputOne: this.fb.control(''),
    inputTwo: this.fb.control(''),
  });

  ngOnInit(): void {}
}
