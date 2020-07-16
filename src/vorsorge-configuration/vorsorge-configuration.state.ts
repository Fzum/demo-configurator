import { State, Action, Selector, StateContext } from '@ngxs/store';
import { VorsorgeConfigurationAction } from './vorsorge-configuration.actions';
import {
  BeguenstigterConfig,
  GrabstellenConfig,
  VerabschiedungsfeierConfig,
  BestattungsArtConfig,
  PaketauswahlConfig,
  ZusammenfassungConfig,
} from '../app/model/dummy-config.model';

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
    },
    grabstellenConfig: {
      someBooleanValue: false,
      someOtherBooleanValue: false,
      yetAnotherBooleanValue: false,
    },
    verabschiedungsfeierConfig: {
      someBooleanValue: false,
      someOtherBooleanValue: false,
      yetAnotherBooleanValue: false,
    },
    paketauswahlConfig: {
      someBooleanValue: false,
      someOtherBooleanValue: false,
      yetAnotherBooleanValue: false,
    },
    beguenstigterConfig: {
      someBooleanValue: false,
      someOtherBooleanValue: false,
      yetAnotherBooleanValue: false,
    },
    zusammenfassungConfig: {
      someBooleanValue: false,
      someOtherBooleanValue: false,
      yetAnotherBooleanValue: false,
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
