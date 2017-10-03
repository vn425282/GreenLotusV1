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
            { path: 'login', loadChildren: './login/login.module#LoginModule' },
            { path: 'logout', loadChildren: './logout/logout.module#LogoutModule' },
            { path: 'list-user', loadChildren: './listusercmnd/listusercmnd.module#ListUserCMNDModule' },
            { path: 'list-partner', loadChildren: './listpartner/listpartner.module#ListPartnerModule' },
            { path: 'add-user', loadChildren: './idcardregister/idcardregister.module#ListPartnerModule' }
        ]
    }
]

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
