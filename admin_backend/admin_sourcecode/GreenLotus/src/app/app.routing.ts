import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  { path: 'pages', loadChildren: './pages/pages.module#PagesModule'},
  { path: '', redirectTo: 'pages', pathMatch: 'full' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: false });
