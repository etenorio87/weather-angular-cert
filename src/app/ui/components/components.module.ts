import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {PipesModule} from '../../core/pipes/pipes.module';
import { LocationFormComponent } from './location-form/location-form.component';
import { WeatherResultComponent } from './weather-result/weather-result.component';

@NgModule({
  declarations: [
    LocationFormComponent,
    WeatherResultComponent
  ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        PipesModule
    ],
  exports: [
    LocationFormComponent,
    WeatherResultComponent
  ]
})
export class ComponentsModule { }
