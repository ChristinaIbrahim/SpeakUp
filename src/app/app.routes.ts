import { Courses } from './features/courses/courses';
import { Home } from './features/home/home';
import { ContactUS } from './features/contact-us/contact-us';
import { AboutUs } from './features/about-us/about-us';
import { Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { Admin } from './features/admin/admin';
import { Component } from '@angular/core';
import { Student } from './features/student/student';
import { Teacher } from './features/teacher/teacher';
import { RoleGuard } from './auth/guards/role-guard';
import { AuthGuard } from './auth/guards/auth/auth-guard';
export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'Courses',
    component: Courses,
  },
  {
    path: 'About',
    component: AboutUs,
  },
  {
    path: 'Contact',
    component: ContactUS,
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'admin',
    component: Admin,
    canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['admin'] },
  },
  {
    path: 'student',
    component: Student,
    canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['student'] },
  },
  {
    path: 'teacher',
    component: Teacher,
    canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['student'] },
  },
];
