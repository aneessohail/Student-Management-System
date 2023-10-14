import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  readonly url="http://localhost:3000/";

  adduser(users:any):Observable<any>{
    return this.http.post(this.url+"users",users)
  }

  getusers():Observable<any>{
    return 	this.http.get(this.url+"users")
  }

  deleteusers(ID:any):Observable<any>{
    return 	this.http.delete(this.url+"users/"+ID)
  }

  updateUser(user: any): Observable<any> {
    const userID = user.id; // Assuming the user object has an 'id' property
    return this.http.put(this.url + 'users/' + userID, user);
  }
}
