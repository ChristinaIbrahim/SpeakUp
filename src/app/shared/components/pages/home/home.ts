import { Component } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { Header } from './header/header';
import { Descreption } from './descreption/descreption';
import { Testimonials } from "./testimonials/testimonials";
import { Pricing } from './pricing/pricing';
import { Footer } from "./footer/footer";
import { CoursesCard } from './courses-card/courses-card';
import { Courses } from './courses/courses';
import { About } from './about/about';

@Component({
  selector: 'app-home',
  imports: [
    Navbar,
    Header,
    Descreption,
    Testimonials,
    Pricing,
    Footer,
    Courses,
    CoursesCard,
    About
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
