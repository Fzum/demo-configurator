import { BestattungsArtConfig } from '../../model/dummy-config.model';
import { ConfigurationChangeAction } from '../vorsorge-configuration.actions';

export class ChangeBestattungsart implements ConfigurationChangeAction {
  public static readonly type = '[VorsorgeConfiguration] Change Bestattungsart';
  constructor(public payload: BestattungsArtConfig) {}
}
