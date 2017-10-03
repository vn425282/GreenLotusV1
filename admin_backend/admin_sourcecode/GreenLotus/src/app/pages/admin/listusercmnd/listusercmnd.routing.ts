import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ListUserCMNDComponent } from './listusercmnd.component';

export const routes: Routes = [
    {
        path: '',
        component: ListUserCMNDComponent,
        children: [
        ]
    }
]

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
