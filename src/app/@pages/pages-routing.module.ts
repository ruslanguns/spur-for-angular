import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { PAGES_ROUTES } from './pages.routes';


const routes: Routes = [
  { path: '', component: PagesComponent, children: PAGES_ROUTES },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
