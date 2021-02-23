import { Component } from '@angular/core';

import { NavController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { ConfigProvider } from './providers/config';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [ConfigProvider]
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private navController: NavController,
    private configProvider: ConfigProvider

  ) {
    this.initializeApp();
  }

  initializeApp() {

    let config = this.configProvider.getConifgData();
    if (config == null) {
      this.navController.navigateRoot("intro");
      this.configProvider.setConfigData(false);
    } else {
      this.VerificaLogin();
    }

    this.platform.ready().then(() => {
      this.statusBar.backgroundColorByHexString("#E86C13");
      this.splashScreen.hide();
    });
  }


  VerificaLogin() {

    if (localStorage.getItem('codCliente') != null) {
      this.navController.navigateRoot("");//this.router.navigate([""]); //this.router.navigateByUrl("");
    } else {
      this.navController.navigateRoot("login");//this.router.navigate(["login"]); //this.router.navigateByUrl("login");
    }
  }
}
