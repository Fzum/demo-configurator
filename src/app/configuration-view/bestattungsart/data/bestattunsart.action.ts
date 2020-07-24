import { BestattungsItem } from '../model/bestattung.model';

export class SelectBestattungsart {
  public static readonly type = '[Bestattungsart] Select Bestattungsart';
  constructor(public payload: BestattungsItem) {}
}
