import { Component } from '@angular/core';
import { Navbar } from '../home/navbar/navbar';
import { Footer } from '../home/footer/footer';

@Component({
  selector: 'app-contact-us',
  imports: [Navbar, Footer],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.scss',
})
export class ContactUS {

}
