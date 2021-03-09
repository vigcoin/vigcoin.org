import { Component } from '@angular/core';
declare var particlesJS: any;
declare var $: any;
import { TranslateService } from '@ngx-translate/core';

import { faWindows, faLinux, faBitcoin, faMonero } from '@fortawesome/free-brands-svg-icons';
import { faCloud, faDownload, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

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
  faMonero = faMonero;
  faBitcoin = faBitcoin;
  faExternalLinkAlt = faExternalLinkAlt;
  active = 0;

  WindowsURL = "https://github.com/vigcoin/wallet/releases/download/1.0.0-b1/vigcoin-wallet-installer-v1.0.0-b2.msi";
  LinuxURL = "https://github.com/vigcoin/wallet/releases/download/1.0.0-b1/VIGCOIN-x86_64.AppImage";

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
    particlesJS.load('particles-js', "/assets/particles.json", function () {
      console.log('callback - particles.js config loaded');
    });
    $('.carousel').carousel({
      interval: 10000
    });
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