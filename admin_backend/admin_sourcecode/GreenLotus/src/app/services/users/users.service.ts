import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { SharedService } from "app/services/shared/shared.service";

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UsersService {
    // Resolve HTTP using the constructor
    constructor(public http: Http,
        public shared: SharedService) { }
    // private instance variable to hold base url

    // api/users/getAllUser
    getUsers(): Observable<any> {
        // ...using get request
        let url = 'api/users/getAllUser';
        return this.http.get(this.shared.baseURL + url)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            //...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

    }

    // api/users/getUserForLogin/{email}/{pass}
    getUserForLogin(email, pass): Observable<any> {
        // ...using get request
        let url = 'api/users/getUserForLogin/';
        let body = { email: email, pass: pass };
        return this.http.post(this.shared.baseURL + url, body, this.shared.options)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            //...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

    }

    // api/users/GetUserByID/ID_Users
    getUserByID(user_id): Observable<any> {
        // ...using get request
        let url = 'api/users/getUserByID/';
        let body = { ID_Users: user_id };
        return this.http.post(this.shared.baseURL + url, body, this.shared.options)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            //...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    // api/users/addUser/{json param}
    addUser(name, address, email, password, id_role): Observable<any> {
        // ...using get request
        let url = 'api/users/addUser/';
        let body = { Password: password, UserName: name, Address: address, Email: email, ID_Role: id_role };
        console.log(body);
        return this.http.post(this.shared.baseURL + url, body, this.shared.options)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            //...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

    }

    // api/users/updateUser/{json param}
    updateUser(id_users, name, address, password, id_role, status): Observable<any> {
        // ...using get request
        let url = 'api/users/updateUser/';
        let body = { ID_Users: id_users, Password: password, UserName: name, Address: address, ID_Role: id_role, Status: status };
        console.log(body);
        return this.http.post(this.shared.baseURL + url, body, this.shared.options)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            //...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

    }
}