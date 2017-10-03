import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NguiMapModule} from '@ngui/map';
import { HttpModule } from '@angular/http';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import { FooterModule } from '../../shared/footer/footer.module';
import { NavbarModule } from '../../shared/navbar/navbar.module';
import { FixedPluginModule } from '../../shared/fixedplugin/fixedplugin.module';
import { SidebarModule } from '../../shared/sidebar/sidebar.module';
// component
import { LogoutComponent } from './logout/logout.component';
import { AdminComponent } from './admin.component';
import { SpinnerComponentModule } from 'ng2-component-spinner';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { IDCardRegisterComponent } from './idcardregister/idcardregister.component';
import { TableComponent } from './table/table.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { UpdateUserComponent } from './updateUser/updateUser.component';
import { routing } from './admin.routing';
import { CommonModule } from '@angular/common';
import { LoginModule } from './login/login.module';
import { UsersService } from '../../services/users/users.service';
import { SharedService } from 'app/services/shared/shared.service';


@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    UserComponent,
    TableComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    UpdateUserComponent,
  ],
  imports: [
    SidebarModule,
    NavbarModule,
    FooterModule,
    FixedPluginModule,
    SpinnerComponentModule,
    HttpModule,
    Ng2Bs3ModalModule,
    Ng2SmartTableModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyBr-tgUtpm8cyjYVQDrjs8YpZH7zBNWPuY'}),
    CommonModule,
    LoginModule,
    routing
  ],
  providers: [
    UsersService,
    SharedService
  ],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
