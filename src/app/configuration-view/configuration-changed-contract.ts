export interface ConfigruationChangedContract<T> {
  markConfigurationAsChanged(): void;
  isConfigurationChanged(): boolean;

  setAction(action: T): void;
  getAction(): T;
}
