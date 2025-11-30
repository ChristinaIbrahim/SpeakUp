import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { Header } from "../header/header";
import { Mainsection } from './mainsection/mainsection';
import { Courses } from './courses/courses';
import { About } from './about/about';

@Component({
  selector: 'app-home',
  imports: [Navbar,Mainsection,Courses,About],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
