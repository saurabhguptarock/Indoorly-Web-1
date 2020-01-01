import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { PresentationComponent } from "./presentation/presentation.component";
import { ComponentsComponent } from "./components/components.component";
import { SectionsComponent } from "./sections/sections.component";
import { NucleoiconsComponent } from "./components/nucleoicons/nucleoicons.component";

const routes: Routes = [
  { path: "presentation", component: PresentationComponent },
  { path: "components", component: ComponentsComponent },
  { path: "sections", component: SectionsComponent },
  { path: "nucleoicons", component: NucleoiconsComponent },
  { path: "", redirectTo: "presentation", pathMatch: "full" }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: []
})
export class AppRoutingModule {}
