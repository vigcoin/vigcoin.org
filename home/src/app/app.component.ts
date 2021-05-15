import { Component } from '@angular/core';
declare var $: any;
declare var Swiper: any;
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
    // offcanvas script from Bootstrap + added element to close menu on click in small viewport
    $('[data-toggle="offcanvas"], .navbar-nav li a:not(.dropdown-toggle').on('click', function () {
      $('.offcanvas-collapse').toggleClass('open')
    });

    setTimeout(() => {
      this.swiperInit();
    }, 0);

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

  swiperInit() {
    new Swiper('.card-slider', {
      autoplay: {
        delay: 8000,
        disableOnInteraction: false
      },
      loop: false,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      slidesPerView: 2,
      spaceBetween: 70,
      breakpoints: {
        // when window is <= 767px
        767: {
          slidesPerView: 1
        },
        // when window is <= 991px
        991: {
          slidesPerView: 2,
          spaceBetween: 40
        }
      }
    });
  }
}