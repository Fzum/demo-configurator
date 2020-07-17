export class ResetGrabstelle implements ResetAction {
  public static readonly type = '[VorsorgeConfiguration] Reset Grabstelle';
  constructor() {}
}

export class ResetVerabschiedungsfeier implements ResetAction {
  public static readonly type =
    '[VorsorgeConfiguration] Reset Verabschiedungsfeier';
  constructor() {}
}

export class ResetPaketauswahl implements ResetAction {
  public static readonly type = '[VorsorgeConfiguration] Reset Paketauswahl';
  constructor() {}
}

export class ResetBeguenstiger implements ResetAction {
  public static readonly type = '[VorsorgeConfiguration] Reset Beguenstiger';
  constructor() {}
}

export interface ResetAction {}
