import { API_EBDPOINTS } from './../api-endpoints';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router }  from '@angular/router';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class Auth {

  constructor(private http: HttpClient, private router: Router) {}

  Login(email: string, password: string) {
    return this.http.get<User[]>(`${API_EBDPOINTS.users}?email=${email}&password=${password}`);
  }
  SaveUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
    console.log(user);
  }

  getUser() {
    return JSON.parse(localStorage.getItem('user') || 'null');
  }
  isLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }
  getRole() : string | null{
    return this.getUser()?.role || null;

  }
  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
