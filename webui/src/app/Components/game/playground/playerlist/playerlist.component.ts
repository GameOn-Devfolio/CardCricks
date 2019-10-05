import { Component, OnInit, ViewChild } from "@angular/core";
import { SwalComponent } from "@sweetalert2/ngx-sweetalert2";

export interface Section {
  address: string;
  updated: Date;
}
@Component({
  selector: "app-playerlist",
  templateUrl: "./playerlist.component.html",
  styleUrls: ["./playerlist.component.scss"]
})
export class PlayerlistComponent implements OnInit {
  @ViewChild("AlertError", { static: false })
  private AlertError: SwalComponent;
  @ViewChild("AlertWaiting", { static: false })
  private AlertWaiting: SwalComponent;
  // Enemies: Array<string>;
  // VillageSub: Subscription;
  isFirst = true;
  constructor() {}

  ngOnInit() {}
  players: Section[] = [
    {
      address: "address1",
      updated: new Date("1/1/16")
    },
    {
      address: "address2",
      updated: new Date("1/17/16")
    },
    {
      address: "address3",
      updated: new Date("1/28/16")
    }
  ];
  Challenge(address) {
    this.AlertWaiting.fire();
    alert(address);
  }
}
