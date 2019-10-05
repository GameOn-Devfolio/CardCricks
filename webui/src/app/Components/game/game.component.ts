import { Component, OnInit } from '@angular/core';
import { Web3Model } from 'src/app/Models/web3.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  web3service: any;
  UserAddress: any;

  constructor() {}

  ngOnInit() {}
}
