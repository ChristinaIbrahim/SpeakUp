import { Footer } from '../home/footer/footer';
import { Navbar } from '../home/navbar/navbar';
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
