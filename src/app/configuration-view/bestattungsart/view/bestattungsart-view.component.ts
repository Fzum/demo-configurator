import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
} from '@angular/core';
import { BestattungsItem } from '../data/bestattungsart.state';

@Component({
  selector: 'app-bestattungsart-view',
  templateUrl: './bestattungsart-view.component.html',
  styleUrls: ['./bestattungsart-view.component.scss'],
})
export class BestattungsartViewComponent implements OnInit {
  @Input() selectedBestattungsart: BestattungsItem;
  @Input() bestattungsarten: BestattungsItem[];

  @Output() selectBestattungsartE = new EventEmitter<BestattungsItem>();

  constructor() {}

  ngOnInit(): void {}

  selectBestattungsart(b: BestattungsItem): void {
    this.selectBestattungsartE.emit(b);
  }
}
