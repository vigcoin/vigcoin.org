import { Component, OnInit } from '@angular/core';

import { faWindows, faLinux, faBitcoin, faMonero } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faMonero = faMonero;
  faBitcoin = faBitcoin;
  constructor() { }

  ngOnInit(): void {
  }

}
