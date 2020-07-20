import { ConfigurationChangeAction } from '../vorsorge-configuration.actions';
import { GrabstellenConfig } from '../../model/dummy-config.model';

export class ChangeGrabstelle implements ConfigurationChangeAction {
  public static readonly type = '[VorsorgeConfiguration] Change Grabstelle';
  constructor(public payload: GrabstellenConfig) {}
}
