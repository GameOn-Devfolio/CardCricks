import { Component, HostListener } from '@angular/core';
import { WebSocketService } from './Services/WebSocket/web-socket.service';
import { Web3Service } from './Services/Web3/web3.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'webui';
  constructor(
    private webSocketService: WebSocketService,
    private web3Service: Web3Service
  ) {}
  @HostListener('window:beforeunload', ['$event'])
  beforeunloadHandler(event) {
    this.webSocketService.UserIsOffline(
      this.web3Service.Web3Details$.value.account
    );
  }
}
