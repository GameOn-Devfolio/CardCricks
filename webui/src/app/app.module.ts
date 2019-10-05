import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./Modules/material/material.module";
import { GameComponent } from "./Components/game/game.component";
import { LayoutModule } from "@angular/cdk/layout";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MainNavComponent } from './Components/other/main-nav/main-nav.component';
import { HomeComponent } from './Components/home/home.component';
import { HomeRouteComponent } from './Components/home/home-route/home-route.component';
import { AboutComponent } from './Components/home/about/about.component';

@NgModule({
  declarations: [AppComponent, GameComponent, MainNavComponent, HomeComponent, HomeRouteComponent, AboutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
