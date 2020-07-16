import { State, Action, Selector, StateContext } from '@ngxs/store';
import { VorsorgeConfigurationAction } from './vorsorge-configuration.actions';
import {
  BeguenstigterConfig,
  GrabstellenConfig,
  VerabschiedungsfeierConfig,
  BestattungsArtConfig,
  PaketauswahlConfig,
  ZusammenfassungConfig,
} from '../model/dummy-config.model';
import { stat, read } from 'fs';

export interface VorsorgeConfigurationStateModel {
  bestattungsArtConfig: BestattungsArtConfig;
  grabstellenConfig: GrabstellenConfig;
  verabschiedungsfeierConfig: VerabschiedungsfeierConfig;
  paketauswahlConfig: PaketauswahlConfig;
  beguenstigterConfig: BeguenstigterConfig;
  zusammenfassungConfig: ZusammenfassungConfig;
}

@State<VorsorgeConfigurationStateModel>({
  name: 'vorsorgeConfiguration',
  defaults: {
    bestattungsArtConfig: {
      someBooleanValue: false,
      someOtherBooleanValue: false,
      yetAnotherBooleanValue: false,
      childrenToResetOnChange: [],
    },
    grabstellenConfig: {
      someBooleanValue: false,
      someOtherBooleanValue: false,
      yetAnotherBooleanValue: false,
      childrenToResetOnChange: [],
    },
    verabschiedungsfeierConfig: {
      someBooleanValue: false,
      someOtherBooleanValue: false,
      yetAnotherBooleanValue: false,
      childrenToResetOnChange: [],
    },
    paketauswahlConfig: {
      someBooleanValue: false,
      someOtherBooleanValue: false,
      yetAnotherBooleanValue: false,
      childrenToResetOnChange: [],
    },
    beguenstigterConfig: {
      someBooleanValue: false,
      someOtherBooleanValue: false,
      yetAnotherBooleanValue: false,
      childrenToResetOnChange: [],
    },
    zusammenfassungConfig: {
      someBooleanValue: false,
      someOtherBooleanValue: false,
      yetAnotherBooleanValue: false,
      childrenToResetOnChange: [],
    },
  },
})
export class VorsorgeConfigurationState {
  @Selector()
  public static getState(state: VorsorgeConfigurationStateModel) {
    return state;
  }

  @Action(VorsorgeConfigurationAction)
  public add(
    ctx: StateContext<VorsorgeConfigurationStateModel>,
    { payload }: VorsorgeConfigurationAction
  ) {
    const stateModel = ctx.getState();
    // stateModel.items = [...stateModel.items, payload];
    ctx.setState(stateModel);
  }
}
