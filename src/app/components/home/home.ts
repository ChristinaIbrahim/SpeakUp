import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { Header } from "../header/header";
import { AnnouncementBar } from "../announcement-bar/announcement-bar";

@Component({
  selector: 'app-home',
  imports: [Navbar, Header, AnnouncementBar],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
