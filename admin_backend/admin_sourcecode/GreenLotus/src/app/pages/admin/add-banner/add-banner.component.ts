import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Router } from '@angular/router';
import { BannerObj } from 'app/models/banner';
import { SharedService } from 'app/services/shared/shared.service';
import { ModalComponent } from 'ng2-bs3-modal/components/modal';
import { BannerService } from 'app/services/banner/banner.service';

@Component({
  selector: 'app-add-banner',
  templateUrl: './add-banner.component.html',
  styleUrls: ['./add-banner.css']
})

export class AddBannerComponent implements OnInit {
  @ViewChild('logo') imgLogo: ElementRef;
  @ViewChild('urlReferences') urlReferences: ElementRef;
  @ViewChild('description') description: ElementRef;
  @ViewChild('lang') lang: ElementRef;
  @ViewChild('noticeModal') noticeModal: ModalComponent;

  public flagSpinner = false;
  public myLogoBase64String = '';
  public srcPreview = '';
  public noticeMessage = '';
  public shortPathURL = '';

  constructor(public _p: BannerService, public router: Router, public _shared: SharedService) { }

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
          this._shared.uploadBase64ImgToServer(textBase64, 'banner', fileExtend).subscribe(data => {
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
      console.log('error at: readThis() ----- add-banner.component.ts', e);
      this.myLogoBase64String = '';
      this.srcPreview = '';
    }
  }

  back() {
    this.router.navigate(['pages/admin/list-banner']);
  }

  addBanner() {
    this.flagSpinner = true;
    this._p.addBanner(this.shortPathURL).subscribe(data => {
      this.flagSpinner = false;
      console.log('addBanner', data);
      this.noticeModal.open();
      this.noticeMessage = 'Thêm Banner thành công !!!';
      this.resetFailed();
    });
  }

  resetFailed() {
    this.srcPreview = '';
    this.shortPathURL = '';
    this.imgLogo.nativeElement.value = '';
  }
}
