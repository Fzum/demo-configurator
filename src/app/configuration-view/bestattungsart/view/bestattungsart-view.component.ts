import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bestattungsart-view',
  templateUrl: './bestattungsart-view.component.html',
  styleUrls: ['./bestattungsart-view.component.scss'],
})
export class BestattungsartViewComponent implements OnInit {
  @Input() selectedBestattungsart: string;
  @Input() bestattungsarten: string[];

  @Output() selectBestattungsartE = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  selectBestattungsart(b: string): void {
    this.selectBestattungsartE.emit(b);
  }
}
