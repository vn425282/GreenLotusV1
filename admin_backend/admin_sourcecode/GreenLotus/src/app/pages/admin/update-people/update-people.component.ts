import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalComponent } from 'ng2-bs3-modal/components/modal';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SharedService } from 'app/services/shared/shared.service';
import { AboutPeopleObj } from 'app/models/aboutpeople';
import { AboutPeopleService } from 'app/services/about-people/about-people.service';

@Component({
  selector: 'app-update-people',
  templateUrl: './update-people.component.html',
  styleUrls: ['./update-people.component.css']
})
export class UpdatePeopleComponent implements OnInit {
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
  public myCurrentPeople: any;

  constructor(public _p: AboutPeopleService, public router: Router, public _shared: SharedService, private activatedRoute: ActivatedRoute, ) { }

  ngOnInit() {
    try {
      this.flagSpinner = true;
      this.activatedRoute.params.subscribe((params: Params) => {
        const peopleId = params['peopleId'];
        this._p.getAboutPeople().subscribe(data => {
          this.myCurrentPeople = data.results.find(x => x.ID_AboutPeople == peopleId);
          console.log(this.myCurrentPeople)
          if (this.myCurrentPeople) {
            this.flagSpinner = false;
            this.srcPreview = this._shared.getBaseURLWithoutFlash() + this.myCurrentPeople.PictureURL;
            this.shortPathURL = this.myCurrentPeople.PictureURL;
            this.roleName.nativeElement.value = this.myCurrentPeople.RoleName;
            this.description.nativeElement.value = this.myCurrentPeople.Description;
            this.lang.nativeElement.value = this.myCurrentPeople.Lang;
          } else {
            this.router.navigate(['pages/admin/list-people']);
          }
        });
      });
    } catch (e) {
      console.log('Error at update-people', e);
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
          this._shared.uploadBase64ImgToServer(textBase64, 'about-people', fileExtend).subscribe(data => {
            this.srcPreview = this._shared.getBaseURLWithoutFlash() + data.results;
            this.myCurrentPeople.PictureURL = data.results;
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
      console.log('error at: readThis() ----- update-people.component.ts', e);
      this.myLogoBase64String = '';
      this.srcPreview = '';
    }
  }

  back() {
    this.router.navigate(['pages/admin/list-people']);
  }

  updatePeople() {
    this.flagSpinner = true;
    const pObject: AboutPeopleObj = new AboutPeopleObj();
    pObject.ID_AboutPeople = this.myCurrentPeople.ID_AboutPeople;
    pObject.Description = this.description.nativeElement.value;
    pObject.Lang = this.lang.nativeElement.value;
    pObject.RoleName = this.roleName.nativeElement.value;
    pObject.PictureURL = this.shortPathURL;
    this._p.updateAboutPeople(pObject).subscribe(data => {
      this.flagSpinner = false;
      console.log('add AboutPeople', data);
      this.noticeModal.open();
      this.noticeMessage = 'Cập nhật thành công !!!';
    });
  }
}
