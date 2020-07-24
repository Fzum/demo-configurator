import { Component, OnInit } from '@angular/core';
import { ZusammenfassungFacadeService  } from '../data/zusammenfassung-facade.service';

@Component({
  selector: 'app-zusammenfassung',
  templateUrl: './zusammenfassung.component.html',
  styleUrls: ['./zusammenfassung.component.scss'],
})
export class ZusammenfassungComponent implements OnInit {
  constructor(public service: ZusammenfassungFacadeService) {}

  ngOnInit(): void {}
}
