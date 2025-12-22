import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { Navbar } from './../../layout/navbar/navbar';
import { Footer } from './../../layout/footer/footer';
import { Bg } from './bg/bg';
import { Text } from './text/text';
import { Team } from './team/team';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [Navbar, Footer, Bg, Text, Team, TranslateModule],
  templateUrl: './about-us.html',
  styleUrl: './about-us.scss',
})
export class AboutUs {
  
}
