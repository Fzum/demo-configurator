import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-grabstelle-view',
  templateUrl: './grabstelle-view.component.html',
  styleUrls: ['./grabstelle-view.component.scss'],
})
export class GrabstelleViewComponent implements OnInit {
  @Input() selectedGrabstelle: string;
  @Input() grabstellen: string[];

  @Output() selectGrabstelleE = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  selectGrabstelle(g: string): void {
    this.selectGrabstelleE.emit(g);
  }
}
