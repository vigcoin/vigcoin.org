import { Component } from '@angular/core';

@Component({
  selector: 'app-wallet',
  templateUrl: 'wallet.page.html',
  styleUrls: ['wallet.page.scss']
})
export class WalletPage {
  WindowsURL = "https://github.com/vigcoin/wallet/releases/download/1.0.0-b1/vigcoin-installer-v1.0.exe";
  LinuxURL = "https://github.com/vigcoin/wallet/releases/download/1.0.0-b1/VIGCOIN-x86_64.AppImage";
}
