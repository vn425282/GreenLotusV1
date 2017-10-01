import { Component } from '@angular/core';
import { UsersService } from "app/services/users/users.service";
import { SharedService } from "app/services/shared/shared.service";
import { RouterModule, Router } from '@angular/router';

@Component({
    selector: 'logout',
    moduleId: module.id,
    templateUrl: 'logout.component.html',
    styleUrls: ['logout.css']
})

export class LogoutComponent{

    constructor(public userService: UsersService, 
                public sharedService: SharedService, 
                public router: Router){
        localStorage.clear();
        this.router.navigate(['/login']);
        this.sharedService.flagLogin = false;
    }
}
