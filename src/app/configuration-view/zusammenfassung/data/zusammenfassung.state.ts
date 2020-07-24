import { State, Action, Selector, StateContext } from '@ngxs/store';
import { ZusammenfassungAction } from './zusammenfassung.actions';
import { ZusammenfassungConfig } from '../../../model/dummy-config.model';

export interface ZusammenfassungStateModel {
  model: ZusammenfassungConfig;
}

@State<ZusammenfassungStateModel>({
  name: 'zusammenfassung',
  defaults: { model: { inputOne: '', inputTwo: '' } },
})
export class ZusammenfassungState {
  @Action(ZusammenfassungAction)
  public add(
    ctx: StateContext<ZusammenfassungStateModel>,
    { payload }: ZusammenfassungAction
  ) {}
}
