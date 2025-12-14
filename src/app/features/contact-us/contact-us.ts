import { Footer } from './../../layout/footer/footer';
import { Navbar } from './../../layout/navbar/navbar';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  imports: [Navbar, Footer],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.scss',
})
export class ContactUS {

}
