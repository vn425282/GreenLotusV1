import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';


@Injectable()
export class SharedService {
    public baseURL = 'http://localhost:54484/';
    public headers = new Headers({ 'Content-Type': 'application/json' });
    public options = new RequestOptions({ headers: this.headers });
    public flagLogin: any = localStorage.getItem('login');

    public getBaseURLWithoutFlash() {
        return this.baseURL.slice(0, -1);
    }

    constructor(public http: Http) {
    }

    uploadBase64ImgToServer(myBase64StringImage: string, prefix, extendtion) {
        // ...using get request
        const url = 'api/shared/uploadBase64ImgToServer';
        myBase64StringImage = myBase64StringImage.split(',')[1];
        const body = { urlBase64: myBase64StringImage, prefix: prefix, extend: extendtion };
        console.log(body);
        return this.http.post(this.baseURL + url, body, this.options)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            // ...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}
