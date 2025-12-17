import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router }  from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient, private router: Router) {}

  Login(email: string, password: string) {
    return this.http.get<any[]>(`${this.apiUrl}?email=${email}&password=${password}`);
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
