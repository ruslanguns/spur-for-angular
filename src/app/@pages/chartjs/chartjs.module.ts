import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartjsComponent } from './chartjs.component';
import { ChartjsRoutingModule } from './chartjs-routing.module';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [ChartjsComponent],
  imports: [
    CommonModule,
    ChartjsRoutingModule,
    ChartsModule
  ],
  exports: [ChartjsComponent],
})
export class ChartjsModule { }
