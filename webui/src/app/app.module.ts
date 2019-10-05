import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './Modules/material/material.module';
import { GameComponent } from './Components/game/game.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MainNavComponent } from './Components/other/main-nav/main-nav.component';
import { HomeComponent } from './Components/home/home.component';
import { HomeRouteComponent } from './Components/home/home-route/home-route.component';
import { AboutComponent } from './Components/home/about/about.component';
import { HttpClientModule } from '@angular/common/http';

import { PlaygroundComponent } from './Components/game/playground/playground.component';
import { PlayerlistComponent } from './Components/game/playground/playerlist/playerlist.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    MainNavComponent,
    HomeComponent,
    HomeRouteComponent,
    AboutComponent,
    PlaygroundComponent,
    PlayerlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
