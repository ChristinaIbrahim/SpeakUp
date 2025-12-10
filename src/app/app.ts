import { Navbar } from './layout/navbar/navbar';
import { Header } from './layout/header/header';
import { Home } from './features/home/home';
import { AboutUs } from './features/about-us/about-us';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Navbar,
    Header,
    Home,
    AboutUs,
    TranslateModule
    ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('SpeakUp');
}

