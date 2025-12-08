import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { Header } from "./components/header/header";
import { Home } from "./components/home/home";
import { Mainsection } from './components/home/mainsection/mainsection';
import { AboutUs } from './components/about-us/about-us';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Header, Home  ,Mainsection,AboutUs],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('SpeakUp');
}
