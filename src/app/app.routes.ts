import { AboutUs } from './shared/components/pages/about-us/about-us';
import { ContactUS } from './shared/components/pages/contact-us/contact-us';
import { Routes } from '@angular/router';
import { Home } from './shared/components/pages/home/home';
import { Courses } from './shared/components/pages/courses/courses';
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
