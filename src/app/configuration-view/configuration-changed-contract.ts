export interface ConfigruationChangedContract<T> {
  setConfigurationChanged(): void;
  getIsConfigurationChanged(): boolean;

  setChangedAction(action: T): void;
  getChangedAction(): T;
}
