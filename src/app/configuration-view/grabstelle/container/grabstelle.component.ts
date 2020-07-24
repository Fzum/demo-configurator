import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { GrabstelleStateModel } from '../data/grabstelle.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-grabstelle',
  templateUrl: './grabstelle.component.html',
  styleUrls: ['./grabstelle.component.scss'],
})
export class GrabstelleComponent implements OnInit {
  constructor() {}

  @Select((s: GrabstelleStateModel) => s.allItems)
  grabstellen$: Observable<string[]>;

  @Select((s: GrabstelleStateModel) => s.selectedItem)
  selectedGrabstelle$: Observable<string>;

  ngOnInit(): void {}
}
