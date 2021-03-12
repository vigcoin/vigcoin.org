import { Component } from '@angular/core';
declare var $: any;
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vigcoin';
  supportedLanguages = ['en', 'zh'];
  constructor(
    private translate: TranslateService
  ) {
  }
  getLocaleString() {
    let locale = navigator.language;
    if (this.supportedLanguages.indexOf(locale) !== -1) {
      return locale;
    }
    locale = locale.split('-')[0];
    if (this.supportedLanguages.indexOf(locale) !== -1) {
      return locale;
    }
    return 'en';
  }

  setLocale(locale: string) {
    this.translate.setDefaultLang(locale);
    this.translate.use(locale);
    $('select').val(locale);
    $('.selectpicker').selectpicker('refresh');
    localStorage.setItem("locale", locale);

  }

  ngOnInit() {
    $('.selectpicker').selectpicker();
    let locale = localStorage.getItem("locale");
    console.log("locale = ", locale);
    if (!locale) {
      locale = this.getLocaleString();
    }
    this.setLocale(locale);

    $('.selectpicker').on('changed.bs.select', (e) => {
      console.log("change detected!");
      console.log(e.target.value);
      this.setLocale(e.target.value);
    });

  }
}