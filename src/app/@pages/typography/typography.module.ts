import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypographyComponent } from './typography.component';
import { TypographyRoutingModule } from './typograpy-routing.module';

@NgModule({
  declarations: [TypographyComponent],
  imports: [
    CommonModule,
    TypographyRoutingModule
  ],
  exports: [TypographyComponent],
})
export class TypographyModule { }
