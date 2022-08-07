import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoggedinuserService {

  public userId : number = 0
  public loggedinuser:User
  constructor() { }

  getUserId(): number{
    return this.userId
  }
  setUserId(userId:number){
    this.userId=userId
    console.log(this.userId)
  }
  setLoggedInUser(User:User,userId: number){
    this.userId = userId
    this.loggedinuser = User
  }
    
}
