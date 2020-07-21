import { Observable } from 'rxjs';

export interface ConfigruationChangedContract<T> {
  getResetAction(): T;
  getForm(): Observable<any>;
  getResetPath(): string;
}
