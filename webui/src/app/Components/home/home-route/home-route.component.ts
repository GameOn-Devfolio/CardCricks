import { WebSocketService } from "./../../../Services/WebSocket/web-socket.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home-route",
  templateUrl: "./home-route.component.html",
  styleUrls: ["./home-route.component.scss"]
})
export class HomeRouteComponent implements OnInit {
  web3service: any;
  route: any;
  constructor(public webSocketService: WebSocketService) {}

  ngOnInit() {
    this.webSocketService.sendMessage("hi");
  }
  login = async () => {
    await this.web3service.web3login();
    this.route.navigateByUrl("/Game");
  };
}
