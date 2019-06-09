import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'blank', loadChildren: () => import('./@pages/blank/blank.module').then(m => m.BlankModule) },
  { path: 'cards', loadChildren: () => import('./@pages/cards/cards.module').then(m => m.CardsModule) },
  { path: 'chartjs', loadChildren: () => import('./@pages/chartjs/chartjs.module').then(m => m.ChartjsModule) },
  { path: 'content', loadChildren: () => import('./@pages/content/content.module').then(m => m.ContentModule) },
  { path: 'dashboard', loadChildren: () => import('./@pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'forms', loadChildren: () => import('./@pages/forms/forms.module').then(m => m.FormsModule) },
  { path: 'icons', loadChildren: () => import('./@pages/icons/icons.module').then(m => m.IconsModule) },
  { path: 'stats', loadChildren: () => import('./@pages/stats/stats.module').then(m => m.StatsModule) },
  { path: 'tables', loadChildren: () => import('./@pages/tables/tables.module').then(m => m.TablesModule) },
  { path: 'typography', loadChildren: () => import('./@pages/typography/typography.module').then(m => m.TypographyModule) },
  { path: 'userinterface', loadChildren: () => import('./@pages/userinterface/userinterface.module').then(m => m.UserinterfaceModule) },
  { path: 'login', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'register', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
