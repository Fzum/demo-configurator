import {ConfigruationChangedContract} from './configuration-changed-contract';
import {Observable} from 'rxjs';

export class AbstractConfiguration<T>
  implements ConfigruationChangedContract<T> {
  resetAction: T;
  resetPath: string;
  form: Observable<any>;

  constructor(action: T, resetPath: string, form: Observable<any>) {
    this.resetAction = action;
    this.resetPath = resetPath;
    this.form = form;
  }

  getResetAction(): T {
    return this.resetAction;
  }

  getFormState(): Observable<any> {
    return this.form;
    // .pipe(last()
  }

  getResetPath(): string {
    return this.resetPath;
  }

  setForm(form: Observable<any>): void {
    this.form = form;
  }
}
