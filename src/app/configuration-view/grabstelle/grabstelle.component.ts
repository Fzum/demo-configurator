import { Component, OnInit } from '@angular/core';
import { ChangeGrabstelle } from 'src/app/store/vorsorge-configuration.actions';
import { AbstractConfiguration } from '../abstract-configuration';

@Component({
  selector: 'app-grabstelle',
  templateUrl: './grabstelle.component.html',
  styleUrls: ['./grabstelle.component.scss'],
})
export class GrabstelleComponent extends AbstractConfiguration<ChangeGrabstelle>
  implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
