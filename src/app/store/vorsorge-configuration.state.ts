import { State, Action, Selector, StateContext } from '@ngxs/store';
import {
  ChangeBeguenstigter,
  ChangeBestattungsArt,
  ChangeGrabstelle,
  ChangePaketauswahl,
  ChangeVerabschiedungsfeier,
} from './vorsorge-configuration.actions';
import {
  BeguenstigterConfig,
  GrabstellenConfig,
  VerabschiedungsfeierConfig,
  BestattungsArtConfig,
  PaketauswahlConfig,
  ZusammenfassungConfig,
  DummyConfig,
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
  defaultConfig: {
    someBooleanValue: false;
    someOtherBooleanValue: false;
    yetAnotherBooleanValue: false;
  };

  @Selector()
  public static getState(state: VorsorgeConfigurationStateModel) {
    return state;
  }

  @Action(ChangeBestattungsArt)
  public changeBestattungsArt(
    ctx: StateContext<VorsorgeConfigurationStateModel>,
    action: ChangeBestattungsArt
  ) {
    const state = ctx.getState();
    ctx.setState({
      bestattungsArtConfig: action.payload,
      grabstellenConfig: this.defaultConfig,
      verabschiedungsfeierConfig: this.defaultConfig,
      paketauswahlConfig: this.defaultConfig,
      beguenstigterConfig: this.defaultConfig,
      zusammenfassungConfig: this.defaultConfig,
    });
  }
}
