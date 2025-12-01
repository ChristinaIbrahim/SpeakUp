import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { Header } from "../header/header";
import { Mainsection } from './mainsection/mainsection';
import { Descreption } from './descreption/descreption';
import { Testimonials } from "./testimonials/testimonials";
import { Pricing } from "./pricing/pricing";
import { Footer } from "./footer/footer";

@Component({
  selector: 'app-home',
  imports: [Navbar, Header, Mainsection, Descreption, Testimonials, Pricing,Footer],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
