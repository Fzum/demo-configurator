export interface ConfigruationChangedContract<T> {
  getAction(): T;
  getForm(): any;
  getResetPath(): string;
}
