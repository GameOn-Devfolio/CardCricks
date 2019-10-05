import { Component, OnInit } from "@angular/core";
import { PlayCard } from "src/app/Models/playcard.model";

@Component({
  selector: "app-play-card",
  templateUrl: "./play-card.component.html",
  styleUrls: ["./play-card.component.scss"]
})
export class PlayCardComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  Cards: PlayCard[] = [
    {
      cardID: 1,
      totalMatches: 1,
      totalCatches: 1,
      totalRuns: 1,
      strikeRate: 1,
      totalCenturies: 1,
      totalWickets: 1,
      totalOvers: 1,
      totalFourWickets: 1
    },
    {
      cardID: 2,
      totalMatches: 2,
      totalCatches: 2,
      totalRuns: 2,
      strikeRate: 2,
      totalCenturies: 2,
      totalWickets: 2,
      totalOvers: 2,
      totalFourWickets: 2
    },
    {
      cardID: 3,
      totalMatches: 3,
      totalCatches: 3,
      totalRuns: 3,
      strikeRate: 3,
      totalCenturies: 3,
      totalWickets: 3,
      totalOvers: 3,
      totalFourWickets: 3
    }
  ];
}
