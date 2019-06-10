import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';

const PAGES_ROUTES = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'blank', loadChildren: () => import('./blank/blank.module').then(m => m.BlankModule) },
  { path: 'cards', loadChildren: () => import('./cards/cards.module').then(m => m.CardsModule) },
  { path: 'chartjs', loadChildren: () => import('./chartjs/chartjs.module').then(m => m.ChartjsModule) },
  { path: 'content', loadChildren: () => import('./content/content.module').then(m => m.ContentModule) },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'forms', loadChildren: () => import('./forms/forms.module').then(m => m.FormsModule) },
  { path: 'icons', loadChildren: () => import('./icons/icons.module').then(m => m.IconsModule) },
  { path: 'stats', loadChildren: () => import('./stats/stats.module').then(m => m.StatsModule) },
  { path: 'tables', loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule) },
  { path: 'typography', loadChildren: () => import('./typography/typography.module').then(m => m.TypographyModule) },
  { path: 'userinterface', loadChildren: () => import('./userinterface/userinterface.module').then(m => m.UserinterfaceModule) },
];

const routes: Routes = [
  { path: '', component: PagesComponent, children: PAGES_ROUTES },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
