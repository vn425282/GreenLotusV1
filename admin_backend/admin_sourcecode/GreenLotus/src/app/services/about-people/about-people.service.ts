import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { SharedService } from 'app/services/shared/shared.service';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { AboutPeopleObj } from 'app/models/aboutpeople';

@Injectable()
export class AboutPeopleService {
    // Resolve HTTP using the constructor
    constructor(public http: Http,
        public shared: SharedService) { }
    // private instance variable to hold base url

    getAboutPeople(): Observable<any> {
        // ...using get request
        const url = 'api/about/getAboutPeople';
        return this.http.get(this.shared.baseURL + url)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            // ...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

    }

    addAboutPeople(s: AboutPeopleObj): Observable<any> {
        const url = 'api/about/addAboutPeople';
        const body = {
            Description: s.Description, RoleName: s.RoleName, PictureURL: s.PictureURL,
            Lang: s.Lang
        };
        console.log(body);
        return this.http.post(this.shared.baseURL + url, body, this.shared.options)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            // ...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    updateAboutPeople(s: AboutPeopleObj): Observable<any> {
        const url = 'api/about/AboutPeopleObj';
        const body = {
            ID_AboutPeople: s.ID_AboutPeople, Description: s.Description, RoleName: s.RoleName, PictureURL: s.PictureURL,
            Lang: s.Lang
        };
        console.log(body);
        return this.http.post(this.shared.baseURL + url, body, this.shared.options)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            // ...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    deleteAboutPeople(id): Observable<any> {
        const url = 'api/about/deleteAboutPeople';
        const body = { ID_AboutPeople: id };
        console.log(body);
        return this.http.post(this.shared.baseURL + url, body, this.shared.options)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            // ...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}
