import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { Header } from "./components/header/header";
import { Home } from "./components/home/home";
import { Mainsection } from './components/home/mainsection/mainsection';
import { Descreption } from './components/home/descreption/descreption';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Header, Home  ,Mainsection,Descreption],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('SpeakUp');
}
