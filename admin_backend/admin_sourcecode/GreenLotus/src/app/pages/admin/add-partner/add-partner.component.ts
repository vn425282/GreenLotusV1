import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PartnerService } from '../../../services/partner/partner.service';
import { Router } from '@angular/router';
import { Partner } from 'app/models/partner';
import { SharedService } from 'app/services/shared/shared.service';
import { ModalComponent } from 'ng2-bs3-modal/components/modal';

@Component({
  selector: 'app-add-partner',
  templateUrl: './add-partner.component.html',
  styleUrls: ['./add-partner.css']
})

export class AddPartnerComponent implements OnInit {
  @ViewChild('logo') imgLogo: ElementRef;
  @ViewChild('urlReferences') urlReferences: ElementRef;
  @ViewChild('description') description: ElementRef;
  @ViewChild('lang') lang: ElementRef;
  @ViewChild('noticeModal') noticeModal: ModalComponent;

  public flagSpinner = false;
  public myLogoBase64String = '';
  public srcPreview = '';
  public noticeMessage = '';

  constructor(public _p: PartnerService, public router: Router, public _shared: SharedService) { }

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
      const fileExtend = file.name.split('.').pop();
      if (fileExtend === 'jpg' || fileExtend === 'png' || fileExtend === 'gif') {
        const myReader: FileReader = new FileReader();

        myReader.onloadend = ((e) => {
          textBase64 = myReader.result;
          this.myLogoBase64String = textBase64;
          // this.srcPreview = textBase64;
          this._shared.uploadBase64ImgToServer(textBase64, 'partner', fileExtend).subscribe(data => {
            this.srcPreview = this._shared.getBaseURLWithoutFlash() + data.results;
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
    this.router.navigate(['pages/admin/list-partner']);
  }

  addPartner() {
    const pObject: Partner = new Partner();
    pObject.description = this.description.nativeElement.value;
    pObject.lang = this.lang.nativeElement.value;
    pObject.urlReferences = this.urlReferences.nativeElement.value;
    pObject.pictureURL = this.srcPreview;
    this._p.addPartner(pObject).subscribe( data => {
      console.log('addPartner', data);
    });
  }

}
