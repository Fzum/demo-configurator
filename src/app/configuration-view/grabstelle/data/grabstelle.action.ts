import { Grabstelle } from './grabstelle.state';

export class SelectGrabstelle {
  public static readonly type = '[Grabstelle] Select Grabstelle';
  constructor(public payload: Grabstelle) {}
}
