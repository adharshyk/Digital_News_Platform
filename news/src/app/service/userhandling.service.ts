import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserhandlingService {
  userURL = "http://localhost:8080/api/user"
  constructor(private httpclient : HttpClient) { }

  getAllUsers() : Observable<User[]>{
    return this.httpclient.get<getUserResponse>(this.userURL).pipe(map(Response => Response._embedded.users))
  }

  deleteUser(userid : number): Observable<User>{
    const httpOptions = {
      header : new HttpHeaders({
        'content-Type' : 'application/json',
        'Authorization' : 'auth-token',
        'Access-Control-Allow-Origin' : '*'
      })
    }
    return this.httpclient.delete<User>(this.userURL+`/${userid}`)
  }
  
}


interface getUserResponse{
  _embedded : {
    users : User[]
  }
}

