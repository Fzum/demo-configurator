import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Grabstelle } from '../model/grabstelle.model';

@Component({
  selector: 'app-grabstelle-view',
  templateUrl: './grabstelle-view.component.html',
  styleUrls: ['./grabstelle-view.component.scss'],
})
export class GrabstelleViewComponent implements OnInit {
  @Input() selectedGrabstelle: Grabstelle;
  @Input() grabstellen: Grabstelle[];

  @Output() selectGrabstelleE = new EventEmitter<Grabstelle>();

  constructor() {}

  ngOnInit(): void {}

  selectGrabstelle(g: Grabstelle): void {
    this.selectGrabstelleE.emit(g);
  }
}
