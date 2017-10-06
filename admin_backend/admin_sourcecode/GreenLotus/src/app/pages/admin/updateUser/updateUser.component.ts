import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UsersService } from 'app/services/users/users.service';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'updateUser',
    moduleId: module.id,
    templateUrl: 'updateUser.component.html',
    styleUrls: ['updateUser.css']
})

export class UpdateUserComponent implements OnInit {
    public flagSpinner = false;
    public noticeMessage = '';
    public currentUserID: number;

    @ViewChild('username') username: ElementRef;
    @ViewChild('address') address: ElementRef;
    @ViewChild('email') email: ElementRef;
    @ViewChild('password') password: ElementRef;
    @ViewChild('noticeModal') noticeModal: ModalComponent;
    @ViewChild('role') role: ElementRef;
    @ViewChild('status') status: ElementRef;

    ngOnInit() {
        // subscribe to router event
        this.activatedRoute.params.subscribe((params: Params) => {
            const userId = params['userId'];
            this.currentUserID = userId;
            this.usersService.getUserByID(userId).subscribe(data => {
                if (data.results) {
                    console.log(data.results);
                    this.username.nativeElement.value = data.results[0].Username;
                    this.address.nativeElement.value = data.results[0].Address;
                    this.email.nativeElement.value = data.results[0].Email;
                    this.password.nativeElement.value = data.results[0].Password;
                    this.role.nativeElement.value = data.results[0].ID_Role;
                    this.status.nativeElement.value = data.results[0].Status;
                    if (data.results[0].Status) {
                        this.status.nativeElement.value = 1;
                    } else {
                        this.status.nativeElement.value = 2;
                    }
                } else {
                    this.router.navigate(['pages/admin/list-user']);
                }
            });
        });
    }

    constructor(public usersService: UsersService, private activatedRoute: ActivatedRoute, public router: Router) {
    }

    back() {
        this.router.navigate(['pages/admin/list-user']);
    }

    updateUser() {
        this.noticeMessage = '';
        this.flagSpinner = true;
        let status = true;
        if (this.status.nativeElement.value === 2) {
            status = false;
        }
        this.usersService.updateUser(
            this.currentUserID,
            this.username.nativeElement.value,
            this.address.nativeElement.value,
            this.password.nativeElement.value,
            this.role.nativeElement.value,
            status).subscribe(data => {
                this.flagSpinner = false;
                this.noticeModal.open();
                this.noticeMessage = 'Update người dùng thành công !!!';
            });
    }
}
