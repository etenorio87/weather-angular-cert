import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './ui/components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { PipesModule } from './core/pipes/pipes.module';

import { AppComponent } from './app.component';
import { IndexComponent } from './ui/views/index/index.component';
import { ForecastComponent } from './ui/views/forecast/forecast.component';

@NgModule({
  imports: [
      BrowserModule,
      FormsModule,
      ComponentsModule,
      HttpClientModule,
      AppRoutingModule,
      PipesModule
  ],
  declarations: [ AppComponent, IndexComponent, ForecastComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
