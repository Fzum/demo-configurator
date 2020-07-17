import { State, Action, Selector, StateContext } from '@ngxs/store';
import {
  ChangeBeguenstigter,
  ChangeBestattungsArt,
  ChangeGrabstelle,
  ChangePaketauswahl,
  ChangeVerabschiedungsfeier,
} from './vorsorge-configuration.actions';

import {
  ResetBeguenstiger,
  ResetGrabstelle,
  ResetPaketauswahl,
  ResetVerabschiedungsfeier,
  ResetAction,
} from './vorsorge-reset-actions';

import {
  BeguenstigterConfig,
  GrabstellenConfig,
  VerabschiedungsfeierConfig,
  BestattungsArtConfig,
  PaketauswahlConfig,
  ZusammenfassungConfig,
  DummyConfig,
} from '../model/dummy-config.model';

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
    },
    grabstellenConfig: {
      someBooleanValue: false,
    },
    verabschiedungsfeierConfig: {
      someBooleanValue: false,
    },
    paketauswahlConfig: {
      someBooleanValue: false,
    },
    beguenstigterConfig: {
      someBooleanValue: false,
    },
    zusammenfassungConfig: {
      someBooleanValue: false,
    },
  },
})
export class VorsorgeConfigurationState {
  readonly defaultConfig: DummyConfig = {
    someBooleanValue: false,
  };

  @Selector()
  public static getState(state: VorsorgeConfigurationStateModel) {
    return state;
  }

  @Action(ChangeBestattungsArt)
  public changeBestattungsArt(
    ctx: StateContext<VorsorgeConfigurationStateModel>,
    { payload }: ChangeBestattungsArt
  ) {
    ctx.patchState({ bestattungsArtConfig: payload });
    this.resetChildren(ctx, [
      new ResetGrabstelle(),
      new ResetVerabschiedungsfeier(),
      new ResetPaketauswahl(),
      new ResetBeguenstiger(),
    ]);
  }

  @Action(ChangeGrabstelle)
  public changeGrabstelle(
    ctx: StateContext<VorsorgeConfigurationStateModel>,
    { payload }: ChangeGrabstelle
  ) {
    ctx.patchState({ grabstellenConfig: payload });
    this.resetChildren(ctx, [
      new ResetVerabschiedungsfeier(),
      new ResetPaketauswahl(),
      new ResetBeguenstiger(),
    ]);
  }

  @Action(ChangeVerabschiedungsfeier)
  public changeVerabschiedungsfeier(
    ctx: StateContext<VorsorgeConfigurationStateModel>,
    { payload }: ChangeVerabschiedungsfeier
  ) {
    ctx.patchState({ verabschiedungsfeierConfig: payload });
    this.resetChildren(ctx, [new ResetPaketauswahl(), new ResetBeguenstiger()]);
  }

  @Action(ChangePaketauswahl)
  public changePaketauswahl(
    ctx: StateContext<VorsorgeConfigurationStateModel>,
    { payload }: ChangePaketauswahl
  ) {
    ctx.patchState({ paketauswahlConfig: payload });
    this.resetChildren(ctx, [new ResetBeguenstiger()]);
  }

  @Action(ChangeBeguenstigter)
  public changeBeguenstigter(
    ctx: StateContext<VorsorgeConfigurationStateModel>,
    { payload }: ChangeBeguenstigter
  ) {
    ctx.patchState({ beguenstigterConfig: payload });
  }

  @Action(ResetGrabstelle)
  public resetGrabstelle(ctx: StateContext<VorsorgeConfigurationStateModel>) {
    ctx.patchState({ grabstellenConfig: this.defaultConfig });
  }

  @Action(ResetVerabschiedungsfeier)
  public resetVerabschiedungsfeier(
    ctx: StateContext<VorsorgeConfigurationStateModel>
  ) {
    ctx.patchState({ verabschiedungsfeierConfig: this.defaultConfig });
  }

  @Action(ResetPaketauswahl)
  public resetPaketauswahl(ctx: StateContext<VorsorgeConfigurationStateModel>) {
    ctx.patchState({ paketauswahlConfig: this.defaultConfig });
  }

  @Action(ResetBeguenstiger)
  public resetBeguenstiger(ctx: StateContext<VorsorgeConfigurationStateModel>) {
    ctx.patchState({ beguenstigterConfig: this.defaultConfig });
  }

  private resetChildren(
    ctx: StateContext<VorsorgeConfigurationStateModel>,
    children: ResetAction[]
  ) {
    children.forEach(ctx.dispatch);
  }
}
