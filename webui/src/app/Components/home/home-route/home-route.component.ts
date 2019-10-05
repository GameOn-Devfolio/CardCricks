import { Web3Service } from 'src/app/Services/Web3/web3.service';
import { WebSocketService } from './../../../Services/WebSocket/web-socket.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-route',
  templateUrl: './home-route.component.html',
  styleUrls: ['./home-route.component.scss']
})
export class HomeRouteComponent implements OnInit {
  @ViewChild('loginSuccess', { static: false })
  private SuccessAlert: SwalComponent;
  @ViewChild('loginError', { static: false })
  private ErrorAlert: SwalComponent;
  constructor(
    public webSocketService: WebSocketService,
    private route: Router,
    private web3Service: Web3Service
  ) {}

  ngOnInit() {
    this.webSocketService.sendMessage('hi');
  }
  login = async () => {
    this.web3Service
      .web3login()
      .then(() => {
        this.SuccessAlert.fire();
        this.route.navigateByUrl('/Game');
      })
      .catch(e => {
        this.ErrorAlert.text = e;
        this.ErrorAlert.fire();
      });
  };
}
