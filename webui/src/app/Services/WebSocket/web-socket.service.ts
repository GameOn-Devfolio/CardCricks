import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  socket: SocketIOClient.Socket;
  private OnlineUsers$: BehaviorSubject<string[]> = new BehaviorSubject<
    string[]
  >([]);
  constructor() {
    // this.socket = io.connect('http://localhost:8000');
    this.socket = io.connect('http://localhost:3010');
    // this.socket.on('Players', Users => {
    //   this.OnlineUsers$.next(Users);
    // });
    // this.socket.on('User is Online', address => {
    //   console.log(address);

    //   let Users: string[] = this.OnlineUsers$.value;
    //   if (Users.indexOf(address) === -1) {
    //     Users.push(address);
    //     this.OnlineUsers$.next(Users);
    //   }
    // });
    // this.socket.on('User is Offline', address => {
    //   let Users: string[] = this.OnlineUsers$.value;
    //   const index = Users.indexOf(address);
    //   if (index !== -1) {
    //     Users.splice(index, 1);
    //     this.OnlineUsers$.next(Users);
    //   }
    // });
  }
  UserIsOnline(address: string) {
    this.socket.emit('UserOnline', address);
  }
  OnlineUsers() {
    let observable = new Observable(observer => {
      this.socket.on('Players', (Users: string) => {
        observer.next(Users);
      });
      return () => {
        this.socket.disconnect();
      };
    });
    return observable;
  }
  UserIsOffline(address: string) {
    this.socket.emit('UserOffline', address);
  }
}
