import { Component, OnInit } from '@angular/core';
import { GrabstellenFacadeService } from '../data/grabstellen-facade.service'


@Component({
  selector: 'app-grabstelle',
  templateUrl: './grabstelle.component.html',
  styleUrls: ['./grabstelle.component.scss'],
})
export class GrabstelleComponent implements OnInit {
  constructor(public service: GrabstellenFacadeService) {}


  ngOnInit(): void {}

  selectGrabstelle($event: string) {
    this.service.selectGrabstelle($event);
  }
}
