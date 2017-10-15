import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalComponent } from 'ng2-bs3-modal/components/modal';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SharedService } from 'app/services/shared/shared.service';
import { AboutPeopleObj } from 'app/models/aboutpeople';
import { AboutPeopleService } from 'app/services/about-people/about-people.service';

@Component({
  selector: 'app-update-clientsaid',
  templateUrl: './update-clientsaid.component.html',
  styleUrls: ['./update-clientsaid.component.css']
})
export class UpdateClientSaidComponent implements OnInit {
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
  public myCurrentClientSaid: any;

  constructor(public _p: AboutPeopleService, public router: Router, public _shared: SharedService, private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    try {
      this.flagSpinner = true;
      this.activatedRoute.params.subscribe((params: Params) => {
        const clientSaidId = params['clientSaidId'];
        this._p.getAboutPeople().subscribe(data => {
          this.myCurrentClientSaid = data.results.find(x => x.ID_AboutPeople == clientSaidId);
          console.log(this.myCurrentClientSaid)
          if (this.myCurrentClientSaid) {
            this.flagSpinner = false;
            this.srcPreview = this._shared.getBaseURLWithoutFlash() + this.myCurrentClientSaid.PictureURL;
            this.shortPathURL = this.myCurrentClientSaid.PictureURL;
            this.roleName.nativeElement.value = this.myCurrentClientSaid.RoleName;
            this.description.nativeElement.value = this.myCurrentClientSaid.Description;
            this.lang.nativeElement.value = this.myCurrentClientSaid.Lang;
          } else {
            this.router.navigate(['pages/admin/list-clientsaid']);
          }
        });
      });
    } catch (e) {
      console.log('Error at update-clientsaid', e);
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
      const fileExtend = file.name.split('.').pop();
      if (fileExtend === 'jpg' || fileExtend === 'png' || fileExtend === 'gif') {
        const myReader: FileReader = new FileReader();

        myReader.onloadend = ((e) => {
          textBase64 = myReader.result;
          this.myLogoBase64String = textBase64;
          // this.srcPreview = textBase64;
          this._shared.uploadBase64ImgToServer(textBase64, 'about-clientsaid', fileExtend).subscribe(data => {
            this.srcPreview = this._shared.getBaseURLWithoutFlash() + data.results;
            this.myCurrentClientSaid.PictureURL = data.results;
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
      console.log('error at: readThis() ----- update-clientsaid.component.ts', e);
      this.myLogoBase64String = '';
      this.srcPreview = '';
    }
  }

  back() {
    this.router.navigate(['pages/admin/list-clientsaid']);
  }

  updatePeople() {
    this.flagSpinner = true;
    const pObject: AboutPeopleObj = new AboutPeopleObj();
    pObject.ID_AboutPeople = this.myCurrentClientSaid.ID_AboutPeople;
    pObject.Description = this.description.nativeElement.value;
    pObject.Lang = this.lang.nativeElement.value;
    pObject.RoleName = this.roleName.nativeElement.value;
    pObject.PictureURL = this.shortPathURL;
    this._p.updateAboutPeople(pObject).subscribe(data => {
      this.flagSpinner = false;
      console.log('update ClientSaid', data);
      this.noticeModal.open();
      this.noticeMessage = 'Cập nhật thành công !!!';
    });
  }
}
