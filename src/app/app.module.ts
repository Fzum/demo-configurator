import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StepByStepConfigurerComponent } from './step-by-step-configurer/step-by-step-configurer.component';

import { FlexLayoutModule } from '@angular/flex-layout';

import { BestattungsartComponent } from './configuration-view/bestattungsart/bestattungsart.component';
import { GrabstelleComponent } from './configuration-view/grabstelle/grabstelle.component';
import { VerabschiedungsfeierComponent } from './configuration-view/verabschiedungsfeier/verabschiedungsfeier.component';
import { PaketauswahlComponent } from './configuration-view/paketauswahl/paketauswahl.component';
import { BeguenstigterComponent } from './configuration-view/beguenstigter/beguenstigter.component';
import { ZusammenfassungComponent } from './configuration-view/zusammenfassung/zusammenfassung.component';

import { ConfigurationViewSwitcherComponent } from './configuration-view-switcher/configuration-view-switcher.component';
import { BeguenstigterState } from './configuration-view/beguenstigter/store/beguenstigter.state';
import { BestattungsartState } from './configuration-view/bestattungsart/store/bestattungsart.state';
import { GrabstelleState } from './configuration-view/grabstelle/store/grabstelle.state';
import { PaketauswahlState } from './configuration-view/paketauswahl/store/paketauswahl.state';
import { VerabschiedungsfeierState } from './configuration-view/verabschiedungsfeier/store/verabschiedungsfeier.state';
import { ZusammenfassungState } from './configuration-view/zusammenfassung/store/zusammenfassung.state';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { ReactiveFormsModule } from '@angular/forms';

const configurationStates = [
  BeguenstigterState,
  BestattungsartState,
  GrabstelleState,
  PaketauswahlState,
  VerabschiedungsfeierState,
  ZusammenfassungState,
];

@NgModule({
  declarations: [
    AppComponent,
    StepByStepConfigurerComponent,
    BestattungsartComponent,
    GrabstelleComponent,
    VerabschiedungsfeierComponent,
    PaketauswahlComponent,
    BeguenstigterComponent,
    ZusammenfassungComponent,
    ConfigurationViewSwitcherComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    [
      NgxsModule.forRoot(configurationStates),
      NgxsReduxDevtoolsPluginModule.forRoot(),
      NgxsFormPluginModule.forRoot(),
    ],
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
