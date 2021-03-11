import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  url = "";
  constructor(
    private router: Router
  ) {

    router.events.subscribe(event => {
      // console.log(event);
      if (event instanceof NavigationStart) {
        let tab = event.url.substr(1);
        tab = tab.split("/")[0];
        if (tab) {
          this.url = tab;
        } else {
          this.url = "";
        }

      }
    });
  }

  ngOnInit(): void {
  }

}
