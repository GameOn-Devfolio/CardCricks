import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  socket: SocketIOClient.Socket;

  constructor() {
    // this.socket = io.connect('http://localhost:8000');
    this.socket = io.connect('http://localhost:3010');
  }
  sendMessage(msg: string) {
    this.socket.emit('sendMessage', { message: msg });
  }
}
