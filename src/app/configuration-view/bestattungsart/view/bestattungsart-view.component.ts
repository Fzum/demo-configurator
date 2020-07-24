import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
} from '@angular/core';

@Component({
  selector: 'app-bestattungsart-view',
  templateUrl: './bestattungsart-view.component.html',
  styleUrls: ['./bestattungsart-view.component.scss'],
})
export class BestattungsartViewComponent implements OnInit, OnChanges {
  @Input() selectedBestattungsart: string;
  @Input() bestattungsarten: string[];

  @Output() selectBestattungsartE = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    console.log(this.selectedBestattungsart);
    console.log(this.bestattungsarten);
  }

  selectBestattungsart(b: string): void {
    this.selectBestattungsartE.emit(b);
  }
}
