import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });
  private apiURL = new URL('https://api.xaff.ru/');

  constructor(private http: Http) { }

  register(user): Observable<any> {
    return this.http.post(this.apiURL + 'user', JSON.stringify(user), this.options);
  }

  login(credentials): Observable<any> {
    return this.http.post(this.apiURL + 'user/login', JSON.stringify(credentials), this.options);
  }

  getUsers(): Observable<any> {
    return this.http.get(this.apiURL + 'users').map(res => res.json());
  }

  countUsers(): Observable<any> {
    return this.http.get(this.apiURL + 'users/count').map(res => res.json());
  }

  addUser(user): Observable<any> {
    return this.http.post(this.apiURL + 'user', JSON.stringify(user), this.options);
  }

  getUser(user): Observable<any> {
    return this.http.get(this.apiURL + `user/id/${user._id}`).map(res => res.json());
  }

  editUser(user): Observable<any> {
    return this.http.put(this.apiURL + `user/id/${user._id}`, JSON.stringify(user), this.options);
  }

  deleteUser(user): Observable<any> {
    return this.http.delete(this.apiURL + `user/id/${user._id}`, this.options);
  }

  getGroups(): Observable<any> {
    return this.http.get(this.apiURL + 'groups').map(res => res.json());
  }

  addGroup(group): Observable<any> {
    return this.http.post(this.apiURL + 'group', JSON.stringify(group), this.options);
  }

  getGroup(group): Observable<any> {
    return this.http.get(this.apiURL + `group/id/${group._id}`).map(res => res.json());
  }

  editGroup(group): Observable<any> {
    return this.http.put(this.apiURL + `group/id/${group._id}`, JSON.stringify(group), this.options);
  }

  deleteGroup(group): Observable<any> {
    return this.http.delete(this.apiURL + `group/id/${group._id}`, this.options);
  }
}
