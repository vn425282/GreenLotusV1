import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { UsersService } from '../../../services/users/users.service';
import { SharedService } from '../../../services/shared/shared.service';

@Component({
    selector: 'login',
    moduleId: module.id,
    templateUrl: 'login.component.html',
    styleUrls: ['login.css']
})

export class LoginComponent implements OnInit {
    public flagSpinner = false;
    public errorMessage: any;

    constructor(public userService: UsersService,
        public sharedService: SharedService,
        public router: Router) {
        if (localStorage.getItem('login')) {
            this.router.navigate(['/listusercmnd']);
        }
    }

    ngOnInit() {
    }

    login(pass, email) {
        this.errorMessage = '';
        if (pass && email) {
            this.flagSpinner = true;
            this.userService.getUserForLogin(email, pass).subscribe(data => {
                this.flagSpinner = false;
                if (data.results) {
                    localStorage.setItem('login', 'true');
                    this.sharedService.flagLogin = true;
                    this.router.navigate(['/list-user']);
                } else {
                    this.errorMessage = 'Bạn đã nhập sai mật khẩu hoặc Email';
                }

                console.log(data);
            });
        } else {
            this.errorMessage = 'Vui lòng nhập Email và Mật khẩu';
        }
    }
}
