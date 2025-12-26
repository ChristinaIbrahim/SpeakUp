import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  imports: [RouterOutlet]
})
export class AppComponent implements OnInit {

  constructor(
    private translate: TranslateService,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit() {
    const lang = 'en';
    this.setDirection(lang);
    this.translate.use(lang);
  }

  changeLang(lang: string) {
    this.translate.use(lang);
    this.setDirection(lang);
  }

  private setDirection(lang: string) {
    const dir = lang === 'ar' ? 'rtl' : 'ltr';
    this.document.documentElement.dir = dir;
    this.document.documentElement.lang = lang;
  }
}
