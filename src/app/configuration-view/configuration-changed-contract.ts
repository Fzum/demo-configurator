export interface ConfigruationChangedContract<T> {
  markConfigurationAsChanged(): void;
  isConfigurationChanged(): boolean;

  getAction(): T;
}
