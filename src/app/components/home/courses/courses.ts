import { Component } from '@angular/core';
import { CoursesCard } from '../courses-card/courses-card';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CoursesCard],
  templateUrl: './courses.html',
  styleUrl: './courses.scss',
})
export class Courses {

}
