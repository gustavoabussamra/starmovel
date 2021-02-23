import { Component, OnInit } from '@angular/core';
import { Tab1Page } from 'src/app/tab1/tab1.page';

@Component({
  selector: 'ion-water',
  templateUrl: './water.component.html',
  styleUrls: ['./water.component.scss'],
})
export class WaterComponent implements OnInit {

  constructor(private tab1Page: Tab1Page) { }

  ngOnInit() {
    document.getElementById("water").style.transform = 'translate(0' + ',' + (this.tab1Page.PorcentSaldo()) + '%)';
  }

}
