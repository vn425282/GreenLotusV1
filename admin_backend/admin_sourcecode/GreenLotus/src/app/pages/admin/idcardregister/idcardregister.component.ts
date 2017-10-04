import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UsersService } from 'app/services/users/users.service';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { Router } from '@angular/router';

@Component({
    selector: 'idcardregister',
    moduleId: module.id,
    templateUrl: 'idcardregister.component.html',
    styleUrls: ['idcardregister.css']
})

export class IDCardRegisterComponent implements OnInit {
    public base64textStringCMNDFront?: any;
    public base64textStringCMNDEnd?: any;
    public flagSpinner = false;
    public noticeMessage = '';

    @ViewChild('username') username: ElementRef;
    @ViewChild('address') address: ElementRef;
    @ViewChild('email') email: ElementRef;
    @ViewChild('password') password: ElementRef;
    @ViewChild('noticeModal') noticeModal: ModalComponent;
    @ViewChild('role') role: ElementRef;

    ngOnInit() {

    }

    constructor(public usersService: UsersService, public router: Router) {
    }

    fuCMNDFrontChange($event): void {
        this.readThis($event.target, 'front');
    }

    fuCMNDEndChange($event): void {
        this.readThis($event.target, 'end');
    }

    readThis(inputValue: any, state: any): void {
        try {
            this.flagSpinner = true;
            let textBase64: string;
            const file: File = inputValue.files[0];
            const myReader: FileReader = new FileReader();

            myReader.onloadend = ((e) => {
                textBase64 = myReader.result;
                if (state === 'front') {
                    this.base64textStringCMNDFront = textBase64;
                    // this.imgCMNDFront.nativeElement.src = textBase64;
                } else {
                    this.base64textStringCMNDEnd = textBase64;
                    // this.imgCMNDEnd.nativeElement.src = textBase64;
                }
                this.flagSpinner = false;
            });
            myReader.readAsDataURL(file);
        } catch (e) {
            console.log('error at: readThis() ----- idcardregister');
            if (state === 'front') {
                this.base64textStringCMNDFront = '';
            } else {
                this.base64textStringCMNDEnd = '';
            }
        }
    }

    addUser() {
        this.noticeMessage = '';
        this.flagSpinner = true;
        this.usersService.getUsers().subscribe(data => {
            this.flagSpinner = false;
            const checkDuplicateEmail = data.results.find(x => x.Email === this.email.nativeElement.value);
            if (checkDuplicateEmail && this.email.nativeElement.value.length !== 0) {
                this.noticeModal.open();
                this.flagSpinner = false;
                this.noticeMessage = 'Email này đã tồn tại vui lòng chọn Email khác !';
            } else {
                this.flagSpinner = false;
                this.usersService.addUser(this.username.nativeElement.value,
                    this.address.nativeElement.value,
                    this.email.nativeElement.value,
                    this.password.nativeElement.value,
                    this.role.nativeElement.value).subscribe(myData => {
                        this.noticeModal.open();
                        this.noticeMessage = 'Thêm người dùng thành công !!!';
                        this.resetFailed();
                    });
            }
        });
    }

    resetFailed() {
        this.username.nativeElement.value = '';
        this.address.nativeElement.value = '';
        this.email.nativeElement.value = '';
        this.base64textStringCMNDFront = '';
        this.base64textStringCMNDEnd = '';
        this.role.nativeElement.value = '1';
        this.password.nativeElement.value = '';
    }

    back() {
        this.router.navigate(['pages/admin/listusercmnd']);
    }
}
