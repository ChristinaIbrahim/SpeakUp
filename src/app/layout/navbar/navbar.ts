import { Component , ViewEncapsulation } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive,CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  encapsulation: ViewEncapsulation.None,

})
export class Navbar {
    open = false;

  toggleMobile() {
    this.open = !this.open;
  }

  close() {
    this.open = false;
  }


}
