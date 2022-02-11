import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DegreesPipe } from './degrees.pipe';

@NgModule({
  declarations: [
    DegreesPipe
  ],
  exports: [
    DegreesPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
