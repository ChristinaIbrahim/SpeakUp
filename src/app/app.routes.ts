import { Courses } from './features/courses/courses';
import { Home } from './features/home/home';
import { ContactUS } from './features/contact-us/contact-us';
import { AboutUs } from './features/about-us/about-us';
import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path:'',
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


];
