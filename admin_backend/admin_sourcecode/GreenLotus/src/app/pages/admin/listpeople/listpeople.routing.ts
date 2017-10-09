import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ListPeopleComponent } from './listpeople.component';

export const routes: Routes = [
    {
        path: '',
        component: ListPeopleComponent,
        children: [
        ]
    }
]

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
