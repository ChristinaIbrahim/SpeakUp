import { Component } from '@angular/core';
import { Navbar } from "../../../../layout/navbar/navbar";
import { Student } from '../../student/student/student';
import { Teacher } from "../../../teacher/teacher";
import { Admin } from "../../../admin/admin";
import { Footer } from "../../../../layout/footer/footer";
import { HasRole } from "../../../../shared/directives/has-role";
import { Sidebar } from "../../../../layout/dasboard-layout/sidebar/sidebar/sidebar";
import { RouterOutlet } from '@angular/router';
import { MyProfile } from "../../student/student/my-profile/my-profile";

@Component({
  selector: 'app-dashboard',
  imports: [Navbar, Student, Teacher, Admin, Footer, HasRole, Sidebar, RouterOutlet, MyProfile],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {

}
