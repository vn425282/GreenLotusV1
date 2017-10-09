import { Routes, RouterModule } from '@angular/router';

import { ModuleWithProviders } from '@angular/core';
import { AddPeopleComponent } from 'app/pages/admin/add-people/add-people.component';


export const routes: Routes = [
    {
        path: '',
        component: AddPeopleComponent,
        children: [
        ]
    }
]

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
