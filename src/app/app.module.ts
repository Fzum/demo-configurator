import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StepByStepConfigurerComponent } from './step-by-step-configurer/container/step-by-step-configurer.component';

import { FlexLayoutModule } from '@angular/flex-layout';

import { BestattungsartComponent } from './configuration-view/bestattungsart/container/bestattungsart.component';
import { GrabstelleComponent } from './configuration-view/grabstelle/container/grabstelle.component';
import { BeguenstigterComponent } from './configuration-view/beguenstigter/container/beguenstigter.component';
import { ZusammenfassungComponent } from './configuration-view/zusammenfassung/container/zusammenfassung.component';

import { BeguenstigterState } from './configuration-view/beguenstigter/data/beguenstigter.state';
import { BestattungsartState } from './configuration-view/bestattungsart/data/bestattungsart.state';
import { GrabstelleState } from './configuration-view/grabstelle/data/grabstelle.state';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreState } from './step-by-step-configurer/data/store.state';
import { NgxsDispatchPluginModule } from '@ngxs-labs/dispatch-decorator';
import { BestattungsartViewComponent } from './configuration-view/bestattungsart/view/bestattungsart-view.component';
import { GrabstelleViewComponent } from './configuration-view/grabstelle/view/grabstelle-view.component';
import { BeguenstigerViewComponent } from './configuration-view/beguenstigter/view/beguenstiger-view.component';
import { ZusammenfassungViewComponent } from './configuration-view/zusammenfassung/view/zusammenfassung-view.component';
import { NavigationViewComponent } from './step-by-step-configurer/view/navigation-view.component';

const configurationStates = [
  BeguenstigterState,
  BestattungsartState,
  GrabstelleState,
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
    BestattungsartViewComponent,
    GrabstelleViewComponent,
    BeguenstigerViewComponent,
    ZusammenfassungViewComponent,
    NavigationViewComponent,
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
