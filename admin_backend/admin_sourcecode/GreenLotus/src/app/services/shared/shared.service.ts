import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class SharedService {
    public baseURL = 'http://10.211.55.3:1088/';
    public headers = new Headers({ 'Content-Type': 'application/json' });
    public options = new RequestOptions({ headers: this.headers });
    public flagLogin: any = localStorage.getItem('login');
}
