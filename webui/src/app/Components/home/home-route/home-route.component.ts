import { WebSocketService } from './../../../Services/WebSocket/web-socket.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-route',
  templateUrl: './home-route.component.html',
  styleUrls: ['./home-route.component.scss']
})
export class HomeRouteComponent implements OnInit {
  constructor(public webSocketService: WebSocketService) {}

  ngOnInit() {
    this.webSocketService.sendMessage('hi');
  }
}
