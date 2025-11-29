import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { Header } from "../header/header";
import { Mainsection } from './mainsection/mainsection';
import { Descreption } from './descreption/descreption';

@Component({
  selector: 'app-home',
  imports: [Navbar, Header,Mainsection,Descreption],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
