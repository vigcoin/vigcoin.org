import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faTasks } from '@fortawesome/free-solid-svg-icons';
import { interval } from 'rxjs';
import { from } from 'rxjs';

declare var $: any;


@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.scss']
})
export class ExplorerComponent implements OnInit {

  faTasks = faTasks;

  json = {};

  blocks = [];

  url = "";
  // url = "https://rpc.vigcoin.org";
  constructor(private http: HttpClient) { }


  makeDataRequest() {
    document.domain = "vigcoin.org";
    console.log('make request');
    this.http.get(this.url + "/getinfo").subscribe((json: any) => {
      console.log(json);
      this.json = json;

      const headers = new HttpHeaders(
        {
          'Content-Type': 'application/json'
        });

      const body = { "jsonrpc": "2.0", "id": "test", "method": "f_blocks_list_json", "params": { "height": json.height } }
      this.http.post(this.url + "/json_rpc", body, { headers, withCredentials: true }).subscribe((blockListJson: any) => {
        console.log(blockListJson);
      })
    });
  }

  ngOnInit(): void {
    this.makeDataRequest();
    // interval(10000).subscribe((v) => {
    //   this.makeDataRequest();
    // });
  }
}


// xhrGetBlock = $.ajax({
//   url: api + '/json_rpc',
//   method: "POST",
//   data: JSON.stringify({
//     jsonrpc: "2.0",
//     id: "test",
//     method: "f_block_json",
//     params: {
//       hash: urlParam('hash')
//     }
//   }),
//   dataType: 'json',
//   cache: 'false',
//   success: function (data) {
//     block = data.result.block;
//     renderBlock(block);
//   }
// });