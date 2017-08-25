import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

  constructor(private _http: Http) { }
  checkstatus(){
        return this._http.get('/api/user/check')
        .map((response: Response) => response.json())
        .toPromise()
    }
    login(user){
          return new Promise((resolve, reject) => {
              this._http.post('/api/user/login', user)
              .map((response: Response) => response.json())
              .toPromise()
              .then(data => {
                  resolve(data);
              })
              .catch( err => reject(err))
          })
      }
    logout(){
        return this._http.get('api/user/logout')
        .map((response: Response) => response.json())
        .toPromise()
    }
}
