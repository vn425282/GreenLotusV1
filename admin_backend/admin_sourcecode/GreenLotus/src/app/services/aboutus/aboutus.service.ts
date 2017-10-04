import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { SharedService } from 'app/services/shared/shared.service';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { AboutUs } from 'app/models/aboutus';

@Injectable()
export class StaffService {
    // Resolve HTTP using the constructor
    constructor(public http: Http,
        public shared: SharedService) { }
    // private instance variable to hold base url

    getAboutUs(): Observable<any> {
        // ...using get request
        const url = 'api/aboutus/getAboutUs';
        return this.http.get(this.shared.baseURL + url)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            // ...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

    }

    addAboutUs(s: AboutUs): Observable<any> {
        const url = 'api/aboutus/addAboutUs';
        const body = {
            Description: s.description, WhyChoose: s.whychoose, OurMission: s.ourmission,
            Lang: s.lang
        };
        console.log(body);
        return this.http.post(this.shared.baseURL + url, body, this.shared.options)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            // ...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    updateAboutUs(s: AboutUs): Observable<any> {
        const url = 'api/aboutus/updateAboutUs';
        const body = {
            ID_AboutUs: s.idAboutUs, Description: s.description, WhyChoose: s.whychoose, OurMission: s.ourmission,
            Lang: s.lang
        };
        console.log(body);
        return this.http.post(this.shared.baseURL + url, body, this.shared.options)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            // ...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    deleteAboutUs(id): Observable<any> {
        const url = 'api/aboutus/deleteAboutUs';
        const body = { ID_AboutUs: id };
        console.log(body);
        return this.http.post(this.shared.baseURL + url, body, this.shared.options)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            // ...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}
