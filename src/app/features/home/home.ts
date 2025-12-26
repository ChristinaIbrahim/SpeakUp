import { Footer } from './../../layout/footer/footer';
import { Header } from './../../layout/header/header';
import { Navbar } from './../../layout/navbar/navbar';
import { Component } from '@angular/core';
import { Descreption } from './descreption/descreption';
import { Testimonials } from "./testimonials/testimonials";
import { Pricing } from './pricing/pricing';
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
    About
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
