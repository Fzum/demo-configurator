import { ConfigurationChangeAction } from '../../shared/vorsorge-configuration.actions';
import { VerabschiedungsfeierConfig } from '../../../model/dummy-config.model';

export class ChangeVerabschiedungsfeier implements ConfigurationChangeAction {
  public static readonly type =
    '[VorsorgeConfiguration] Change Verabschiedungsfeier';
  constructor(public payload: VerabschiedungsfeierConfig) {}
}
