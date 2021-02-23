import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-suporte',
  templateUrl: './suporte.page.html',
  styleUrls: ['./suporte.page.scss'],
})
export class SuportePage implements OnInit {

  @Input() sistema: string;
  @Input() n: number;
  @Input() titulo: string;
  img = 1;



  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  Go() {
    if (this.img >= this.n) {
      this.img == this.n
    } else {
      this.img++;
    }

    console.log(this.sistema)
  }

  Back() {

    if (this.img <= 1) {
      this.img == 1
    } else {
      this.img--;
    }

    console.log(this.sistema)
  }
}
