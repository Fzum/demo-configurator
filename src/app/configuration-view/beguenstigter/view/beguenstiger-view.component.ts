import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Beguenstiger } from '../model/beguenstiger.model';

@Component({
  selector: 'app-beguenstiger-view',
  templateUrl: './beguenstiger-view.component.html',
  styleUrls: ['./beguenstiger-view.component.scss'],
})
export class BeguenstigerViewComponent implements OnInit {
  @Input() beguenstige: Beguenstiger[];
  @Input() selectedBeguenstiger: Beguenstiger;

  @Output() selectBeguenstigerE = new EventEmitter<Beguenstiger>();

  constructor() {}

  ngOnInit(): void {}

  selectBeguenstigter(b: Beguenstiger) {
    this.selectBeguenstigerE.emit(b);
  }
}
