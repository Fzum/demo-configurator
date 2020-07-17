import { ConfigruationChangedContract } from './configuration-changed-contract';

export abstract class AbstractConfiguration<T>
  implements ConfigruationChangedContract<T> {
  isChanged: boolean = false;
  changeAction: T;

  markConfigurationAsChanged(): void {
    this.isChanged = true;
  }

  isConfigurationChanged(): boolean {
    return this.isChanged;
  }

  setAction(action: T): void {
    this.changeAction = action;
  }

  getAction(): T {
    return this.changeAction;
  }
}
