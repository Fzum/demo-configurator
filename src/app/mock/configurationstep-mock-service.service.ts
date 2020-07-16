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
      {
        type: ConfigurationStepType.BESTATTUNGSART,
        header: 'Welche Bestattungsart willst du?',
      },
      {
        type: ConfigurationStepType.GRABSTELLE,
        header: 'Welche Grabstelle willst du?',
      },
      {
        type: ConfigurationStepType.VERABSCHIEDUNGSFEIER,
        header: 'Willst du eine Verabschiedung?',
      },
      {
        type: ConfigurationStepType.PAKETAUSWAHL,
        header: 'Welches Paket willst du?',
      },
      {
        type: ConfigurationStepType.BEGUENSTIGTER,
        header: 'Wer ist der Begünstigte?',
      },
      {
        type: ConfigurationStepType.ZUSAMMENFASSUNG,
        header: 'Hier ist die Zusammenfassung!',
      },
    ];
  }
}
