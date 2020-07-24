import { Grabstelle } from '../model/grabstelle.model';

export class SelectGrabstelle {
  public static readonly type = '[Grabstelle] Select Grabstelle';
  constructor(public payload: Grabstelle) {}
}

export class ResetGrabstelle {
  public static readonly type = '[Grabstelle] Reset Grabstelle';
}
