import { Footer } from './../../layout/footer/footer';
import { Navbar } from './../../layout/navbar/navbar';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Header } from '../../layout/header/header';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, Footer, Navbar, Header],
  templateUrl: './login.html',
  styleUrls: ['./login.scss'], // صححنا هنا
  standalone: true // لو المشروع standalone
})
export class Login {
  error = '';

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private auth: Auth, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false],
    });
  }

  // دالة submit تتحقق من صحة الفورم وتنفذ login
  submit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    this.login(); // تنفذ login بعد التحقق
  }

  // دالة login تستخدم القيم من الفورم
  login() {
    const { email, password } = this.loginForm.value;
    this.auth.Login(email, password).subscribe((users) => {
      if (users.length > 0) {
        this.auth.SaveUser(users[0]);
        this.router.navigate(['/dashboard']);
      } else {
        this.error = 'Invalid Email Or Password';
      }
    });
  }
}
