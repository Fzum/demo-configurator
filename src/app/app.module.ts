import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StepByStepConfigurerComponent } from './step-by-step-configurer/step-by-step-configurer.component';

import { FlexLayoutModule } from '@angular/flex-layout';

import { BestattungsartComponent } from './configuration-view/bestattungsart/container/bestattungsart.component';
import { GrabstelleComponent } from './configuration-view/grabstelle/container/grabstelle.component';
import { BeguenstigterComponent } from './configuration-view/beguenstigter/container/beguenstigter.component';
import { ZusammenfassungComponent } from './configuration-view/zusammenfassung/container/zusammenfassung.component';

import { ConfigurationViewSwitcherComponent } from './configuration-view-switcher/configuration-view-switcher.component';
import { BeguenstigterState } from './configuration-view/beguenstigter/data/beguenstigter.state';
import { BestattungsartState } from './configuration-view/bestattungsart/data/bestattungsart.state';
import { GrabstelleState } from './configuration-view/grabstelle/data/grabstelle.state';
import { ZusammenfassungState } from './configuration-view/zusammenfassung/data/zusammenfassung.state';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreState } from './step-by-step-configurer/store/store.state';
import { NgxsDispatchPluginModule } from '@ngxs-labs/dispatch-decorator';
import { BestattungsartViewComponent } from './configuration-view/bestattungsart/view/bestattungsart-view.component';
import { GrabstelleViewComponent } from './configuration-view/grabstelle/view/grabstelle-view.component';
import { BeguenstigerViewComponent } from './configuration-view/beguenstigter/view/beguenstiger-view.component';
import { ZusammenfassungViewComponent } from './configuration-view/zusammenfassung/view/zusammenfassung-view.component';

const configurationStates = [
  BeguenstigterState,
  BestattungsartState,
  GrabstelleState,
  ZusammenfassungState,
  StoreState,
];

@NgModule({
  declarations: [
    AppComponent,
    StepByStepConfigurerComponent,
    BestattungsartComponent,
    GrabstelleComponent,
    BeguenstigterComponent,
    ZusammenfassungComponent,
    ConfigurationViewSwitcherComponent,
    BestattungsartViewComponent,
    GrabstelleViewComponent,
    BeguenstigerViewComponent,
    ZusammenfassungViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    [
      NgxsModule.forRoot(configurationStates),
      NgxsReduxDevtoolsPluginModule.forRoot(),
      NgxsDispatchPluginModule,
    ],
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
