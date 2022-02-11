import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './ui/views/index/index.component';
import { ForecastComponent } from './ui/views/forecast/forecast.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'forecast/:zipCode', component: ForecastComponent },
  { path: '**', redirectTo: '/weather', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
