import { BestattungsItem } from './bestattungsart.state';

export class SelectBestattungsart {
  public static readonly type = '[Bestattungsart] Select Bestattungsart';
  constructor(public payload: BestattungsItem) {}
}
