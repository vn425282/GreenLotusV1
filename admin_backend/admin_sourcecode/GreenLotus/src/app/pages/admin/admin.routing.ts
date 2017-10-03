import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { IDCardRegisterComponent } from './idcardregister/idcardregister.component';
import { TableComponent } from './table/table.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { AdminComponent } from './admin.component';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'login', loadChildren: './login/login.module#LoginModule' }
        ]
    }
]

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
