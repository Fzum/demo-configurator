export class StoreAction {
  public static readonly type = '[Store] Add item';

  constructor(public payload: number) {}
}

export class LoadConfigurations {
  public static readonly type = '[Store] Loading Configurations';
}

export class NavigateForwards {
  public static readonly type = '[Store] Navigate Forward';
}

export class NavigateBackwards {
  public static readonly type = '[Store] Navigate Backward';
}

export class DeleteActiveIndices {
  public static readonly type = '[Store] Delete All Indices After Current';
}

export class SetActiveConfiguration {
  public static readonly type = '[Store] Set Active Configuration';
  constructor(public payload?: number) {}
}
