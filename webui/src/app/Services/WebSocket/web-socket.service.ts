import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private socket = io('http://localhost:3010');

  constructor() {}
}
