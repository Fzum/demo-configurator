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
    },
    grabstellenConfig: {
      someBooleanValue: false,
      someOtherBooleanValue: false,
    },
    verabschiedungsfeierConfig: {
      someBooleanValue: false,
      someOtherBooleanValue: false,
    },
    paketauswahlConfig: {
      someBooleanValue: false,
      someOtherBooleanValue: false,
    },
    beguenstigterConfig: {
      someBooleanValue: false,
      someOtherBooleanValue: false,
    },
    zusammenfassungConfig: {
      someBooleanValue: false,
      someOtherBooleanValue: false,
    },
  },
  children: [],
})
export class VorsorgeConfigurationState {
  readonly defaultConfig: DummyConfig = {
    someBooleanValue: false,
    someOtherBooleanValue: false,
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
    ctx.setState({
      bestattungsArtConfig: payload,
      grabstellenConfig: this.defaultConfig,
      verabschiedungsfeierConfig: this.defaultConfig,
      paketauswahlConfig: this.defaultConfig,
      beguenstigterConfig: this.defaultConfig,
      zusammenfassungConfig: this.defaultConfig,
    });
    alert(
      'Bestattungsart wurde konfiguriert => grabstelle, verabschiedungsfeier, paketauswahl, begünstigter werden resettet!'
    );
  }

  @Action(ChangeGrabstelle)
  public changeGrabstelle(
    ctx: StateContext<VorsorgeConfigurationStateModel>,
    { payload }: ChangeGrabstelle
  ) {
    ctx.setState({
      ...ctx.getState(),
      grabstellenConfig: payload,
      verabschiedungsfeierConfig: this.defaultConfig,
      paketauswahlConfig: this.defaultConfig,
      beguenstigterConfig: this.defaultConfig,
      zusammenfassungConfig: this.defaultConfig,
    });
    alert(
      'Grabstelle wurde konfiguriert => verabschiedungsfeier, paketauswahl, begünstigter werden resettet!'
    );
  }

  @Action(ChangeVerabschiedungsfeier)
  public changeVerabschiedungsfeier(
    ctx: StateContext<VorsorgeConfigurationStateModel>,
    { payload }: ChangeVerabschiedungsfeier
  ) {
    ctx.setState({
      ...ctx.getState(),
      verabschiedungsfeierConfig: payload,
      paketauswahlConfig: this.defaultConfig,
      beguenstigterConfig: this.defaultConfig,
      zusammenfassungConfig: this.defaultConfig,
    });
    alert(
      'Grabstelle wurde konfiguriert => paketauswahl, begünstigter werden resettet!'
    );
  }

  @Action(ChangePaketauswahl)
  public changePaketauswahl(
    ctx: StateContext<VorsorgeConfigurationStateModel>,
    { payload }: ChangePaketauswahl
  ) {
    ctx.setState({
      ...ctx.getState(),
      paketauswahlConfig: payload,
      beguenstigterConfig: this.defaultConfig,
      zusammenfassungConfig: this.defaultConfig,
    });
    alert('Grabstelle wurde konfiguriert => begünstigter werden resettet!');
  }

  @Action(ChangeBeguenstigter)
  public changeBeguenstigter(
    ctx: StateContext<VorsorgeConfigurationStateModel>,
    { payload }: ChangeBeguenstigter
  ) {
    ctx.setState({
      ...ctx.getState(),
      beguenstigterConfig: payload,
      zusammenfassungConfig: this.defaultConfig,
    });
    alert('nix resettet! (letzter Punkt)');
  }
}
