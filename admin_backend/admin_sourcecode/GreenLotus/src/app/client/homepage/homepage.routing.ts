import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage.component';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
    {
        path: '',
        component: HomepageComponent,
        children: []
    }
]

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
