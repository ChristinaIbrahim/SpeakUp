import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { Header } from "./components/header/header";
import { Home } from "./components/home/home";
import { Mainsection } from './components/home/mainsection/mainsection';
import { Descreption } from './components/home/descreption/descreption';
import { LoginComponent } from './components/login/login';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Header, Home  ,Mainsection,Descreption,LoginComponent],
import { AboutUs } from './components/pages/about-us/about-us';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Header, Home  ,Mainsection,AboutUs],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('SpeakUp');
}
