import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { SharedService } from 'app/services/shared/shared.service';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Staff } from 'app/models/staff';

@Injectable()
export class StaffService {
    // Resolve HTTP using the constructor
    constructor(public http: Http,
        public shared: SharedService) { }
    // private instance variable to hold base url

    // api/staff/getAllStaff
    getStaff(): Observable<any> {
        // ...using get request
        const url = 'api/staff/getAllStaff';
        return this.http.get(this.shared.baseURL + url)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            // ...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

    }

    // api/staff/addStaff/{json param}
    addStaff(s: Staff): Observable<any> {
        const url = 'api/staff/addStaff';
        const body = {
            Description: s.description, RoleName: s.roleName, PictureURL: s.pictureURL,
            Lang: s.lang
        };
        console.log(body);
        return this.http.post(this.shared.baseURL + url, body, this.shared.options)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            // ...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

    }

    // api/staff/updateStaff/{json param}
    updateStaff(s: Staff): Observable<any> {
        const url = 'api/staff/updateStaff';
        const body = {
            ID_AboutPeople: s.idAboutPeople, Description: s.description, RoleName: s.roleName, PictureURL: s.pictureURL,
            Lang: s.lang
        };
        console.log(body);
        return this.http.post(this.shared.baseURL + url, body, this.shared.options)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            // ...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    // api/staff/deleteStaff/{json param}
    deleteStaff(id): Observable<any> {
        const url = 'api/staff/deleteStaff';
        const body = { ID_AboutPeople: id };
        console.log(body);
        return this.http.post(this.shared.baseURL + url, body, this.shared.options)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            // ...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}
