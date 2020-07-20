export class ResetGrabstelle implements ResetAction {
  public static readonly type = '[VorsorgeConfiguration] Reset Grabstelle';
}

export class ResetVerabschiedungsfeier implements ResetAction {
  public static readonly type =
    '[VorsorgeConfiguration] Reset Verabschiedungsfeier';
}

export class ResetPaketauswahl implements ResetAction {
  public static readonly type = '[VorsorgeConfiguration] Reset Paketauswahl';
}

export class ResetBeguenstiger implements ResetAction {
  public static readonly type = '[VorsorgeConfiguration] Reset Beguenstiger';
}

export interface ResetAction {}
