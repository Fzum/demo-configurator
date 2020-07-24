import { Beguenstiger } from './beguenstigter.state';

export class SelectBeguenstigter {
  public static readonly type = '[Beguenstigter] Select Beguenstigter';
  constructor(public payload: Beguenstiger) {}
}
