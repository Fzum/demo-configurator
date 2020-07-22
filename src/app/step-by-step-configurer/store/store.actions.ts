export class StoreAction {
  public static readonly type = '[Store] Add item';

  constructor(public payload: number) {
  }
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
