import { ConfigruationChangedContract } from './configuration-changed-contract';

export class AbstractConfiguration<T>
  implements ConfigruationChangedContract<T> {
  isChanged: boolean = false;
  changeAction: T;

  constructor(action: T) {
    this.changeAction = action;
  }

  markConfigurationAsChanged(): void {
    this.isChanged = true;
  }

  isConfigurationChanged(): boolean {
    return this.isChanged;
  }

  getAction(): T {
    return this.changeAction;
  }
}
