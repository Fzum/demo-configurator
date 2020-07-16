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

export class ChangeBestattungsArt {
  public static readonly type = '[VorsorgeConfiguration] Change Bestattungsart';
  constructor(public payload: BestattungsArtConfig) {}
}

export class ChangeGrabstelle {
  public static readonly type = '[VorsorgeConfiguration] Change Grabstelle';
  constructor(public payload: GrabstellenConfig) {}
}

export class ChangeVerabschiedungsfeier {
  public static readonly type =
    '[VorsorgeConfiguration] Change Verabschiedungsfeier';
  constructor(public payload: VerabschiedungsfeierConfig) {}
}
export class ChangePaketauswahl {
  public static readonly type = '[VorsorgeConfiguration] Change Paketauswahl';
  constructor(public payload: PaketauswahlConfig) {}
}
export class ChangeBeguenstigter {
  public static readonly type = '[VorsorgeConfiguration] Change Beguenstigter';
  constructor(public payload: BeguenstigterConfig) {}
}
