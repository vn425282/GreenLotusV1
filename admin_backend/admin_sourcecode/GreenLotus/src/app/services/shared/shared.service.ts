import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class SharedService {
    public baseURL = 'http://localhost:54484/';
    public headers = new Headers({ 'Content-Type': 'application/json' });
    public options = new RequestOptions({ headers: this.headers });
    public flagLogin: any = localStorage.getItem("login");
}