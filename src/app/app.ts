import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Navbar } from './components/navbar/navbar';
import { Header } from './components/header/header';
import { Home } from './components/home/home';
import { Mainsection } from './components/home/mainsection/mainsection';
import { Descreption } from './components/home/descreption/descreption';
import { LoginComponent } from './components/login/login';
import { AboutUs } from './components/pages/about-us/about-us';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
   
    AboutUs
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  protected readonly title = signal('SpeakUp');
}
