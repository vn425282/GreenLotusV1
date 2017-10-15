import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { SharedService } from 'app/services/shared/shared.service';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Partner } from 'app/models/partner';

@Injectable()
export class PartnerService {
    // Resolve HTTP using the constructor
    constructor(public http: Http,
        public shared: SharedService) { }
    // private instance variable to hold base url

    // api/partner/getAllPartner
    getPartner(): Observable<any> {
        // ...using get request
        const url = 'api/partner/getAllPartner';
        return this.http.get(this.shared.baseURL + url)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            // ...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

    }

    addPartner(p: Partner): Observable<any> {
        const url = 'api/partner/addPartner';
        const body = { PictureURL: p.pictureURL, URLReferences: p.urlReferences, Description: p.description,
                       Lang: p.lang };
        console.log(body);
        return this.http.post(this.shared.baseURL + url, body, this.shared.options)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            // ...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    updatePartner(p: Partner): Observable<any> {
        const url = 'api/partner/updatePartner';
        const body = { ID_AboutPartner: p.idAboutPartner, PictureURL: p.pictureURL, URLReferences: p.urlReferences,
                       Description: p.description, Lang: p.lang };
        console.log(body);
        return this.http.post(this.shared.baseURL + url, body, this.shared.options)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            // ...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    deletePartner(id): Observable<any> {
        const url = 'api/partner/deletePartner';
        const body = { ID_AboutPartner: id };
        console.log(body);
        return this.http.post(this.shared.baseURL + url, body, this.shared.options)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            // ...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}
