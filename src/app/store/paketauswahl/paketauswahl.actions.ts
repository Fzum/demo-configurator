import { ConfigurationChangeAction } from '../vorsorge-configuration.actions';
import { PaketauswahlConfig } from '../../model/dummy-config.model';

export class ChangePaketauswahl implements ConfigurationChangeAction {
  public static readonly type = '[VorsorgeConfiguration] Change Paketauswahl';
  constructor(public payload: PaketauswahlConfig) {}
}
