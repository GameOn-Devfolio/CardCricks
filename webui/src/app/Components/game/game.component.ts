import { Component, OnInit } from '@angular/core';
import { Web3Model } from 'src/app/Models/web3.model';
import { Web3Service } from 'src/app/Services/Web3/web3.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  web3service: any;
  UserAddress: any;

  constructor(private web3Service: Web3Service) {}

  ngOnInit() {
    if (typeof this.web3Service.AccountSubscription !== 'undefined') {
      if (this.web3Service.AccountSubscription.closed) {
        localStorage.setItem('isLogged', 'false');
        this.web3Service.web3login();
      }
    } else {
      localStorage.setItem('isLogged', 'false');
      this.web3Service.web3login();
    }
  }
}
