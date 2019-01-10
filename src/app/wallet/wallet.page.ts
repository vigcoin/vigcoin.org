import { Component } from '@angular/core';

@Component({
  selector: 'app-wallet',
  templateUrl: 'wallet.page.html',
  styleUrls: ['wallet.page.scss']
})
export class WalletPage {
  WindowsURL = "https://github.com/vigcoin/wallet/releases/download/1.0.0-a1/vigcoin-windows-64.zip";
  LinuxURL = "https://github.com/vigcoin/wallet/releases/download/1.0.0-a1/vigcoin-linux-64.zip";
}
