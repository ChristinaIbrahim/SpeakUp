import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Courses } from './components/pages/courses/courses';
export const routes: Routes = [
  {
    path:'',
    component: Home,
  },
  {
    path: 'Courses',
    component: Courses,
  },

];
