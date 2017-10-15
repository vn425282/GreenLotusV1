import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { SharedService } from 'app/services/shared/shared.service';

@Injectable()
export class UploadService {
    progress$: any;
    progress: any;
    progressObserver: any;

    constructor(public _shared : SharedService) {
        this.progress$ = Observable.create(observer => {
            this.progressObserver = observer
            console.log("UploadService constructor", this.progressObserver);
        }).share();

    }

    makeFileRequest(params: string[], files: File[]): Observable<any> {
        return Observable.create(observer => {
            let formData: FormData = new FormData(),
                xhr: XMLHttpRequest = new XMLHttpRequest();

            for (let i = 0; i < files.length; i++) {
                formData.append("uploads[]", files[i], files[i].name);
            }

            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        observer.next(xhr.response);
                        observer.complete();
                    } else {
                        observer.error(xhr.response);
                    }
                }
            };

            xhr.upload.onprogress = (event) => {
                this.progress = Math.round(event.loaded / event.total * 100);
                // this.progressObserver.next(this.progress);
            };

            xhr.open('POST', this._shared.baseURL + "api/upload/uploadFile", true);
            var serverFileName = xhr.send(formData);
            return serverFileName;
        });
    }
}