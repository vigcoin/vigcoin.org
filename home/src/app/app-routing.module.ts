import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExplorerComponent } from "./explorer/explorer.component"
import { HomeComponent } from "./home/home.component"

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "explorer", component: ExplorerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy', useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
