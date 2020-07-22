export class StoreAction {
  public static readonly type = '[Store] Add item';

  constructor(public payload: number) {
  }
}

export class NavigateForwards {
  public static readonly type = '[Store] Navigate Forward';

  constructor() {
  }
}

export class NavigateBackwards {
  public static readonly type = '[Store] Navigate Backward';

  constructor() {
  }
}
