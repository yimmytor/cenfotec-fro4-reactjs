import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiciosComponent } from './servicios/servicios.component';

@NgModule({
  declarations: [
    ServiciosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ServiciosComponent
  ]
})
export class ServiciosModule { }
