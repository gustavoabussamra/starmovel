import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slideOpts = {
    speed: 600,
    autoplay: {
      delay: 5000,
      stopOnLastSlide: "true",
    }
  }

  constructor(
    private navController: NavController
  ) { }

  ngOnInit() {

  }

  Open() {
    this.navController.navigateRoot("login");
  }


}

