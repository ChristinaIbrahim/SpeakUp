import { Component } from '@angular/core';
import { Navbar } from "../../navbar/navbar";
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';
import { Footer } from "../../home/footer/footer";
@Component({
  selector: 'app-courses',
  imports: [Navbar, NgFor, CommonModule, Footer],
  templateUrl: './courses.html',
  styleUrl: './courses.scss',
})
export class Courses {

  Courses = [
    {image:'/assets/images/Courses/1.png',title: 'Learning historical words and sentences' },
    {image:'/assets/images/Courses/2.png',title: 'Learning historical words and sentences' },
    {image:'/assets/images/Courses/3.png',title: 'Learning historical words and sentences' },
    {image:'/assets/images/Courses/4.png',title: 'Learning historical words and sentences' },
    {image:'/assets/images/Courses/5.png',title: 'Learning historical words and sentences' },
    {image:'/assets/images/Courses/6.png',title: 'Learning historical words and sentences' },
    {image:'/assets/images/Courses/7.png',title: 'Learning historical words and sentences' },
    {image:'/assets/images/Courses/1.png',title: 'Learning historical words and sentences' },
    {image:'/assets/images/Courses/2.png',title: 'Learning historical words and sentences' },

  ]


}
