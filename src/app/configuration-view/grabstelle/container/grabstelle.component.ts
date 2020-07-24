import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { GrabstelleState } from '../data/grabstelle.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-grabstelle',
  templateUrl: './grabstelle.component.html',
  styleUrls: ['./grabstelle.component.scss'],
})
export class GrabstelleComponent implements OnInit {
  constructor(private store: Store) {}

  @Select(GrabstelleState.allItems)
  grabstellen$: Observable<string[]>;

  @Select(GrabstelleState.selectedItem)
  selectedGrabstelle$: Observable<string>;

  ngOnInit(): void {}

  selectGrabstelle($event: string) {
    this.store.dispatch(new this.selectGrabstelle($event));
  }
}
