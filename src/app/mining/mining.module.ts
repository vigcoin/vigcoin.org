import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MiningPage } from './mining.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    TranslateModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: MiningPage }])
  ],
  declarations: [MiningPage]
})
export class MiningPageModule {}
