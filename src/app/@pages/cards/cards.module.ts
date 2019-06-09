import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards.component';
import { CardsRoutingModule } from './cards-routing.module';

@NgModule({
  declarations: [CardsComponent],
  imports: [
    CommonModule,
    CardsRoutingModule
  ],
  exports: [
    CardsComponent
  ]
})
export class CardsModule { }
