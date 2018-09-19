import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;

  constructor() { }

  isAuth(){
    return this.isAuthenticated;
  }

  login(){
    this.isAuthenticated = true;
  }

  logout(){
    this.isAuthenticated = false;
  }
}
