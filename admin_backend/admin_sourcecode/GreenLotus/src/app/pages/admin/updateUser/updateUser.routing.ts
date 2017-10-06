import { Routes, RouterModule } from '@angular/router';
import { UpdateUserComponent } from './updateUser.component';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
    {
        path: '',
        component: UpdateUserComponent,
        children: [
        ]
    }
]

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
