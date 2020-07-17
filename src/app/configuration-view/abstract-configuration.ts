import { ConfigruationChangedContract } from './configuration-changed-contract';

export class AbstractConfiguration<T>
  implements ConfigruationChangedContract<T> {
  isChanged: boolean;
  changeAction: T;

  setConfigurationChanged(): void {
    this.isChanged = true;
  }

  getIsConfigurationChanged(): boolean {
    return this.isChanged;
  }

  setChangedAction(action: T): void {
    this.changeAction = action;
  }

  getChangedAction(): T {
    return this.changeAction;
  }
}
