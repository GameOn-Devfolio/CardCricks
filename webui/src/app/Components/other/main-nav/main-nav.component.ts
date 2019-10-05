import { Component, OnInit, DoCheck, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// import { Web3Service } from 'src/app/Services/web3/web3.service';
import { Router } from '@angular/router';
import { Web3Service } from 'src/app/Services/Web3/web3.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {
  @Input()
  ContentType: number;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.XSmall)
    .pipe(map(result => result.matches));

  // private web3service: Web3Service,
  constructor(
    private breakpointObserver: BreakpointObserver,
    private route: Router,
    private web3Service: Web3Service
  ) {}

  logOut = async () => {
    this.web3Service.web3logout();
    this.route.navigateByUrl('/Home');
  };
}
