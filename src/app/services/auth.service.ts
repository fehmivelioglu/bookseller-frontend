import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
isUserLoggedIn:boolean=false;
  constructor() { }
  setUserLoggedIn(){
    this.isUserLoggedIn=true;
  }
  getUserLoggedIn(){
    return this.isUserLoggedIn;
  }
}
