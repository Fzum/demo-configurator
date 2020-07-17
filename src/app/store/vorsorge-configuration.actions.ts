import {
  BestattungsArtConfig,
  GrabstellenConfig,
  VerabschiedungsfeierConfig,
  PaketauswahlConfig,
  BeguenstigterConfig,
} from '../model/dummy-config.model';

export class VorsorgeConfigurationAction {
  public static readonly type = '[VorsorgeConfiguration] Add item';
  constructor(public payload: string) {}
}

export class ChangeBestattungsArt implements ConfigurationChangeAction {
  public static readonly type = '[VorsorgeConfiguration] Change Bestattungsart';
  constructor(public payload: BestattungsArtConfig) {}
}

export class ChangeGrabstelle implements ConfigurationChangeAction {
  public static readonly type = '[VorsorgeConfiguration] Change Grabstelle';
  constructor(public payload: GrabstellenConfig) {}
}

export class ChangeVerabschiedungsfeier implements ConfigurationChangeAction {
  public static readonly type =
    '[VorsorgeConfiguration] Change Verabschiedungsfeier';
  constructor(public payload: VerabschiedungsfeierConfig) {}
}
export class ChangePaketauswahl implements ConfigurationChangeAction {
  public static readonly type = '[VorsorgeConfiguration] Change Paketauswahl';
  constructor(public payload: PaketauswahlConfig) {}
}

export class ChangeBeguenstigter implements ConfigurationChangeAction {
  public static readonly type = '[VorsorgeConfiguration] Change Beguenstigter';
  constructor(public payload: BeguenstigterConfig) {}
}

export interface ConfigurationChangeAction {}
