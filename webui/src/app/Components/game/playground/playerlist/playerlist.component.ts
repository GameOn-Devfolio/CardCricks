import { Subscription } from 'rxjs';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { WebSocketService } from 'src/app/Services/WebSocket/web-socket.service';
import { Web3Service } from 'src/app/Services/Web3/web3.service';

export interface Section {
  address: string;
  updated: Date;
}
@Component({
  selector: 'app-playerlist',
  templateUrl: './playerlist.component.html',
  styleUrls: ['./playerlist.component.scss']
})
export class PlayerlistComponent implements OnInit, OnDestroy {
  @ViewChild('AlertError', { static: false })
  private AlertError: SwalComponent;
  @ViewChild('AlertWaiting', { static: false })
  private AlertWaiting: SwalComponent;
  // Enemies: Array<string>;
  // VillageSub: Subscription;
  PlayerList: string[];
  constructor(
    private webSocketService: WebSocketService,
    private web3Service: Web3Service
  ) {}
  PlayersSub: Subscription;
  ngOnInit() {
    this.PlayersSub = this.webSocketService
      .OnlineUsers()
      .subscribe((data: string[]) => {
        let index = data.indexOf(this.web3Service.Web3Details$.value.account);
        if (index !== -1) {
          data.splice(index, 1);
        }
        this.PlayerList = data;
      });
  }
  ngOnDestroy() {
    this.PlayersSub.unsubscribe();
  }
  Challenge(address) {
    this.AlertWaiting.fire();
    alert(address);
  }
}
