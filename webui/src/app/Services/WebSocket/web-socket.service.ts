import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  socket: SocketIOClient.Socket;
  public OnlineUsers$: BehaviorSubject<string[]> = new BehaviorSubject<
    string[]
  >([]);
  constructor() {
    // this.socket = io.connect('http://localhost:8000');
    this.socket = io.connect('http://localhost:3010');
  }
  UserIsOnline(address: string) {
    this.socket.emit('UserOnline', address);
  }
  OnlineUsers() {
    this.socket.on('User is Online', address => {
      let Users: string[] = this.OnlineUsers$.value;
      if (Users.indexOf(address) === -1) {
        Users.push(address);
        this.OnlineUsers$.next(Users);
      }
    });
    this.socket.on('User is Offline', address => {
      let Users: string[] = this.OnlineUsers$.value;
      const index = Users.indexOf(address);
      if (index !== -1) {
        Users.splice(index, 1);
        this.OnlineUsers$.next(Users);
      }
    });
    return this.OnlineUsers$;
  }
  UserIsOffline(address: string) {
    this.socket.emit('UserOffline', address);
  }
}
