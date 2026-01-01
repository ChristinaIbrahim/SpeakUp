import { Component } from '@angular/core';
import { MyProfile } from "./my-profile/my-profile";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-student',
  imports: [MyProfile, RouterOutlet],
  templateUrl: './student.html',
  styleUrl: './student.scss',
})
export class Student {

}
