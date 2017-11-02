import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  currentAmount: any;
  items: any;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, private storage: Storage, private datePicker: DatePicker) {


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

  load() {

    //
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK,
      doneButtonLabel: 'Absenden',
      cancelButtonLabel: 'Abbrechen',
      locale: 'de'
    }).then(
      date => {
        //console.log(date.toISOString().split('T')[0]);
        this.storage.get(date.toISOString().split('T')[0]).then((value) => {
          if (value) {
            this.items = JSON.parse(value);
          } else {
            let toast = this.toastCtrl.create({
              message: 'Es wurden keine Daten gefunden.',
              duration: 3000,
              position: 'top'
            });

            toast.present();
          }

        }).catch((err) => {
          let toast = this.toastCtrl.create({
            message: 'Fehler:' + err,
            duration: 3000,
            position: 'top'
          });

          toast.present();
        })
      },
      err => {

      }
    )
  }

  save() {
    console.log(JSON.stringify(this.items));
    let today = new Date();
    let dateString = today.toISOString().split('T')[0];

    this.storage.set(dateString, JSON.stringify(this.items));

    let toast = this.toastCtrl.create({
      message: 'Daten wurden gespeichert.',
      duration: 3000,
      position: 'top'
    });

    toast.present();
  }

}
