import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserinterfaceComponent } from './userinterface.component';

const routes: Routes = [{
  path: '',
  component: UserinterfaceComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserinterfaceRoutingModule { }
