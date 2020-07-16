import { Injectable } from '@angular/core';
import { ConfigurationStep } from '../model/configurationstep';
import { ConfigurationStepType } from '../model/configurationstep-type';

@Injectable({
  providedIn: 'root',
})
export class ConfigurationstepMockService {
  constructor() {}

  public getConfigurationSteps(): ConfigurationStep[] {
    return [
      { type: ConfigurationStepType.BESTATTUNGSART },
      { type: ConfigurationStepType.GRABSTELLE },
      { type: ConfigurationStepType.VERABSCHIEDUNGSFEIER },
      { type: ConfigurationStepType.PAKETAUSWAHL },
      { type: ConfigurationStepType.BEGUENSTIGTER },
      { type: ConfigurationStepType.ZUSAMMENFASSUNG },
    ];
  }
}
