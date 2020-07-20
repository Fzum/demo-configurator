import { BeguenstigterConfig } from '../../model/dummy-config.model';
import { ConfigurationChangeAction } from '../vorsorge-configuration.actions';

export class ChangeBeguenstigter implements ConfigurationChangeAction {
  public static readonly type = '[VorsorgeConfiguration] Change Beguenstigter';
  constructor(public payload: BeguenstigterConfig) {}
}
