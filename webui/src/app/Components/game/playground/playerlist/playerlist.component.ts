import { Subscription } from 'rxjs';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { WebSocketService } from 'src/app/Services/WebSocket/web-socket.service';

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
  constructor(private webSocketService: WebSocketService) {}
  PlayersSub: Subscription;
  ngOnInit() {
    this.PlayersSub = this.webSocketService
      .OnlineUsers()
      .subscribe((data: string[]) => {
        this.PlayerList = data;
        console.log(data);
      });
  }
  ngOnDestroy() {}
  players: Section[] = [
    {
      address: 'address1',
      updated: new Date('1/1/16')
    },
    {
      address: 'address2',
      updated: new Date('1/17/16')
    },
    {
      address: 'address3',
      updated: new Date('1/28/16')
    }
  ];
  Challenge(address) {
    this.AlertWaiting.fire();
    alert(address);
  }
}
