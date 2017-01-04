import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

import { User } from "./user";

@Injectable()
export class UserService {

    constructor(private http: Http){
    }

    login(user: User) : Observable<JSON> {

        return this.http.get('~/shared/config/config.json')
            .map(response => {
                
                let results = response.json();
                
                if(results.dbuser.username == user.username &&
                        results.dbuser.password == user.password){
                            results.flag = true;
                } else {
                    results.flag = false;
                }

                return results;

            })
            .catch(this.handleError);

    }

    handleError(error: any) {
        alert(error.json().message);
        return Observable.throw(error.json().error || 'Server error');
    }

}