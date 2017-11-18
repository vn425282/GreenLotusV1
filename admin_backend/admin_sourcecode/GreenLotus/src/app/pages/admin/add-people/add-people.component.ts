import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Router } from '@angular/router';
import { AboutPeopleObj } from 'app/models/aboutpeople';
import { SharedService } from 'app/services/shared/shared.service';
import { ModalComponent } from 'ng2-bs3-modal/components/modal';
import { AboutPeopleService } from 'app/services/about-people/about-people.service';

@Component({
  selector: 'app-add-people',
  templateUrl: './add-people.component.html',
  styleUrls: ['./add-people.css']
})

export class AddPeopleComponent implements OnInit {
  @ViewChild('logo') imgLogo: ElementRef;
  @ViewChild('roleName') roleName: ElementRef;
  @ViewChild('description') description: ElementRef;
  @ViewChild('lang') lang: ElementRef;
  @ViewChild('noticeModal') noticeModal: ModalComponent;

  public flagSpinner = false;
  public myLogoBase64String = '';
  public srcPreview = '';
  public noticeMessage = '';
  public shortPathURL = '';

  constructor(public _p: AboutPeopleService, public router: Router, public _shared: SharedService) { }

  ngOnInit() {

  }

  logoChangeFU($event): void {
    this.readThis($event.target, 'end');
  }

  readThis(inputValue: any, state: any): void {
    try {
      this.flagSpinner = true;
      let textBase64: string;
      const file: File = inputValue.files[0];
      const fileExtend = file.name.split('.').pop().toUpperCase();
      if (fileExtend === 'JPG' || fileExtend === 'PNG' || fileExtend === 'GIF') {
        const myReader: FileReader = new FileReader();

        myReader.onloadend = ((e) => {
          textBase64 = myReader.result;
          this.myLogoBase64String = textBase64;
          // this.srcPreview = textBase64;
          this._shared.uploadBase64ImgToServer(textBase64, 'about-people', fileExtend).subscribe(data => {
            this.srcPreview = this._shared.getBaseURLWithoutFlash() + data.results;
            this.shortPathURL = data.results;
            this.flagSpinner = false;
            // this.srcPreview = data;
          });
        });
        myReader.readAsDataURL(file);
      } else {
        this.noticeModal.open();
        this.noticeMessage = 'Vui lòng chọn file hình có đuôi .jpg, .png, .gif';
      }
    } catch (e) {
      console.log('error at: readThis() ----- add-partner.component.ts', e);
      this.myLogoBase64String = '';
      this.srcPreview = '';
    }
  }

  back() {
    this.router.navigate(['pages/admin/list-people']);
  }

  addPeople() {
    this.flagSpinner = true;
    const pObject: AboutPeopleObj = new AboutPeopleObj();
    pObject.Description = this.description.nativeElement.value;
    pObject.Lang = this.lang.nativeElement.value;
    pObject.RoleName = this.roleName.nativeElement.value;
    pObject.PictureURL = this.shortPathURL;
    this._p.addAboutPeople(pObject).subscribe(data => {
      this.flagSpinner = false;
      console.log('addAboutPeople', data);
      this.noticeModal.open();
      this.noticeMessage = 'Thêm giới thiệu nhân viên thành công !!!';
      this.resetFailed();
    });
  }

  resetFailed() {
    this.description.nativeElement.value = '';
    this.lang.nativeElement.value = 'vn';
    this.roleName.nativeElement.value = '';
    this.srcPreview = '';
    this.shortPathURL = '';
    this.imgLogo.nativeElement.value = '';
  }
}
