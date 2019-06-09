import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserinterfaceComponent } from './userinterface.component';
import { UserinterfaceRoutingModule } from './userinterface-routing.module';

@NgModule({
  declarations: [UserinterfaceComponent],
  imports: [
    CommonModule,
    UserinterfaceRoutingModule
  ],
  exports: [UserinterfaceComponent],
})
export class UserinterfaceModule { }
