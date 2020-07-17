import { Component, OnInit } from '@angular/core';
import { AbstractConfiguration } from '../abstract-configuration';
import { ChangeVerabschiedungsfeier } from 'src/app/store/vorsorge-configuration.actions';

@Component({
  selector: 'app-verabschiedungsfeier',
  templateUrl: './verabschiedungsfeier.component.html',
  styleUrls: ['./verabschiedungsfeier.component.scss'],
})
export class VerabschiedungsfeierComponent
  extends AbstractConfiguration<ChangeVerabschiedungsfeier>
  implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {
    this.setAction(new ChangeVerabschiedungsfeier({ someBooleanValue: true }));
  }
}
