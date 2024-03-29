import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, Subscription } from 'rxjs';
import { Web3Model } from '../../Models/web3.model';
import { HttpClient } from '@angular/common/http';
import { WebSocketService } from '../WebSocket/web-socket.service';
declare let require: any;

const Web3 = require('web3');
let CCJSON;
let ERC20JSON;
let VillageJSON;
declare let window: any;
declare let ethereum: any;
declare let web3: any;
//const BaseUrl = 'http://' + window.location.hostname + ':3010/contracts/';

//anugalr service to loggin with metamask

@Injectable({
  providedIn: 'root'
})
export class Web3Service {
  constructor(
    private httpClient: HttpClient,
    private webSocketService: WebSocketService
  ) {}
  public Web3Details$: BehaviorSubject<Web3Model> = new BehaviorSubject<
    Web3Model
  >({
    account: null,
    network: null
    // gameinstance: null,
    // cardinstance: null
  });
  private RefreshedAccount = interval(1000);
  public AccountSubscription: Subscription;
  public async web3login() {
    //CCJSON = await this.httpClient.get(BaseUrl + 'CityClash.json').toPromise();
    //ERC20JSON = await this.httpClient.get(BaseUrl + 'CityGem.json').toPromise();
    // VillageJSON = await this.httpClient
    //   .get(BaseUrl + 'Village.json')
    //   .toPromise();
    return new Promise(async (resolve, reject) => {
      // check dapp browser
      if (window.ethereum || window.web3) {
        // Modern dapp browsers...
        if (window.ethereum) {
          window.web3 = new Web3(ethereum);
          try {
            // Request account access if needed
            await ethereum.enable();
            // Acccounts now exposed
          } catch (error) {
            // User denied account access...
            reject(error);
          }
        }
        //Legacy dapp browsers...
        else {
          window.web3 = new Web3(web3.currentProvider);
          // // Acccounts always exposed
          // web3.eth.sendTransaction({
          //   /* ... */
          // });
        }
        // check contract deployed on this network
        const Net = await this.GetNetwork();
        // if (typeof CCJSON.networks[Net] === 'undefined') {
        //   reject('Contract Not Deployed on Network with Id:' + Net);
        // }
        // observe changes on  account and network
        this.AccountSubscription = this.RefreshedAccount.subscribe(async () => {
          let Account = await this.GetAccount();
          const Network = await this.GetNetwork();
          if (
            this.Web3Details$.value.network !== Network ||
            this.Web3Details$.value.account !== Account
          ) {
            // const GameInstance = new window.web3.eth.Contract(
            //   CCJSON.abi,
            //   CCJSON.networks[Network].address
            // );
            // const TokenAddress = await GameInstance.methods.CityToken().call();
            // const TokenInstance = new window.web3.eth.Contract(
            //   ERC20JSON.abi,
            //   TokenAddress
            // );
            // const TownInstance = new window.web3.eth.Contract(VillageJSON.abi);
            this.webSocketService.UserIsOffline(
              this.Web3Details$.value.account
            );
            this.webSocketService.UserIsOnline(Account);
            this.Web3Details$.next({
              account: Account,
              network: Network
              // gameinstance: GameInstance,
              // tokenInstance: TokenInstance,
              // towninstance: TownInstance
            });
          }
          localStorage.setItem('isLogged', 'true');
          if (Account == null) {
            await this.web3logout();
            Account = null;
            reject('Something Went Wrong');
          }
          resolve('Logged In');
        });
      }
      // Non-dapp browsers...
      else {
        reject(
          'Non-Ethereum browser detected. You should consider trying MetaMask!'
        );
      }
    });
  }
  // logout function
  public async web3logout() {
    this.webSocketService.UserIsOffline(this.Web3Details$.value.account);
    this.AccountSubscription.unsubscribe();
    this.Web3Details$.next({
      account: null,
      network: null
      // gameinstance: null,
      // tokenInstance: null,
      // towninstance: null
    });
    localStorage.setItem('isLogged', 'false');
  }
  private async GetAccount(): Promise<string> {
    return new Promise((resolve, reject) => {
      web3.eth.getAccounts((err, accs) => {
        if (err != null) {
          resolve(null);
        }

        // Get the initial account balance so it can be displayed.
        if (accs.length === 0) {
          resolve(null);
        } else {
          resolve(accs[0]);
        }
      });
    });
  }
  private GetNetwork(): Promise<string> {
    return new Promise((resolve, reject) => {
      window.web3.eth.net.getId((err, netId) => {
        if (err) {
          reject('Something Went Wrong, while getting network ID ');
        }
        resolve(netId);
      });
    });
  }
}
