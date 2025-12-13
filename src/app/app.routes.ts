import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Courses } from './components/pages/courses/courses';
import { ContactUS } from './components/pages/contact-us/contact-us';
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
    path: 'Contact',
    component: ContactUS,
  }

];
