import { Component, OnInit } from '@angular/core';
import { GrabstellenFacadeService } from '../data/grabstellen-facade.service'
import { Grabstelle } from '../data/grabstelle.state';


@Component({
  selector: 'app-grabstelle',
  templateUrl: './grabstelle.component.html',
  styleUrls: ['./grabstelle.component.scss'],
})
export class GrabstelleComponent implements OnInit {
  constructor(public service: GrabstellenFacadeService) {}

  ngOnInit(): void {}

  selectGrabstelle($event: Grabstelle) {
    this.service.selectGrabstelle($event);
  }
}
