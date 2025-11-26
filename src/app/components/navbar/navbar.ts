import { Component , ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  encapsulation: ViewEncapsulation.None, // ← الحل

})
export class Navbar {

}
