import { ConfigruationChangedContract } from './configuration-changed-contract';
import { Observable } from 'rxjs';

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

  getAction(): T {
    return this.resetAction;
  }

  getForm() {
    return this.form;
  }

  getResetPath(): string {
    return this.resetPath;
  }
}
