import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalComponent } from 'ng2-bs3-modal/components/modal';
import { PartnerService } from 'app/services/partner/partner.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SharedService } from 'app/services/shared/shared.service';
import { Partner } from 'app/models/partner';

@Component({
  selector: 'app-update-partner',
  templateUrl: './update-partner.component.html',
  styleUrls: ['./update-partner.component.css']
})
export class UpdatePartnerComponent implements OnInit {
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
  public myCurrentParner: any;

  constructor(public _p: PartnerService, public router: Router, public _shared: SharedService, private activatedRoute: ActivatedRoute, ) { }

  ngOnInit() {
    try {
      this.flagSpinner = true;
      this.activatedRoute.params.subscribe((params: Params) => {
        const partnerId = params['partnerId'];
        this._p.getPartner().subscribe(data => {
          this.myCurrentParner = data.results.find(x => x.ID_AboutPartner == partnerId);
          console.log(this.myCurrentParner)
          if (this.myCurrentParner) {
            this.flagSpinner = false;
            this.srcPreview = this._shared.getBaseURLWithoutFlash() + this.myCurrentParner.PictureURL;
            this.shortPathURL = this.myCurrentParner.PictureURL;
            this.urlReferences.nativeElement.value = this.myCurrentParner.URLReferences;
            this.description.nativeElement.value = this.myCurrentParner.Description;
            this.lang.nativeElement.value = this.myCurrentParner.Lang;
          } else {
            this.router.navigate(['pages/admin/list-partner']);
          }
        });
      });
    } catch (e) {
      console.log('Error at update-partner', e);
    }
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
          this._shared.uploadBase64ImgToServer(textBase64, 'partner', fileExtend).subscribe(data => {
            this.srcPreview = this._shared.getBaseURLWithoutFlash() + data.results;
            this.myCurrentParner.PictureURL = data.results;
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
    this.router.navigate(['pages/admin/list-partner']);
  }

  updatePartner() {
    this.flagSpinner = true;
    const pObject: Partner = new Partner();
    pObject.idAboutPartner = this.myCurrentParner.ID_AboutPartner;
    pObject.description = this.description.nativeElement.value;
    pObject.lang = this.lang.nativeElement.value;
    pObject.urlReferences = this.urlReferences.nativeElement.value;
    pObject.pictureURL = this.shortPathURL;
    this._p.updatePartner(pObject).subscribe(data => {
      this.flagSpinner = false;
      console.log('addPartner', data);
      this.noticeModal.open();
      this.noticeMessage = 'Cập nhật đối tác thành công !!!';
    });
  }
}
