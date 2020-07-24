import { Injectable } from '@angular/core';
import { ConfigurationStep } from '../model/configurationstep';
import { ConfigurationType } from '../model/configuration-type';

@Injectable({
  providedIn: 'root',
})
export class ConfigurationstepMockService {
  constructor() {}

  public getConfigurationSteps(): ConfigurationStep[] {
    return [
      {
        type: ConfigurationType.BESTATTUNGSART,
        header: 'Welche Bestattungsart willst du?',
      },
      {
        type: ConfigurationType.GRABSTELLE,
        header: 'Welche Grabstelle willst du?',
      },
      {
        type: ConfigurationType.BEGUENSTIGTER,
        header: 'Gibt es einen Begünstigten?',
      },
      {
        type: ConfigurationType.ZUSAMMENFASSUNG,
        header: 'Hier ist die Zusammenfassung!',
      },
    ];
  }
}
