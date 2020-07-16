import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { ConfigurationStep } from '../model/configurationstep';
import { ConfigurationStepType } from '../model/configurationstep-type';

@Injectable({
  providedIn: 'root',
})
export class ConfigurationstepMockServiceService {
  constructor() {}

  public getConfigurationSteps(): Observable<ConfigurationStep[]> {
    return of([
      { type: ConfigurationStepType.BESTATTUNGSART },
      { type: ConfigurationStepType.GRABSTELLE },
      { type: ConfigurationStepType.VERABSCHIEDUNGSFEIER },
      { type: ConfigurationStepType.PAKETAUSWAHL },
      { type: ConfigurationStepType.BEGUENSTIGTER },
      { type: ConfigurationStepType.ZUSAMMENFASSUNG },
    ]);
  }
}
