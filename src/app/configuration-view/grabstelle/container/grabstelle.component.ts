import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { GrabstelleState } from '../data/grabstelle.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-grabstelle',
  templateUrl: './grabstelle.component.html',
  styleUrls: ['./grabstelle.component.scss'],
})
export class GrabstelleComponent implements OnInit {
  constructor() {}

  @Select(GrabstelleState.allItems)
  grabstellen$: Observable<string[]>;

  @Select(GrabstelleState.selectedItem)
  selectedGrabstelle$: Observable<string>;

  ngOnInit(): void {}
}
