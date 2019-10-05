import { Component, OnInit } from "@angular/core";

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
  challenge(address) {
    alert(address);
  }
}
