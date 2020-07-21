export interface ConfigruationChangedContract<T> {
  getResetAction(): T;
  getForm(): any;
  getResetPath(): string;
}
