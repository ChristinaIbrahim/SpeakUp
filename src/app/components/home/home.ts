import { Component } from '@angular/core';
import { Mainsection } from './mainsection/mainsection';
import { Descreption } from './descreption/descreption';

@Component({
  selector: 'app-home',
  imports: [Mainsection,Descreption],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
