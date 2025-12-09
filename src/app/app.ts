import { AboutUs } from './shared/components/pages/about-us/about-us';
import { Home } from './shared/components/pages/home/home';
import { Header } from './shared/components/pages/home/header/header';
import { Navbar } from './shared/components/pages/home/navbar/navbar';
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

