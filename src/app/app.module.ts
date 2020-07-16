import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StepByStepConfigurerComponent } from './step-by-step-configurer/step-by-step-configurer.component';

import { FlexLayoutModule } from '@angular/flex-layout';

import { from } from 'rxjs';

@NgModule({
  declarations: [AppComponent, StepByStepConfigurerComponent],
  imports: [BrowserModule, AppRoutingModule, FlexLayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
