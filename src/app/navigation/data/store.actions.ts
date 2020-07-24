export class AddActivatedRoute {
  public static readonly type = '[Navigation] Add to Activated Route';
  constructor(public payload: number) {}
}

export class LoadConfigurations {
  public static readonly type = '[Navigation] Loading Configurations';
}

export class NavigateForwards {
  public static readonly type = '[Navigation] Navigate Forward';
}

export class NavigateBackwards {
  public static readonly type = '[Navigation] Navigate Backward';
}

export class DeleteActiveIndices {
  public static readonly type = '[Navigation] Delete All Indices After Current';
}

export class NavigateToConfiguration {
  public static readonly type = '[Navigation] Set Active Configuration';
  constructor(public payload: number) {}
}
