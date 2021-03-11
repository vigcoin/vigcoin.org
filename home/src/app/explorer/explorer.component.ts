import { Component, OnInit } from '@angular/core';

import { faTasks } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.scss']
})
export class ExplorerComponent implements OnInit {

  faTasks = faTasks;
  constructor() { }

  ngOnInit(): void {
    // https://rpc.vigcoin.org/getinfo
  }

}
