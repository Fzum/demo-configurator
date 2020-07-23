import { Observable } from 'rxjs';

export interface ConfigruationChangedContract<T> {
  getResetAction(): T;
  getFormState(): Observable<any>;
  getResetPath(): string;
}
