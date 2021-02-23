import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ModalController, NavController } from '@ionic/angular';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  usuario: string = '';
  senha: string = '';
  Load: any;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private navController: NavController,
    private loadingController: LoadingController,
    private modalController: ModalController,
    private alertController: AlertController
  ) {
    this.presentLoading()
  }

  ngOnInit() {
    this.VerificaLogin();
  }

  VerificaLogin() {

    if (localStorage.getItem('codCliente') != null) {
      this.navController.navigateRoot("")
    }

  }

  async Login() {

    if (this.usuario != "" && this.senha != "") {
      this.Load.present();
      this.apiService.Login(this.usuario, this.senha).subscribe(
        data => {
          if (data && data.status == "OK") {
            localStorage.setItem('codCliente', data.CodigoPessoa);
            this.Load.dismiss();
            this.navController.navigateRoot(""); //this.router.navigate([""]); //this.router.navigateByUrl("");

            document.getElementById('erro').style.display = "none";
            console.log(data.CodigoPessoa)
          }
          else {
            this.Load.dismiss();
            document.getElementById('erro').style.display = "block";
          }
        },
        async (err: HttpErrorResponse) => {
          this.Load.dismiss();
          this.AlertMensagem();
        }
      )
    }
  }

  async presentLoading() {
    this.Load = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Por Favor, Aguarde...',
      mode: "ios"
    });
  }

  CloseAlert() {
    document.getElementById('erro').style.display = "none";
  }

  async AlertMensagem() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Erro de Login!',
      subHeader: 'Status',
      message: 'Falha ao realizar Login, verifique sua conexão com a internet!',
      buttons: ['OK'],
      mode: "ios"
    });

    await alert.present();
  }
}
