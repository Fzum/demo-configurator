import { ConfigruationChangedContract } from './configuration-changed-contract';
import { OnDestroy } from '@angular/core';

export abstract class AbstractConfiguration<T>
  implements ConfigruationChangedContract<T>, OnDestroy {
  isChanged: boolean;
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

  abstract ngOnDestroy(): void;
}
