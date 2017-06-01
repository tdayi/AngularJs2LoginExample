import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { AppConfig } from '../app.config';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

    constructor(
        private http: Http,
        private config: AppConfig) { }

    login(username: string, password: string) {
        return this.http.post(this.config.PortalApiUrl + 'User/Login', { UserName: username, Password: password }).map((response: Response) => JSON.stringify(response.json()));
    }

    getUserDashboard() {
        return this.http.get(this.config.PortalApiUrl + 'User/GetUserDashboard', this.GetRequestOption()).map((response: Response) => JSON.stringify(response.json()));
    }

    private GetRequestOption() {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return options;
    }
}