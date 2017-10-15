import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { SharedService } from 'app/services/shared/shared.service';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Blog } from 'app/models/blog';

@Injectable()
export class BlogService {
    // Resolve HTTP using the constructor
    constructor(public http: Http,
        public shared: SharedService) { }
    // private instance variable to hold base url

    // api/partner/getAllPartner
    getAllBlog(): Observable<any> {
        // ...using get request
        const url = 'api/blog/getAllBlog';
        return this.http.get(this.shared.baseURL + url)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            // ...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

    }

    addBlog(p: Blog): Observable<any> {
        const url = 'api/blog/addBlog';
        const body = { DateCreate: p.DateCreate, Tag : p.Tag, Author: p.Author, ImageTitle: p.ImageTitle, VideoPath: p.VideoPath, 
        Description: p.Description, Lang: p.Lang, Title: p.Title};
        console.log(body);
        return this.http.post(this.shared.baseURL + url, body, this.shared.options)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            // ...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    updateBlog(p: Blog): Observable<any> {
        const url = 'api/blog/updateBlog';
        const body = { ID_Blog: p.ID_Blog, DateCreate: p.DateCreate, Tag : p.Tag, Author: p.Author, ImageTitle: p.ImageTitle, VideoPath: p.VideoPath, 
            Description: p.Description, Lang: p.Lang, Title: p.Title};
        console.log(body);
        return this.http.post(this.shared.baseURL + url, body, this.shared.options)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            // ...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    deleteBlog(id): Observable<any> {
        const url = 'api/blog/deleteBlog';
        const body = { ID_Blog: id };
        console.log(body);
        return this.http.post(this.shared.baseURL + url, body, this.shared.options)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            // ...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}
