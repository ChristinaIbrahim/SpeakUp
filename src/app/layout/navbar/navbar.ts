import { Component, ViewEncapsulation, Inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { CommonModule, DOCUMENT } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  encapsulation: ViewEncapsulation.None,
})
export class Navbar {

  open = false;

  constructor(
    private translate: TranslateService,
    @Inject(DOCUMENT) private document: Document
  ) {}

  toggleMobile() {
    this.open = !this.open;
  }

  changeLang(lang: string) {
    this.translate.use(lang);

    const dir = lang === 'ar' ? 'rtl' : 'ltr';
    this.document.documentElement.dir = dir;
    this.document.documentElement.lang = lang;
  }
}
