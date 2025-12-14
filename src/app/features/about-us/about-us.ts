import { Navbar } from './../../layout/navbar/navbar';
import { Footer } from './../../layout/footer/footer';
import { Component } from '@angular/core';
import { Bg } from './bg/bg';
import { Text } from './text/text';
import { Team } from "./team/team";

@Component({
  selector: 'app-about-us',
  imports: [Navbar, Footer, Bg, Text, Team],
  templateUrl: './about-us.html',
  styleUrl: './about-us.scss',
})
export class AboutUs {

}
