import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';
import { NguiMapModule} from '@ngui/map';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { UserComponent }   from './user/user.component';
import { IDCardRegisterComponent }   from './idcardregister/idcardregister.component';
import { ListUserCMNDComponent }   from './listusercmnd/listusercmnd.component';
import { TableComponent }   from './table/table.component';
import { TypographyComponent }   from './typography/typography.component';
import { IconsComponent }   from './icons/icons.component';
import { MapsComponent }   from './maps/maps.component';
import { NotificationsComponent }   from './notifications/notifications.component';
import { UpgradeComponent }   from './upgrade/upgrade.component';
import { UsersService } from "app/services/users/users.service";
import { SharedService } from "app/services/shared/shared.service";
import { LoginComponent } from "app/login/login.component";
import { UpdateUserComponent } from 'app/updateUser/updateUser.component';

// Import library
import { SpinnerComponentModule } from 'ng2-component-spinner';
import { HttpModule } from '@angular/http';
import { LogoutComponent } from "app/logout/logout.component";
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserComponent,
    IDCardRegisterComponent,
    LoginComponent,
    LogoutComponent,
    ListUserCMNDComponent,
    TableComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    UpdateUserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    SidebarModule,
    NavbarModule,
    FooterModule,
    FixedPluginModule,
    SpinnerComponentModule,
    HttpModule,
    Ng2Bs3ModalModule,
    Ng2SmartTableModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyBr-tgUtpm8cyjYVQDrjs8YpZH7zBNWPuY'})

  ],
  providers: [
    UsersService, 
    SharedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
