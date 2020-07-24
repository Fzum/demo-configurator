import { Beguenstiger } from '../model/beguenstiger.model';

export class SelectBeguenstigter {
  public static readonly type = '[Beguenstigter] Select Beguenstigter';
  constructor(public payload: Beguenstiger) {}
}

export class ResetBeguenstiger {
  public static readonly type = '[Beguenstigter] Reset Beguenstiger';
}
