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
import { environment } from 'src/environments/environment';
import { from } from 'rxjs';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    NgxsModule.forRoot([], {
      developmentMode: !environment.production,
    }),
    NgxsReduxDevtoolsPluginModule,
    NgxsLoggerPluginModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
