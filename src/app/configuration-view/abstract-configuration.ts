import { ConfigruationChangedContract } from './configuration-changed-contract';
import { Observable } from 'rxjs';
import { last } from 'rxjs/operators';

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

  getForm() {
    return this.form.pipe(last());
  }

  getResetPath(): string {
    return this.resetPath;
  }
}
