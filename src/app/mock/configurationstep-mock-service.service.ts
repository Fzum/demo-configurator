import {Injectable} from '@angular/core';
import {ConfigurationStep} from '../model/configurationstep';
import {ConfigurationType} from '../model/configuration-type';

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
        type: ConfigurationType.VERABSCHIEDUNGSFEIER,
        header: 'Willst du eine Verabschiedung?',
      },
      {
        type: ConfigurationType.PAKETAUSWAHL,
        header: 'Welches Paket willst du?',
      },
      {
        type: ConfigurationType.BEGUENSTIGTER,
        header: 'Wer ist der Begünstigte?',
      },
      {
        type: ConfigurationType.ZUSAMMENFASSUNG,
        header: 'Hier ist die Zusammenfassung!',
      },
    ];
  }
}
