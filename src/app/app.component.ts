import { Component } from '@angular/core';
declare var particlesJS: any;
declare var $: any;
import { TranslateService } from '@ngx-translate/core';

import { faWindows, faLinux } from '@fortawesome/free-brands-svg-icons';
import { faCloud, faDownload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vigcoin';
  supportedLanguages = ['en', 'zh'];

  faWindows = faWindows;
  faLinux = faLinux;
  faCloud = faCloud;
  faDownload = faDownload;
  active = 0;

  WindowsURL = "https://github.com/vigcoin/wallet/releases/download/1.0.0-b1/vigcoin-wallet-installer-v1.0.0-b2.msi";
  LinuxURL = "https://github.com/vigcoin/wallet/releases/download/1.0.0-b1/VIGCOIN-x86_64.AppImage";

  constructor(
    private translate: TranslateService
  ) {
    this.setLocale(this.getLocaleString());
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
  }

  ngOnInit() {
    particlesJS.load('particles-js', "/assets/particles.json", function () {
      console.log('callback - particles.js config loaded');
    });
    $('.carousel').carousel({
      interval: 10000
    });
    $('.selectpicker').selectpicker();
    let language = localStorage.getItem("language");
    if (!language) {
      language = "en";
    }
    $('select').val(language);
    this.setLocale(language);
    $('.selectpicker').selectpicker('refresh');
    $('.selectpicker').on('changed.bs.select', (e, clickedIndex, isSelected, previousValue) => {
      console.log("change detected!");
      console.log(e.target.value);
      // $('select').val(e.target.value);
      this.setLocale(e.target.value);
      localStorage.setItem("language", e.target.value);
    });

  }
}