import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  currentAmount: any;
  items: any;

  constructor(public navCtrl: NavController) {


    this.items = [
      {
        name: "100",
        value: 100,
        amount: null
      },
      {
        name: "50",
        value: 50,
        amount: null
      },
      {
        name: "20",
        value: 20,
        amount: null
      },
      {
        name: "10",
        value: 10,
        amount: null
      },
      {
        name: "5",
        value: 5,
        amount: null
      },
      {
        name: "2",
        value: 2,
        amount: null
      },
      {
        name: "1",
        value: 1,
        amount: null
      },
      {
        name: "0,50",
        value: 0.5,
        amount: null
      },
      {
        name: "0,20",
        value: 0.2,
        amount: null
      },
      {
        name: "0,10",
        value: 0.1,
        amount: null
      },
      {
        name: "0,05",
        value: 0.05,
        amount: null
      },
      {
        name: "0,02",
        value: 0.02,
        amount: null
      },
      {
        name: "0,01",
        value: 0.01,
        amount: null
      }
    ];

    this.currentAmount = 0;
  }


  calculateAmount() {

    console.log('changed');

    console.log(this.items.length);
    let tmpAmount = 0;
    for (let i = 0; i < this.items.length; i++) {
      console.log('amount: ', this.items[i].amount);
      tmpAmount += this.items[i].amount * this.items[i].value;
    }

    this.currentAmount = tmpAmount.toFixed(2);
  }

}
