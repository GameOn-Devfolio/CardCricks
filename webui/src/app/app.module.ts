import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MaterialModule } from "./Modules/material/material.module";
import { GameComponent } from "./Components/game/game.component";

import { MainNavComponent } from "./Components/other/main-nav/main-nav.component";
import { HomeComponent } from "./Components/home/home.component";
import { HomeRouteComponent } from "./Components/home/home-route/home-route.component";
import { AboutComponent } from "./Components/home/about/about.component";
import { HttpClientModule } from "@angular/common/http";

import { PlaygroundComponent } from "./Components/game/playground/playground.component";
import { PlayerlistComponent } from "./Components/game/playground/playerlist/playerlist.component";
import { SweetAlert2Module } from "@sweetalert2/ngx-sweetalert2";
import { PlayCardComponent } from "./Components/game/playground/play-card/play-card.component";
import { SelectCardsComponent } from "./Components/game/playground/select-cards/select-cards.component";
import { ReactiveFormsModule } from "@angular/forms";
import { AddCardComponent } from './Components/admin/add-card/add-card.component';
import { EditCardComponent } from './Components/admin/edit-card/edit-card.component';
import { DeleteCardComponent } from './Components/admin/delete-card/delete-card.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    MainNavComponent,
    HomeComponent,
    HomeRouteComponent,
    AboutComponent,
    PlaygroundComponent,
    PlayerlistComponent,
    PlayCardComponent,
    SelectCardsComponent,
    AddCardComponent,
    EditCardComponent,
    DeleteCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
