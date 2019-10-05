import { GameComponent } from "./Components/game/game.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./Components/home/home.component";
import { HomeRouteComponent } from "./Components/home/home-route/home-route.component";
import { AboutComponent } from "./Components/home/about/about.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/Home",
    pathMatch: "full"
  },
  {
    path: "Home",
    component: HomeComponent,
    children: [
      {
        path: "",
        component: HomeRouteComponent,
        pathMatch: "full"
      },
      {
        path: "About",
        component: AboutComponent
      }
    ]
  }
  // {
  //   path: "Harbour",
  //   component: GameComponent,
  //   canActivate: [AuthGuard],
  //   children: [
  //     {
  //       path: "",
  //       component: HarbourComponent
  //     },
  //     {
  //       path: "Playground",
  //       component: PlayGroundComponent
  //       // pathMatch: 'full'
  //     },
  //     {
  //       path: "Market",
  //       component: MarketComponent
  //       // pathMatch: 'full'
  //     },
  //     {
  //       path: "Store",
  //       component: StoreComponent
  //       // pathMatch: 'full'
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
