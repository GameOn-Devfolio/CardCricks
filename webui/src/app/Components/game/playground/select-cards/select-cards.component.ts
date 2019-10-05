import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  ValidatorFn
} from "@angular/forms";
import { of } from "rxjs";
import { PlayCard } from "src/app/Models/playcard.model";

@Component({
  selector: "app-select-cards",
  templateUrl: "./select-cards.component.html",
  styleUrls: ["./select-cards.component.scss"]
})
export class SelectCardsComponent {
  form: FormGroup;
  ordersData = [];

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      orders: new FormArray([], minSelectedCheckboxes(3))
    });

    // async orders
    of(this.getOrders()).subscribe(orders => {
      this.ordersData = orders;
      this.addCheckboxes();
    });

    // synchronous orders
    // this.orders = this.getOrders();
    // this.addCheckboxes();
  }

  private addCheckboxes() {
    this.ordersData.forEach((o, i) => {
      const control = new FormControl(i === 0); // if first item set to true, else false
      (this.form.controls.orders as FormArray).push(control);
    });
  }
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
  getOrders() {
    return this.Cards;
  }

  submit() {
    const selectedOrderIds = this.form.value.orders
      .map((v, i) => (v ? this.ordersData[i].id : null))
      .filter(v => v !== null);
    console.log(selectedOrderIds);
  }
}

function minSelectedCheckboxes(min = 1) {
  const validator: ValidatorFn = (formArray: FormArray) => {
    const totalSelected = formArray.controls
      .map(control => control.value)
      .reduce((prev, next) => (next ? prev + next : prev), 0);

    return totalSelected >= min ? null : { required: true };
  };

  return validator;
}
